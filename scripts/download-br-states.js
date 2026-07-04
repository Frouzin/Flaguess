// Baixa as bandeiras dos 26 estados + Distrito Federal para public/flags/br-XX.svg.
// Fonte: Wikimedia Commons (símbolos oficiais, domínio público no Brasil).
// Nomes de arquivo resolvidos via Wikidata (P41) — garante a bandeira do ESTADO,
// não da cidade homônima. Uso: node scripts/download-br-states.js

const fs = require('fs');
const path = require('path');

const OUT = path.join(__dirname, '..', 'public', 'flags');

// code | arquivo no Commons (resolvido via Wikidata)
const STATES = [
  ['br-ac', 'Bandeira do Acre.svg'],
  ['br-al', 'Bandeira de Alagoas.svg'],
  ['br-ap', 'Bandeira do Amapá.svg'],
  ['br-am', 'Bandeira do Amazonas.svg'],
  ['br-ba', 'Bandeira da Bahia.svg'],
  ['br-ce', 'Bandeira do Ceará.svg'],
  ['br-df', 'Bandeira do Distrito Federal (Brasil).svg'],
  ['br-es', 'Bandeira do Espírito Santo.svg'],
  ['br-go', 'Flag of Goiás.svg'],
  ['br-ma', 'Bandeira do Maranhão.svg'],
  ['br-mt', 'Bandeira de Mato Grosso.svg'],
  ['br-ms', 'Bandeira de Mato Grosso do Sul.svg'],
  ['br-mg', 'Bandeira de Minas Gerais.svg'],
  ['br-pa', 'Bandeira do Pará.svg'],
  ['br-pb', 'Bandeira da Paraíba.svg'],
  ['br-pr', 'Bandeira do Paraná.svg'],
  ['br-pe', 'Bandeira de Pernambuco.svg'],
  ['br-pi', 'Bandeira do Piauí.svg'],
  ['br-rj', 'Bandeira do estado do Rio de Janeiro.svg'],
  ['br-rn', 'Bandeira do Rio Grande do Norte.svg'],
  ['br-rs', 'Bandeira do Rio Grande do Sul.svg'],
  ['br-ro', 'Bandeira de Rondônia.svg'],
  ['br-rr', 'Bandeira de Roraima.svg'],
  ['br-sc', 'Bandeira de Santa Catarina.svg'],
  ['br-sp', 'Bandeira do estado de São Paulo.svg'],
  ['br-se', 'Bandeira de Sergipe.svg'],
  ['br-to', 'Bandeira do Tocantins.svg'],
];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function main() {
  fs.mkdirSync(OUT, { recursive: true });
  const errors = [];
  let ok = 0;
  for (const [code, file] of STATES) {
    const url = 'https://commons.wikimedia.org/wiki/Special:FilePath/' + encodeURIComponent(file);
    try {
      const res = await fetch(url, {
        headers: { 'User-Agent': 'FlaguessBot/1.0 (state flags; contact matheusereis44@gmail.com)' },
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const svg = await res.text();
      if (!svg.trimStart().startsWith('<')) throw new Error('resposta não é SVG');
      fs.writeFileSync(path.join(OUT, `${code}.svg`), svg, 'utf8');
      ok++;
      console.log(`ok  ${code}  (${(svg.length / 1024).toFixed(1)} kB)`);
    } catch (e) {
      errors.push(`${code}: ${e.message}`);
      console.log(`ERR ${code}: ${e.message}`);
    }
    await sleep(350); // evita rate-limit (429) do Wikimedia
  }
  console.log(`\nConcluído: ${ok}/${STATES.length} baixadas, ${errors.length} erros.`);
  if (errors.length) process.exit(1);
}

main();
