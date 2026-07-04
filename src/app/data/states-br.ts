import { Country } from './countries';

/**
 * 26 estados + Distrito Federal. Reaproveita a interface Country:
 * - `region` guarda a região do Brasil (Norte, Nordeste, ...)
 * - `subregion` guarda a sigla (SP, RJ, ...)
 * As bandeiras ficam em public/flags/br-XX.svg (ver scripts/download-br-states.js).
 */
function st(code: string, name: string, capital: string, region: string, sigla: string): Country {
  return {
    code,
    name,
    nameEn: name,
    capital,
    region,
    subregion: sigla,
    languages: ['Português'],
    currency: '',
    currencyCode: '',
    hemisphere: 'Sul',
    landlocked: false,
    area: 0,
    flagEmoji: '',
  };
}

export const BRAZIL_STATES: Country[] = [
  st('br-ac', 'Acre', 'Rio Branco', 'Norte', 'AC'),
  st('br-al', 'Alagoas', 'Maceió', 'Nordeste', 'AL'),
  st('br-ap', 'Amapá', 'Macapá', 'Norte', 'AP'),
  st('br-am', 'Amazonas', 'Manaus', 'Norte', 'AM'),
  st('br-ba', 'Bahia', 'Salvador', 'Nordeste', 'BA'),
  st('br-ce', 'Ceará', 'Fortaleza', 'Nordeste', 'CE'),
  st('br-df', 'Distrito Federal', 'Brasília', 'Centro-Oeste', 'DF'),
  st('br-es', 'Espírito Santo', 'Vitória', 'Sudeste', 'ES'),
  st('br-go', 'Goiás', 'Goiânia', 'Centro-Oeste', 'GO'),
  st('br-ma', 'Maranhão', 'São Luís', 'Nordeste', 'MA'),
  st('br-mt', 'Mato Grosso', 'Cuiabá', 'Centro-Oeste', 'MT'),
  st('br-ms', 'Mato Grosso do Sul', 'Campo Grande', 'Centro-Oeste', 'MS'),
  st('br-mg', 'Minas Gerais', 'Belo Horizonte', 'Sudeste', 'MG'),
  st('br-pa', 'Pará', 'Belém', 'Norte', 'PA'),
  st('br-pb', 'Paraíba', 'João Pessoa', 'Nordeste', 'PB'),
  st('br-pr', 'Paraná', 'Curitiba', 'Sul', 'PR'),
  st('br-pe', 'Pernambuco', 'Recife', 'Nordeste', 'PE'),
  st('br-pi', 'Piauí', 'Teresina', 'Nordeste', 'PI'),
  st('br-rj', 'Rio de Janeiro', 'Rio de Janeiro', 'Sudeste', 'RJ'),
  st('br-rn', 'Rio Grande do Norte', 'Natal', 'Nordeste', 'RN'),
  st('br-rs', 'Rio Grande do Sul', 'Porto Alegre', 'Sul', 'RS'),
  st('br-ro', 'Rondônia', 'Porto Velho', 'Norte', 'RO'),
  st('br-rr', 'Roraima', 'Boa Vista', 'Norte', 'RR'),
  st('br-sc', 'Santa Catarina', 'Florianópolis', 'Sul', 'SC'),
  st('br-sp', 'São Paulo', 'São Paulo', 'Sudeste', 'SP'),
  st('br-se', 'Sergipe', 'Aracaju', 'Nordeste', 'SE'),
  st('br-to', 'Tocantins', 'Palmas', 'Norte', 'TO'),
].sort((a, b) => a.name.localeCompare(b.name, 'pt'));
