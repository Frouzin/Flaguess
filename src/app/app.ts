import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  CONTINENTS,
  Continent,
  CountrySet,
  Difficulty,
  DailyResult,
  GameService,
} from './services/game.service';
import { ConsentService } from './services/consent.service';
import { SITE } from './site-config';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  readonly game = inject(GameService);
  readonly consent = inject(ConsentService);

  /** Configurações do site (redes sociais, doação). */
  readonly site = SITE;

  /** Dificuldade escolhida na tela inicial (antes de começar). */
  readonly chosen = signal<Difficulty>('normal');
  /** Conjunto escolhido: todos os países, Copa 2026 ou estados do Brasil. */
  readonly chosenSet = signal<CountrySet>('all');
  /** Contra o tempo: countdown por rodada. */
  readonly timed = signal(false);
  /** Modo Capitais: adivinhar a capital em vez do nome. */
  readonly chosenCapitals = signal(false);
  /** Continente escolhido (só vale no conjunto mundial). */
  readonly chosenContinent = signal<Continent>('all');
  /** Continentes disponíveis para o seletor do menu. */
  readonly continents = CONTINENTS;
  /** Texto digitado pelo jogador. */
  readonly guessText = signal('');

  /** Controla o modal de doação. */
  readonly showDonate = signal(false);
  /** Feedback "copiado!" ao copiar a chave PIX. */
  readonly pixCopied = signal(false);
  /** Feedback "copiado!" ao compartilhar (quando cai no clipboard). */
  readonly shareCopied = signal(false);

  start(): void {
    this.game.newGame({
      difficulty: this.chosen(),
      countrySet: this.chosenSet(),
      timed: this.timed(),
      capitals: this.chosenCapitals(),
      // O filtro por continente só vale no conjunto mundial.
      continent: this.chosenSet() === 'all' ? this.chosenContinent() : 'all',
    });
    this.guessText.set('');
  }

  /** Liga/desliga um conjunto (clicar no ativo volta para "todos"). */
  toggleSet(set: CountrySet): void {
    this.chosenSet.set(this.chosenSet() === set ? 'all' : set);
  }

  /** Rótulo do badge de continente durante o jogo (vazio quando é o mundo todo). */
  continentBadge(): string {
    const c = this.continents.find((x) => x.value === this.game.continent());
    return c ? `${c.emoji} ${c.label}` : '';
  }

  /** Placeholder do campo conforme o modo (capital / estado / país). */
  placeholderText(): string {
    if (this.game.capitals()) return 'Digite o nome da capital...';
    return this.game.countrySet() === 'brazil'
      ? 'Digite o nome do estado...'
      : 'Digite o nome do país...';
  }

  /** Rótulo do botão "próximo" com o gênero certo. */
  nextLabel(): string {
    if (this.game.capitals()) return 'Próxima capital →';
    return this.game.countrySet() === 'brazil' ? 'Próximo estado →' : 'Próximo país →';
  }

  submit(): void {
    const wasPlaying = this.game.status() === 'playing';
    this.game.guess(this.guessText());
    // Se continua jogando (errou), limpa o campo para a próxima tentativa.
    if (wasPlaying && this.game.status() === 'playing') {
      this.guessText.set('');
    }
  }

  next(): void {
    this.guessText.set('');
    this.game.nextRound();
  }

  startDaily(): void {
    this.guessText.set('');
    this.shareCopied.set(false);
    this.game.startDaily();
  }

  backToMenu(): void {
    this.guessText.set('');
    this.game.dailyActive.set(false);
    this.game.status.set('idle');
  }

  flagUrl(code: string): string {
    return `flags/${code}.svg`;
  }

  openDonate(): void {
    this.pixCopied.set(false);
    this.showDonate.set(true);
  }

  closeDonate(): void {
    this.showDonate.set(false);
  }

  async copyPix(): Promise<void> {
    const key = this.site.donation.pixKey;
    if (!key) return;
    try {
      await navigator.clipboard.writeText(key);
      this.pixCopied.set(true);
    } catch {
      this.pixCopied.set(false);
    }
  }

  /** Emoji do resultado de uma bandeira no desafio (para a lista do resultado). */
  resultEmoji(r: DailyResult | undefined): string {
    return r === 'hit' ? '🟩' : r === 'hint' ? '🟨' : '⬛';
  }

  /** Compartilha o resultado do Desafio do dia (grade de emojis). */
  shareDaily(): void {
    const g = this.game;
    const text =
      `🎌 Flaguess • Desafio #${g.dailyNumber()} — ${g.dailyScore()}/${g.dailyList().length}\n` +
      `${g.dailyEmojis()}\n` +
      `https://flaguess.com.br`;
    this.doShare(text);
  }

  /** Compartilha o desempenho na partida livre. */
  shareScore(): void {
    const g = this.game;
    const text =
      `🎌 Flaguess — acertei ${g.solved()} bandeira${g.solved() === 1 ? '' : 's'} ` +
      `(sequência de ${g.bestStreak()})! Consegue mais?\n` +
      `https://flaguess.com.br`;
    this.doShare(text);
  }

  /** Usa a Web Share API (mobile) e cai no clipboard como fallback (desktop). */
  private async doShare(text: string): Promise<void> {
    this.shareCopied.set(false);
    try {
      if (navigator.share) {
        await navigator.share({ text });
        return;
      }
    } catch {
      // usuário cancelou ou API indisponível — tenta o clipboard abaixo.
    }
    try {
      await navigator.clipboard.writeText(text);
      this.shareCopied.set(true);
    } catch {
      // sem clipboard também — silencioso.
    }
  }

  formatArea(area: number): string {
    return area.toLocaleString('pt-BR') + ' km²';
  }
}
