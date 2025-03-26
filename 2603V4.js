// Define the language dynamically (default: FR)
var taal = typeof taal !== "undefined" ? taal : "fr";

// ANIMALS LIST with FR and NL translations + Images + Fun Facts
let animals = [
{
  id: "1",
  names: { nl: "Kookaburra", fr: "Kookaburra" },
  category: { nl: "Vogel", fr: "Oiseau" },
  habitat: { nl: "Bos", fr: "Forêt" },
  continent: { nl: "Australië", fr: "Australie" },
  image: "https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/kookaburra.jpeg",
  infoImage: "https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/2021%20kookaburra.png",
  gallery: [
 "https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/kookaburra.jpeg",
  "https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/kookaburra1.jpeg",
"https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/kookaburra2.jpeg",
  "https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/kookaburra3.jpeg",
"https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/kookaburra4.jpeg"
],
  fact: {
    nl: "Kookaburra's lachen luid — het klinkt als mensenlachen!",
    fr: "Les kookaburras rient fort — cela ressemble à un rire humain !"
  }
},
{
  id: "2",
  names: { nl: "Émeu", fr: "Émeu" },
  category: { nl: "Vogel", fr: "Oiseau" },
  habitat: { nl: "Savanne", fr: "Savane" },
  continent: { nl: "Australië", fr: "Australie" },
  image: "https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/emeu.jpeg",
  infoImage: "https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/2021%20%C3%A9meu.jpg",
   gallery: [
 "https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/emeu.jpeg",
 "https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/emeu1.jpeg",
  "https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/emeu2.jpeg"
],
  fact: {
    nl: "De émeu is de op één na grootste vogel ter wereld!",
    fr: "L’émeu est le deuxième plus grand oiseau du monde !"
  }
},
{
  id: "3",
  names: { nl: "Afrikaanse oehoe", fr: "Grand-duc africain" },
  category: { nl: "Vogel", fr: "Oiseau" },
  habitat: { nl: "Savanne", fr: "Savane" },
  continent: { nl: "Afrika", fr: "Afrique" },
  image: "https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/grandducafricain.jpeg",
  infoImage: "https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/2021%20grand%20duc.png",
  gallery: [
 "https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/grandducafricain.jpeg",
 "https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/grandducafricain1.jpeg",
  "https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/grandducafricain2.jpeg"
],
  fact: {
    nl: "Deze uil kan zelfs slangen eten!",
    fr: "Ce hibou peut même manger des serpents !"
  }
},
{
  id: "4",
  names: { nl: "Touraco witwang", fr: "Touraco à joues blanches" },
  category: { nl: "Vogel", fr: "Oiseau" },
  habitat: { nl: "Bos", fr: "Forêt" },
  continent: { nl: "Afrika", fr: "Afrique" },
  image: "https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/touraco.jpeg",
  infoImage: "https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/2021%20touraco.png",
  gallery: [https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/touraco.jpeg],
  fact: {
    nl: "Touraco’s hebben echte groene veren dankzij een zeldzaam pigment!",
    fr: "Les touracos ont des plumes vraiment vertes grâce à un pigment rare !"
  }
},
{
  id: "5",
  names: { nl: "Raton-laveur", fr: "Raton-laveur" },
  category: { nl: "Zoogdier", fr: "Mammifère" },
  habitat: { nl: "Bos", fr: "Forêt" },
  continent: { nl: "Noord-Amerika", fr: "Amérique du Nord" },
  image: "https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/raton-laveur.jpeg",
  infoImage: "https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/2021%20raton%20laveur.png",
  gallery: [
"https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/raton-laveur.jpeg",
"https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/raton-laveur1.jpeg",
"https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/raton-laveur2.jpeg",

],
  fact: {
    nl: "Raton-laveurs wassen vaak hun voedsel voor ze het opeten.",
    fr: "Les ratons-laveurs lavent souvent leur nourriture avant de la manger."
  }
},
{
  id: "6",
  names: { nl: "Halsbandparkiet", fr: "Perruche à collier" },
  category: { nl: "Vogel", fr: "Oiseau" },
  habitat: { nl: "Stad & park", fr: "Ville et parc" },
  continent: { nl: "Azië", fr: "Asie" },
  image: "https://www.jungle-city.be/site/layout/img/junglecity-logo.png",
  infoImage: "https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/2021%20perruche%20%C3%A0%20collier.png",
  gallery: ["https://www.jungle-city.be/site/layout/img/junglecity-logo.png"],
  fact: {
    nl: "Deze papegaai vliegt nu ook vrij rond in Brussel en Gent!",
    fr: "Ce perroquet vole désormais librement à Bruxelles et à Gand !"
  }
},
{
  id: "7",
  names: { nl: "Vietnamees hangbuikzwijn", fr: "Cochon vietnamien" },
  category: { nl: "Zoogdier", fr: "Mammifère" },
  habitat: { nl: "Boerderij", fr: "Ferme" },
  continent: { nl: "Azië", fr: "Asie" },
  image: "https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/cochonvietnamien.jpeg",
  infoImage: "https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/2021%20cochon%20vietnamien.png",
  gallery: [
"https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/cochonvietnamien.jpeg",
"https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/cochonvietnamien1.jpeg",
"https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/cochonvietnamien2.jpeg",

],

  fact: {
    nl: "Deze schattige zwijntjes knorren als ze blij zijn!",
    fr: "Ces petits cochons grognent quand ils sont contents !"
  }
}
{
  id: "8",
  names: { nl: "Wallaby de Bennett", fr: "Wallaby de Bennett" },
  category: { nl: "Zoogdier", fr: "Mammifère" },
  habitat: { nl: "Bos", fr: "Forêt" },
  continent: { nl: "Australië", fr: "Australie" },
  image: "https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/wallaby.jpeg",
  infoImage: "https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/2021%20wallaby.png",
  gallery: ["https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/wallaby.jpeg",
"https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/wallaby1.jpeg",
],
  fact: {
    nl: "Wallaby’s zijn familie van de kangoeroes maar veel kleiner!",
    fr: "Les wallabies sont des cousins plus petits des kangourous !"
  }
},
{
  id: "9",
  names: { nl: "Blauw-gele ara", fr: "Ara bleu" },
  category: { nl: "Vogel", fr: "Oiseau" },
  habitat: { nl: "Jungle", fr: "Jungle" },
  continent: { nl: "Zuid-Amerika", fr: "Amérique du Sud" },
  image: "https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/ara.jpeg",
  infoImage: "https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/2021%20ara.png",
  gallery: ["https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/ara.jpeg",
  "https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/ara1.jpeg",
"https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/ara2.jpeg",
  "https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/ara3.jpeg",
],
  fact: {
    nl: "Deze ara kan meer dan 80 jaar oud worden!",
    fr: "Cet ara peut vivre plus de 80 ans !"
  }
},
{
  id: "10",
  names: { nl: "Amazone Aourou", fr: "Amazone Aourou" },
  category: { nl: "Vogel", fr: "Oiseau" },
  habitat: { nl: "Tropisch woud", fr: "Forêt tropicale" },
  continent: { nl: "Zuid-Amerika", fr: "Amérique du Sud" },
  image: "https://www.jungle-city.be/site/layout/img/junglecity-logo.png",
  infoImage: "https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/2021%20amazone.png",
  gallery: [
 "https://www.jungle-city.be/site/layout/img/junglecity-logo.png"

],
  fact: {
    nl: "Ze kunnen menselijke stemmen nadoen!",
    fr: "Ils peuvent imiter des voix humaines !"
  }
},
{
  id: "11",
  names: { nl: "Amazone met blauw voorhoofd", fr: "Amazone à front bleu" },
  category: { nl: "Vogel", fr: "Oiseau" },
  habitat: { nl: "Tropisch woud", fr: "Forêt tropicale" },
  continent: { nl: "Zuid-Amerika", fr: "Amérique du Sud" },
  image: "https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/amazonefrontbleu.jpeg",
  infoImage: "https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/2021%20amazone.png",
  gallery: [
 "https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/amazonefrontbleu.jpeg",
  "https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/amazonefrontbleu1.jpeg",
"https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/amazonefrontbleu2.jpeg",
  "https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/amazonefrontbleu3.jpeg",
"https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/amazonefrontbleu4.jpeg",
"https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/amazonefrontbleu5.jpeg"

],
  fact: {
    nl: "Een echte prater onder de papegaaien!",
    fr: "Un vrai bavard parmi les perroquets !"
  }
},
{
  id: "12",
  names: { nl: "Grote Eclectus", fr: "Grand Éclectus" },
  category: { nl: "Vogel", fr: "Oiseau" },
  habitat: { nl: "Tropisch bos", fr: "Forêt tropicale" },
  continent: { nl: "Oceanië", fr: "Océanie" },
  image: "https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/grandeclectus.jpeg",
  infoImage: "https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/2021%20eclectus.png",
  gallery: ["https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/grandeclectus.jpeg",
https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/grandeclectus1.jpeg"
],
  fact: {
    nl: "Mannetjes zijn groen, vrouwtjes rood-blauw. Uniek verschil!",
    fr: "Les mâles sont verts, les femelles rouges et bleues. Unique !"
  }
},
{
  id: "13",
  names: { nl: "Stokstaartje", fr: "Suricate" },
  category: { nl: "Zoogdier", fr: "Mammifère" },
  habitat: { nl: "Woestijn", fr: "Désert" },
  continent: { nl: "Afrika", fr: "Afrique" },
  image: "https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/suricate.jpeg",
  infoImage: "Thttps://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/2021%20suricate.jpg",
  gallery: [
 "https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/suricate.jpeg",
  "https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/suricate1.jpeg",
"https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/suricate2.jpeg",
  "https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/suricate3.jpeg",
"https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/suricate4.jpeg",
"https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/suricate5.jpeg",
 "https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/suricate6.jpeg",
  "https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/suricate7.jpeg",
"https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/suricate8.jpeg",
  "https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/suricate9.jpeg"

],
  fact: {
    nl: "Ze staan rechtop om roofdieren in de gaten te houden.",
    fr: "Ils se tiennent debout pour guetter les prédateurs."
  }
}
{
  id: "14",
  names: { nl: "Laveur de vitre", fr: "Laveur de vitre" },
  category: { nl: "Vis", fr: "Poisson" },
  habitat: { nl: "Zoet water", fr: "Eau douce" },
  continent: { nl: "Zuid-Amerika", fr: "Amérique du Sud" },
  image: "https://www.jungle-city.be/site/layout/img/junglecity-logo.png",
  infoImage: "NOT",
  gallery: ["https://www.jungle-city.be/site/layout/img/junglecity-logo.png"],
  fact: {
    nl: "Deze vis helpt om het aquarium schoon te houden!",
    fr: "Ce poisson aide à garder l’aquarium propre !"
  }
},
{
  id: "15",
  names: { nl: "Tétra du Congo", fr: "Tétra du Congo" },
  category: { nl: "Vis", fr: "Poisson" },
  habitat: { nl: "Rivier", fr: "Rivière" },
  continent: { nl: "Afrika", fr: "Afrique" },
  image: "https://www.jungle-city.be/site/layout/img/junglecity-logo.png",
  infoImage: "NOT",
  gallery: ["https://www.jungle-city.be/site/layout/img/junglecity-logo.png"],
  fact: {
    nl: "Deze vis schittert in het licht met regenboogkleuren!",
    fr: "Ce poisson brille comme un arc-en-ciel à la lumière !"
  }
},
{
  id: "16",
  names: { nl: "Agapornis", fr: "Inséparable" },
  category: { nl: "Vogel", fr: "Oiseau" },
  habitat: { nl: "Savanne", fr: "Savane" },
  continent: { nl: "Afrika", fr: "Afrique" },
  image: "https://www.jungle-city.be/site/layout/img/junglecity-logo.png",
  infoImage: "NOT",
  gallery: ["https://www.jungle-city.be/site/layout/img/junglecity-logo.png"],
  fact: {
    nl: "Agapornissen leven altijd in koppels, ze zijn echte liefdesvogels.",
    fr: "Les inséparables vivent en couple, d'où leur nom !"
  }
},
{
  id: "17",
  names: { nl: "Geit", fr: "Chèvre" },
  category: { nl: "Zoogdier", fr: "Mammifère" },
  habitat: { nl: "Boerderij", fr: "Ferme" },
  continent: { nl: "Wereldwijd", fr: "Partout dans le monde" },
  image: "https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/chèvre.jpeg",
  infoImage: "NOT",
  gallery: ["https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/chèvre.jpeg",
  "https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/chèvre1.jpeg",
"https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/chèvre2.jpeg",
  "https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/chèvre3.jpeg",
"https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/chèvre4.jpeg"
],
  fact: {
    nl: "Geiten kunnen op hun achterpoten staan om aan bladeren te komen!",
    fr: "Les chèvres peuvent se dresser sur leurs pattes arrière pour manger des feuilles !"
  }
},
{
  id: "18",
  names: { nl: "Kip", fr: "Poule domestique" },
  category: { nl: "Vogel", fr: "Oiseau" },
  habitat: { nl: "Boerderij", fr: "Ferme" },
  continent: { nl: "Wereldwijd", fr: "Partout dans le monde" },
  image: "https://www.jungle-city.be/site/layout/img/junglecity-logo.png",
  infoImage: "NOT",
  gallery: ["https://www.jungle-city.be/site/layout/img/junglecity-logo.png"],
  fact: {
    nl: "Een kip herkent meer dan 100 gezichten van andere kippen!",
    fr: "Une poule peut reconnaître plus de 100 visages de ses congénères !"
  }
},
{
  id: "19",
  names: { nl: "Tamme eend", fr: "Canard mignon" },
  category: { nl: "Vogel", fr: "Oiseau" },
  habitat: { nl: "Boerderij", fr: "Ferme" },
  continent: { nl: "Wereldwijd", fr: "Partout dans le monde" },
  image: "https://www.jungle-city.be/site/layout/img/junglecity-logo.png",
  infoImage: "NOT",
  gallery: ["https://www.jungle-city.be/site/layout/img/junglecity-logo.png"],
  fact: {
    nl: "Eenden hebben waterdichte veren dankzij een speciale olie.",
    fr: "Les canards ont des plumes imperméables grâce à une huile spéciale."
  }
},
{
  id: "20",
  names: { nl: "Indische loopeend", fr: "Canard coureur indien" },
  category: { nl: "Vogel", fr: "Oiseau" },
  habitat: { nl: "Boerderij", fr: "Ferme" },
  continent: { nl: "Azië", fr: "Asie" },
  image: "https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/canardcoureurindien.jpeg",
  infoImage: "NOT",
  gallery: ["https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/canardcoureurindien.jpeg"],
  fact: {
    nl: "Deze eenden lopen rechtop als pinguïns!",
    fr: "Ces canards marchent droit comme des pingouins !"
  }
}

{
  id: "21",
  names: { nl: "Bronzen kalkoen", fr: "Dindon bronzé d'Amérique" },
  category: { nl: "Vogel", fr: "Oiseau" },
  habitat: { nl: "Boerderij", fr: "Ferme" },
  continent: { nl: "Noord-Amerika", fr: "Amérique du Nord" },
  image: "https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/dindonbronzeamerique.jpeg",
  infoImage: "NOT",
  gallery: ["https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/dindonbronzeamerique.jpeg"],
  fact: {
    nl: "Kalkoenen maken grappige geluiden en kunnen hun kopkleur veranderen!",
    fr: "Les dindons émettent des sons amusants et changent la couleur de leur tête !"
  }
},
{
  id: "22",
  names: { nl: "Cavia", fr: "Cobaye" },
  category: { nl: "Zoogdier", fr: "Mammifère" },
  habitat: { nl: "Graslanden", fr: "Prairies" },
  continent: { nl: "Zuid-Amerika", fr: "Amérique du Sud" },
  image: "https://www.jungle-city.be/site/layout/img/junglecity-logo.png",
  infoImage: "NOT",
  gallery: ["https://www.jungle-city.be/site/layout/img/junglecity-logo.png"],
  fact: {
    nl: "Cavia’s communiceren met piepjes en spinnende geluidjes!",
    fr: "Les cobayes communiquent par des petits cris et des ronronnements !"
  }
},
{
  id: "23",
  names: { nl: "Pauw", fr: "Paon" },
  category: { nl: "Vogel", fr: "Oiseau" },
  habitat: { nl: "Open veld & bos", fr: "Champs & forêts" },
  continent: { nl: "Azië", fr: "Asie" },
  image: "https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/paon.jpeg",
  infoImage: "NOT",
  gallery: ["https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/paon.jpeg",
  "https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/paon1.jpeg",
"https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/paon2.jpeg"
],"],
  fact: {
    nl: "De mannetjespauwen openen hun veren in een prachtige waaier!",
    fr: "Les paons mâles déploient leurs plumes en éventail magnifique !"
  }
},
{
  id: "24",
  names: { nl: "Perruche omnicolore", fr: "Perruche omnicolore mutation bleue" },
  category: { nl: "Vogel", fr: "Oiseau" },
  habitat: { nl: "Bosrand", fr: "Lisière de forêt" },
  continent: { nl: "Australië", fr: "Australie" },
  image: "https://www.jungle-city.be/site/layout/img/junglecity-logo.png",
  infoImage: "NOT",
  gallery: ["https://www.jungle-city.be/site/layout/img/junglecity-logo.png"],
  fact: {
    nl: "Hun felle kleuren maken ze tot echte blikvangers!",
    fr: "Leurs couleurs vives attirent tous les regards !"
  }
},
{
  id: "25",
  names: { nl: "Perruche palliceps", fr: "Perruche palliceps" },
  category: { nl: "Vogel", fr: "Oiseau" },
  habitat: { nl: "Tropisch woud", fr: "Forêt tropicale" },
  continent: { nl: "Australië", fr: "Australie" },
  image: "https://www.jungle-city.be/site/layout/img/junglecity-logo.png",
  infoImage: "NOT",
  gallery: ["https://www.jungle-city.be/site/layout/img/junglecity-logo.png"],
  fact: {
    nl: "Ze zijn rustig, kleurrijk en houden van klimmen!",
    fr: "Elles sont calmes, colorées et adorent grimper !"
  }
},
{
  id: "26",
  names: { nl: "Kakariki cinnamon blauw", fr: "Kakariki à front rouge, mutation cinnamon bleu" },
  category: { nl: "Vogel", fr: "Oiseau" },
  habitat: { nl: "Bos", fr: "Forêt" },
  continent: { nl: "Nieuw-Zeeland", fr: "Nouvelle-Zélande" },
  image: "https://www.jungle-city.be/site/layout/img/junglecity-logo.png",
  infoImage: "NOT",
  gallery: ["https://www.jungle-city.be/site/layout/img/junglecity-logo.png"],
  fact: {
    nl: "Een energieke parkiet met een opvallend kleurtje!",
    fr: "Une perruche pleine d'énergie aux couleurs uniques !"
  }
},
{
  id: "27",
  names: { nl: "Fazant goud", fr: "Faisan doré" },
  category: { nl: "Vogel", fr: "Oiseau" },
  habitat: { nl: "Bos", fr: "Forêt" },
  continent: { nl: "Azië", fr: "Asie" },
  image: "https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/faisan.jpeg",
  infoImage: "NOT",
  gallery: [
 "https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/faisan.jpeg",
  "https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/faisan1.jpeg",
"https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/faisan2.jpeg",
  "https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/faisan3.jpeg",
"https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/faisan4.jpeg",
"https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/faisan5.jpeg"

],
  fact: {
    nl: "De mannetjes zijn spectaculair gekleurd met goud en rood!",
    fr: "Les mâles ont des plumes dorées et rouges magnifiques !"
  }
},
{
  id: "28",
  names: { nl: "Loriquet regenboog", fr: "Loriquet arc-en-ciel" },
  category: { nl: "Vogel", fr: "Oiseau" },
  habitat: { nl: "Tropisch woud", fr: "Forêt tropicale" },
  continent: { nl: "Australië", fr: "Australie" },
  image: "https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/loriquet.jpeg",
  infoImage: "NOT",
  gallery: [
 "https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/loriquet.jpeg",
  "https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/loriquet1.jpeg"

],
  fact: {
    nl: "Ze eten nectar met hun borsteltong!",
    fr: "Ils mangent du nectar avec leur langue en forme de brosse !"
  }
}
];

// Function to dynamically load animals
document.addEventListener("DOMContentLoaded", function () {
    if (typeof animals !== "undefined" && animals.length > 0) {
        var container = document.getElementById("animals-container");

        animals.forEach(animal => {
            var animalItem = document.createElement("div");
            animalItem.classList.add("animal-item");

animalItem.innerHTML = `
  <img 
    src="${animal.image}" 
    alt="${animal.names[taal]}" 
    class="animal-image" 
    onclick='openGallery(${JSON.stringify(animal.gallery || [animal.image])})'
  >

  <div class="animal-clickable-area" onclick="openModal('${animal.infoImage || ''}')">
    <h1 class="animal-title">${animal.names[taal]}</h1>
    <div class="animal-info-wrapper">
      <div class="info-category">${animal.category[taal]}</div>
      <div class="info-habitat">${animal.habitat[taal]}</div>
      <div class="info-continent">${animal.continent[taal]}</div>
    </div>
    <p class="animal-fact">🧐 ${animal.fact[taal]}</p>
    <button class="more-info-btn">📄 ${taal === 'nl' ? 'Meer info' : "Plus d'info"}</button>
  </div>

`;


            container.appendChild(animalItem);
        });
    } else {
        console.error("🚨 Animal data is not loaded correctly.");
    }
});



// 🔍 Search Function to Filter Animals
function filterAnimals() {
  let searchQuery = document.getElementById("search").value.toLowerCase();
  let animalsList = document.querySelectorAll(".animal-item");

  animalsList.forEach(item => {
    let name = item.querySelector(".animal-title").innerText.toLowerCase();
    item.style.display = name.includes(searchQuery) ? "block" : "none";
  });
}


// Paste it right below here ⬇
function openModal(imageUrl) {
    const modal = document.getElementById("animalModal");
    const modalImg = document.getElementById("modalImg");
    const spinner = document.getElementById("modalSpinner");

    // Show spinner before image loads
    spinner.style.display = "block";
    modalImg.style.display = "none"; // hide image until loaded

    modalImg.onload = () => {
        spinner.style.display = "none";
        modalImg.style.display = "block";
    };

    modalImg.src = imageUrl;
    modal.classList.remove("fade-out");
    modal.classList.add("fade-in");
    modal.style.display = "block";

    document.addEventListener("keydown", escKeyHandler);
}

function closeModal() {
    const modal = document.getElementById("animalModal");
    modal.classList.remove("fade-in");
    modal.classList.add("fade-out");

    setTimeout(() => {
        modal.style.display = "none";
    }, 200);

    document.removeEventListener("keydown", escKeyHandler);
}

function escKeyHandler(e) {
    if (e.key === "Escape") {
        closeModal();
    }
}

function clickOutsideToClose(event) {
    const modal = document.getElementById("animalModal");
    const modalImg = document.getElementById("modalImg");
    if (event.target === modal) {
        closeModal();
    }
}

let currentGallery = [];
let currentGalleryIndex = 0;

function openGallery(images) {
  if (!images || images.length === 0) return;
  currentGallery = images;
  currentGalleryIndex = 0;

  const galleryModal = document.getElementById("galleryModal");
  const galleryImage = document.getElementById("galleryImage");

  galleryImage.src = currentGallery[0];
  galleryModal.classList.remove("fade-out");
  galleryModal.classList.add("fade-in");
  galleryModal.style.display = "block";

  document.addEventListener("keydown", galleryKeyHandler);
}

function nextImage(e) {
  e.stopPropagation();
  if (currentGalleryIndex < currentGallery.length - 1) {
    currentGalleryIndex++;
    document.getElementById("galleryImage").src = currentGallery[currentGalleryIndex];
  }
}

function prevImage(e) {
  e.stopPropagation();
  if (currentGalleryIndex > 0) {
    currentGalleryIndex--;
    document.getElementById("galleryImage").src = currentGallery[currentGalleryIndex];
  }
}

function closeGallery() {
  const modal = document.getElementById("galleryModal");
  modal.classList.remove("fade-in");
  modal.classList.add("fade-out");
  setTimeout(() => {
    modal.style.display = "none";
  }, 200);

  document.removeEventListener("keydown", galleryKeyHandler);
}

function galleryKeyHandler(e) {
  if (e.key === "Escape") {
    closeGallery();
  } else if (e.key === "ArrowRight") {
    nextImage(e);
  } else if (e.key === "ArrowLeft") {
    prevImage(e);
  }
}

function clickOutsideGallery(event) {
  if (event.target.id === "galleryModal") {
    closeGallery();
  }
}
