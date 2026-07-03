// Gera src/app/data/countries.ts a partir do pacote world-countries.
const fs = require('fs');
const all = require('world-countries');

const REGION_PT = {
  'Americas': 'Américas',
  'Europe': 'Europa',
  'Asia': 'Ásia',
  'Africa': 'África',
  'Oceania': 'Oceania',
  'Antarctic': 'Antártida',
};

const SUBREGION_PT = {
  'Northern America': 'América do Norte',
  'South America': 'América do Sul',
  'Central America': 'América Central',
  'Caribbean': 'Caribe',
  'Northern Europe': 'Europa do Norte',
  'Western Europe': 'Europa Ocidental',
  'Southern Europe': 'Europa do Sul',
  'Eastern Europe': 'Europa Oriental',
  'Central Europe': 'Europa Central',
  'Southeast Europe': 'Sudeste Europeu',
  'Western Asia': 'Ásia Ocidental',
  'Central Asia': 'Ásia Central',
  'Southern Asia': 'Ásia do Sul',
  'Eastern Asia': 'Ásia Oriental',
  'South-Eastern Asia': 'Sudeste Asiático',
  'Northern Africa': 'Norte da África',
  'Western Africa': 'África Ocidental',
  'Middle Africa': 'África Central',
  'Eastern Africa': 'África Oriental',
  'Southern Africa': 'África Austral',
  'Australia and New Zealand': 'Austrália e Nova Zelândia',
  'Melanesia': 'Melanésia',
  'Micronesia': 'Micronésia',
  'Polynesia': 'Polinésia',
};

const LANG_PT = {
  Portuguese: 'Português', Spanish: 'Espanhol', English: 'Inglês', French: 'Francês',
  Arabic: 'Árabe', German: 'Alemão', Russian: 'Russo', Chinese: 'Chinês',
  'Mandarin Chinese': 'Mandarim', Japanese: 'Japonês', Italian: 'Italiano', Dutch: 'Holandês',
  Swahili: 'Suaíli', Hindi: 'Hindi', Bengali: 'Bengali', Turkish: 'Turco',
  Persian: 'Persa', Greek: 'Grego', Polish: 'Polonês', Swedish: 'Sueco',
  Norwegian: 'Norueguês', 'Norwegian Bokmål': 'Norueguês', 'Norwegian Nynorsk': 'Norueguês',
  Danish: 'Dinamarquês', Finnish: 'Finlandês', Korean: 'Coreano', Thai: 'Tailandês',
  Vietnamese: 'Vietnamita', Hebrew: 'Hebraico', Urdu: 'Urdu', Indonesian: 'Indonésio',
  Malay: 'Malaio', Filipino: 'Filipino', Tagalog: 'Tagalo', Ukrainian: 'Ucraniano',
  Romanian: 'Romeno', Hungarian: 'Húngaro', Czech: 'Tcheco', Slovak: 'Eslovaco',
  Bulgarian: 'Búlgaro', Serbian: 'Sérvio', Croatian: 'Croata', Slovene: 'Esloveno',
  Amharic: 'Amárico', Somali: 'Somali', Zulu: 'Zulu', Afrikaans: 'Africâner',
  Icelandic: 'Islandês', Irish: 'Irlandês', Catalan: 'Catalão', Estonian: 'Estoniano',
  Latvian: 'Letão', Lithuanian: 'Lituano', Albanian: 'Albanês', Macedonian: 'Macedônio',
  Georgian: 'Georgiano', Armenian: 'Armênio', Azerbaijani: 'Azerbaijano', Kazakh: 'Cazaque',
  Uzbek: 'Uzbeque', Mongolian: 'Mongol', Nepali: 'Nepalês', Sinhala: 'Cingalês',
  Khmer: 'Khmer', Lao: 'Laosiano', Burmese: 'Birmanês', Pashto: 'Pashto', Dari: 'Dari',
  Maltese: 'Maltês', Luxembourgish: 'Luxemburguês', Belarusian: 'Bielorrusso',
  'Haitian Creole': 'Crioulo haitiano', Guarani: 'Guarani', Quechua: 'Quéchua',
  Aymara: 'Aimará', Tswana: 'Tswana', Sotho: 'Soto', Malagasy: 'Malgaxe',
  Kinyarwanda: 'Quiniaruanda', Kirundi: 'Rundi', Wolof: 'Uólofe', Hausa: 'Hauçá',
};

const langPt = (name) => LANG_PT[name] || name;

const countries = all
  .filter((c) => c.independent === true && c.unMember === true)
  .map((c) => {
    const langs = Object.values(c.languages || {}).map(langPt);
    const curKey = Object.keys(c.currencies || {})[0];
    const cur = curKey ? c.currencies[curKey] : null;
    const lat = Array.isArray(c.latlng) ? c.latlng[0] : 0;
    return {
      code: c.cca2.toLowerCase(),
      name: c.translations?.por?.common || c.name.common,
      nameEn: c.name.common,
      capital: (c.capital && c.capital[0]) || '—',
      region: REGION_PT[c.region] || c.region || 'Desconhecido',
      subregion: SUBREGION_PT[c.subregion] || c.subregion || '',
      languages: langs,
      currency: cur ? cur.name : '',
      currencyCode: curKey || '',
      hemisphere: lat >= 0 ? 'Norte' : 'Sul',
      landlocked: !!c.landlocked,
      area: Math.round(c.area || 0),
      flagEmoji: c.flag || '',
    };
  })
  .sort((a, b) => a.name.localeCompare(b.name, 'pt'));

const header = `// ARQUIVO GERADO automaticamente a partir do pacote "world-countries".
// Contém ${countries.length} países soberanos (membros da ONU).
// Regenerar: node scripts/gen-countries.js  (ver README)

export interface Country {
  code: string;          // ISO 3166-1 alpha-2 (minúsculo) — usado no flagcdn.com
  name: string;          // nome comum em português
  nameEn: string;        // nome comum em inglês (aceito como resposta alternativa)
  capital: string;       // capital
  region: string;        // continente (pt)
  subregion: string;     // sub-região (pt)
  languages: string[];   // idiomas oficiais (pt quando conhecido)
  currency: string;      // nome da moeda
  currencyCode: string;  // código ISO da moeda
  hemisphere: 'Norte' | 'Sul';
  landlocked: boolean;   // sem litoral
  area: number;          // km²
  flagEmoji: string;     // emoji da bandeira
}

export const COUNTRIES: Country[] = `;

const out = header + JSON.stringify(countries, null, 2) + ';\n';

const path = require('path');
const dest = process.argv[2] || path.join(__dirname, '..', 'src', 'app', 'data', 'countries.ts');
fs.writeFileSync(dest, out, 'utf8');
console.log('Escrito', countries.length, 'países em', dest);
