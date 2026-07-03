import { Injectable, computed, signal } from '@angular/core';
import { COUNTRIES, Country } from '../data/countries';

export type Difficulty = 'normal' | 'hard';
export type GameStatus = 'idle' | 'playing' | 'correct' | 'revealed';

export interface Hint {
  icon: string;
  text: string;
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

@Injectable({ providedIn: 'root' })
export class GameService {
  /** Todos os nomes (pt) para o autocomplete. */
  readonly allNames = COUNTRIES.map((c) => c.name).sort((a, b) => a.localeCompare(b, 'pt'));

  // ---- Estado ----
  readonly difficulty = signal<Difficulty>('normal');
  readonly status = signal<GameStatus>('idle');
  readonly current = signal<Country | null>(null);
  readonly attempts = signal(0); // tentativas erradas na rodada atual
  readonly wrongGuesses = signal<string[]>([]);
  readonly feedback = signal('');

  // ---- Placar ----
  readonly score = signal(0);
  readonly streak = signal(0);
  readonly bestStreak = signal(0);
  readonly round = signal(0);
  readonly solved = signal(0);
  readonly lastPoints = signal(0);

  private recent: string[] = [];

  /** Lista completa de dicas do país atual, em ordem de revelação. */
  readonly allHints = computed<Hint[]>(() => {
    const c = this.current();
    if (!c) return [];
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

  /** Pontos que a rodada atual valeria se acertada agora. */
  readonly potentialPoints = computed(() => this.pointsFor(this.attempts()));

  // ---- Ações ----
  newGame(difficulty: Difficulty): void {
    this.difficulty.set(difficulty);
    this.score.set(0);
    this.streak.set(0);
    this.bestStreak.set(0);
    this.round.set(0);
    this.solved.set(0);
    this.recent = [];
    this.nextRound();
  }

  nextRound(): void {
    this.attempts.set(0);
    this.wrongGuesses.set([]);
    this.feedback.set('');
    this.lastPoints.set(0);
    this.current.set(this.pickCountry());
    this.round.update((r) => r + 1);
    this.status.set('playing');
  }

  guess(raw: string): void {
    if (this.status() !== 'playing') return;
    const text = raw.trim();
    if (!text) return;
    const c = this.current();
    if (!c) return;

    const g = normalize(text);
    if (g === normalize(c.name) || g === normalize(c.nameEn)) {
      const pts = this.pointsFor(this.attempts());
      this.lastPoints.set(pts);
      this.score.update((s) => s + pts);
      this.solved.update((n) => n + 1);
      this.streak.update((s) => s + 1);
      this.bestStreak.update((b) => Math.max(b, this.streak()));
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
    this.streak.set(0);
    this.feedback.set('');
    this.status.set('revealed');
  }

  private pointsFor(usedHints: number): number {
    const raw = Math.max(MIN_POINTS, BASE_POINTS - usedHints * HINT_PENALTY);
    return this.difficulty() === 'hard' ? raw * HARD_MULTIPLIER : raw;
  }

  private pickCountry(): Country {
    let pick: Country;
    do {
      pick = COUNTRIES[Math.floor(Math.random() * COUNTRIES.length)];
    } while (COUNTRIES.length > NO_REPEAT && this.recent.includes(pick.code));
    this.recent.push(pick.code);
    if (this.recent.length > NO_REPEAT) this.recent.shift();
    return pick;
  }
}
