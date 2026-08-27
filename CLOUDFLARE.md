# Migração Vercel → Cloudflare Pages — runbook

Objetivo: mover a hospedagem do Flaguess da **Vercel (Hobby, não-comercial)** para a
**Cloudflare Pages (grátis, uso comercial OK)**, liberando anúncios no futuro e abrindo
caminho para o **ranking global** (Cloudflare D1/KV). O site é um SPA estático (Angular),
então a migração é direta.

> ⚠️ Regra de ouro: **teste tudo na URL `*.pages.dev` ANTES de mexer no DNS.** O domínio
> `flaguess.com.br` só aponta pro Cloudflare no último passo, quando já estiver funcionando.

---

## ✅ O que já está pronto no repositório

- **Build command:** `npm run build`
- **Diretório de saída:** `dist/worldgame/browser`
- **Fallback de SPA:** `public/_redirects` (`/* /index.html 200`) — já entra no build.
- Nada disso afeta a Vercel; os dois hosts podem conviver durante a transição.

---

## Passo 1 — Criar o projeto no Cloudflare Pages (você, no painel)

1. Painel da Cloudflare → **Workers & Pages** → **Create application** → aba **Pages**.
2. **Import an existing Git repository** → conecte o GitHub e escolha **Frouzin/Flaguess**.
3. Em **Build settings**:
   | Campo | Valor |
   |---|---|
   | Framework preset | *None* (ou Angular) |
   | Build command | `npm run build` |
   | Build output directory | `dist/worldgame/browser` |
   | Production branch | `main` |
4. **Save and Deploy.** A Cloudflare instala as dependências, builda e publica.
5. No fim você recebe uma URL **`https://flaguess.pages.dev`** (ou nome parecido).

A partir daqui, **todo push na `main` gera deploy automático** — igualzinho à Vercel.

## Passo 2 — Verificar na URL de teste (você + eu)

Abra a `*.pages.dev` e confira (me chame que eu valido junto):
- [ ] o jogo carrega e joga normalmente;
- [ ] `/artigos.html` e os 4 artigos abrem, com as bandeiras aparecendo;
- [ ] `/sitemap.xml`, `/ads.txt`, `/privacidade.html` respondem;
- [ ] um caminho inexistente (ex.: `/xyz`) cai no jogo (fallback SPA).

**Só avance quando isso estiver 100%.** Nada até aqui tocou no domínio.

## Passo 3 — Apontar o domínio (você, no painel + Registro.br)

O jeito recomendado pelo Cloudflare é mover o DNS do domínio para lá:

1. No projeto Pages → **Custom domains** → **Set up a domain** → `flaguess.com.br`
   (repita para `www.flaguess.com.br`).
2. A Cloudflare vai pedir para **trocar os nameservers** do domínio pelos dois que ela
   fornecer (algo como `xxx.ns.cloudflare.com`).
3. No **Registro.br** → seu domínio → **alterar servidores DNS** → coloque os dois
   nameservers da Cloudflare e **salve**. (Propagação: de minutos a algumas horas.)
4. A Cloudflare emite o certificado HTTPS automaticamente. Confirme que
   `https://flaguess.com.br` e `https://www.flaguess.com.br` abrem o site.

> 🔄 **Rollback:** se algo der errado, volte os nameservers antigos no Registro.br (ou os
> registros A/CNAME da Vercel) que o site volta pra Vercel. Por isso testamos no passo 2.

## Passo 4 — Ajustes de código pós-virada (eu faço)

Quando o domínio já estiver na Cloudflare, me avise que eu:
- [ ] **Troco o analytics:** removo o script do Vercel Web Analytics do `index.html` e
      coloco o **Cloudflare Web Analytics** (grátis, sem cookies) — o beacon vem do painel.
- [ ] **Atualizo a Política de Privacidade** (`public/privacidade.html`), que hoje cita
      "Vercel Web Analytics", para o Cloudflare.
- [ ] (Opcional) desconecto o projeto na Vercel ou removo o domínio de lá, pra não haver
      dois hosts com o mesmo domínio.

## Passo 5 — Depois: ranking global (quando você quiser)

Com o site na Cloudflare, o **ranking global** fica destravado: um banco **D1** (SQL) +
um endpoint em **Workers** guardam as melhores partidas de todos. O Hall da Fama local
atual vira a aba "meu histórico" ao lado do global. Isso é um projeto à parte — a fazer
sob demanda.

---

## Alternativa (avançada): Cloudflare Workers via wrangler

Se preferir deploy por linha de comando em vez do painel:
`npm i -D wrangler@^4`, criar `wrangler.jsonc` com
`"assets": { "directory": "./dist/worldgame/browser", "not_found_handling": "single-page-application" }`,
`npx wrangler login` e `npx wrangler deploy`. Mais controle, porém sem o deploy-on-push
automático do Pages. Para o nosso caso, **o Pages conectado ao Git (acima) é mais simples.**
