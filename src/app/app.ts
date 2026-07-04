import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Difficulty, GameService } from './services/game.service';
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
  /** Modo Copa: só seleções da Copa do Mundo 2026. */
  readonly copa = signal(false);
  /** Contra o tempo: countdown por rodada. */
  readonly timed = signal(false);
  /** Texto digitado pelo jogador. */
  readonly guessText = signal('');

  /** Controla o modal de doação. */
  readonly showDonate = signal(false);
  /** Feedback "copiado!" ao copiar a chave PIX. */
  readonly pixCopied = signal(false);

  start(): void {
    this.game.newGame({
      difficulty: this.chosen(),
      countrySet: this.copa() ? 'worldcup' : 'all',
      timed: this.timed(),
    });
    this.guessText.set('');
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

  backToMenu(): void {
    this.guessText.set('');
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

  formatArea(area: number): string {
    return area.toLocaleString('pt-BR') + ' km²';
  }
}
