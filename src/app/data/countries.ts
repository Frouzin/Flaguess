// ARQUIVO GERADO automaticamente a partir do pacote "world-countries".
// Contém 194 países soberanos (membros da ONU).
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

export const COUNTRIES: Country[] = [
  {
    "code": "af",
    "name": "Afeganistão",
    "nameEn": "Afghanistan",
    "capital": "Kabul",
    "region": "Ásia",
    "subregion": "Ásia do Sul",
    "languages": [
      "Dari",
      "Pashto",
      "Turkmen"
    ],
    "currency": "Afghan afghani",
    "currencyCode": "AFN",
    "hemisphere": "Norte",
    "landlocked": true,
    "area": 652230,
    "flagEmoji": "🇦🇫"
  },
  {
    "code": "za",
    "name": "África do Sul",
    "nameEn": "South Africa",
    "capital": "Pretoria",
    "region": "África",
    "subregion": "África Austral",
    "languages": [
      "Africâner",
      "Inglês",
      "Southern Ndebele",
      "Northern Sotho",
      "Southern Sotho",
      "Swazi",
      "Tswana",
      "Tsonga",
      "Venda",
      "Xhosa",
      "Zulu"
    ],
    "currency": "South African rand",
    "currencyCode": "ZAR",
    "hemisphere": "Sul",
    "landlocked": false,
    "area": 1221037,
    "flagEmoji": "🇿🇦"
  },
  {
    "code": "al",
    "name": "Albânia",
    "nameEn": "Albania",
    "capital": "Tirana",
    "region": "Europa",
    "subregion": "Sudeste Europeu",
    "languages": [
      "Albanês"
    ],
    "currency": "Albanian lek",
    "currencyCode": "ALL",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 28748,
    "flagEmoji": "🇦🇱"
  },
  {
    "code": "de",
    "name": "Alemanha",
    "nameEn": "Germany",
    "capital": "Berlin",
    "region": "Europa",
    "subregion": "Europa Ocidental",
    "languages": [
      "Alemão"
    ],
    "currency": "Euro",
    "currencyCode": "EUR",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 357114,
    "flagEmoji": "🇩🇪"
  },
  {
    "code": "ad",
    "name": "Andorra",
    "nameEn": "Andorra",
    "capital": "Andorra la Vella",
    "region": "Europa",
    "subregion": "Europa do Sul",
    "languages": [
      "Catalão"
    ],
    "currency": "Euro",
    "currencyCode": "EUR",
    "hemisphere": "Norte",
    "landlocked": true,
    "area": 468,
    "flagEmoji": "🇦🇩"
  },
  {
    "code": "ao",
    "name": "Angola",
    "nameEn": "Angola",
    "capital": "Luanda",
    "region": "África",
    "subregion": "África Central",
    "languages": [
      "Português"
    ],
    "currency": "Angolan kwanza",
    "currencyCode": "AOA",
    "hemisphere": "Sul",
    "landlocked": false,
    "area": 1246700,
    "flagEmoji": "🇦🇴"
  },
  {
    "code": "ag",
    "name": "Antígua e Barbuda",
    "nameEn": "Antigua and Barbuda",
    "capital": "Saint John's",
    "region": "Américas",
    "subregion": "Caribe",
    "languages": [
      "Inglês"
    ],
    "currency": "Eastern Caribbean dollar",
    "currencyCode": "XCD",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 442,
    "flagEmoji": "🇦🇬"
  },
  {
    "code": "sa",
    "name": "Arábia Saudita",
    "nameEn": "Saudi Arabia",
    "capital": "Riyadh",
    "region": "Ásia",
    "subregion": "Ásia Ocidental",
    "languages": [
      "Árabe"
    ],
    "currency": "Saudi riyal",
    "currencyCode": "SAR",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 2149690,
    "flagEmoji": "🇸🇦"
  },
  {
    "code": "dz",
    "name": "Argélia",
    "nameEn": "Algeria",
    "capital": "Algiers",
    "region": "África",
    "subregion": "Norte da África",
    "languages": [
      "Árabe"
    ],
    "currency": "Algerian dinar",
    "currencyCode": "DZD",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 2381741,
    "flagEmoji": "🇩🇿"
  },
  {
    "code": "ar",
    "name": "Argentina",
    "nameEn": "Argentina",
    "capital": "Buenos Aires",
    "region": "Américas",
    "subregion": "América do Sul",
    "languages": [
      "Guaraní",
      "Espanhol"
    ],
    "currency": "Argentine peso",
    "currencyCode": "ARS",
    "hemisphere": "Sul",
    "landlocked": false,
    "area": 2780400,
    "flagEmoji": "🇦🇷"
  },
  {
    "code": "am",
    "name": "Arménia",
    "nameEn": "Armenia",
    "capital": "Yerevan",
    "region": "Ásia",
    "subregion": "Ásia Ocidental",
    "languages": [
      "Armênio"
    ],
    "currency": "Armenian dram",
    "currencyCode": "AMD",
    "hemisphere": "Norte",
    "landlocked": true,
    "area": 29743,
    "flagEmoji": "🇦🇲"
  },
  {
    "code": "au",
    "name": "Austrália",
    "nameEn": "Australia",
    "capital": "Canberra",
    "region": "Oceania",
    "subregion": "Austrália e Nova Zelândia",
    "languages": [
      "Inglês"
    ],
    "currency": "Australian dollar",
    "currencyCode": "AUD",
    "hemisphere": "Sul",
    "landlocked": false,
    "area": 7692024,
    "flagEmoji": "🇦🇺"
  },
  {
    "code": "at",
    "name": "Áustria",
    "nameEn": "Austria",
    "capital": "Vienna",
    "region": "Europa",
    "subregion": "Europa Central",
    "languages": [
      "Austro-Bavarian German"
    ],
    "currency": "Euro",
    "currencyCode": "EUR",
    "hemisphere": "Norte",
    "landlocked": true,
    "area": 83871,
    "flagEmoji": "🇦🇹"
  },
  {
    "code": "az",
    "name": "Azerbeijão",
    "nameEn": "Azerbaijan",
    "capital": "Baku",
    "region": "Ásia",
    "subregion": "Ásia Ocidental",
    "languages": [
      "Azerbaijano",
      "Russo"
    ],
    "currency": "Azerbaijani manat",
    "currencyCode": "AZN",
    "hemisphere": "Norte",
    "landlocked": true,
    "area": 86600,
    "flagEmoji": "🇦🇿"
  },
  {
    "code": "bs",
    "name": "Bahamas",
    "nameEn": "Bahamas",
    "capital": "Nassau",
    "region": "Américas",
    "subregion": "Caribe",
    "languages": [
      "Inglês"
    ],
    "currency": "Bahamian dollar",
    "currencyCode": "BSD",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 13943,
    "flagEmoji": "🇧🇸"
  },
  {
    "code": "bh",
    "name": "Bahrein",
    "nameEn": "Bahrain",
    "capital": "Manama",
    "region": "Ásia",
    "subregion": "Ásia Ocidental",
    "languages": [
      "Árabe"
    ],
    "currency": "Bahraini dinar",
    "currencyCode": "BHD",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 765,
    "flagEmoji": "🇧🇭"
  },
  {
    "code": "bd",
    "name": "Bangladesh",
    "nameEn": "Bangladesh",
    "capital": "Dhaka",
    "region": "Ásia",
    "subregion": "Ásia do Sul",
    "languages": [
      "Bengali"
    ],
    "currency": "Bangladeshi taka",
    "currencyCode": "BDT",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 147570,
    "flagEmoji": "🇧🇩"
  },
  {
    "code": "bb",
    "name": "Barbados",
    "nameEn": "Barbados",
    "capital": "Bridgetown",
    "region": "Américas",
    "subregion": "Caribe",
    "languages": [
      "Inglês"
    ],
    "currency": "Barbadian dollar",
    "currencyCode": "BBD",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 430,
    "flagEmoji": "🇧🇧"
  },
  {
    "code": "be",
    "name": "Bélgica",
    "nameEn": "Belgium",
    "capital": "Brussels",
    "region": "Europa",
    "subregion": "Europa Ocidental",
    "languages": [
      "Alemão",
      "Francês",
      "Holandês"
    ],
    "currency": "Euro",
    "currencyCode": "EUR",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 30528,
    "flagEmoji": "🇧🇪"
  },
  {
    "code": "bz",
    "name": "Belize",
    "nameEn": "Belize",
    "capital": "Belmopan",
    "region": "Américas",
    "subregion": "América Central",
    "languages": [
      "Belizean Creole",
      "Inglês",
      "Espanhol"
    ],
    "currency": "Belize dollar",
    "currencyCode": "BZD",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 22966,
    "flagEmoji": "🇧🇿"
  },
  {
    "code": "bj",
    "name": "Benin",
    "nameEn": "Benin",
    "capital": "Porto-Novo",
    "region": "África",
    "subregion": "África Ocidental",
    "languages": [
      "Francês"
    ],
    "currency": "West African CFA franc",
    "currencyCode": "XOF",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 112622,
    "flagEmoji": "🇧🇯"
  },
  {
    "code": "by",
    "name": "Bielorússia",
    "nameEn": "Belarus",
    "capital": "Minsk",
    "region": "Europa",
    "subregion": "Europa Oriental",
    "languages": [
      "Bielorrusso",
      "Russo"
    ],
    "currency": "Belarusian ruble",
    "currencyCode": "BYN",
    "hemisphere": "Norte",
    "landlocked": true,
    "area": 207600,
    "flagEmoji": "🇧🇾"
  },
  {
    "code": "bo",
    "name": "Bolívia",
    "nameEn": "Bolivia",
    "capital": "Sucre",
    "region": "Américas",
    "subregion": "América do Sul",
    "languages": [
      "Aimará",
      "Guaraní",
      "Quéchua",
      "Espanhol"
    ],
    "currency": "Bolivian boliviano",
    "currencyCode": "BOB",
    "hemisphere": "Sul",
    "landlocked": true,
    "area": 1098581,
    "flagEmoji": "🇧🇴"
  },
  {
    "code": "ba",
    "name": "Bósnia e Herzegovina",
    "nameEn": "Bosnia and Herzegovina",
    "capital": "Sarajevo",
    "region": "Europa",
    "subregion": "Sudeste Europeu",
    "languages": [
      "Bosnian",
      "Croata",
      "Sérvio"
    ],
    "currency": "Bosnia and Herzegovina convertible mark",
    "currencyCode": "BAM",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 51209,
    "flagEmoji": "🇧🇦"
  },
  {
    "code": "bw",
    "name": "Botswana",
    "nameEn": "Botswana",
    "capital": "Gaborone",
    "region": "África",
    "subregion": "África Austral",
    "languages": [
      "Inglês",
      "Tswana"
    ],
    "currency": "Botswana pula",
    "currencyCode": "BWP",
    "hemisphere": "Sul",
    "landlocked": true,
    "area": 582000,
    "flagEmoji": "🇧🇼"
  },
  {
    "code": "br",
    "name": "Brasil",
    "nameEn": "Brazil",
    "capital": "Brasília",
    "region": "Américas",
    "subregion": "América do Sul",
    "languages": [
      "Português"
    ],
    "currency": "Brazilian real",
    "currencyCode": "BRL",
    "hemisphere": "Sul",
    "landlocked": false,
    "area": 8515767,
    "flagEmoji": "🇧🇷"
  },
  {
    "code": "bn",
    "name": "Brunei",
    "nameEn": "Brunei",
    "capital": "Bandar Seri Begawan",
    "region": "Ásia",
    "subregion": "Sudeste Asiático",
    "languages": [
      "Malaio"
    ],
    "currency": "Brunei dollar",
    "currencyCode": "BND",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 5765,
    "flagEmoji": "🇧🇳"
  },
  {
    "code": "bg",
    "name": "Bulgária",
    "nameEn": "Bulgaria",
    "capital": "Sofia",
    "region": "Europa",
    "subregion": "Sudeste Europeu",
    "languages": [
      "Búlgaro"
    ],
    "currency": "Bulgarian lev",
    "currencyCode": "BGN",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 110879,
    "flagEmoji": "🇧🇬"
  },
  {
    "code": "bf",
    "name": "Burkina Faso",
    "nameEn": "Burkina Faso",
    "capital": "Ouagadougou",
    "region": "África",
    "subregion": "África Ocidental",
    "languages": [
      "Francês"
    ],
    "currency": "West African CFA franc",
    "currencyCode": "XOF",
    "hemisphere": "Norte",
    "landlocked": true,
    "area": 272967,
    "flagEmoji": "🇧🇫"
  },
  {
    "code": "bi",
    "name": "Burundi",
    "nameEn": "Burundi",
    "capital": "Gitega",
    "region": "África",
    "subregion": "África Oriental",
    "languages": [
      "Francês",
      "Rundi"
    ],
    "currency": "Burundian franc",
    "currencyCode": "BIF",
    "hemisphere": "Sul",
    "landlocked": true,
    "area": 27834,
    "flagEmoji": "🇧🇮"
  },
  {
    "code": "bt",
    "name": "Butão",
    "nameEn": "Bhutan",
    "capital": "Thimphu",
    "region": "Ásia",
    "subregion": "Ásia do Sul",
    "languages": [
      "Dzongkha"
    ],
    "currency": "Bhutanese ngultrum",
    "currencyCode": "BTN",
    "hemisphere": "Norte",
    "landlocked": true,
    "area": 38394,
    "flagEmoji": "🇧🇹"
  },
  {
    "code": "cv",
    "name": "Cabo Verde",
    "nameEn": "Cape Verde",
    "capital": "Praia",
    "region": "África",
    "subregion": "África Ocidental",
    "languages": [
      "Português"
    ],
    "currency": "Cape Verdean escudo",
    "currencyCode": "CVE",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 4033,
    "flagEmoji": "🇨🇻"
  },
  {
    "code": "cm",
    "name": "Camarões",
    "nameEn": "Cameroon",
    "capital": "Yaoundé",
    "region": "África",
    "subregion": "África Central",
    "languages": [
      "Inglês",
      "Francês"
    ],
    "currency": "Central African CFA franc",
    "currencyCode": "XAF",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 475442,
    "flagEmoji": "🇨🇲"
  },
  {
    "code": "kh",
    "name": "Camboja",
    "nameEn": "Cambodia",
    "capital": "Phnom Penh",
    "region": "Ásia",
    "subregion": "Sudeste Asiático",
    "languages": [
      "Khmer"
    ],
    "currency": "Cambodian riel",
    "currencyCode": "KHR",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 181035,
    "flagEmoji": "🇰🇭"
  },
  {
    "code": "ca",
    "name": "Canadá",
    "nameEn": "Canada",
    "capital": "Ottawa",
    "region": "Américas",
    "subregion": "North America",
    "languages": [
      "Inglês",
      "Francês"
    ],
    "currency": "Canadian dollar",
    "currencyCode": "CAD",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 9984670,
    "flagEmoji": "🇨🇦"
  },
  {
    "code": "qa",
    "name": "Catar",
    "nameEn": "Qatar",
    "capital": "Doha",
    "region": "Ásia",
    "subregion": "Ásia Ocidental",
    "languages": [
      "Árabe"
    ],
    "currency": "Qatari riyal",
    "currencyCode": "QAR",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 11586,
    "flagEmoji": "🇶🇦"
  },
  {
    "code": "kz",
    "name": "Cazaquistão",
    "nameEn": "Kazakhstan",
    "capital": "Astana",
    "region": "Ásia",
    "subregion": "Ásia Central",
    "languages": [
      "Cazaque",
      "Russo"
    ],
    "currency": "Kazakhstani tenge",
    "currencyCode": "KZT",
    "hemisphere": "Norte",
    "landlocked": true,
    "area": 2724900,
    "flagEmoji": "🇰🇿"
  },
  {
    "code": "td",
    "name": "Chade",
    "nameEn": "Chad",
    "capital": "N'Djamena",
    "region": "África",
    "subregion": "África Central",
    "languages": [
      "Árabe",
      "Francês"
    ],
    "currency": "Central African CFA franc",
    "currencyCode": "XAF",
    "hemisphere": "Norte",
    "landlocked": true,
    "area": 1284000,
    "flagEmoji": "🇹🇩"
  },
  {
    "code": "cz",
    "name": "Chéquia",
    "nameEn": "Czechia",
    "capital": "Prague",
    "region": "Europa",
    "subregion": "Europa Central",
    "languages": [
      "Tcheco",
      "Eslovaco"
    ],
    "currency": "Czech koruna",
    "currencyCode": "CZK",
    "hemisphere": "Norte",
    "landlocked": true,
    "area": 78865,
    "flagEmoji": "🇨🇿"
  },
  {
    "code": "cl",
    "name": "Chile",
    "nameEn": "Chile",
    "capital": "Santiago",
    "region": "Américas",
    "subregion": "América do Sul",
    "languages": [
      "Espanhol"
    ],
    "currency": "Chilean peso",
    "currencyCode": "CLP",
    "hemisphere": "Sul",
    "landlocked": false,
    "area": 756102,
    "flagEmoji": "🇨🇱"
  },
  {
    "code": "cn",
    "name": "China",
    "nameEn": "China",
    "capital": "Beijing",
    "region": "Ásia",
    "subregion": "Ásia Oriental",
    "languages": [
      "Chinês"
    ],
    "currency": "Chinese yuan",
    "currencyCode": "CNY",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 9706961,
    "flagEmoji": "🇨🇳"
  },
  {
    "code": "cy",
    "name": "Chipre",
    "nameEn": "Cyprus",
    "capital": "Nicosia",
    "region": "Europa",
    "subregion": "Europa do Sul",
    "languages": [
      "Grego",
      "Turco"
    ],
    "currency": "Euro",
    "currencyCode": "EUR",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 9251,
    "flagEmoji": "🇨🇾"
  },
  {
    "code": "va",
    "name": "Cidade do Vaticano",
    "nameEn": "Vatican City",
    "capital": "Vatican City",
    "region": "Europa",
    "subregion": "Europa do Sul",
    "languages": [
      "Italiano",
      "Latin"
    ],
    "currency": "Euro",
    "currencyCode": "EUR",
    "hemisphere": "Norte",
    "landlocked": true,
    "area": 0,
    "flagEmoji": "🇻🇦"
  },
  {
    "code": "co",
    "name": "Colômbia",
    "nameEn": "Colombia",
    "capital": "Bogotá",
    "region": "Américas",
    "subregion": "América do Sul",
    "languages": [
      "Espanhol"
    ],
    "currency": "Colombian peso",
    "currencyCode": "COP",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 1141748,
    "flagEmoji": "🇨🇴"
  },
  {
    "code": "km",
    "name": "Comores",
    "nameEn": "Comoros",
    "capital": "Moroni",
    "region": "África",
    "subregion": "África Oriental",
    "languages": [
      "Árabe",
      "Francês",
      "Comorian"
    ],
    "currency": "Comorian franc",
    "currencyCode": "KMF",
    "hemisphere": "Sul",
    "landlocked": false,
    "area": 1862,
    "flagEmoji": "🇰🇲"
  },
  {
    "code": "cg",
    "name": "Congo",
    "nameEn": "Republic of the Congo",
    "capital": "Brazzaville",
    "region": "África",
    "subregion": "África Central",
    "languages": [
      "Francês",
      "Kikongo",
      "Lingala"
    ],
    "currency": "Central African CFA franc",
    "currencyCode": "XAF",
    "hemisphere": "Sul",
    "landlocked": false,
    "area": 342000,
    "flagEmoji": "🇨🇬"
  },
  {
    "code": "kp",
    "name": "Coreia do Norte",
    "nameEn": "North Korea",
    "capital": "Pyongyang",
    "region": "Ásia",
    "subregion": "Ásia Oriental",
    "languages": [
      "Coreano"
    ],
    "currency": "North Korean won",
    "currencyCode": "KPW",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 120538,
    "flagEmoji": "🇰🇵"
  },
  {
    "code": "kr",
    "name": "Coreia do Sul",
    "nameEn": "South Korea",
    "capital": "Seoul",
    "region": "Ásia",
    "subregion": "Ásia Oriental",
    "languages": [
      "Coreano"
    ],
    "currency": "South Korean won",
    "currencyCode": "KRW",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 100210,
    "flagEmoji": "🇰🇷"
  },
  {
    "code": "ci",
    "name": "Costa do Marfim",
    "nameEn": "Ivory Coast",
    "capital": "Yamoussoukro",
    "region": "África",
    "subregion": "África Ocidental",
    "languages": [
      "Francês"
    ],
    "currency": "West African CFA franc",
    "currencyCode": "XOF",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 322463,
    "flagEmoji": "🇨🇮"
  },
  {
    "code": "cr",
    "name": "Costa Rica",
    "nameEn": "Costa Rica",
    "capital": "San José",
    "region": "Américas",
    "subregion": "América Central",
    "languages": [
      "Espanhol"
    ],
    "currency": "Costa Rican colón",
    "currencyCode": "CRC",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 51100,
    "flagEmoji": "🇨🇷"
  },
  {
    "code": "hr",
    "name": "Croácia",
    "nameEn": "Croatia",
    "capital": "Zagreb",
    "region": "Europa",
    "subregion": "Sudeste Europeu",
    "languages": [
      "Croata"
    ],
    "currency": "Euro",
    "currencyCode": "EUR",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 56594,
    "flagEmoji": "🇭🇷"
  },
  {
    "code": "cu",
    "name": "Cuba",
    "nameEn": "Cuba",
    "capital": "Havana",
    "region": "Américas",
    "subregion": "Caribe",
    "languages": [
      "Espanhol"
    ],
    "currency": "Cuban convertible peso",
    "currencyCode": "CUC",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 109884,
    "flagEmoji": "🇨🇺"
  },
  {
    "code": "dk",
    "name": "Dinamarca",
    "nameEn": "Denmark",
    "capital": "Copenhagen",
    "region": "Europa",
    "subregion": "Europa do Norte",
    "languages": [
      "Dinamarquês"
    ],
    "currency": "Danish krone",
    "currencyCode": "DKK",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 43094,
    "flagEmoji": "🇩🇰"
  },
  {
    "code": "dj",
    "name": "Djibouti",
    "nameEn": "Djibouti",
    "capital": "Djibouti",
    "region": "África",
    "subregion": "África Oriental",
    "languages": [
      "Árabe",
      "Francês"
    ],
    "currency": "Djiboutian franc",
    "currencyCode": "DJF",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 23200,
    "flagEmoji": "🇩🇯"
  },
  {
    "code": "dm",
    "name": "Dominica",
    "nameEn": "Dominica",
    "capital": "Roseau",
    "region": "Américas",
    "subregion": "Caribe",
    "languages": [
      "Inglês"
    ],
    "currency": "Eastern Caribbean dollar",
    "currencyCode": "XCD",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 751,
    "flagEmoji": "🇩🇲"
  },
  {
    "code": "eg",
    "name": "Egito",
    "nameEn": "Egypt",
    "capital": "Cairo",
    "region": "África",
    "subregion": "Norte da África",
    "languages": [
      "Árabe"
    ],
    "currency": "Egyptian pound",
    "currencyCode": "EGP",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 1002450,
    "flagEmoji": "🇪🇬"
  },
  {
    "code": "sv",
    "name": "El Salvador",
    "nameEn": "El Salvador",
    "capital": "San Salvador",
    "region": "Américas",
    "subregion": "América Central",
    "languages": [
      "Espanhol"
    ],
    "currency": "United States dollar",
    "currencyCode": "USD",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 21041,
    "flagEmoji": "🇸🇻"
  },
  {
    "code": "ae",
    "name": "Emirados Árabes Unidos",
    "nameEn": "United Arab Emirates",
    "capital": "Abu Dhabi",
    "region": "Ásia",
    "subregion": "Ásia Ocidental",
    "languages": [
      "Árabe"
    ],
    "currency": "United Arab Emirates dirham",
    "currencyCode": "AED",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 83600,
    "flagEmoji": "🇦🇪"
  },
  {
    "code": "ec",
    "name": "Equador",
    "nameEn": "Ecuador",
    "capital": "Quito",
    "region": "Américas",
    "subregion": "América do Sul",
    "languages": [
      "Espanhol"
    ],
    "currency": "United States dollar",
    "currencyCode": "USD",
    "hemisphere": "Sul",
    "landlocked": false,
    "area": 276841,
    "flagEmoji": "🇪🇨"
  },
  {
    "code": "er",
    "name": "Eritreia",
    "nameEn": "Eritrea",
    "capital": "Asmara",
    "region": "África",
    "subregion": "África Oriental",
    "languages": [
      "Árabe",
      "Inglês",
      "Tigrinya"
    ],
    "currency": "Eritrean nakfa",
    "currencyCode": "ERN",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 117600,
    "flagEmoji": "🇪🇷"
  },
  {
    "code": "sk",
    "name": "Eslováquia",
    "nameEn": "Slovakia",
    "capital": "Bratislava",
    "region": "Europa",
    "subregion": "Europa Central",
    "languages": [
      "Eslovaco"
    ],
    "currency": "Euro",
    "currencyCode": "EUR",
    "hemisphere": "Norte",
    "landlocked": true,
    "area": 49037,
    "flagEmoji": "🇸🇰"
  },
  {
    "code": "si",
    "name": "Eslovénia",
    "nameEn": "Slovenia",
    "capital": "Ljubljana",
    "region": "Europa",
    "subregion": "Europa Central",
    "languages": [
      "Esloveno"
    ],
    "currency": "Euro",
    "currencyCode": "EUR",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 20273,
    "flagEmoji": "🇸🇮"
  },
  {
    "code": "es",
    "name": "Espanha",
    "nameEn": "Spain",
    "capital": "Madrid",
    "region": "Europa",
    "subregion": "Europa do Sul",
    "languages": [
      "Espanhol"
    ],
    "currency": "Euro",
    "currencyCode": "EUR",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 505992,
    "flagEmoji": "🇪🇸"
  },
  {
    "code": "us",
    "name": "Estados Unidos",
    "nameEn": "United States",
    "capital": "Washington D.C.",
    "region": "Américas",
    "subregion": "North America",
    "languages": [
      "Inglês"
    ],
    "currency": "United States dollar",
    "currencyCode": "USD",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 9372610,
    "flagEmoji": "🇺🇸"
  },
  {
    "code": "ee",
    "name": "Estónia",
    "nameEn": "Estonia",
    "capital": "Tallinn",
    "region": "Europa",
    "subregion": "Europa do Norte",
    "languages": [
      "Estoniano"
    ],
    "currency": "Euro",
    "currencyCode": "EUR",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 45227,
    "flagEmoji": "🇪🇪"
  },
  {
    "code": "et",
    "name": "Etiópia",
    "nameEn": "Ethiopia",
    "capital": "Addis Ababa",
    "region": "África",
    "subregion": "África Oriental",
    "languages": [
      "Amárico"
    ],
    "currency": "Ethiopian birr",
    "currencyCode": "ETB",
    "hemisphere": "Norte",
    "landlocked": true,
    "area": 1104300,
    "flagEmoji": "🇪🇹"
  },
  {
    "code": "fj",
    "name": "Fiji",
    "nameEn": "Fiji",
    "capital": "Suva",
    "region": "Oceania",
    "subregion": "Melanésia",
    "languages": [
      "Inglês",
      "Fijian",
      "Fiji Hindi"
    ],
    "currency": "Fijian dollar",
    "currencyCode": "FJD",
    "hemisphere": "Sul",
    "landlocked": false,
    "area": 18272,
    "flagEmoji": "🇫🇯"
  },
  {
    "code": "ph",
    "name": "Filipinas",
    "nameEn": "Philippines",
    "capital": "Manila",
    "region": "Ásia",
    "subregion": "Sudeste Asiático",
    "languages": [
      "Inglês",
      "Filipino"
    ],
    "currency": "Philippine peso",
    "currencyCode": "PHP",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 342353,
    "flagEmoji": "🇵🇭"
  },
  {
    "code": "fi",
    "name": "Finlândia",
    "nameEn": "Finland",
    "capital": "Helsinki",
    "region": "Europa",
    "subregion": "Europa do Norte",
    "languages": [
      "Finlandês",
      "Sueco"
    ],
    "currency": "Euro",
    "currencyCode": "EUR",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 338424,
    "flagEmoji": "🇫🇮"
  },
  {
    "code": "fr",
    "name": "França",
    "nameEn": "France",
    "capital": "Paris",
    "region": "Europa",
    "subregion": "Europa Ocidental",
    "languages": [
      "Francês"
    ],
    "currency": "Euro",
    "currencyCode": "EUR",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 551695,
    "flagEmoji": "🇫🇷"
  },
  {
    "code": "ga",
    "name": "Gabão",
    "nameEn": "Gabon",
    "capital": "Libreville",
    "region": "África",
    "subregion": "África Central",
    "languages": [
      "Francês"
    ],
    "currency": "Central African CFA franc",
    "currencyCode": "XAF",
    "hemisphere": "Sul",
    "landlocked": false,
    "area": 267668,
    "flagEmoji": "🇬🇦"
  },
  {
    "code": "gm",
    "name": "Gâmbia",
    "nameEn": "Gambia",
    "capital": "Banjul",
    "region": "África",
    "subregion": "África Ocidental",
    "languages": [
      "Inglês"
    ],
    "currency": "dalasi",
    "currencyCode": "GMD",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 10689,
    "flagEmoji": "🇬🇲"
  },
  {
    "code": "gh",
    "name": "Gana",
    "nameEn": "Ghana",
    "capital": "Accra",
    "region": "África",
    "subregion": "África Ocidental",
    "languages": [
      "Inglês"
    ],
    "currency": "Ghanaian cedi",
    "currencyCode": "GHS",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 238533,
    "flagEmoji": "🇬🇭"
  },
  {
    "code": "ge",
    "name": "Geórgia",
    "nameEn": "Georgia",
    "capital": "Tbilisi",
    "region": "Ásia",
    "subregion": "Ásia Ocidental",
    "languages": [
      "Georgiano"
    ],
    "currency": "lari",
    "currencyCode": "GEL",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 69700,
    "flagEmoji": "🇬🇪"
  },
  {
    "code": "gd",
    "name": "Granada",
    "nameEn": "Grenada",
    "capital": "St. George's",
    "region": "Américas",
    "subregion": "Caribe",
    "languages": [
      "Inglês"
    ],
    "currency": "Eastern Caribbean dollar",
    "currencyCode": "XCD",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 344,
    "flagEmoji": "🇬🇩"
  },
  {
    "code": "gr",
    "name": "Grécia",
    "nameEn": "Greece",
    "capital": "Athens",
    "region": "Europa",
    "subregion": "Europa do Sul",
    "languages": [
      "Grego"
    ],
    "currency": "Euro",
    "currencyCode": "EUR",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 131990,
    "flagEmoji": "🇬🇷"
  },
  {
    "code": "gt",
    "name": "Guatemala",
    "nameEn": "Guatemala",
    "capital": "Guatemala City",
    "region": "Américas",
    "subregion": "América Central",
    "languages": [
      "Espanhol"
    ],
    "currency": "Guatemalan quetzal",
    "currencyCode": "GTQ",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 108889,
    "flagEmoji": "🇬🇹"
  },
  {
    "code": "gy",
    "name": "Guiana",
    "nameEn": "Guyana",
    "capital": "Georgetown",
    "region": "Américas",
    "subregion": "América do Sul",
    "languages": [
      "Inglês"
    ],
    "currency": "Guyanese dollar",
    "currencyCode": "GYD",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 214969,
    "flagEmoji": "🇬🇾"
  },
  {
    "code": "gn",
    "name": "Guiné",
    "nameEn": "Guinea",
    "capital": "Conakry",
    "region": "África",
    "subregion": "África Ocidental",
    "languages": [
      "Francês"
    ],
    "currency": "Guinean franc",
    "currencyCode": "GNF",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 245857,
    "flagEmoji": "🇬🇳"
  },
  {
    "code": "gq",
    "name": "Guiné Equatorial",
    "nameEn": "Equatorial Guinea",
    "capital": "Malabo",
    "region": "África",
    "subregion": "África Central",
    "languages": [
      "Francês",
      "Português",
      "Espanhol"
    ],
    "currency": "Central African CFA franc",
    "currencyCode": "XAF",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 28051,
    "flagEmoji": "🇬🇶"
  },
  {
    "code": "gw",
    "name": "Guiné-Bissau",
    "nameEn": "Guinea-Bissau",
    "capital": "Bissau",
    "region": "África",
    "subregion": "África Ocidental",
    "languages": [
      "Português",
      "Upper Guinea Creole"
    ],
    "currency": "West African CFA franc",
    "currencyCode": "XOF",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 36125,
    "flagEmoji": "🇬🇼"
  },
  {
    "code": "ht",
    "name": "Haiti",
    "nameEn": "Haiti",
    "capital": "Port-au-Prince",
    "region": "Américas",
    "subregion": "Caribe",
    "languages": [
      "Francês",
      "Crioulo haitiano"
    ],
    "currency": "Haitian gourde",
    "currencyCode": "HTG",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 27750,
    "flagEmoji": "🇭🇹"
  },
  {
    "code": "nl",
    "name": "Holanda",
    "nameEn": "Netherlands",
    "capital": "Amsterdam",
    "region": "Europa",
    "subregion": "Europa Ocidental",
    "languages": [
      "Holandês"
    ],
    "currency": "Euro",
    "currencyCode": "EUR",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 41850,
    "flagEmoji": "🇳🇱"
  },
  {
    "code": "hn",
    "name": "Honduras",
    "nameEn": "Honduras",
    "capital": "Tegucigalpa",
    "region": "Américas",
    "subregion": "América Central",
    "languages": [
      "Espanhol"
    ],
    "currency": "Honduran lempira",
    "currencyCode": "HNL",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 112492,
    "flagEmoji": "🇭🇳"
  },
  {
    "code": "hu",
    "name": "Hungria",
    "nameEn": "Hungary",
    "capital": "Budapest",
    "region": "Europa",
    "subregion": "Europa Central",
    "languages": [
      "Húngaro"
    ],
    "currency": "Hungarian forint",
    "currencyCode": "HUF",
    "hemisphere": "Norte",
    "landlocked": true,
    "area": 93028,
    "flagEmoji": "🇭🇺"
  },
  {
    "code": "ye",
    "name": "Iémen",
    "nameEn": "Yemen",
    "capital": "Sana'a",
    "region": "Ásia",
    "subregion": "Ásia Ocidental",
    "languages": [
      "Árabe"
    ],
    "currency": "Yemeni rial",
    "currencyCode": "YER",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 527968,
    "flagEmoji": "🇾🇪"
  },
  {
    "code": "mh",
    "name": "Ilhas Marshall",
    "nameEn": "Marshall Islands",
    "capital": "Majuro",
    "region": "Oceania",
    "subregion": "Micronésia",
    "languages": [
      "Inglês",
      "Marshallese"
    ],
    "currency": "United States dollar",
    "currencyCode": "USD",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 181,
    "flagEmoji": "🇲🇭"
  },
  {
    "code": "sb",
    "name": "Ilhas Salomão",
    "nameEn": "Solomon Islands",
    "capital": "Honiara",
    "region": "Oceania",
    "subregion": "Melanésia",
    "languages": [
      "Inglês"
    ],
    "currency": "Solomon Islands dollar",
    "currencyCode": "SBD",
    "hemisphere": "Sul",
    "landlocked": false,
    "area": 28896,
    "flagEmoji": "🇸🇧"
  },
  {
    "code": "in",
    "name": "Índia",
    "nameEn": "India",
    "capital": "New Delhi",
    "region": "Ásia",
    "subregion": "Ásia do Sul",
    "languages": [
      "Inglês",
      "Hindi",
      "Tamil"
    ],
    "currency": "Indian rupee",
    "currencyCode": "INR",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 3287590,
    "flagEmoji": "🇮🇳"
  },
  {
    "code": "id",
    "name": "Indonésia",
    "nameEn": "Indonesia",
    "capital": "Jakarta",
    "region": "Ásia",
    "subregion": "Sudeste Asiático",
    "languages": [
      "Indonésio"
    ],
    "currency": "Indonesian rupiah",
    "currencyCode": "IDR",
    "hemisphere": "Sul",
    "landlocked": false,
    "area": 1904569,
    "flagEmoji": "🇮🇩"
  },
  {
    "code": "ir",
    "name": "Irão",
    "nameEn": "Iran",
    "capital": "Tehran",
    "region": "Ásia",
    "subregion": "Ásia do Sul",
    "languages": [
      "Persian (Farsi)"
    ],
    "currency": "Iranian rial",
    "currencyCode": "IRR",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 1648195,
    "flagEmoji": "🇮🇷"
  },
  {
    "code": "iq",
    "name": "Iraque",
    "nameEn": "Iraq",
    "capital": "Baghdad",
    "region": "Ásia",
    "subregion": "Ásia Ocidental",
    "languages": [
      "Árabe",
      "Aramaic",
      "Sorani"
    ],
    "currency": "Iraqi dinar",
    "currencyCode": "IQD",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 438317,
    "flagEmoji": "🇮🇶"
  },
  {
    "code": "ie",
    "name": "Irlanda",
    "nameEn": "Ireland",
    "capital": "Dublin",
    "region": "Europa",
    "subregion": "Europa do Norte",
    "languages": [
      "Inglês",
      "Irlandês"
    ],
    "currency": "Euro",
    "currencyCode": "EUR",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 70273,
    "flagEmoji": "🇮🇪"
  },
  {
    "code": "is",
    "name": "Islândia",
    "nameEn": "Iceland",
    "capital": "Reykjavik",
    "region": "Europa",
    "subregion": "Europa do Norte",
    "languages": [
      "Islandês"
    ],
    "currency": "Icelandic króna",
    "currencyCode": "ISK",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 103000,
    "flagEmoji": "🇮🇸"
  },
  {
    "code": "il",
    "name": "Israel",
    "nameEn": "Israel",
    "capital": "Jerusalem",
    "region": "Ásia",
    "subregion": "Ásia Ocidental",
    "languages": [
      "Árabe",
      "Hebraico"
    ],
    "currency": "Israeli new shekel",
    "currencyCode": "ILS",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 20770,
    "flagEmoji": "🇮🇱"
  },
  {
    "code": "it",
    "name": "Itália",
    "nameEn": "Italy",
    "capital": "Rome",
    "region": "Europa",
    "subregion": "Europa do Sul",
    "languages": [
      "Italiano"
    ],
    "currency": "Euro",
    "currencyCode": "EUR",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 301336,
    "flagEmoji": "🇮🇹"
  },
  {
    "code": "jm",
    "name": "Jamaica",
    "nameEn": "Jamaica",
    "capital": "Kingston",
    "region": "Américas",
    "subregion": "Caribe",
    "languages": [
      "Inglês",
      "Jamaican Patois"
    ],
    "currency": "Jamaican dollar",
    "currencyCode": "JMD",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 10991,
    "flagEmoji": "🇯🇲"
  },
  {
    "code": "jp",
    "name": "Japão",
    "nameEn": "Japan",
    "capital": "Tokyo",
    "region": "Ásia",
    "subregion": "Ásia Oriental",
    "languages": [
      "Japonês"
    ],
    "currency": "Japanese yen",
    "currencyCode": "JPY",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 377930,
    "flagEmoji": "🇯🇵"
  },
  {
    "code": "jo",
    "name": "Jordânia",
    "nameEn": "Jordan",
    "capital": "Amman",
    "region": "Ásia",
    "subregion": "Ásia Ocidental",
    "languages": [
      "Árabe"
    ],
    "currency": "Jordanian dinar",
    "currencyCode": "JOD",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 89342,
    "flagEmoji": "🇯🇴"
  },
  {
    "code": "ki",
    "name": "Kiribati",
    "nameEn": "Kiribati",
    "capital": "South Tarawa",
    "region": "Oceania",
    "subregion": "Micronésia",
    "languages": [
      "Inglês",
      "Gilbertese"
    ],
    "currency": "Australian dollar",
    "currencyCode": "AUD",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 811,
    "flagEmoji": "🇰🇮"
  },
  {
    "code": "kw",
    "name": "Kuwait",
    "nameEn": "Kuwait",
    "capital": "Kuwait City",
    "region": "Ásia",
    "subregion": "Ásia Ocidental",
    "languages": [
      "Árabe"
    ],
    "currency": "Kuwaiti dinar",
    "currencyCode": "KWD",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 17818,
    "flagEmoji": "🇰🇼"
  },
  {
    "code": "la",
    "name": "Laos",
    "nameEn": "Laos",
    "capital": "Vientiane",
    "region": "Ásia",
    "subregion": "Sudeste Asiático",
    "languages": [
      "Laosiano"
    ],
    "currency": "Lao kip",
    "currencyCode": "LAK",
    "hemisphere": "Norte",
    "landlocked": true,
    "area": 236800,
    "flagEmoji": "🇱🇦"
  },
  {
    "code": "ls",
    "name": "Lesoto",
    "nameEn": "Lesotho",
    "capital": "Maseru",
    "region": "África",
    "subregion": "África Austral",
    "languages": [
      "Inglês",
      "Soto"
    ],
    "currency": "Lesotho loti",
    "currencyCode": "LSL",
    "hemisphere": "Sul",
    "landlocked": true,
    "area": 30355,
    "flagEmoji": "🇱🇸"
  },
  {
    "code": "lv",
    "name": "Letónia",
    "nameEn": "Latvia",
    "capital": "Riga",
    "region": "Europa",
    "subregion": "Europa do Norte",
    "languages": [
      "Letão"
    ],
    "currency": "Euro",
    "currencyCode": "EUR",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 64559,
    "flagEmoji": "🇱🇻"
  },
  {
    "code": "lb",
    "name": "Líbano",
    "nameEn": "Lebanon",
    "capital": "Beirut",
    "region": "Ásia",
    "subregion": "Ásia Ocidental",
    "languages": [
      "Árabe",
      "Francês"
    ],
    "currency": "Lebanese pound",
    "currencyCode": "LBP",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 10452,
    "flagEmoji": "🇱🇧"
  },
  {
    "code": "lr",
    "name": "Libéria",
    "nameEn": "Liberia",
    "capital": "Monrovia",
    "region": "África",
    "subregion": "África Ocidental",
    "languages": [
      "Inglês"
    ],
    "currency": "Liberian dollar",
    "currencyCode": "LRD",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 111369,
    "flagEmoji": "🇱🇷"
  },
  {
    "code": "ly",
    "name": "Líbia",
    "nameEn": "Libya",
    "capital": "Tripoli",
    "region": "África",
    "subregion": "Norte da África",
    "languages": [
      "Árabe"
    ],
    "currency": "Libyan dinar",
    "currencyCode": "LYD",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 1759540,
    "flagEmoji": "🇱🇾"
  },
  {
    "code": "li",
    "name": "Liechtenstein",
    "nameEn": "Liechtenstein",
    "capital": "Vaduz",
    "region": "Europa",
    "subregion": "Europa Ocidental",
    "languages": [
      "Alemão"
    ],
    "currency": "Swiss franc",
    "currencyCode": "CHF",
    "hemisphere": "Norte",
    "landlocked": true,
    "area": 160,
    "flagEmoji": "🇱🇮"
  },
  {
    "code": "lt",
    "name": "Lituânia",
    "nameEn": "Lithuania",
    "capital": "Vilnius",
    "region": "Europa",
    "subregion": "Europa do Norte",
    "languages": [
      "Lituano"
    ],
    "currency": "Euro",
    "currencyCode": "EUR",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 65300,
    "flagEmoji": "🇱🇹"
  },
  {
    "code": "lu",
    "name": "Luxemburgo",
    "nameEn": "Luxembourg",
    "capital": "Luxembourg",
    "region": "Europa",
    "subregion": "Europa Ocidental",
    "languages": [
      "Alemão",
      "Francês",
      "Luxemburguês"
    ],
    "currency": "Euro",
    "currencyCode": "EUR",
    "hemisphere": "Norte",
    "landlocked": true,
    "area": 2586,
    "flagEmoji": "🇱🇺"
  },
  {
    "code": "mk",
    "name": "Macedónia do Norte",
    "nameEn": "North Macedonia",
    "capital": "Skopje",
    "region": "Europa",
    "subregion": "Sudeste Europeu",
    "languages": [
      "Macedônio"
    ],
    "currency": "denar",
    "currencyCode": "MKD",
    "hemisphere": "Norte",
    "landlocked": true,
    "area": 25713,
    "flagEmoji": "🇲🇰"
  },
  {
    "code": "mg",
    "name": "Madagáscar",
    "nameEn": "Madagascar",
    "capital": "Antananarivo",
    "region": "África",
    "subregion": "África Oriental",
    "languages": [
      "Francês",
      "Malgaxe"
    ],
    "currency": "Malagasy ariary",
    "currencyCode": "MGA",
    "hemisphere": "Sul",
    "landlocked": false,
    "area": 587041,
    "flagEmoji": "🇲🇬"
  },
  {
    "code": "my",
    "name": "Malásia",
    "nameEn": "Malaysia",
    "capital": "Kuala Lumpur",
    "region": "Ásia",
    "subregion": "Sudeste Asiático",
    "languages": [
      "Inglês",
      "Malaio"
    ],
    "currency": "Malaysian ringgit",
    "currencyCode": "MYR",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 330803,
    "flagEmoji": "🇲🇾"
  },
  {
    "code": "mw",
    "name": "Malawi",
    "nameEn": "Malawi",
    "capital": "Lilongwe",
    "region": "África",
    "subregion": "África Oriental",
    "languages": [
      "Inglês",
      "Chewa"
    ],
    "currency": "Malawian kwacha",
    "currencyCode": "MWK",
    "hemisphere": "Sul",
    "landlocked": true,
    "area": 118484,
    "flagEmoji": "🇲🇼"
  },
  {
    "code": "mv",
    "name": "Maldivas",
    "nameEn": "Maldives",
    "capital": "Malé",
    "region": "Ásia",
    "subregion": "Ásia do Sul",
    "languages": [
      "Maldivian"
    ],
    "currency": "Maldivian rufiyaa",
    "currencyCode": "MVR",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 300,
    "flagEmoji": "🇲🇻"
  },
  {
    "code": "ml",
    "name": "Mali",
    "nameEn": "Mali",
    "capital": "Bamako",
    "region": "África",
    "subregion": "África Ocidental",
    "languages": [
      "Francês"
    ],
    "currency": "West African CFA franc",
    "currencyCode": "XOF",
    "hemisphere": "Norte",
    "landlocked": true,
    "area": 1240192,
    "flagEmoji": "🇲🇱"
  },
  {
    "code": "mt",
    "name": "Malta",
    "nameEn": "Malta",
    "capital": "Valletta",
    "region": "Europa",
    "subregion": "Europa do Sul",
    "languages": [
      "Inglês",
      "Maltês"
    ],
    "currency": "Euro",
    "currencyCode": "EUR",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 316,
    "flagEmoji": "🇲🇹"
  },
  {
    "code": "ma",
    "name": "Marrocos",
    "nameEn": "Morocco",
    "capital": "Rabat",
    "region": "África",
    "subregion": "Norte da África",
    "languages": [
      "Árabe",
      "Berber"
    ],
    "currency": "Moroccan dirham",
    "currencyCode": "MAD",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 446550,
    "flagEmoji": "🇲🇦"
  },
  {
    "code": "mu",
    "name": "Maurício",
    "nameEn": "Mauritius",
    "capital": "Port Louis",
    "region": "África",
    "subregion": "África Oriental",
    "languages": [
      "Inglês",
      "Francês",
      "Mauritian Creole"
    ],
    "currency": "Mauritian rupee",
    "currencyCode": "MUR",
    "hemisphere": "Sul",
    "landlocked": false,
    "area": 2040,
    "flagEmoji": "🇲🇺"
  },
  {
    "code": "mr",
    "name": "Mauritânia",
    "nameEn": "Mauritania",
    "capital": "Nouakchott",
    "region": "África",
    "subregion": "África Ocidental",
    "languages": [
      "Árabe"
    ],
    "currency": "Mauritanian ouguiya",
    "currencyCode": "MRU",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 1030700,
    "flagEmoji": "🇲🇷"
  },
  {
    "code": "mx",
    "name": "México",
    "nameEn": "Mexico",
    "capital": "Mexico City",
    "region": "Américas",
    "subregion": "North America",
    "languages": [
      "Espanhol"
    ],
    "currency": "Mexican peso",
    "currencyCode": "MXN",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 1964375,
    "flagEmoji": "🇲🇽"
  },
  {
    "code": "fm",
    "name": "Micronésia",
    "nameEn": "Micronesia",
    "capital": "Palikir",
    "region": "Oceania",
    "subregion": "Micronésia",
    "languages": [
      "Inglês"
    ],
    "currency": "",
    "currencyCode": "",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 702,
    "flagEmoji": "🇫🇲"
  },
  {
    "code": "mz",
    "name": "Moçambique",
    "nameEn": "Mozambique",
    "capital": "Maputo",
    "region": "África",
    "subregion": "África Oriental",
    "languages": [
      "Português"
    ],
    "currency": "Mozambican metical",
    "currencyCode": "MZN",
    "hemisphere": "Sul",
    "landlocked": false,
    "area": 801590,
    "flagEmoji": "🇲🇿"
  },
  {
    "code": "md",
    "name": "Moldávia",
    "nameEn": "Moldova",
    "capital": "Chișinău",
    "region": "Europa",
    "subregion": "Europa Oriental",
    "languages": [
      "Moldavian"
    ],
    "currency": "Moldovan leu",
    "currencyCode": "MDL",
    "hemisphere": "Norte",
    "landlocked": true,
    "area": 33846,
    "flagEmoji": "🇲🇩"
  },
  {
    "code": "mc",
    "name": "Mónaco",
    "nameEn": "Monaco",
    "capital": "Monaco",
    "region": "Europa",
    "subregion": "Europa Ocidental",
    "languages": [
      "Francês"
    ],
    "currency": "Euro",
    "currencyCode": "EUR",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 2,
    "flagEmoji": "🇲🇨"
  },
  {
    "code": "mn",
    "name": "Mongólia",
    "nameEn": "Mongolia",
    "capital": "Ulan Bator",
    "region": "Ásia",
    "subregion": "Ásia Oriental",
    "languages": [
      "Mongol"
    ],
    "currency": "Mongolian tögrög",
    "currencyCode": "MNT",
    "hemisphere": "Norte",
    "landlocked": true,
    "area": 1564110,
    "flagEmoji": "🇲🇳"
  },
  {
    "code": "me",
    "name": "Montenegro",
    "nameEn": "Montenegro",
    "capital": "Podgorica",
    "region": "Europa",
    "subregion": "Sudeste Europeu",
    "languages": [
      "Montenegrin"
    ],
    "currency": "Euro",
    "currencyCode": "EUR",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 13812,
    "flagEmoji": "🇲🇪"
  },
  {
    "code": "mm",
    "name": "Myanmar",
    "nameEn": "Myanmar",
    "capital": "Naypyidaw",
    "region": "Ásia",
    "subregion": "Sudeste Asiático",
    "languages": [
      "Birmanês"
    ],
    "currency": "Burmese kyat",
    "currencyCode": "MMK",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 676578,
    "flagEmoji": "🇲🇲"
  },
  {
    "code": "na",
    "name": "Namíbia",
    "nameEn": "Namibia",
    "capital": "Windhoek",
    "region": "África",
    "subregion": "África Austral",
    "languages": [
      "Africâner",
      "Alemão",
      "Inglês",
      "Herero",
      "Khoekhoe",
      "Kwangali",
      "Lozi",
      "Ndonga",
      "Tswana"
    ],
    "currency": "Namibian dollar",
    "currencyCode": "NAD",
    "hemisphere": "Sul",
    "landlocked": false,
    "area": 825615,
    "flagEmoji": "🇳🇦"
  },
  {
    "code": "nr",
    "name": "Nauru",
    "nameEn": "Nauru",
    "capital": "Yaren",
    "region": "Oceania",
    "subregion": "Micronésia",
    "languages": [
      "Inglês",
      "Nauru"
    ],
    "currency": "Australian dollar",
    "currencyCode": "AUD",
    "hemisphere": "Sul",
    "landlocked": false,
    "area": 21,
    "flagEmoji": "🇳🇷"
  },
  {
    "code": "np",
    "name": "Nepal",
    "nameEn": "Nepal",
    "capital": "Kathmandu",
    "region": "Ásia",
    "subregion": "Ásia do Sul",
    "languages": [
      "Nepalês"
    ],
    "currency": "Nepalese rupee",
    "currencyCode": "NPR",
    "hemisphere": "Norte",
    "landlocked": true,
    "area": 147181,
    "flagEmoji": "🇳🇵"
  },
  {
    "code": "ni",
    "name": "Nicarágua",
    "nameEn": "Nicaragua",
    "capital": "Managua",
    "region": "Américas",
    "subregion": "América Central",
    "languages": [
      "Espanhol"
    ],
    "currency": "Nicaraguan córdoba",
    "currencyCode": "NIO",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 130373,
    "flagEmoji": "🇳🇮"
  },
  {
    "code": "ne",
    "name": "Níger",
    "nameEn": "Niger",
    "capital": "Niamey",
    "region": "África",
    "subregion": "África Ocidental",
    "languages": [
      "Francês"
    ],
    "currency": "West African CFA franc",
    "currencyCode": "XOF",
    "hemisphere": "Norte",
    "landlocked": true,
    "area": 1267000,
    "flagEmoji": "🇳🇪"
  },
  {
    "code": "ng",
    "name": "Nigéria",
    "nameEn": "Nigeria",
    "capital": "Abuja",
    "region": "África",
    "subregion": "África Ocidental",
    "languages": [
      "Inglês"
    ],
    "currency": "Nigerian naira",
    "currencyCode": "NGN",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 923768,
    "flagEmoji": "🇳🇬"
  },
  {
    "code": "no",
    "name": "Noruega",
    "nameEn": "Norway",
    "capital": "Oslo",
    "region": "Europa",
    "subregion": "Europa do Norte",
    "languages": [
      "Norueguês",
      "Norueguês",
      "Sami"
    ],
    "currency": "Norwegian krone",
    "currencyCode": "NOK",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 323802,
    "flagEmoji": "🇳🇴"
  },
  {
    "code": "nz",
    "name": "Nova Zelândia",
    "nameEn": "New Zealand",
    "capital": "Wellington",
    "region": "Oceania",
    "subregion": "Austrália e Nova Zelândia",
    "languages": [
      "Inglês",
      "Māori",
      "New Zealand Sign Language"
    ],
    "currency": "New Zealand dollar",
    "currencyCode": "NZD",
    "hemisphere": "Sul",
    "landlocked": false,
    "area": 270467,
    "flagEmoji": "🇳🇿"
  },
  {
    "code": "om",
    "name": "Omã",
    "nameEn": "Oman",
    "capital": "Muscat",
    "region": "Ásia",
    "subregion": "Ásia Ocidental",
    "languages": [
      "Árabe"
    ],
    "currency": "Omani rial",
    "currencyCode": "OMR",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 309500,
    "flagEmoji": "🇴🇲"
  },
  {
    "code": "pw",
    "name": "Palau",
    "nameEn": "Palau",
    "capital": "Ngerulmud",
    "region": "Oceania",
    "subregion": "Micronésia",
    "languages": [
      "Inglês",
      "Palauan"
    ],
    "currency": "United States dollar",
    "currencyCode": "USD",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 459,
    "flagEmoji": "🇵🇼"
  },
  {
    "code": "pa",
    "name": "Panamá",
    "nameEn": "Panama",
    "capital": "Panama City",
    "region": "Américas",
    "subregion": "América Central",
    "languages": [
      "Espanhol"
    ],
    "currency": "Panamanian balboa",
    "currencyCode": "PAB",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 75417,
    "flagEmoji": "🇵🇦"
  },
  {
    "code": "pg",
    "name": "Papua Nova Guiné",
    "nameEn": "Papua New Guinea",
    "capital": "Port Moresby",
    "region": "Oceania",
    "subregion": "Melanésia",
    "languages": [
      "Inglês",
      "Hiri Motu",
      "Tok Pisin"
    ],
    "currency": "Papua New Guinean kina",
    "currencyCode": "PGK",
    "hemisphere": "Sul",
    "landlocked": false,
    "area": 462840,
    "flagEmoji": "🇵🇬"
  },
  {
    "code": "pk",
    "name": "Paquistão",
    "nameEn": "Pakistan",
    "capital": "Islamabad",
    "region": "Ásia",
    "subregion": "Ásia do Sul",
    "languages": [
      "Inglês",
      "Urdu"
    ],
    "currency": "Pakistani rupee",
    "currencyCode": "PKR",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 881912,
    "flagEmoji": "🇵🇰"
  },
  {
    "code": "py",
    "name": "Paraguai",
    "nameEn": "Paraguay",
    "capital": "Asunción",
    "region": "Américas",
    "subregion": "América do Sul",
    "languages": [
      "Guaraní",
      "Espanhol"
    ],
    "currency": "Paraguayan guaraní",
    "currencyCode": "PYG",
    "hemisphere": "Sul",
    "landlocked": true,
    "area": 406752,
    "flagEmoji": "🇵🇾"
  },
  {
    "code": "pe",
    "name": "Perú",
    "nameEn": "Peru",
    "capital": "Lima",
    "region": "Américas",
    "subregion": "América do Sul",
    "languages": [
      "Aimará",
      "Quéchua",
      "Espanhol"
    ],
    "currency": "Peruvian sol",
    "currencyCode": "PEN",
    "hemisphere": "Sul",
    "landlocked": false,
    "area": 1285216,
    "flagEmoji": "🇵🇪"
  },
  {
    "code": "pl",
    "name": "Polónia",
    "nameEn": "Poland",
    "capital": "Warsaw",
    "region": "Europa",
    "subregion": "Europa Central",
    "languages": [
      "Polonês"
    ],
    "currency": "Polish złoty",
    "currencyCode": "PLN",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 312679,
    "flagEmoji": "🇵🇱"
  },
  {
    "code": "pt",
    "name": "Portugal",
    "nameEn": "Portugal",
    "capital": "Lisbon",
    "region": "Europa",
    "subregion": "Europa do Sul",
    "languages": [
      "Português"
    ],
    "currency": "Euro",
    "currencyCode": "EUR",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 92090,
    "flagEmoji": "🇵🇹"
  },
  {
    "code": "ke",
    "name": "Quénia",
    "nameEn": "Kenya",
    "capital": "Nairobi",
    "region": "África",
    "subregion": "África Oriental",
    "languages": [
      "Inglês",
      "Suaíli"
    ],
    "currency": "Kenyan shilling",
    "currencyCode": "KES",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 580367,
    "flagEmoji": "🇰🇪"
  },
  {
    "code": "kg",
    "name": "Quirguistão",
    "nameEn": "Kyrgyzstan",
    "capital": "Bishkek",
    "region": "Ásia",
    "subregion": "Ásia Central",
    "languages": [
      "Kyrgyz",
      "Russo"
    ],
    "currency": "Kyrgyzstani som",
    "currencyCode": "KGS",
    "hemisphere": "Norte",
    "landlocked": true,
    "area": 199951,
    "flagEmoji": "🇰🇬"
  },
  {
    "code": "gb",
    "name": "Reino Unido",
    "nameEn": "United Kingdom",
    "capital": "London",
    "region": "Europa",
    "subregion": "Europa do Norte",
    "languages": [
      "Inglês"
    ],
    "currency": "British pound",
    "currencyCode": "GBP",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 242900,
    "flagEmoji": "🇬🇧"
  },
  {
    "code": "cf",
    "name": "República Centro-Africana",
    "nameEn": "Central African Republic",
    "capital": "Bangui",
    "region": "África",
    "subregion": "África Central",
    "languages": [
      "Francês",
      "Sango"
    ],
    "currency": "Central African CFA franc",
    "currencyCode": "XAF",
    "hemisphere": "Norte",
    "landlocked": true,
    "area": 622984,
    "flagEmoji": "🇨🇫"
  },
  {
    "code": "cd",
    "name": "República Democrática do Congo",
    "nameEn": "DR Congo",
    "capital": "Kinshasa",
    "region": "África",
    "subregion": "África Central",
    "languages": [
      "Francês",
      "Kikongo",
      "Lingala",
      "Tshiluba",
      "Suaíli"
    ],
    "currency": "Congolese franc",
    "currencyCode": "CDF",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 2344858,
    "flagEmoji": "🇨🇩"
  },
  {
    "code": "do",
    "name": "República Dominicana",
    "nameEn": "Dominican Republic",
    "capital": "Santo Domingo",
    "region": "Américas",
    "subregion": "Caribe",
    "languages": [
      "Espanhol"
    ],
    "currency": "Dominican peso",
    "currencyCode": "DOP",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 48671,
    "flagEmoji": "🇩🇴"
  },
  {
    "code": "ro",
    "name": "Roménia",
    "nameEn": "Romania",
    "capital": "Bucharest",
    "region": "Europa",
    "subregion": "Sudeste Europeu",
    "languages": [
      "Romeno"
    ],
    "currency": "Romanian leu",
    "currencyCode": "RON",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 238391,
    "flagEmoji": "🇷🇴"
  },
  {
    "code": "rw",
    "name": "Ruanda",
    "nameEn": "Rwanda",
    "capital": "Kigali",
    "region": "África",
    "subregion": "África Oriental",
    "languages": [
      "Inglês",
      "Francês",
      "Quiniaruanda"
    ],
    "currency": "Rwandan franc",
    "currencyCode": "RWF",
    "hemisphere": "Sul",
    "landlocked": true,
    "area": 26338,
    "flagEmoji": "🇷🇼"
  },
  {
    "code": "ru",
    "name": "Rússia",
    "nameEn": "Russia",
    "capital": "Moscow",
    "region": "Europa",
    "subregion": "Europa Oriental",
    "languages": [
      "Russo"
    ],
    "currency": "Russian ruble",
    "currencyCode": "RUB",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 17098242,
    "flagEmoji": "🇷🇺"
  },
  {
    "code": "ws",
    "name": "Samoa",
    "nameEn": "Samoa",
    "capital": "Apia",
    "region": "Oceania",
    "subregion": "Polinésia",
    "languages": [
      "Inglês",
      "Samoan"
    ],
    "currency": "Samoan tālā",
    "currencyCode": "WST",
    "hemisphere": "Sul",
    "landlocked": false,
    "area": 2842,
    "flagEmoji": "🇼🇸"
  },
  {
    "code": "sm",
    "name": "San Marino",
    "nameEn": "San Marino",
    "capital": "City of San Marino",
    "region": "Europa",
    "subregion": "Europa do Sul",
    "languages": [
      "Italiano"
    ],
    "currency": "Euro",
    "currencyCode": "EUR",
    "hemisphere": "Norte",
    "landlocked": true,
    "area": 61,
    "flagEmoji": "🇸🇲"
  },
  {
    "code": "lc",
    "name": "Santa Lúcia",
    "nameEn": "Saint Lucia",
    "capital": "Castries",
    "region": "Américas",
    "subregion": "Caribe",
    "languages": [
      "Inglês"
    ],
    "currency": "Eastern Caribbean dollar",
    "currencyCode": "XCD",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 616,
    "flagEmoji": "🇱🇨"
  },
  {
    "code": "kn",
    "name": "São Cristóvão e Nevis",
    "nameEn": "Saint Kitts and Nevis",
    "capital": "Basseterre",
    "region": "Américas",
    "subregion": "Caribe",
    "languages": [
      "Inglês"
    ],
    "currency": "Eastern Caribbean dollar",
    "currencyCode": "XCD",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 261,
    "flagEmoji": "🇰🇳"
  },
  {
    "code": "st",
    "name": "São Tomé e Príncipe",
    "nameEn": "São Tomé and Príncipe",
    "capital": "São Tomé",
    "region": "África",
    "subregion": "África Central",
    "languages": [
      "Português"
    ],
    "currency": "São Tomé and Príncipe dobra",
    "currencyCode": "STN",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 964,
    "flagEmoji": "🇸🇹"
  },
  {
    "code": "vc",
    "name": "São Vincente e Granadinas",
    "nameEn": "Saint Vincent and the Grenadines",
    "capital": "Kingstown",
    "region": "Américas",
    "subregion": "Caribe",
    "languages": [
      "Inglês"
    ],
    "currency": "Eastern Caribbean dollar",
    "currencyCode": "XCD",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 389,
    "flagEmoji": "🇻🇨"
  },
  {
    "code": "sc",
    "name": "Seicheles",
    "nameEn": "Seychelles",
    "capital": "Victoria",
    "region": "África",
    "subregion": "África Oriental",
    "languages": [
      "Seychellois Creole",
      "Inglês",
      "Francês"
    ],
    "currency": "Seychellois rupee",
    "currencyCode": "SCR",
    "hemisphere": "Sul",
    "landlocked": false,
    "area": 452,
    "flagEmoji": "🇸🇨"
  },
  {
    "code": "sn",
    "name": "Senegal",
    "nameEn": "Senegal",
    "capital": "Dakar",
    "region": "África",
    "subregion": "África Ocidental",
    "languages": [
      "Francês"
    ],
    "currency": "West African CFA franc",
    "currencyCode": "XOF",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 196722,
    "flagEmoji": "🇸🇳"
  },
  {
    "code": "sl",
    "name": "Serra Leoa",
    "nameEn": "Sierra Leone",
    "capital": "Freetown",
    "region": "África",
    "subregion": "África Ocidental",
    "languages": [
      "Inglês"
    ],
    "currency": "Sierra Leonean leone",
    "currencyCode": "SLL",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 71740,
    "flagEmoji": "🇸🇱"
  },
  {
    "code": "rs",
    "name": "Sérvia",
    "nameEn": "Serbia",
    "capital": "Belgrade",
    "region": "Europa",
    "subregion": "Sudeste Europeu",
    "languages": [
      "Sérvio"
    ],
    "currency": "Serbian dinar",
    "currencyCode": "RSD",
    "hemisphere": "Norte",
    "landlocked": true,
    "area": 88361,
    "flagEmoji": "🇷🇸"
  },
  {
    "code": "sg",
    "name": "Singapura",
    "nameEn": "Singapore",
    "capital": "Singapore",
    "region": "Ásia",
    "subregion": "Sudeste Asiático",
    "languages": [
      "Inglês",
      "Malaio",
      "Tamil",
      "Chinês"
    ],
    "currency": "Singapore dollar",
    "currencyCode": "SGD",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 710,
    "flagEmoji": "🇸🇬"
  },
  {
    "code": "sy",
    "name": "Síria",
    "nameEn": "Syria",
    "capital": "Damascus",
    "region": "Ásia",
    "subregion": "Ásia Ocidental",
    "languages": [
      "Árabe"
    ],
    "currency": "Syrian pound",
    "currencyCode": "SYP",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 185180,
    "flagEmoji": "🇸🇾"
  },
  {
    "code": "so",
    "name": "Somália",
    "nameEn": "Somalia",
    "capital": "Mogadishu",
    "region": "África",
    "subregion": "África Oriental",
    "languages": [
      "Árabe",
      "Somali"
    ],
    "currency": "Somali shilling",
    "currencyCode": "SOS",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 637657,
    "flagEmoji": "🇸🇴"
  },
  {
    "code": "lk",
    "name": "Sri Lanka",
    "nameEn": "Sri Lanka",
    "capital": "Colombo",
    "region": "Ásia",
    "subregion": "Ásia do Sul",
    "languages": [
      "Cingalês",
      "Tamil"
    ],
    "currency": "Sri Lankan rupee",
    "currencyCode": "LKR",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 65610,
    "flagEmoji": "🇱🇰"
  },
  {
    "code": "sz",
    "name": "Suazilândia",
    "nameEn": "Eswatini",
    "capital": "Lobamba",
    "region": "África",
    "subregion": "África Austral",
    "languages": [
      "Inglês",
      "Swazi"
    ],
    "currency": "Swazi lilangeni",
    "currencyCode": "SZL",
    "hemisphere": "Sul",
    "landlocked": true,
    "area": 17364,
    "flagEmoji": "🇸🇿"
  },
  {
    "code": "sd",
    "name": "Sudão",
    "nameEn": "Sudan",
    "capital": "Khartoum",
    "region": "África",
    "subregion": "Norte da África",
    "languages": [
      "Árabe",
      "Inglês"
    ],
    "currency": "Sudanese pound",
    "currencyCode": "SDG",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 1886068,
    "flagEmoji": "🇸🇩"
  },
  {
    "code": "ss",
    "name": "Sudão do Sul",
    "nameEn": "South Sudan",
    "capital": "Juba",
    "region": "África",
    "subregion": "África Central",
    "languages": [
      "Inglês"
    ],
    "currency": "South Sudanese pound",
    "currencyCode": "SSP",
    "hemisphere": "Norte",
    "landlocked": true,
    "area": 619745,
    "flagEmoji": "🇸🇸"
  },
  {
    "code": "se",
    "name": "Suécia",
    "nameEn": "Sweden",
    "capital": "Stockholm",
    "region": "Europa",
    "subregion": "Europa do Norte",
    "languages": [
      "Sueco"
    ],
    "currency": "Swedish krona",
    "currencyCode": "SEK",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 450295,
    "flagEmoji": "🇸🇪"
  },
  {
    "code": "ch",
    "name": "Suíça",
    "nameEn": "Switzerland",
    "capital": "Bern",
    "region": "Europa",
    "subregion": "Europa Ocidental",
    "languages": [
      "Francês",
      "Swiss German",
      "Italiano",
      "Romansh"
    ],
    "currency": "Swiss franc",
    "currencyCode": "CHF",
    "hemisphere": "Norte",
    "landlocked": true,
    "area": 41284,
    "flagEmoji": "🇨🇭"
  },
  {
    "code": "sr",
    "name": "Suriname",
    "nameEn": "Suriname",
    "capital": "Paramaribo",
    "region": "Américas",
    "subregion": "América do Sul",
    "languages": [
      "Holandês"
    ],
    "currency": "Surinamese dollar",
    "currencyCode": "SRD",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 163820,
    "flagEmoji": "🇸🇷"
  },
  {
    "code": "th",
    "name": "Tailândia",
    "nameEn": "Thailand",
    "capital": "Bangkok",
    "region": "Ásia",
    "subregion": "Sudeste Asiático",
    "languages": [
      "Tailandês"
    ],
    "currency": "Thai baht",
    "currencyCode": "THB",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 513120,
    "flagEmoji": "🇹🇭"
  },
  {
    "code": "tj",
    "name": "Tajiquistão",
    "nameEn": "Tajikistan",
    "capital": "Dushanbe",
    "region": "Ásia",
    "subregion": "Ásia Central",
    "languages": [
      "Russo",
      "Tajik"
    ],
    "currency": "Tajikistani somoni",
    "currencyCode": "TJS",
    "hemisphere": "Norte",
    "landlocked": true,
    "area": 143100,
    "flagEmoji": "🇹🇯"
  },
  {
    "code": "tz",
    "name": "Tanzânia",
    "nameEn": "Tanzania",
    "capital": "Dodoma",
    "region": "África",
    "subregion": "África Oriental",
    "languages": [
      "Inglês",
      "Suaíli"
    ],
    "currency": "Tanzanian shilling",
    "currencyCode": "TZS",
    "hemisphere": "Sul",
    "landlocked": false,
    "area": 945087,
    "flagEmoji": "🇹🇿"
  },
  {
    "code": "tl",
    "name": "Timor-Leste",
    "nameEn": "Timor-Leste",
    "capital": "Dili",
    "region": "Ásia",
    "subregion": "Sudeste Asiático",
    "languages": [
      "Português",
      "Tetum"
    ],
    "currency": "United States dollar",
    "currencyCode": "USD",
    "hemisphere": "Sul",
    "landlocked": false,
    "area": 14874,
    "flagEmoji": "🇹🇱"
  },
  {
    "code": "tg",
    "name": "Togo",
    "nameEn": "Togo",
    "capital": "Lomé",
    "region": "África",
    "subregion": "África Ocidental",
    "languages": [
      "Francês"
    ],
    "currency": "West African CFA franc",
    "currencyCode": "XOF",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 56785,
    "flagEmoji": "🇹🇬"
  },
  {
    "code": "to",
    "name": "Tonga",
    "nameEn": "Tonga",
    "capital": "Nuku'alofa",
    "region": "Oceania",
    "subregion": "Polinésia",
    "languages": [
      "Inglês",
      "Tongan"
    ],
    "currency": "Tongan paʻanga",
    "currencyCode": "TOP",
    "hemisphere": "Sul",
    "landlocked": false,
    "area": 747,
    "flagEmoji": "🇹🇴"
  },
  {
    "code": "tt",
    "name": "Trinidade e Tobago",
    "nameEn": "Trinidad and Tobago",
    "capital": "Port of Spain",
    "region": "Américas",
    "subregion": "Caribe",
    "languages": [
      "Inglês"
    ],
    "currency": "Trinidad and Tobago dollar",
    "currencyCode": "TTD",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 5130,
    "flagEmoji": "🇹🇹"
  },
  {
    "code": "tn",
    "name": "Tunísia",
    "nameEn": "Tunisia",
    "capital": "Tunis",
    "region": "África",
    "subregion": "Norte da África",
    "languages": [
      "Árabe"
    ],
    "currency": "Tunisian dinar",
    "currencyCode": "TND",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 163610,
    "flagEmoji": "🇹🇳"
  },
  {
    "code": "tm",
    "name": "Turquemenistão",
    "nameEn": "Turkmenistan",
    "capital": "Ashgabat",
    "region": "Ásia",
    "subregion": "Ásia Central",
    "languages": [
      "Russo",
      "Turkmen"
    ],
    "currency": "Turkmenistan manat",
    "currencyCode": "TMT",
    "hemisphere": "Norte",
    "landlocked": true,
    "area": 488100,
    "flagEmoji": "🇹🇲"
  },
  {
    "code": "tr",
    "name": "Turquia",
    "nameEn": "Türkiye",
    "capital": "Ankara",
    "region": "Ásia",
    "subregion": "Ásia Ocidental",
    "languages": [
      "Turco"
    ],
    "currency": "Turkish lira",
    "currencyCode": "TRY",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 783562,
    "flagEmoji": "🇹🇷"
  },
  {
    "code": "tv",
    "name": "Tuvalu",
    "nameEn": "Tuvalu",
    "capital": "Funafuti",
    "region": "Oceania",
    "subregion": "Polinésia",
    "languages": [
      "Inglês",
      "Tuvaluan"
    ],
    "currency": "Australian dollar",
    "currencyCode": "AUD",
    "hemisphere": "Sul",
    "landlocked": false,
    "area": 26,
    "flagEmoji": "🇹🇻"
  },
  {
    "code": "ua",
    "name": "Ucrânia",
    "nameEn": "Ukraine",
    "capital": "Kyiv",
    "region": "Europa",
    "subregion": "Europa Oriental",
    "languages": [
      "Ucraniano"
    ],
    "currency": "Ukrainian hryvnia",
    "currencyCode": "UAH",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 603500,
    "flagEmoji": "🇺🇦"
  },
  {
    "code": "ug",
    "name": "Uganda",
    "nameEn": "Uganda",
    "capital": "Kampala",
    "region": "África",
    "subregion": "África Oriental",
    "languages": [
      "Inglês",
      "Suaíli"
    ],
    "currency": "Ugandan shilling",
    "currencyCode": "UGX",
    "hemisphere": "Norte",
    "landlocked": true,
    "area": 241550,
    "flagEmoji": "🇺🇬"
  },
  {
    "code": "uy",
    "name": "Uruguai",
    "nameEn": "Uruguay",
    "capital": "Montevideo",
    "region": "Américas",
    "subregion": "América do Sul",
    "languages": [
      "Espanhol"
    ],
    "currency": "Uruguayan peso",
    "currencyCode": "UYU",
    "hemisphere": "Sul",
    "landlocked": false,
    "area": 181034,
    "flagEmoji": "🇺🇾"
  },
  {
    "code": "uz",
    "name": "Uzbequistão",
    "nameEn": "Uzbekistan",
    "capital": "Tashkent",
    "region": "Ásia",
    "subregion": "Ásia Central",
    "languages": [
      "Russo",
      "Uzbeque"
    ],
    "currency": "Uzbekistani soʻm",
    "currencyCode": "UZS",
    "hemisphere": "Norte",
    "landlocked": true,
    "area": 447400,
    "flagEmoji": "🇺🇿"
  },
  {
    "code": "vu",
    "name": "Vanuatu",
    "nameEn": "Vanuatu",
    "capital": "Port Vila",
    "region": "Oceania",
    "subregion": "Melanésia",
    "languages": [
      "Bislama",
      "Inglês",
      "Francês"
    ],
    "currency": "Vanuatu vatu",
    "currencyCode": "VUV",
    "hemisphere": "Sul",
    "landlocked": false,
    "area": 12189,
    "flagEmoji": "🇻🇺"
  },
  {
    "code": "ve",
    "name": "Venezuela",
    "nameEn": "Venezuela",
    "capital": "Caracas",
    "region": "Américas",
    "subregion": "América do Sul",
    "languages": [
      "Espanhol"
    ],
    "currency": "Venezuelan bolívar soberano",
    "currencyCode": "VES",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 916445,
    "flagEmoji": "🇻🇪"
  },
  {
    "code": "vn",
    "name": "Vietname",
    "nameEn": "Vietnam",
    "capital": "Hanoi",
    "region": "Ásia",
    "subregion": "Sudeste Asiático",
    "languages": [
      "Vietnamita"
    ],
    "currency": "Vietnamese đồng",
    "currencyCode": "VND",
    "hemisphere": "Norte",
    "landlocked": false,
    "area": 331212,
    "flagEmoji": "🇻🇳"
  },
  {
    "code": "zm",
    "name": "Zâmbia",
    "nameEn": "Zambia",
    "capital": "Lusaka",
    "region": "África",
    "subregion": "África Oriental",
    "languages": [
      "Inglês"
    ],
    "currency": "Zambian kwacha",
    "currencyCode": "ZMW",
    "hemisphere": "Sul",
    "landlocked": true,
    "area": 752612,
    "flagEmoji": "🇿🇲"
  },
  {
    "code": "zw",
    "name": "Zimbabwe",
    "nameEn": "Zimbabwe",
    "capital": "Harare",
    "region": "África",
    "subregion": "África Oriental",
    "languages": [
      "Chibarwe",
      "Inglês",
      "Kalanga",
      "Khoisan",
      "Ndau",
      "Northern Ndebele",
      "Chewa",
      "Shona",
      "Soto",
      "Tonga",
      "Tswana",
      "Tsonga",
      "Venda",
      "Xhosa",
      "Zimbabwean Sign Language"
    ],
    "currency": "Botswana pula",
    "currencyCode": "BWP",
    "hemisphere": "Sul",
    "landlocked": true,
    "area": 390757,
    "flagEmoji": "🇿🇼"
  }
];
