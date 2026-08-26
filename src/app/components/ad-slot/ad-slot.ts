import { Component, afterNextRender, inject, input, isDevMode } from '@angular/core';
import { AdsenseService } from '../../services/adsense.service';

/**
 * Bloco de anúncio (AdSense) reutilizável e inerte por padrão.
 *
 * - Renderiza o anúncio real apenas quando há um ID de editor em
 *   `SITE.ads.client` E o usuário aceitou o consentimento (LGPD).
 * - Sem configuração: em desenvolvimento mostra um placeholder tracejado para
 *   você ver onde o anúncio ficaria; em produção não renderiza nada.
 *
 * Uso: <app-ad-slot [slot]="site.ads.slots.footer" />
 */
@Component({
  selector: 'app-ad-slot',
  standalone: true,
  template: `
    @if (ads.enabled() && slot()) {
      <ins
        class="adsbygoogle"
        style="display:block"
        [attr.data-ad-client]="ads.client"
        [attr.data-ad-slot]="slot()"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    } @else if (isDev) {
      <div class="ad-placeholder" aria-hidden="true">
        <span>📢 Espaço reservado para anúncio</span>
        <small>slot: {{ slot() || 'não configurado' }}</small>
      </div>
    }
  `,
  styles: [
    `
      :host {
        display: block;
        width: 100%;
        max-width: 728px;
        margin: 1.5rem auto 0;
      }
      .ad-placeholder {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.15rem;
        min-height: 90px;
        padding: 0.75rem;
        border: 1px dashed rgba(148, 163, 184, 0.5);
        border-radius: 12px;
        color: #94a3b8;
        font-size: 0.85rem;
        text-align: center;
      }
      .ad-placeholder small {
        opacity: 0.7;
        font-size: 0.72rem;
      }
    `,
  ],
})
export class AdSlot {
  /** ID do bloco de anúncio (data-ad-slot) criado no painel do AdSense. */
  readonly slot = input('');
  readonly ads = inject(AdsenseService);
  readonly isDev = isDevMode();

  constructor() {
    // Depois que o <ins> está no DOM, carrega o loader e pede o preenchimento.
    afterNextRender(() => {
      if (this.ads.enabled() && this.slot()) {
        this.ads.loadScriptOnce();
        this.ads.push();
      }
    });
  }
}
