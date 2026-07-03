import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Difficulty, GameService } from './services/game.service';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  readonly game = inject(GameService);

  /** Dificuldade escolhida na tela inicial (antes de começar). */
  readonly chosen = signal<Difficulty>('normal');
  /** Modo Copa: só seleções da Copa do Mundo 2026. */
  readonly copa = signal(false);
  /** Contra o tempo: countdown por rodada. */
  readonly timed = signal(false);
  /** Texto digitado pelo jogador. */
  readonly guessText = signal('');

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

  formatArea(area: number): string {
    return area.toLocaleString('pt-BR') + ' km²';
  }
}
