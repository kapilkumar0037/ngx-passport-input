import { ICountryWithPassportRegex } from './models/general.models';

export const COUNTRIES_LIST: ICountryWithPassportRegex[] = [
    {
        name: "Afghanistan (‫افغانستان‬‎)",
        code: "AF",
        dialling_code: "+93",
        passportRegex: /^[A-Z]{3}\d{6}$/,
        placeholder: "KAB123456"
    },
    {
        name: "Albania (Shqipëri)",
        code: "AL",
        dialling_code: "+355",
        passportRegex: /^[A-Z]\d{7}$/,
        placeholder: "A1234567"
    },
    {
        name: "Algeria (‫الجزائر‬‎)",
        code: "DZ",
        dialling_code: "+213",
        passportRegex: /^\\d{9}$/,
        placeholder: "123456789"
    },
    {
        name: "Andorra",
        code: "AD",
        dialling_code: "+376",
        passportRegex: /^O\d{7}$/,
        placeholder: "O1234567"
    },
    {
        name: "Angola",
        code: "AO",
        dialling_code: "+244",
        passportRegex: /^N\d{7}$/,
        placeholder: "N7654321"
    },
    {
        name: "Anguilla",
        code: "AI",
        dialling_code: "+43",
        passportRegex: /^\d{9}$/,
        placeholder:'123456789'
    },
    {
        name: "Antigua and Barbuda",
        code: "AG",
        dialling_code: "+1",
        passportRegex: /^[A-Z0-9]{9}$/,
        placeholder: "A12345678"
    },
    {
        name: "Argentina",
        code: "AR",
        dialling_code: "+54",
        passportRegex: /^[A-Z]{3}\\d{6}$/,
        placeholder: "ABC123456"
    },
    {
        name: "Armenia (Հայաստան)",
        code: "AM",
        dialling_code: "+374",
        passportRegex: /^[A-Z]{2}\\d{7}$/,
        placeholder: "AB1234567"
    },
    {
        name: "Aruba",
        code: "AW",
        dialling_code: "+297"
    },
    {
        name: "Australia",
        code: "AU",
        dialling_code: "+61",
        passportRegex: /^[A-Z]\\d{7}$/,
        placeholder: "A1234567"
    },
    {
        name: "Azerbaijan (Azərbaycan)",
        code: "AZ",
        dialling_code: "+994",
        passportRegex: /^[A-Z]{1}\\d{8}$/,
        placeholder: ""
    },
    {
        name: "Bahamas",
        code: "BS",
        dialling_code: "+1"
    },
    {
        name: "Bahrain (‫البحرين‬‎)",
        code: "BH",
        dialling_code: "+973"
    },
    {
        name: "Bangladesh (বাংলাদেশ)",
        code: "BD",
        dialling_code: "+880"
    },
    {
        name: "Barbados",
        code: "BB",
        dialling_code: "+1"
    },
    {
        name: "Belarus (Беларусь)",
        code: "BY",
        dialling_code: "+375",
        passportRegex: /^[A-Z]{2}\\d{7}$/
    },
    {
        name: "Belgium (België)",
        code: "BE",
        dialling_code: "+32",
        passportRegex: /^[A-Z]{2}\\d{6}$/
    },
    {
        name: "Belize",
        code: "BZ",
        dialling_code: "+501"
    },
    {
        name: "Benin (Bénin)",
        code: "BJ",
        dialling_code: "+229"
    },
    {
        name: "Bermuda",
        code: "BM",
        dialling_code: "+1"
    },
    {
        name: "Bhutan (འབྲུག)",
        code: "BT",
        dialling_code: "+975"
    },
    {
        name: "Bolivia (Plurinational State of)",
        code: "BO",
        dialling_code: "+591"
    },
    {
        name: "Bosnia and Herzegovina (Босна и Херцеговина)",
        code: "BA",
        dialling_code: "+387"
    },
    {
        name: "Botswana",
        code: "BW",
        dialling_code: "+267"
    },
    {
        name: "Brazil (Brasil)",
        code: "BR",
        dialling_code: "+55",
        passportRegex: /^[A-Z]{2}\\d{6}$/
    },
    {
        name: "British Indian Ocean Territory",
        code: "IO",
        dialling_code: "+246"
    },
    {
        name: "Virgin Islands (British)",
        code: "VG",
        dialling_code: "+1"
    },
    {
        name: "Virgin Islands (U.S.)",
        code: "VI",
        dialling_code: "+1"
    },
    {
        name: "Brunei Darussalam",
        code: "BN",
        dialling_code: "+673"
    },
    {
        name: "Bulgaria (България)",
        code: "BG",
        dialling_code: "+359",
        passportRegex: /^\\d{9}$/
    },
    {
        name: "Burkina Faso",
        code: "BF",
        dialling_code: "+226"
    },
    {
        name: "Burundi (Uburundi)",
        code: "BI",
        dialling_code: "+257"
    },
    {
        name: "Cambodia (កម្ពុជា)",
        code: "KH",
        dialling_code: "+855"
    },
    {
        name: "Cameroon (Cameroun)",
        code: "CM",
        dialling_code: "+237"
    },
    {
        name: "Canada",
        code: "CA",
        dialling_code: "+1",
        passportRegex: /^[A-Z]{2}\\d{6}$/
    },
    {
        name: "Cape Verde (Kabu Verdi)",
        code: "CV",
        dialling_code: "+238"
    },
    {
        name: "Cayman Islands",
        code: "KY",
        dialling_code: "+1"
    },
    {
        name: "Central African Republic (République centrafricaine)",
        code: "CF",
        dialling_code: "+236"
    },
    {
        name: "Chile",
        code: "CL",
        dialling_code: "+56"
    },
    {
        name: "China (中国)",
        code: "CN",
        dialling_code: "+86",
        passportRegex: /^G\\d{8}$|^E(?![IO])[A-Z0-9]\\d{7}$/
    },
    {
        name: "Colombia",
        code: "CO",
        dialling_code: "+57"
    },
    {
        name: "Comoros (‫جزر القمر‬‎)",
        code: "KM",
        dialling_code: "+269"
    },
    {
        name: "Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)",
        code: "CG",
        dialling_code: "+242"
    },
    {
        name: "Congo (Republic) (Congo-Brazzaville)",
        code: "CD",
        dialling_code: "+243"
    },
    {
        name: "Cook Islands",
        code: "CK",
        dialling_code: "+682"
    },
    {
        name: "Costa Rica",
        code: "CR",
        dialling_code: "+506"
    },
    {
        name: "Croatia (Hrvatska)",
        code: "HR",
        dialling_code: "+385",
        passportRegex: /^\\d{9}$/
    },
    {
        name: "Cuba",
        code: "CU",
        dialling_code: "+53"
    },
    {
        name: "Cyprus (Κύπρος)",
        code: "CY",
        dialling_code: "+357",
        passportRegex: /^[A-Z](\\d{6}|\\d{8})$/
    },
    {
        name: "Czech Republic (Česká republika)",
        code: "CZ",
        dialling_code: "+420",
        passportRegex: /^\\d{8}$/
    },
    {
        name: "Denmark (Danmark)",
        code: "DK",
        dialling_code: "+45",
        passportRegex: /^\\d{9}$/
    },
    {
        name: "Djibouti",
        code: "DJ",
        dialling_code: "+253"
    },
    {
        name: "Dominica",
        code: "DM",
        dialling_code: "+1"
    },
    {
        name: "Dominican Republic (República Dominicana)",
        code: "DO",
        dialling_code: "+1"
    },
    {
        name: "Ecuador",
        code: "EC",
        dialling_code: "+593"
    },
    {
        name: "Egypt (‫مصر‬‎)",
        code: "EG",
        dialling_code: "+20"
    },
    {
        name: "El Salvador",
        code: "SV",
        dialling_code: "+503"
    },
    {
        name: "Equatorial Guinea (Guinea Ecuatorial)",
        code: "GQ",
        dialling_code: "+240"
    },
    {
        name: "Eritrea",
        code: "ER",
        dialling_code: "+291"
    },
    {
        name: "Estonia (Eesti)",
        code: "EE",
        dialling_code: "+372",
        passportRegex: /^([A-Z]\\d{7}|[A-Z]{2}\\d{7})$/
    },
    {
        name: "Ethiopia",
        code: "ET",
        dialling_code: "+251"
    },
    {
        name: "Falkland Islands (Islas Malvinas)",
        code: "FK",
        dialling_code: "+500"
    },
    {
        name: "Faroe Islands (Føroyar)",
        code: "FO",
        dialling_code: "+298"
    },
    {
        name: "Fiji",
        code: "FJ",
        dialling_code: "+679"
    },
    {
        name: "Finland (Suomi)",
        code: "FI",
        dialling_code: "+358",
        passportRegex: /^[A-Z]{2}\\d{7}$/
    },
    {
        name: "France",
        code: "FR",
        dialling_code: "+33",
        passportRegex: /^\\d{2}[A-Z]{2}\\d{5}$/
    },
    {
        name: "French Guiana (Guyane française)",
        code: "GF",
        dialling_code: "+594"
    },
    {
        name: "French Polynesia (Polynésie française)",
        code: "PF",
        dialling_code: "+689"
    },
    {
        name: "Gabon",
        code: "GA",
        dialling_code: "+241"
    },
    {
        name: "Gambia",
        code: "GM",
        dialling_code: "+220"
    },
    {
        name: "Georgia (საქართველო)",
        code: "GE",
        dialling_code: "+995"
    },
    {
        name: "Germany (Deutschland)",
        code: "DE",
        dialling_code: "+49",
        passportRegex: /^[CFGHJKLMNPRTVWXYZ0-9]{9}$/
    },
    {
        name: "Ghana (Gaana)",
        code: "GH",
        dialling_code: "+233"
    },
    {
        name: "Gibraltar",
        code: "GI",
        dialling_code: "+350"
    },
    {
        name: "Greece (Ελλάδα)",
        code: "GR",
        dialling_code: "+30",
        passportRegex: /^[A-Z]{2}\\d{7}$/
    },
    {
        name: "Greenland (Kalaallit Nunaat)",
        code: "GL",
        dialling_code: "+299"
    },
    {
        name: "Grenada",
        code: "GD",
        dialling_code: "+1"
    },
    {
        name: "Guadeloupe",
        code: "GP",
        dialling_code: "+590"
    },
    {
        name: "Guam",
        code: "GU",
        dialling_code: "+1"
    },
    {
        name: "Guatemala",
        code: "GT",
        dialling_code: "+502"
    },
    {
        name: "Guinea (Guinée)",
        code: "GN",
        dialling_code: "+224"
    },
    {
        name: "Guinea-Bissau (Guiné Bissau)",
        code: "GW",
        dialling_code: "+245"
    },
    {
        name: "Guyana",
        code: "GY",
        dialling_code: "+592"
    },
    {
        name: "Haiti",
        code: "HT",
        dialling_code: "+509"
    },
    {
        name: "Holy See",
        code: "VA",
        dialling_code: "+39"
    },
    {
        name: "Honduras",
        code: "HN",
        dialling_code: "+504"
    },
    {
        name: "Hong Kong (香港)",
        code: "HK",
        dialling_code: "+852"
    },
    {
        name: "Hungary (Magyarország)",
        code: "HU",
        dialling_code: "+36",
        passportRegex: /^[A-Z]{2}(\\d{6}|\\d{7})$/
    },
    {
        name: "Iceland (Ísland)",
        code: "IS",
        dialling_code: "+354",
        passportRegex: /^(A)\\d{7}$/
    },
    {
        name: "India (भारत)",
        code: "IN",
        dialling_code: "+91",
        passportRegex: /^[A-Z]{1}-?\\d{7}$/,
        placeholder: "A2096457"
    },
    {
        name: "Indonesia",
        code: "ID",
        dialling_code: "+62",
        passportRegex: /^[A-C]\\d{7}$/
    },
    {
        name: "Côte d'Ivoire",
        code: "CI",
        dialling_code: "+225"
    },
    {
        name: "Iran (‫ایران‬‎)",
        code: "IR",
        dialling_code: "+98",
        passportRegex: /^[A-Z]\\d{8}$/
    },
    {
        name: "Iraq (‫العراق‬‎)",
        code: "IQ",
        dialling_code: "+964"
    },
    {
        name: "Ireland",
        code: "IE",
        dialling_code: "+353",
        passportRegex: /^[A-Z0-9]{2}\\d{7}$/
    },
    {
        name: "Israel (‫ישראל‬‎)",
        code: "IL",
        dialling_code: "+972"
    },
    {
        name: "Italy (Italia)",
        code: "IT",
        dialling_code: "+39",
        passportRegex: /^[A-Z0-9]{2}\\d{7}$/
    },
    {
        name: "Jamaica",
        code: "JM",
        dialling_code: "+1",
        passportRegex: /^[Aa]\\d{7}$/
    },
    {
        name: "Japan (日本)",
        code: "JP",
        dialling_code: "+81",
        passportRegex: /^[A-Z]{2}\\d{7}$/
    },
    {
        name: "Jordan (‫الأردن‬‎)",
        code: "JO",
        dialling_code: "+962"
    },
    {
        name: "Kazakhstan (Казахстан)",
        code: "KZ",
        dialling_code: "+7",
        passportRegex: /^[a-zA-Z]\\d{7}$/
    },
    {
        name: "Kenya",
        code: "KE",
        dialling_code: "+254"
    },
    {
        name: "Kiribati",
        code: "KI",
        dialling_code: "+686"
    },
    {
        name: "Kuwait (‫الكويت‬‎)",
        code: "KW",
        dialling_code: "+965"
    },
    {
        name: "Kyrgyzstan (Кыргызстан)",
        code: "KG",
        dialling_code: "+996"
    },
    {
        name: "Laos (ລາວ)",
        code: "LA",
        dialling_code: "+856"
    },
    {
        name: "Latvia (Latvija)",
        code: "LV",
        dialling_code: "+371",
        passportRegex: /^[A-Z0-9]{2}\\d{7}$/
    },
    {
        name: "Lebanon (‫لبنان‬‎)",
        code: "LB",
        dialling_code: "+961"
    },
    {
        name: "Lesotho",
        code: "LS",
        dialling_code: "+266"
    },
    {
        name: "Liberia",
        code: "LR",
        dialling_code: "+231"
    },
    {
        name: "Libya (‫ليبيا‬‎)",
        code: "LY",
        dialling_code: "+218",
        passportRegex: /^[A-Z0-9]{8}$/
    },
    {
        name: "Liechtenstein",
        code: "LI",
        dialling_code: "+423",
        passportRegex: /^[a-zA-Z]\\d{5}$/
    },
    {
        name: "Lithuania (Lietuva)",
        code: "LT",
        dialling_code: "+370",
        passportRegex: /^[A-Z0-9]{8}$/
    },
    {
        name: "Luxembourg",
        code: "LU",
        dialling_code: "+352",
        passportRegex: /^[A-Z0-9]{8}$/
    },
    {
        name: "Macau (澳門)",
        code: "MO",
        dialling_code: "+853"
    },
    {
        name: "Macedonia (the former Yugoslav Republic of)",
        code: "MK",
        dialling_code: "+389"
    },
    {
        name: "Madagascar (Madagasikara)",
        code: "MG",
        dialling_code: "+261"
    },
    {
        name: "Malawi",
        code: "MW",
        dialling_code: "+265"
    },
    {
        name: "Malaysia",
        code: "MY",
        dialling_code: "+60",
        passportRegex: /^[AHK]\\d{8}$/
    },
    {
        name: "Maldives",
        code: "MV",
        dialling_code: "+960"
    },
    {
        name: "Mali",
        code: "ML",
        dialling_code: "+223"
    },
    {
        name: "Malta",
        code: "MT",
        dialling_code: "+356",
        passportRegex: /^\\d{7}$/
    },
    {
        name: "Marshall Islands",
        code: "MH",
        dialling_code: "+692"
    },
    {
        name: "Martinique",
        code: "MQ",
        dialling_code: "+596"
    },
    {
        name: "Mauritania (‫موريتانيا‬‎)",
        code: "MR",
        dialling_code: "+222"
    },
    {
        name: "Mauritius (Moris)",
        code: "MU",
        dialling_code: "+230"
    },
    {
        name: "Mayotte",
        code: "YT",
        dialling_code: "+262"
    },
    {
        name: "Mexico (México)",
        code: "MX",
        dialling_code: "+52",
        passportRegex: /^\\d{10,11}$/
    },
    {
        name: "Micronesia (Federated States of)",
        code: "FM",
        dialling_code: "+691"
    },
    {
        name: "Moldova (Republica Moldova)",
        code: "MD",
        dialling_code: "+373"
    },
    {
        name: "Monaco",
        code: "MC",
        dialling_code: "+377"
    },
    {
        name: "Mongolia (Монгол)",
        code: "MN",
        dialling_code: "+976"
    },
    {
        name: "Montenegro (Crna Gora)",
        code: "ME",
        dialling_code: "+382"
    },
    {
        name: "Montserrat",
        code: "MS",
        dialling_code: "+1"
    },
    {
        name: "Morocco (‫المغرب‬‎)",
        code: "MA",
        dialling_code: "+212"
    },
    {
        name: "Mozambique (Moçambique)",
        code: "MZ",
        dialling_code: "+258",
        passportRegex: /^([A-Z]{2}\\d{7})|(\\d{2}[A-Z]{2}\\d{5})$/
    },
    {
        name: "Myanmar (Burma) (မြန်မာ)",
        code: "MM",
        dialling_code: "+95"
    },
    {
        name: "Namibia (Namibië)",
        code: "NA",
        dialling_code: "+264"
    },
    {
        name: "Nauru",
        code: "NR",
        dialling_code: "+674"
    },
    {
        name: "Nepal (नेपाल)",
        code: "NP",
        dialling_code: "+977"
    },
    {
        name: "Netherlands (Nederland)",
        code: "NL",
        dialling_code: "+31",
        passportRegex: /^[A-Z]{2}[A-Z0-9]{6}\\d$/
    },
    {
        name: "New Caledonia (Nouvelle-Calédonie)",
        code: "NC",
        dialling_code: "+687"
    },
    {
        name: "New Zealand",
        code: "NZ",
        dialling_code: "+64",
        passportRegex: /^([Ll]([Aa]|[Dd]|[Ff]|[Hh])|[Ee]([Aa]|[Pp])|[Nn])\\d{6}$/
    },
    {
        name: "Nicaragua",
        code: "NI",
        dialling_code: "+505"
    },
    {
        name: "Niger (Nijar)",
        code: "NE",
        dialling_code: "+227"
    },
    {
        name: "Nigeria",
        code: "NG",
        dialling_code: "+234"
    },
    {
        name: "Niue",
        code: "NU",
        dialling_code: "+683"
    },
    {
        name: "Norfolk Island",
        code: "NF",
        dialling_code: "+672"
    },
    {
        name: "North Korea (조선 민주주의 인민 공화국)",
        code: "KP",
        dialling_code: "+850"
    },
    {
        name: "Northern Mariana Islands",
        code: "MP",
        dialling_code: "+1"
    },
    {
        name: "Norway (Norge)",
        code: "NO",
        dialling_code: "+47"
    },
    {
        name: "Oman (‫عُمان‬‎)",
        code: "OM",
        dialling_code: "+968"
    },
    {
        name: "Pakistan (‫پاکستان‬‎)",
        code: "PK",
        dialling_code: "+92",
        passportRegex: /^[A-Z]{2}\\d{7}$/
    },
    {
        name: "Palau",
        code: "PW",
        dialling_code: "+680"
    },
    {
        name: "Palestine (‫فلسطين‬‎)",
        code: "PS",
        dialling_code: "+970"
    },
    {
        name: "Panama (Panamá)",
        code: "PA",
        dialling_code: "+507"
    },
    {
        name: "Papua New Guinea",
        code: "PG",
        dialling_code: "+675"
    },
    {
        name: "Paraguay",
        code: "PY",
        dialling_code: "+595"
    },
    {
        name: "Peru (Perú)",
        code: "PE",
        dialling_code: "+51"
    },
    {
        name: "Philippines",
        code: "PH",
        dialling_code: "+63",
        passportRegex: /^([A-Z](\\d{6}|\\d{7}[A-Z]))|([A-Z]{2}(\\d{6}|\\d{7}))$/
    },
    {
        name: "Poland (Polska)",
        code: "PL",
        dialling_code: "+48",
        passportRegex: /^[A-Z]{2}\\d{7}$/
    },
    {
        name: "Portugal",
        code: "PT",
        dialling_code: "+351",
        passportRegex: /^[A-Z]\\d{6}$/
    },
    {
        name: "Puerto Rico",
        code: "PR",
        dialling_code: "+1"
    },
    {
        name: "Qatar (‫قطر‬‎)",
        code: "QA",
        dialling_code: "+974"
    },
    {
        name: "Republic of Kosovo",
        code: "XK",
        dialling_code: "+381"
    },
    {
        name: "Réunion (La Réunion)",
        code: "RE",
        dialling_code: "+262"
    },
    {
        name: "Romania (România)",
        code: "RO",
        dialling_code: "+40",
        passportRegex: /^\\d{8,9}$/
    },
    {
        name: "Russia (Россия)",
        code: "RU",
        dialling_code: "+7",
        passportRegex: /^\\d{9}$/
    },
    {
        name: "Rwanda",
        code: "RW",
        dialling_code: "+250"
    },
    {
        name: "Saint Martin (Saint-Martin (partie française))",
        code: "BL",
        dialling_code: "+590"
    },
    {
        name: "Saint Helena, Ascension and Tristan da Cunha",
        code: "SH",
        dialling_code: "+290"
    },
    {
        name: "Saint Kitts and Nevis",
        code: "KN",
        dialling_code: "+1"
    },
    {
        name: "Saint Lucia",
        code: "LC",
        dialling_code: "+1"
    },
    {
        name: "Saint Martin (French part)",
        code: "MF",
        dialling_code: "+590"
    },
    {
        name: "Saint Pierre and Miquelon",
        code: "PM",
        dialling_code: "+508"
    },
    {
        name: "Saint Vincent and the Grenadines",
        code: "VC",
        dialling_code: "+1"
    },
    {
        name: "Samoa",
        code: "WS",
        dialling_code: "+685"
    },
    {
        name: "San Marino",
        code: "SM",
        dialling_code: "+378"
    },
    {
        name: "São Tomé and Príncipe (São Tomé e Príncipe)",
        code: "ST",
        dialling_code: "+239"
    },
    {
        name: "Saudi Arabia (‫المملكة العربية السعودية‬‎)",
        code: "SA",
        dialling_code: "+966"
    },
    {
        name: "Senegal (Sénégal)",
        code: "SN",
        dialling_code: "+221"
    },
    {
        name: "Serbia (Србија)",
        code: "RS",
        dialling_code: "+381"
    },
    {
        name: "Seychelles",
        code: "SC",
        dialling_code: "+248"
    },
    {
        name: "Sierra Leone",
        code: "SL",
        dialling_code: "+232",
        passportRegex: /^(P)[A-Z]\\d{7}$/
    },
    {
        name: "Singapore",
        code: "SG",
        dialling_code: "+65"
    },
    {
        name: "Slovakia (Slovensko)",
        code: "SK",
        dialling_code: "+421",
        passportRegex: /^[0-9A-Z]\\d{7}$/
    },
    {
        name: "Slovenia (Slovenija)",
        code: "SI",
        dialling_code: "+386"
    },
    {
        name: "Solomon Islands",
        code: "SB",
        dialling_code: "+677"
    },
    {
        name: "Somalia (Soomaaliya)",
        code: "SO",
        dialling_code: "+252"
    },
    {
        name: "South Africa",
        code: "ZA",
        dialling_code: "+27",
        passportRegex: /^[TAMD]\\d{8}$/
    },
    {
        name: "South Korea (대한민국)",
        code: "KR",
        dialling_code: "+82",
        passportRegex: /^[MS]\\d{8}$/
    },
    {
        name: "Spain",
        code: "ES",
        dialling_code: "+34",
        passportRegex: /^[A-Z0-9]{2}([A-Z0-9]?)\\d{6}$/
    },
    {
        name: "Sri Lanka (ශ්‍රී ලංකාව)",
        code: "LK",
        dialling_code: "+94"
    },
    {
        name: "Sudan (‫السودان‬‎)",
        code: "SD",
        dialling_code: "+249"
    },
    {
        name: "Suriname",
        code: "SR",
        dialling_code: "+597"
    },
    {
        name: "Swaziland",
        code: "SZ",
        dialling_code: "+268"
    },
    {
        name: "Sweden (Sverige)",
        code: "SE",
        dialling_code: "+46",
        passportRegex: /^\\d{8}$/
    },
    {
        name: "Switzerland (Schweiz)",
        code: "CH",
        dialling_code: "+41",
        passportRegex: /^[A-Z]\\d{7}$/
    },
    {
        name: "Syria (‫سوريا‬‎)",
        code: "SY",
        dialling_code: "+963"
    },
    {
        name: "Taiwan (台灣)",
        code: "TW",
        dialling_code: "+886"
    },
    {
        name: "Tajikistan",
        code: "TJ",
        dialling_code: "+992"
    },
    {
        name: "Tanzania, United Republic of",
        code: "TZ",
        dialling_code: "+255"
    },
    {
        name: "Thailand",
        code: "TH",
        dialling_code: "+66",
        passportRegex: /^[A-Z]{1,2}\\d{6,7}$/
    },
    {
        name: "Timor-Leste",
        code: "TL",
        dialling_code: "+670"
    },
    {
        name: "Togo",
        code: "TG",
        dialling_code: "+228"
    },
    {
        name: "Tokelau",
        code: "TK",
        dialling_code: "+690"
    },
    {
        name: "Tonga",
        code: "TO",
        dialling_code: "+676"
    },
    {
        name: "Trinidad and Tobago",
        code: "TT",
        dialling_code: "+1"
    },
    {
        name: "Tunisia (‫تونس‬‎)",
        code: "TN",
        dialling_code: "+216"
    },
    {
        name: "Turkey (Türkiye)",
        code: "TR",
        dialling_code: "+90",
        passportRegex: /^[A-Z]\\d{8}$/
    },
    {
        name: "Turkmenistan",
        code: "TM",
        dialling_code: "+993"
    },
    {
        name: "Turks and Caicos Islands",
        code: "TC",
        dialling_code: "+1"
    },
    {
        name: "Tuvalu",
        code: "TV",
        dialling_code: "+688"
    },
    {
        name: "Uganda",
        code: "UG",
        dialling_code: "+256"
    },
    {
        name: "Ukraine (Україна)",
        code: "UA",
        dialling_code: "+380",
        passportRegex: /^[A-Z]{2}\\d{6}$/
    },
    {
        name: "United Arab Emirates (‫الإمارات العربية المتحدة‬‎)",
        code: "AE",
        dialling_code: "+971"
    },
    {
        name: "United Kingdom of Great Britain and Northern Ireland",
        code: "GB",
        dialling_code: "+44",
        passportRegex: /^\\d{9}$/,
        placeholder: '987654321'
    },
    {
        name: "United States of America",
        code: "US",
        dialling_code: "+1",
        passportRegex: /^\\d{9}$/,
        placeholder: '987654321'
    },
    {
        name: "Uruguay",
        code: "UY",
        dialling_code: "+598"
    },
    {
        name: "Uzbekistan (Oʻzbekiston)",
        code: "UZ",
        dialling_code: "+998"
    },
    {
        name: "Vanuatu",
        code: "VU",
        dialling_code: "+678"
    },
    {
        name: "Venezuela (Bolivarian Republic of)",
        code: "VE",
        dialling_code: "+58"
    },
    {
        name: "Vietnam (Việt Nam)",
        code: "VN",
        dialling_code: "+84"
    },
    {
        name: "Wallis and Futuna (Wallis-et-Futuna)",
        code: "WF",
        dialling_code: "+681"
    },
    {
        name: "Yemen (‫اليمن‬‎)",
        code: "YE",
        dialling_code: "+967"
    },
    {
        name: "Zambia",
        code: "ZM",
        dialling_code: "+260"
    },
    {
        name: "Zimbabwe",
        code: "ZW",
        dialling_code: "+263"
    }
]