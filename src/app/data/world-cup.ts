// Seleções da Copa do Mundo FIFA de 2026 (48 times).
// 45 são membros da ONU e vêm do dataset principal (countries.ts).
// Inglaterra, Escócia e Curaçao competem separadamente / não são membros da ONU,
// então têm entradas próprias aqui (com códigos de bandeira do flagcdn).
//
// Para atualizar em edições futuras da Copa, edite WORLD_CUP_CODES e/ou as entradas
// personalizadas abaixo.

import { COUNTRIES, Country } from './countries';

/** Códigos ISO (alpha-2) dos classificados que já existem no dataset principal. */
const WORLD_CUP_CODES = [
  // UEFA
  'at', 'be', 'ba', 'hr', 'cz', 'fr', 'de', 'nl', 'no', 'pt', 'es', 'se', 'ch', 'tr',
  // CONMEBOL
  'ar', 'br', 'co', 'ec', 'py', 'uy',
  // CONCACAF
  'ca', 'ht', 'mx', 'pa', 'us',
  // CAF
  'dz', 'cv', 'cd', 'eg', 'gh', 'ci', 'ma', 'sn', 'za', 'tn',
  // AFC
  'au', 'ir', 'iq', 'jp', 'jo', 'qa', 'sa', 'kr', 'uz',
  // OFC
  'nz',
];

/** Seleções que não estão no dataset de membros da ONU (Inglaterra, Escócia, Curaçao). */
const CUSTOM_TEAMS: Country[] = [
  {
    code: 'gb-eng',
    name: 'Inglaterra',
    nameEn: 'England',
    capital: 'Londres',
    region: 'Europa',
    subregion: 'Europa do Norte',
    languages: ['Inglês'],
    currency: 'Libra esterlina',
    currencyCode: 'GBP',
    hemisphere: 'Norte',
    landlocked: false,
    area: 130279,
    flagEmoji: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
  },
  {
    code: 'gb-sct',
    name: 'Escócia',
    nameEn: 'Scotland',
    capital: 'Edimburgo',
    region: 'Europa',
    subregion: 'Europa do Norte',
    languages: ['Inglês', 'Gaélico escocês'],
    currency: 'Libra esterlina',
    currencyCode: 'GBP',
    hemisphere: 'Norte',
    landlocked: false,
    area: 77933,
    flagEmoji: '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
  },
  {
    code: 'cw',
    name: 'Curaçao',
    nameEn: 'Curaçao',
    capital: 'Willemstad',
    region: 'Américas',
    subregion: 'Caribe',
    languages: ['Holandês', 'Papiamento', 'Inglês'],
    currency: 'Florim das Antilhas Neerlandesas',
    currencyCode: 'ANG',
    hemisphere: 'Norte',
    landlocked: false,
    area: 444,
    flagEmoji: '🇨🇼',
  },
];

/** As 48 seleções da Copa do Mundo de 2026, ordenadas por nome (pt). */
export const WORLD_CUP_2026: Country[] = [
  ...COUNTRIES.filter((c) => WORLD_CUP_CODES.includes(c.code)),
  ...CUSTOM_TEAMS,
].sort((a, b) => a.name.localeCompare(b.name, 'pt'));
