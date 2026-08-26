import { Injectable, computed, inject } from '@angular/core';
import { ConsentService } from './consent.service';
import { SITE } from '../site-config';

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

/**
 * Carrega o Google AdSense de forma controlada.
 *
 * Fonte única da verdade: `SITE.ads` (em site-config.ts). Enquanto `client`
 * estiver vazio, nada é carregado — o esqueleto fica 100% inerte. Ao ser
 * aprovado no AdSense, basta preencher o ID lá que tudo passa a funcionar.
 *
 * Os anúncios só carregam com consentimento aceito (LGPD) — ver ConsentService.
 */
@Injectable({ providedIn: 'root' })
export class AdsenseService {
  private readonly consent = inject(ConsentService);
  private scriptLoaded = false;

  /** ID do editor AdSense (ca-pub-...), ou '' quando desligado. */
  readonly client = SITE.ads.client;

  /** Anúncios só entram com ID configurado E consentimento aceito. */
  readonly enabled = computed(
    () => !!this.client && this.consent.decision() === 'accepted',
  );

  /** Injeta o loader do AdSense uma única vez (idempotente e seguro no SSR). */
  loadScriptOnce(): void {
    if (this.scriptLoaded || !this.client || typeof document === 'undefined') {
      return;
    }
    // Se um <script> do AdSense já existe (ex.: colado no index.html), reaproveita.
    if (document.querySelector('script[data-adsense]')) {
      this.scriptLoaded = true;
      return;
    }
    const s = document.createElement('script');
    s.async = true;
    s.src =
      'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=' +
      this.client;
    s.crossOrigin = 'anonymous';
    s.setAttribute('data-adsense', '');
    document.head.appendChild(s);
    this.scriptLoaded = true;
  }

  /** Pede ao AdSense para preencher um bloco <ins> já renderizado. */
  push(): void {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // AdSense bloqueado/indisponível (ad blocker, offline) — ignora.
    }
  }
}
