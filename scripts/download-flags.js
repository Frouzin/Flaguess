// Baixa todas as bandeiras (SVG) usadas pelo jogo para public/flags/.
// Fonte: flagcdn.com (bandeiras de domínio público).
// Uso: node scripts/download-flags.js
//
// Os códigos vêm de src/app/data/countries.ts (194 países) + as seleções que não
// são membros da ONU (Inglaterra, Escócia e Curaçao).

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const OUT = path.join(ROOT, 'public', 'flags');
const CONCURRENCY = 16;

const src = fs.readFileSync(path.join(ROOT, 'src', 'app', 'data', 'countries.ts'), 'utf8');
const codes = [...new Set([...src.matchAll(/"code":\s*"([^"]+)"/g)].map((m) => m[1]))];
for (const extra of ['gb-eng', 'gb-sct', 'cw']) {
  if (!codes.includes(extra)) codes.push(extra);
}

fs.mkdirSync(OUT, { recursive: true });

async function fetchFlag(code) {
  const res = await fetch(`https://flagcdn.com/${code}.svg`);
  if (!res.ok) throw new Error(`${code}: HTTP ${res.status}`);
  const svg = await res.text();
  if (!svg.trimStart().startsWith('<')) throw new Error(`${code}: resposta inválida`);
  fs.writeFileSync(path.join(OUT, `${code}.svg`), svg, 'utf8');
}

async function main() {
  console.log(`Baixando ${codes.length} bandeiras para ${OUT} ...`);
  let ok = 0;
  const errors = [];
  const queue = [...codes];
  async function worker() {
    while (queue.length) {
      const code = queue.shift();
      try {
        await fetchFlag(code);
        ok++;
      } catch (e) {
        errors.push(e.message);
      }
    }
  }
  await Promise.all(Array.from({ length: CONCURRENCY }, worker));
  console.log(`Concluído: ${ok} baixadas, ${errors.length} erros.`);
  if (errors.length) {
    console.error(errors.join('\n'));
    process.exit(1);
  }
}

main();
