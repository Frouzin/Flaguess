# 🌍 Adivinhe a Bandeira

Jogo de navegador em **Angular 22** onde você tenta descobrir o país a partir da bandeira.
A cada tentativa errada, você ganha uma **dica** — e quanto menos dicas usar, mais pontos leva.

## ✨ Recursos

- **194 países** (membros da ONU) com nomes, capitais, regiões e idiomas em **português**.
- **Sistema de dicas progressivas**: cada erro revela uma nova pista (continente → hemisfério →
  região → idiomas → costa → moeda → capital → inicial e nº de letras).
- **Duas dificuldades**:
  - **😌 Normal** — bandeira nítida.
  - **🌫️ Difícil** — bandeira **borrada** (o desfoque diminui a cada dica) e **pontos em dobro**.
- **Placar** com pontos, sequência de acertos (streak) e rodadas.
- **Autocomplete** com todos os países para facilitar a digitação.
- Funciona **offline** para os dados; as imagens das bandeiras vêm do `flagcdn.com`.

## 🚀 Como rodar

```bash
npm install
npm start           # http://localhost:4200
```

Para gerar a versão de produção:

```bash
npm run build       # saída em dist/worldgame
```

## 🕹️ Como jogar

1. Escolha a dificuldade e clique em **Começar a jogar**.
2. Olhe a bandeira e digite o nome do país (aceita acentos e o nome em inglês).
3. Errou? Você ganha uma dica e pode tentar de novo.
4. Acertou? Ganha pontos (100 − 15 por dica usada, ×2 no modo difícil) e vai para o próximo país.
5. Sem ideia? Use **"Não sei — revelar resposta"** (zera a sequência).

## 🗂️ Estrutura

```
src/app/
  data/countries.ts          # dataset gerado (não editar à mão)
  services/game.service.ts   # toda a lógica do jogo (signals)
  app.ts / app.html / app.scss  # interface
scripts/gen-countries.js     # gera o dataset a partir do pacote world-countries
```

## 🔄 Regenerar o dataset de países

O arquivo `src/app/data/countries.ts` é gerado a partir do pacote
[`world-countries`](https://www.npmjs.com/package/world-countries):

```bash
npm i -D world-countries
node scripts/gen-countries.js
```

## 🧱 Tecnologias

- Angular 22 (standalone components, signals, controle de fluxo `@if`/`@for`, zoneless).
- Sem backend — 100% no navegador.
