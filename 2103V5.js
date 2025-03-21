// Define default language (French)
var taal = typeof taal !== "undefined" ? taal : "fr";

// Animal Data
let animals = [
    {
        id: "1",
        names: { nl: "Ara Blauw & Geel", fr: "Ara Bleu & Jaune" },
        category: { nl: "Vogel", fr: "Oiseau" },
        habitat: { nl: "Jungle", fr: "Jungle" },
        continent: { nl: "Zuid-Amerika", fr: "Amérique du Sud" },
        fact: { nl: "Blauwe ara's kunnen tot 80 jaar oud worden!", fr: "Les aras bleus peuvent vivre jusqu'à 80 ans !" },
        image: "https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/Ara_bleu_jaune1.jpeg"
    },
    {
        id: "2",
        names: { nl: "Loriquet Regenboog", fr: "Loriquet Arc-en-ciel" },
        category: { nl: "Vogel", fr: "Oiseau" },
        habitat: { nl: "Bos", fr: "Forêt" },
        continent: { nl: "Australië", fr: "Australie" },
        fact: { nl: "Ze houden van nectar en hebben een speciale tong om het te likken!", fr: "Ils aiment le nectar et ont une langue spéciale pour le lécher !" },
        image: "https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/Loriquet1.jpeg"
    },
    {
        id: "3",
        names: { nl: "Suricaten", fr: "Suricates" },
        category: { nl: "Zoogdier", fr: "Mammifère" },
        habitat: { nl: "Woestijn", fr: "Désert" },
        continent: { nl: "Afrika", fr: "Afrique" },
        fact: { nl: "Suricaten staan op hun achterpoten om gevaar op te sporen!", fr: "Les suricates aiment se tenir sur leurs pattes arrière pour repérer les dangers !" },
        image: "https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/Suricate1.jpeg"
    },
    {
        id: "4",
        names: { nl: "Bennett's Wallaby", fr: "Wallaby de Bennett" },
        category: { nl: "Zoogdier", fr: "Mammifère" },
        habitat: { nl: "Bos", fr: "Forêt" },
        continent: { nl: "Australië", fr: "Australie" },
        fact: { nl: "Wallaby’s kunnen ver springen met hun sterke achterpoten!", fr: "Les wallabies peuvent sauter très loin avec leurs pattes arrière puissantes !" },
        image: "https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/Bennett's%20wallaby1.jpeg"
    },
    {
        id: "5",
        names: { nl: "Pauw", fr: "Paon" },
        category: { nl: "Vogel", fr: "Oiseau" },
        habitat: { nl: "Bos en open velden", fr: "Forêt et champs ouverts" },
        continent: { nl: "India", fr: "Inde" },
        fact: { nl: "Pauw-mannetjes kunnen hun kleurrijke veren als een waaier openen!", fr: "Les mâles ont de magnifiques plumes qu'ils peuvent ouvrir comme un éventail !" },
        image: "https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/Paon1.jpeg"
    }
];

// Function to load animals dynamically
document.addEventListener("DOMContentLoaded", function () {
    loadAnimals();

    // Set up language toggle
    document.getElementById("language-toggle").addEventListener("click", toggleLanguage);
});

// Load and display animals
function loadAnimals() {
    let container = document.getElementById("animals-container");
    container.innerHTML = "";

    animals.forEach(animal => {
        let animalItem = document.createElement("div");
        animalItem.classList.add("animal-item");

        animalItem.innerHTML = `
            <img src="${animal.image}" alt="${animal.names[taal]}" class="animal-image">
            <h1 class="animal-title">${animal.names[taal]}</h1>
            <div class="animal-info-wrapper">
                <div class="info-category">${animal.category[taal]}</div>
                <div class="info-habitat">${animal.habitat[taal]}</div>
                <div class="info-continent">${animal.continent[taal]}</div>
            </div>
            <p class="animal-fact">🦉 ${animal.fact[taal]}</p>
        `;

        container.appendChild(animalItem);
    });
}

// Filter function for animals
function filterAnimals() {
    let searchQuery = document.getElementById("search").value.toLowerCase();
    let animalsList = document.querySelectorAll(".animal-item");

    animalsList.forEach(item => {
        let name = item.querySelector(".animal-title").innerText.toLowerCase();
        item.style.display = name.includes(searchQuery) ? "block" : "none";
    });
}

// Language toggle function
function toggleLanguage() {
    taal = taal === "fr" ? "nl" : "fr";
    loadAnimals();
    document.getElementById("language-toggle").innerText = taal === "fr" ? "🇳🇱 NL" : "🇫🇷 FR";
}
