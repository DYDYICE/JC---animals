// Define the language dynamically (default: FR)
var taal = typeof taal !== "undefined" ? taal : "fr"; 

// ANIMALS LIST with FR and NL translations
let animals = [
  {
    id: "1",
    names: { nl: "Ara Blauw", fr: "Ara Bleu" },
    category: { nl: "Vogel", fr: "Oiseau" },
    habitat: { nl: "Jungle", fr: "Jungle" },
    continent: { nl: "Zuid-Amerika", fr: "Amérique du Sud" }
  },
  {
    id: "2",
    names: { nl: "Amazone Aourou", fr: "Amazone Aourou" },
    category: { nl: "Vogel", fr: "Oiseau" },
    habitat: { nl: "Regenwoud", fr: "Forêt tropicale" },
    continent: { nl: "Zuid-Amerika", fr: "Amérique du Sud" }
  },
  {
    id: "3",
    names: { nl: "Loriquet Regenboog", fr: "Loriquet Arc-en-ciel" },
    category: { nl: "Vogel", fr: "Oiseau" },
    habitat: { nl: "Bos", fr: "Forêt" },
    continent: { nl: "Australië", fr: "Australie" }
  },
  {
    id: "4",
    names: { nl: "Grote Eclectus", fr: "Grand Eclectus" },
    category: { nl: "Vogel", fr: "Oiseau" },
    habitat: { nl: "Tropisch", fr: "Tropical" },
    continent: { nl: "Oceanië", fr: "Océanie" }
  },
  {
    id: "5",
    names: { nl: "Kakariki", fr: "Kakariki" },
    category: { nl: "Vogel", fr: "Oiseau" },
    habitat: { nl: "Bos", fr: "Forêt" },
    continent: { nl: "Nieuw-Zeeland", fr: "Nouvelle-Zélande" }
  },
  {
    id: "6",
    names: { nl: "Liefdesvogels", fr: "Inséparables" },
    category: { nl: "Vogel", fr: "Oiseau" },
    habitat: { nl: "Savanne", fr: "Savane" },
    continent: { nl: "Afrika", fr: "Afrique" }
  },
  {
    id: "7",
    names: { nl: "Bonte Parkiet", fr: "Perruche Omnicolore" },
    category: { nl: "Vogel", fr: "Oiseau" },
    habitat: { nl: "Bos", fr: "Forêt" },
    continent: { nl: "Australië", fr: "Australie" }
  },
  {
    id: "8",
    names: { nl: "Pallid Parkiet", fr: "Perruche Paliceps" },
    category: { nl: "Vogel", fr: "Oiseau" },
    habitat: { nl: "Bos", fr: "Forêt" },
    continent: { nl: "Australië", fr: "Australie" }
  },
  {
    id: "9",
    names: { nl: "Halsbandparkiet", fr: "Perruche à Collier" },
    category: { nl: "Vogel", fr: "Oiseau" },
    habitat: { nl: "Jungle", fr: "Jungle" },
    continent: { nl: "Afrika, Azië", fr: "Afrique, Asie" }
  },
  {
    id: "10",
    names: { nl: "Golfparkiet", fr: "Perruche ondulée" },
    category: { nl: "Vogel", fr: "Oiseau" },
    habitat: { nl: "Savanne", fr: "Savane" },
    continent: { nl: "Australië", fr: "Australie" }
  },
  {
    id: "11",
    names: { nl: "Wittewang Toerako", fr: "Touracos à joues blanches" },
    category: { nl: "Vogel", fr: "Oiseau" },
    habitat: { nl: "Hooglanden", fr: "Hautes terres" },
    continent: { nl: "Ethiopië", fr: "Éthiopie" }
  },
  {
    id: "12",
    names: { nl: "IJsvogel", fr: "Martin-Chasseur" },
    category: { nl: "Vogel", fr: "Oiseau" },
    habitat: { nl: "Kustgebied", fr: "Côtier" },
    continent: { nl: "Australië, Tasmanië", fr: "Australie, Tasmanie" }
  },
  {
    id: "16",
    names: { nl: "Bennett Wallaby", fr: "Wallaby de Bennett" },
    category: { nl: "Zoogdier", fr: "Mammifère" },
    habitat: { nl: "Bos", fr: "Forêt" },
    continent: { nl: "Australië", fr: "Australie" }
  },
  {
    id: "17",
    names: { nl: "Wasbeer", fr: "Raton Laveur" },
    category: { nl: "Zoogdier", fr: "Mammifère" },
    habitat: { nl: "Bossen", fr: "Forêt" },
    continent: { nl: "Noord-Amerika", fr: "Amérique du Nord" }
  },
  {
    id: "18",
    names: { nl: "Vietnamees Varken", fr: "Cochon Vietnamien" },
    category: { nl: "Zoogdier", fr: "Mammifère" },
    habitat: { nl: "Platteland", fr: "Campagne" },
    continent: { nl: "Vietnam", fr: "Vietnam" }
  },
  {
    id: "19",
    names: { nl: "Stokstaartjes", fr: "Suricates" },
    category: { nl: "Zoogdier", fr: "Mammifère" },
    habitat: { nl: "Woestijn", fr: "Désert" },
    continent: { nl: "Afrika", fr: "Afrique" }
  }
];

// Function to get the right translation based on language
function getAnimalInfo(id) {
  let animal = animals.find(a => a.id === id);
  return {
    name: animal.names[taal],
    category: animal.category[taal],
    habitat: animal.habitat[taal],
    continent: animal.continent[taal]
  };
}
