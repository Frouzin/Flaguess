import { Injectable, signal } from '@angular/core';

const CONSENT_KEY = 'flaguess.consent.v1';

export type ConsentDecision = 'pending' | 'accepted' | 'rejected';

/**
 * Guarda a decisão do usuário sobre cookies/anúncios (LGPD) no localStorage.
 * O jogo e o analytics (cookieless) funcionam independente da escolha; esta
 * decisão serve para liberar anúncios personalizados (AdSense) no futuro.
 */
@Injectable({ providedIn: 'root' })
export class ConsentService {
  readonly decision = signal<ConsentDecision>('pending');

  constructor() {
    this.load();
  }

  accept(): void {
    this.save('accepted');
  }

  reject(): void {
    this.save('rejected');
  }

  private save(decision: ConsentDecision): void {
    this.decision.set(decision);
    try {
      localStorage.setItem(CONSENT_KEY, decision);
    } catch {
      // localStorage indisponível (ex.: navegação privada) — ignora.
    }
  }

  private load(): void {
    try {
      const raw = localStorage.getItem(CONSENT_KEY);
      if (raw === 'accepted' || raw === 'rejected') {
        this.decision.set(raw);
      }
    } catch {
      // ignora
    }
  }
}
