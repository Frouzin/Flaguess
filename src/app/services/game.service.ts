import { Injectable, computed, signal } from '@angular/core';
import { COUNTRIES, Country } from '../data/countries';
import { WORLD_CUP_2026 } from '../data/world-cup';
import { BRAZIL_STATES } from '../data/states-br';

export type Difficulty = 'normal' | 'hard';
export type CountrySet = 'all' | 'worldcup' | 'brazil';
export type GameStatus = 'idle' | 'playing' | 'correct' | 'revealed' | 'timeout' | 'daily-done';

/** Resultado de cada bandeira no Desafio do dia. */
export type DailyResult = 'hit' | 'hint' | 'miss';

interface DailySave {
  day: number;
  results: DailyResult[];
  done: boolean;
}

/** PRNG determinístico (mulberry32) — mesmo dia gera sempre as mesmas bandeiras. */
function mulberry32(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export interface Hint {
  icon: string;
  text: string;
}

export interface GameOptions {
  difficulty: Difficulty;
  countrySet: CountrySet;
  timed: boolean;
}

/** Remove acentos/pontuação e normaliza para comparar respostas. */
export function normalize(value: string): string {
  return value
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

const BASE_POINTS = 100;
const HINT_PENALTY = 15;
const MIN_POINTS = 20;
const HARD_MULTIPLIER = 2;
const NO_REPEAT = 25; // não repetir os últimos N países sorteados
const ROUND_TIME = 30; // segundos por rodada no modo contra o tempo
const TICK_MS = 200;
const STORAGE_KEY = 'flaguess.stats.v1';
const DAILY_KEY = 'flaguess.daily.v1';
const DAILY_SIZE = 5; // bandeiras por Desafio do dia
const DAILY_EPOCH = Date.UTC(2025, 0, 1); // dia 1 do Flaguess

@Injectable({ providedIn: 'root' })
export class GameService {
  // ---- Configuração ----
  readonly difficulty = signal<Difficulty>('normal');
  readonly countrySet = signal<CountrySet>('all');
  readonly timed = signal(false);

  // ---- Estado ----
  readonly status = signal<GameStatus>('idle');
  readonly current = signal<Country | null>(null);
  readonly attempts = signal(0); // tentativas erradas na rodada atual
  readonly wrongGuesses = signal<string[]>([]);
  readonly feedback = signal('');
  readonly timeLeft = signal(ROUND_TIME);

  // ---- Placar ----
  readonly score = signal(0);
  readonly streak = signal(0);
  readonly bestStreak = signal(0);
  readonly round = signal(0);
  readonly solved = signal(0);
  readonly lastPoints = signal(0);
  readonly lastTimeBonus = signal(0);

  // ---- Recordes (persistidos no localStorage) ----
  readonly recordScore = signal(0);
  readonly recordStreak = signal(0);
  readonly lifetimeSolved = signal(0);
  readonly gamesPlayed = signal(0);

  // ---- Desafio do dia ----
  readonly dailyActive = signal(false);
  readonly dailyNumber = signal(0);
  readonly dailyList = signal<Country[]>([]);
  readonly dailyIndex = signal(0);
  readonly dailyResults = signal<DailyResult[]>([]);
  readonly dailyCompletedToday = signal(false);

  /** Grade de emojis do resultado diário (🟩 de primeira, 🟨 com dica, ⬛ pulou). */
  readonly dailyEmojis = computed(() =>
    this.dailyResults()
      .map((r) => (r === 'hit' ? '🟩' : r === 'hint' ? '🟨' : '⬛'))
      .join(''),
  );
  /** Quantas bandeiras foram acertadas no desafio (com ou sem dica). */
  readonly dailyScore = computed(
    () => this.dailyResults().filter((r) => r !== 'miss').length,
  );

  private recent: string[] = [];
  private timerId: ReturnType<typeof setInterval> | null = null;

  constructor() {
    this.loadStats();
    this.dailyNumber.set(this.computeDailyNumber());
    this.initDailyStatus();
  }

  /** Conjunto ativo: todos os países, só a Copa, ou os estados do Brasil. */
  private readonly pool = computed<Country[]>(() => {
    switch (this.countrySet()) {
      case 'worldcup':
        return WORLD_CUP_2026;
      case 'brazil':
        return BRAZIL_STATES;
      default:
        return COUNTRIES;
    }
  });

  /** Nomes do conjunto ativo, para o autocomplete. */
  readonly poolNames = computed(() =>
    this.pool()
      .map((c) => c.name)
      .sort((a, b) => a.localeCompare(b, 'pt')),
  );

  /** Lista completa de dicas do país atual, em ordem de revelação. */
  readonly allHints = computed<Hint[]>(() => {
    const c = this.current();
    if (!c) return [];

    // Estados do Brasil têm dicas próprias (região, letras, capital, sigla).
    if (this.countrySet() === 'brazil') {
      const initial = c.name.charAt(0).toUpperCase();
      const letters = c.name.replace(/\s/g, '').length;
      return [
        { icon: '🧭', text: `Região: ${c.region}` },
        { icon: '🔤', text: `Começa com "${initial}" e tem ${letters} letras` },
        { icon: '🏛️', text: `Capital: ${c.capital}` },
        { icon: '🔠', text: `Sigla: ${c.subregion}` },
      ];
    }

    const hints: Hint[] = [];
    hints.push({ icon: '🌍', text: `Continente: ${c.region}` });
    hints.push({ icon: '🧭', text: `Hemisfério ${c.hemisphere}` });
    if (c.subregion) hints.push({ icon: '📍', text: `Região: ${c.subregion}` });
    if (c.languages.length) {
      const langs = c.languages.slice(0, 2).join(', ');
      const label = c.languages.length > 1 ? 'Idiomas oficiais' : 'Idioma oficial';
      hints.push({ icon: '🗣️', text: `${label}: ${langs}` });
    }
    hints.push({
      icon: '🌊',
      text: c.landlocked ? 'Não tem saída para o mar' : 'Tem costa marítima',
    });
    if (c.currency) {
      const code = c.currencyCode ? ` (${c.currencyCode})` : '';
      hints.push({ icon: '💰', text: `Moeda: ${c.currency}${code}` });
    }
    if (c.capital && c.capital !== '—') {
      hints.push({ icon: '🏛️', text: `Capital: ${c.capital}` });
    }
    const initial = c.name.charAt(0).toUpperCase();
    const letters = c.name.replace(/\s/g, '').length;
    hints.push({ icon: '🔤', text: `Começa com "${initial}" e tem ${letters} letras` });
    return hints;
  });

  /** Dicas já reveladas (uma por tentativa errada). */
  readonly revealedHints = computed<Hint[]>(() =>
    this.allHints().slice(0, this.attempts()),
  );

  readonly hasMoreHints = computed(() => this.attempts() < this.allHints().length);

  /** Blur (px) aplicado à bandeira no modo difícil; diminui a cada dica. */
  readonly blurPx = computed(() => {
    if (this.difficulty() !== 'hard') return 0;
    if (this.status() !== 'playing') return 0; // revela nítida ao acertar/desistir
    return Math.max(2, 14 - this.attempts() * 2);
  });

  /** Pontos que a rodada atual valeria se acertada agora (sem o bônus de tempo). */
  readonly potentialPoints = computed(() => this.pointsFor(this.attempts()));

  /** Segundos restantes (arredondado para cima) e % da barra de tempo. */
  readonly secondsLeft = computed(() => Math.max(0, Math.ceil(this.timeLeft())));
  readonly timePercent = computed(() =>
    Math.max(0, Math.min(100, (this.timeLeft() / ROUND_TIME) * 100)),
  );

  // ---- Ações ----
  newGame(opts: GameOptions): void {
    this.dailyActive.set(false);
    this.difficulty.set(opts.difficulty);
    this.countrySet.set(opts.countrySet);
    this.timed.set(opts.timed);
    this.score.set(0);
    this.streak.set(0);
    this.bestStreak.set(0);
    this.round.set(0);
    this.solved.set(0);
    this.recent = [];
    this.gamesPlayed.update((n) => n + 1);
    this.persistStats();
    this.nextRound();
  }

  nextRound(): void {
    this.stopTimer();
    this.attempts.set(0);
    this.wrongGuesses.set([]);
    this.feedback.set('');
    this.lastPoints.set(0);
    this.lastTimeBonus.set(0);
    this.current.set(this.pickCountry());
    this.round.update((r) => r + 1);
    this.status.set('playing');
    if (this.timed()) this.startTimer();
  }

  guess(raw: string): void {
    if (this.status() !== 'playing') return;
    const text = raw.trim();
    if (!text) return;
    const c = this.current();
    if (!c) return;

    const g = normalize(text);
    if (g === normalize(c.name) || g === normalize(c.nameEn)) {
      this.stopTimer();
      if (this.dailyActive()) {
        this.recordDaily(this.attempts() === 0 ? 'hit' : 'hint');
        return;
      }
      const base = this.pointsFor(this.attempts());
      const bonus = this.timed() ? Math.round(this.timeLeft()) : 0;
      this.lastPoints.set(base);
      this.lastTimeBonus.set(bonus);
      this.score.update((s) => s + base + bonus);
      this.solved.update((n) => n + 1);
      this.streak.update((s) => s + 1);
      this.bestStreak.update((b) => Math.max(b, this.streak()));
      // Recordes vitalícios
      this.lifetimeSolved.update((n) => n + 1);
      this.recordScore.update((r) => Math.max(r, this.score()));
      this.recordStreak.update((r) => Math.max(r, this.streak()));
      this.persistStats();
      this.feedback.set('');
      this.status.set('correct');
      return;
    }

    // Errou
    this.wrongGuesses.update((list) => (list.includes(text) ? list : [...list, text]));
    this.attempts.update((a) => a + 1);
    this.feedback.set(
      this.hasMoreHints()
        ? 'Não foi dessa vez! Você ganhou uma nova dica. 👇'
        : 'Ainda não! Todas as dicas já foram reveladas — tente mais uma vez ou revele a resposta.',
    );
  }

  reveal(): void {
    if (this.status() !== 'playing') return;
    this.stopTimer();
    if (this.dailyActive()) {
      this.recordDaily('miss');
      return;
    }
    this.streak.set(0);
    this.feedback.set('');
    this.status.set('revealed');
  }

  private onTimeout(): void {
    this.stopTimer();
    this.streak.set(0);
    this.feedback.set('');
    this.status.set('timeout');
  }

  // ---- Desafio do dia ----
  /** Inicia (ou reabre) o desafio de hoje. Se já concluído, mostra o resultado. */
  startDaily(): void {
    this.stopTimer();
    const day = this.computeDailyNumber();
    this.dailyNumber.set(day);
    this.dailyActive.set(true);
    this.difficulty.set('normal');
    this.timed.set(false);
    const list = this.pickDailyCountries(day);
    this.dailyList.set(list);

    const saved = this.loadDaily();
    if (saved && saved.day === day && saved.done) {
      // Já jogou hoje: mostra o resultado salvo.
      this.dailyResults.set(saved.results);
      this.dailyIndex.set(list.length);
      this.dailyCompletedToday.set(true);
      this.status.set('daily-done');
      return;
    }

    this.dailyResults.set([]);
    this.dailyIndex.set(0);
    this.attempts.set(0);
    this.wrongGuesses.set([]);
    this.feedback.set('');
    this.current.set(list[0]);
    this.status.set('playing');
  }

  private recordDaily(result: DailyResult): void {
    this.dailyResults.update((r) => [...r, result]);
    const next = this.dailyIndex() + 1;
    if (next >= this.dailyList().length) {
      this.dailyCompletedToday.set(true);
      this.saveDaily();
      this.status.set('daily-done');
      return;
    }
    this.dailyIndex.set(next);
    this.attempts.set(0);
    this.wrongGuesses.set([]);
    this.feedback.set('');
    this.current.set(this.dailyList()[next]);
    this.status.set('playing');
  }

  /** Número do desafio = dias desde a época do Flaguess. */
  private computeDailyNumber(): number {
    const now = new Date();
    const todayUTC = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
    return Math.floor((todayUTC - DAILY_EPOCH) / 86_400_000) + 1;
  }

  /** Bandeiras determinísticas do dia (iguais para todos). */
  private pickDailyCountries(day: number): Country[] {
    const rng = mulberry32(Math.imul(day, 2_654_435_761));
    const picked = new Set<number>();
    const result: Country[] = [];
    while (result.length < DAILY_SIZE && picked.size < COUNTRIES.length) {
      const i = Math.floor(rng() * COUNTRIES.length);
      if (!picked.has(i)) {
        picked.add(i);
        result.push(COUNTRIES[i]);
      }
    }
    return result;
  }

  private initDailyStatus(): void {
    const saved = this.loadDaily();
    if (saved && saved.day === this.dailyNumber() && saved.done) {
      this.dailyCompletedToday.set(true);
    }
  }

  private loadDaily(): DailySave | null {
    try {
      const raw = localStorage.getItem(DAILY_KEY);
      if (!raw) return null;
      const s = JSON.parse(raw) as DailySave;
      if (typeof s.day !== 'number' || !Array.isArray(s.results)) return null;
      return s;
    } catch {
      return null;
    }
  }

  private saveDaily(): void {
    try {
      localStorage.setItem(
        DAILY_KEY,
        JSON.stringify({
          day: this.dailyNumber(),
          results: this.dailyResults(),
          done: true,
        } satisfies DailySave),
      );
    } catch {
      // localStorage indisponível — ignora.
    }
  }

  // ---- Timer ----
  private startTimer(): void {
    this.timeLeft.set(ROUND_TIME);
    this.timerId = setInterval(() => {
      const next = this.timeLeft() - TICK_MS / 1000;
      if (next <= 0) {
        this.timeLeft.set(0);
        this.onTimeout();
      } else {
        this.timeLeft.set(next);
      }
    }, TICK_MS);
  }

  private stopTimer(): void {
    if (this.timerId !== null) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  // ---- Persistência (localStorage) ----
  resetStats(): void {
    this.recordScore.set(0);
    this.recordStreak.set(0);
    this.lifetimeSolved.set(0);
    this.gamesPlayed.set(0);
    this.persistStats();
  }

  private loadStats(): void {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const s = JSON.parse(raw);
      this.recordScore.set(Number(s.recordScore) || 0);
      this.recordStreak.set(Number(s.recordStreak) || 0);
      this.lifetimeSolved.set(Number(s.lifetimeSolved) || 0);
      this.gamesPlayed.set(Number(s.gamesPlayed) || 0);
    } catch {
      // ignora dados corrompidos / localStorage indisponível
    }
  }

  private persistStats(): void {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          recordScore: this.recordScore(),
          recordStreak: this.recordStreak(),
          lifetimeSolved: this.lifetimeSolved(),
          gamesPlayed: this.gamesPlayed(),
        }),
      );
    } catch {
      // localStorage indisponível (ex.: navegação privada com cota zero)
    }
  }

  private pointsFor(usedHints: number): number {
    const raw = Math.max(MIN_POINTS, BASE_POINTS - usedHints * HINT_PENALTY);
    return this.difficulty() === 'hard' ? raw * HARD_MULTIPLIER : raw;
  }

  private pickCountry(): Country {
    const pool = this.pool();
    // Janela de não-repetição proporcional ao tamanho do conjunto (evita
    // repetir demais em conjuntos pequenos como os 27 estados).
    const window = Math.min(NO_REPEAT, Math.floor(pool.length / 2));
    let pick: Country;
    do {
      pick = pool[Math.floor(Math.random() * pool.length)];
    } while (window > 0 && this.recent.includes(pick.code));
    this.recent.push(pick.code);
    if (this.recent.length > window) this.recent.shift();
    return pick;
  }
}
