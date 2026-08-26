# Monetização do Flaguess — guia prático

Estado atual (ago/2026): **esqueleto de anúncios pronto no código, porém 100% desligado.**
Nada carrega e nada aparece em produção enquanto `SITE.ads.client` estiver vazio.
Este documento explica o que falta para ligar de verdade — e por que ainda **não**
é hora de gastar dinheiro com isso.

---

## 1. O papo reto sobre timing

- **Tráfego hoje:** ~97 visitantes / ~166 pageviews por mês (dados reais da Vercel).
- **Receita estimada de AdSense nesse volume:** ~R$ 1 a 4 por mês.
- **Conclusão:** ligar anúncios agora rende **centavos**. O gargalo não é anúncio,
  é **público**. Faz mais sentido crescer o tráfego primeiro (conteúdo/SEO) e ligar
  os anúncios quando houver alguns milhares de pageviews/mês.

O esqueleto abaixo existe para que, quando esse momento chegar, ligar tudo seja
questão de **poucos minutos** — não um projeto novo.

---

## 2. O bloqueio da hospedagem (importante)

O Flaguess está na **Vercel, plano Hobby**. O plano Hobby é **para uso pessoal e
não-comercial** — exibir anúncios (AdSense) é uso comercial e **viola os termos**
do Hobby. Então, antes de ligar anúncios de verdade, é preciso resolver isto.

### Opção A — Cloudflare Pages (recomendada)
- **Custo:** grátis, e **permite uso comercial** (anúncios liberados).
- **Serve bem** um site estático como o nosso (build do Angular).
- **Contra:** migrar exige refazer o apontamento de DNS do domínio e você
  **perde o Vercel Web Analytics** (que hoje alimenta os números e é citado na
  Política de Privacidade). Dá para trocar por Cloudflare Web Analytics (grátis,
  também sem cookies) e atualizar a política.

**Configuração no painel do Cloudflare Pages:**
| Campo | Valor |
|---|---|
| Framework preset | None / Angular |
| Build command | `npm run build` |
| Build output directory | `dist/worldgame/browser` |
| Node version | 20+ |

**Para rotas SPA**, crie o arquivo `public/_redirects` com:
```
/*    /index.html   200
```
(Os `.html` estáticos — como-jogar, termos, privacidade — continuam sendo
servidos direto; só caminhos inexistentes caem no index.html.)

### Opção B — Vercel Pro
- **Custo:** US$ 20/mês. Libera uso comercial mantendo tudo como está (domínio,
  analytics, deploy).
- **Só vale a pena** quando a receita de anúncios cobrir com folga esse valor —
  ou seja, **não agora**.

> Recomendação: fique na Vercel Hobby enquanto os anúncios estão desligados
> (é só desenvolvimento, sem uso comercial). Migre para a Cloudflare **no dia**
> em que for ligar os anúncios.

---

## 3. Como LIGAR os anúncios (quando chegar a hora)

1. **Criar conta no Google AdSense** e cadastrar o site `flaguess.com.br`.
   (Só você pode fazer isso — envolve login e dados da sua conta Google.)
2. **Aguardar aprovação** (ver checklist na seção 4).
3. **Criar um bloco de anúncio** ("Unidade de anúncio" → display) no painel e
   copiar o `data-ad-slot`.
4. **Preencher 2 lugares no código:**
   - `src/app/site-config.ts` → `ads.client` = `'ca-pub-XXXXXXXXXXXXXXXX'`
     e `ads.slots.footer` = `'<ID do bloco>'`.
   - `public/ads.txt` → descomentar a linha e trocar `pub-0000...` pelo seu ID.
5. **(Opcional) index.html** → se preferir a verificação por `<script>` no
   `<head>`, descomente o bloco que já está lá. Não é obrigatório: o app injeta
   o loader sozinho via `AdsenseService` quando o `client` está preenchido.
6. **Resolver a hospedagem** (seção 2) e dar deploy.

Pronto. O componente `<app-ad-slot>` passa a renderizar o anúncio real, e só
para quem **aceitou o consentimento** (banner LGPD já existente).

### Onde os anúncios aparecem
Hoje há **um** espaço reservado: um banner horizontal acima do rodapé
(`<app-ad-slot [slot]="site.ads.slots.footer" />` em `app.html`). Para adicionar
mais posições, crie novos slots em `site-config.ts` e coloque outro
`<app-ad-slot>` onde quiser. Evite anúncios no meio do jogo (política do AdSense
e UX ruim).

---

## 4. Checklist de aprovação do AdSense

O AdSense **não tem mínimo de tráfego**, mas reprova "conteúdo de baixo valor".
Para um jogo (SPA), o risco é justamente esse. O que ajuda a aprovar:

- [x] Página **Como jogar** com conteúdo textual real (`/como-jogar.html`).
- [x] **Termos de Uso** (`/termos.html`) e **Política de Privacidade** (`/privacidade.html`).
- [x] `ads.txt` e `sitemap.xml` no ar.
- [ ] **Conteúdo editorial** — 2 a 4 artigos de verdade (ex.: "As 48 seleções da
      Copa 2026", "Bandeiras mais parecidas do mundo", "Bandeiras da Europa").
      É o item que mais destrava a aprovação **e** traz mais busca. *(recomendado
      como próximo passo)*
- [ ] Navegação clara entre as páginas (rodapé já cruza os links).
- [ ] Domínio próprio ativo e indexável no Google (`flaguess.com.br` — ok).

---

## 5. Resumo do que já está no código

| Item | Arquivo | Estado |
|---|---|---|
| Config central de anúncios | `src/app/site-config.ts` (`ads`) | vazio = desligado |
| Serviço de carregamento | `src/app/services/adsense.service.ts` | pronto |
| Componente de bloco | `src/app/components/ad-slot/ad-slot.ts` | pronto (inerte) |
| Gate de consentimento (LGPD) | `src/app/services/consent.service.ts` | já existia |
| `ads.txt` | `public/ads.txt` | placeholder comentado |
| Loader opcional no `<head>` | `src/index.html` | comentado |
