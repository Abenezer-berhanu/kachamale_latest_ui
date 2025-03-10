const citiesList = [
  {
    city: "Addis Ababa",
    lat: "9.0300",
    lng: "38.7400",
    country: "Ethiopia",
    iso2: "ET",
    admin_name: "Ādīs Ābeba",
    capital: "primary",
    population: "3041002",
    population_proper: "3041002",
  },
  {
    city: "Ērer Sātā",
    lat: "9.5667",
    lng: "41.3833",
    country: "Ethiopia",
    iso2: "ET",
    admin_name: "Sumalē",
    capital: "",
    population: "649000",
    population_proper: "649000",
  },
  {
    city: "Shashemenē",
    lat: "7.2000",
    lng: "38.6000",
    country: "Ethiopia",
    iso2: "ET",
    admin_name: "Oromīya",
    capital: "",
    population: "408368",
    population_proper: "408368",
  },
  {
    city: "K’ebrī Dehar",
    lat: "6.7333",
    lng: "44.2667",
    country: "Ethiopia",
    iso2: "ET",
    admin_name: "Sumalē",
    capital: "",
    population: "363000",
    population_proper: "363000",
  },
  {
    city: "Nazrēt",
    lat: "8.5414",
    lng: "39.2689",
    country: "Ethiopia",
    iso2: "ET",
    admin_name: "Oromīya",
    capital: "",
    population: "324000",
    population_proper: "324000",
  },
  {
    city: "Mekele",
    lat: "13.4969",
    lng: "39.4769",
    country: "Ethiopia",
    iso2: "ET",
    admin_name: "Tigray",
    capital: "admin",
    population: "323700",
    population_proper: "323700",
  },
  {
    city: "Godē",
    lat: "5.9527",
    lng: "43.5516",
    country: "Ethiopia",
    iso2: "ET",
    admin_name: "Sumalē",
    capital: "",
    population: "320782",
    population_proper: "320782",
  },
  {
    city: "Āwasa",
    lat: "7.0500",
    lng: "38.4667",
    country: "Ethiopia",
    iso2: "ET",
    admin_name: "YeDebub Bihēroch Bihēreseboch na Hizboch",
    capital: "admin",
    population: "300100",
    population_proper: "300100",
  },
  {
    city: "Dire Dawa",
    lat: "9.6000",
    lng: "41.8667",
    country: "Ethiopia",
    iso2: "ET",
    admin_name: "Dirē Dawa",
    capital: "admin",
    population: "277000",
    population_proper: "277000",
  },
  {
    city: "Bahir Dar",
    lat: "11.6000",
    lng: "37.3833",
    country: "Ethiopia",
    iso2: "ET",
    admin_name: "Āmara",
    capital: "admin",
    population: "243300",
    population_proper: "243300",
  },
  {
    city: "Sodo",
    lat: "6.8550",
    lng: "37.7808",
    country: "Ethiopia",
    iso2: "ET",
    admin_name: "YeDebub Bihēroch Bihēreseboch na Hizboch",
    capital: "",
    population: "213467",
    population_proper: "213467",
  },
  {
    city: "Ārba Minch’",
    lat: "6.0333",
    lng: "37.5500",
    country: "Ethiopia",
    iso2: "ET",
    admin_name: "YeDebub Bihēroch Bihēreseboch na Hizboch",
    capital: "",
    population: "192043",
    population_proper: "192043",
  },
  {
    city: "Desē",
    lat: "11.1333",
    lng: "39.6333",
    country: "Ethiopia",
    iso2: "ET",
    admin_name: "Āmara",
    capital: "",
    population: "187900",
    population_proper: "187900",
  },
  {
    city: "Hosa’ina",
    lat: "7.5500",
    lng: "37.8500",
    country: "Ethiopia",
    iso2: "ET",
    admin_name: "YeDebub Bihēroch Bihēreseboch na Hizboch",
    capital: "",
    population: "179761",
    population_proper: "179761",
  },
  {
    city: "K’ebrī Beyah",
    lat: "9.0833",
    lng: "43.0833",
    country: "Ethiopia",
    iso2: "ET",
    admin_name: "Sumalē",
    capital: "",
    population: "165518",
    population_proper: "165518",
  },
  {
    city: "Jijiga",
    lat: "9.3500",
    lng: "42.8000",
    country: "Ethiopia",
    iso2: "ET",
    admin_name: "Sumalē",
    capital: "admin",
    population: "159300",
    population_proper: "159300",
  },
  {
    city: "Dīla",
    lat: "6.4083",
    lng: "38.3083",
    country: "Ethiopia",
    iso2: "ET",
    admin_name: "YeDebub Bihēroch Bihēreseboch na Hizboch",
    capital: "",
    population: "151682",
    population_proper: "151682",
  },
  {
    city: "Nek’emtē",
    lat: "9.0833",
    lng: "36.5500",
    country: "Ethiopia",
    iso2: "ET",
    admin_name: "Oromīya",
    capital: "",
    population: "148613",
    population_proper: "148613",
  },
  {
    city: "Debre Birhan",
    lat: "9.6833",
    lng: "39.5333",
    country: "Ethiopia",
    iso2: "ET",
    admin_name: "Āmara",
    capital: "",
    population: "139724",
    population_proper: "139724",
  },
  {
    city: "Debre Mark’os",
    lat: "10.3333",
    lng: "37.7167",
    country: "Ethiopia",
    iso2: "ET",
    admin_name: "Āmara",
    capital: "",
    population: "133810",
    population_proper: "133810",
  },
  {
    city: "Ferfer",
    lat: "5.0833",
    lng: "45.0833",
    country: "Ethiopia",
    iso2: "ET",
    admin_name: "Sumalē",
    capital: "",
    population: "133521",
    population_proper: "133521",
  },
  {
    city: "Āwarē",
    lat: "8.2667",
    lng: "44.1500",
    country: "Ethiopia",
    iso2: "ET",
    admin_name: "Sumalē",
    capital: "",
    population: "132149",
    population_proper: "132149",
  },
  {
    city: "Harar",
    lat: "9.3111",
    lng: "42.1278",
    country: "Ethiopia",
    iso2: "ET",
    admin_name: "Hārerī Hizb",
    capital: "admin",
    population: "129000",
    population_proper: "129000",
  },
  {
    city: "Kombolcha",
    lat: "11.0867",
    lng: "39.7367",
    country: "Ethiopia",
    iso2: "ET",
    admin_name: "Āmara",
    capital: "",
    population: "125654",
    population_proper: "125654",
  },
  {
    city: "Jīma",
    lat: "7.6667",
    lng: "36.8333",
    country: "Ethiopia",
    iso2: "ET",
    admin_name: "Oromīya",
    capital: "",
    population: "120960",
    population_proper: "120960",
  },
  {
    city: "Debre Tabor",
    lat: "11.8500",
    lng: "38.0167",
    country: "Ethiopia",
    iso2: "ET",
    admin_name: "Āmara",
    capital: "",
    population: "119176",
    population_proper: "119176",
  },
  {
    city: "Harshin",
    lat: "9.2167",
    lng: "43.5878",
    country: "Ethiopia",
    iso2: "ET",
    admin_name: "Sumalē",
    capital: "",
    population: "117187",
    population_proper: "117187",
  },
  {
    city: "Ādīgrat",
    lat: "14.2667",
    lng: "39.4500",
    country: "Ethiopia",
    iso2: "ET",
    admin_name: "Tigray",
    capital: "",
    population: "116193",
    population_proper: "116193",
  },
  {
    city: "Debre Zeyit",
    lat: "8.7500",
    lng: "38.9833",
    country: "Ethiopia",
    iso2: "ET",
    admin_name: "Oromīya",
    capital: "",
    population: "99928",
    population_proper: "99928",
  },
  {
    city: "Gambēla",
    lat: "8.2500",
    lng: "34.5833",
    country: "Ethiopia",
    iso2: "ET",
    admin_name: "Gambēla Hizboch",
    capital: "admin",
    population: "97643",
    population_proper: "97643",
  },
  {
    city: "Mīzan Teferī",
    lat: "7.0000",
    lng: "35.5833",
    country: "Ethiopia",
    iso2: "ET",
    admin_name: "YeDebub Bihēroch Bihēreseboch na Hizboch",
    capital: "",
    population: "91437",
    population_proper: "91437",
  },
  {
    city: "Ādwa",
    lat: "14.1667",
    lng: "38.9000",
    country: "Ethiopia",
    iso2: "ET",
    admin_name: "Tigray",
    capital: "",
    population: "85644",
    population_proper: "85644",
  },
  {
    city: "Gonder",
    lat: "12.6075",
    lng: "37.4592",
    country: "Ethiopia",
    iso2: "ET",
    admin_name: "Āmara",
    capital: "",
    population: "80886",
    population_proper: "80886",
  },
  {
    city: "Bodītī",
    lat: "6.8667",
    lng: "37.8667",
    country: "Ethiopia",
    iso2: "ET",
    admin_name: "YeDebub Bihēroch Bihēreseboch na Hizboch",
    capital: "",
    population: "67861",
    population_proper: "67861",
  },
  {
    city: "Āsela",
    lat: "7.9500",
    lng: "39.1167",
    country: "Ethiopia",
    iso2: "ET",
    admin_name: "Oromīya",
    capital: "",
    population: "67269",
    population_proper: "67269",
  },
  {
    city: "Āksum",
    lat: "14.1208",
    lng: "38.7278",
    country: "Ethiopia",
    iso2: "ET",
    admin_name: "Tigray",
    capital: "",
    population: "66800",
    population_proper: "66800",
  },
  {
    city: "Bonga",
    lat: "7.2667",
    lng: "36.2333",
    country: "Ethiopia",
    iso2: "ET",
    admin_name: "YeDebub M‘irab Ītyop’iya Hizboch",
    capital: "admin",
    population: "56045",
    population_proper: "56045",
  },
  {
    city: "Finote Selam",
    lat: "10.7000",
    lng: "37.2667",
    country: "Ethiopia",
    iso2: "ET",
    admin_name: "Āmara",
    capital: "",
    population: "55567",
    population_proper: "55567",
  },
  {
    city: "Semera",
    lat: "11.7922",
    lng: "41.0086",
    country: "Ethiopia",
    iso2: "ET",
    admin_name: "Āfar",
    capital: "admin",
    population: "50000",
    population_proper: "50000",
  },
  {
    city: "Goba",
    lat: "7.0000",
    lng: "39.9833",
    country: "Ethiopia",
    iso2: "ET",
    admin_name: "Oromīya",
    capital: "",
    population: "49309",
    population_proper: "32025",
  },
  {
    city: "Hāgere Hiywet",
    lat: "8.9833",
    lng: "37.8500",
    country: "Ethiopia",
    iso2: "ET",
    admin_name: "Oromīya",
    capital: "",
    population: "48171",
    population_proper: "48171",
  },
  {
    city: "Robē",
    lat: "7.1167",
    lng: "40.0000",
    country: "Ethiopia",
    iso2: "ET",
    admin_name: "Oromīya",
    capital: "",
    population: "44382",
    population_proper: "44382",
  },
  {
    city: "Yirga ‘Alem",
    lat: "6.7500",
    lng: "38.4167",
    country: "Ethiopia",
    iso2: "ET",
    admin_name: "YeDebub Bihēroch Bihēreseboch na Hizboch",
    capital: "",
    population: "43815",
    population_proper: "43815",
  },
  {
    city: "Giyon",
    lat: "8.5333",
    lng: "37.9667",
    country: "Ethiopia",
    iso2: "ET",
    admin_name: "Oromīya",
    capital: "",
    population: "37878",
    population_proper: "37878",
  },
  {
    city: "Bedēsa",
    lat: "6.8830",
    lng: "37.9329",
    country: "Ethiopia",
    iso2: "ET",
    admin_name: "YeDebub Bihēroch Bihēreseboch na Hizboch",
    capital: "",
    population: "35294",
    population_proper: "35294",
  },
  {
    city: "Āzezo",
    lat: "12.5586",
    lng: "37.4308",
    country: "Ethiopia",
    iso2: "ET",
    admin_name: "Āmara",
    capital: "",
    population: "33719",
    population_proper: "33719",
  },
  {
    city: "Butajīra",
    lat: "8.1208",
    lng: "38.3792",
    country: "Ethiopia",
    iso2: "ET",
    admin_name: "YeDebub Bihēroch Bihēreseboch na Hizboch",
    capital: "",
    population: "33406",
    population_proper: "33406",
  },
  {
    city: "Ālamat’ā",
    lat: "12.4167",
    lng: "39.5500",
    country: "Ethiopia",
    iso2: "ET",
    admin_name: "Tigray",
    capital: "",
    population: "33214",
    population_proper: "33214",
  },
  {
    city: "Āreka",
    lat: "7.0710",
    lng: "37.7076",
    country: "Ethiopia",
    iso2: "ET",
    admin_name: "YeDebub Bihēroch Bihēreseboch na Hizboch",
    capital: "",
    population: "31408",
    population_proper: "31408",
  },
  {
    city: "Gīmbī",
    lat: "9.1667",
    lng: "35.8333",
    country: "Ethiopia",
    iso2: "ET",
    admin_name: "Oromīya",
    capital: "",
    population: "30981",
    population_proper: "30981",
  },
  {
    city: "Wik’ro",
    lat: "13.7833",
    lng: "39.6000",
    country: "Ethiopia",
    iso2: "ET",
    admin_name: "Tigray",
    capital: "",
    population: "30210",
    population_proper: "30210",
  },
  {
    city: "Welk’īt’ē",
    lat: "8.2833",
    lng: "37.7833",
    country: "Ethiopia",
    iso2: "ET",
    admin_name: "YeDebub Bihēroch Bihēreseboch na Hizboch",
    capital: "",
    population: "28866",
    population_proper: "28866",
  },
  {
    city: "Metu",
    lat: "8.3000",
    lng: "35.5833",
    country: "Ethiopia",
    iso2: "ET",
    admin_name: "Oromīya",
    capital: "",
    population: "28782",
    population_proper: "28782",
  },
  {
    city: "Fichē",
    lat: "9.8000",
    lng: "38.7333",
    country: "Ethiopia",
    iso2: "ET",
    admin_name: "Oromīya",
    capital: "",
    population: "27493",
    population_proper: "27493",
  },
  {
    city: "K’olīto",
    lat: "7.3122",
    lng: "38.0892",
    country: "Ethiopia",
    iso2: "ET",
    admin_name: "YeDebub Bihēroch Bihēreseboch na Hizboch",
    capital: "",
    population: "27359",
    population_proper: "27359",
  },
  {
    city: "Genet",
    lat: "9.0500",
    lng: "38.5000",
    country: "Ethiopia",
    iso2: "ET",
    admin_name: "Oromīya",
    capital: "",
    population: "25593",
    population_proper: "25593",
  },
  {
    city: "Āgaro",
    lat: "7.8558",
    lng: "36.5858",
    country: "Ethiopia",
    iso2: "ET",
    admin_name: "Oromīya",
    capital: "",
    population: "25458",
    population_proper: "25458",
  },
  {
    city: "Gelemso",
    lat: "8.8167",
    lng: "40.5167",
    country: "Ethiopia",
    iso2: "ET",
    admin_name: "Oromīya",
    capital: "",
    population: "24200",
    population_proper: "24200",
  },
  {
    city: "Āsosa",
    lat: "10.0667",
    lng: "34.5167",
    country: "Ethiopia",
    iso2: "ET",
    admin_name: "Bīnshangul Gumuz",
    capital: "admin",
    population: "20226",
    population_proper: "20226",
  },
];

export default citiesList;
