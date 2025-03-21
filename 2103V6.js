// Default language
var taal = localStorage.getItem("taal") || "fr"; 

// Animal data
let animals = [
    {
        id: "1",
        names: { nl: "Ara Blauw", fr: "Ara Bleu & Jaune" },
        category: { nl: "Vogel", fr: "Oiseau" },
        habitat: { nl: "Jungle", fr: "Jungle" },
        continent: { nl: "Zuid-Amerika", fr: "Amérique du Sud" },
        image: "https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/Ara_bleu.jpeg",
        fact: {
            nl: "🦉 Blauwe ara’s kunnen tot 80 jaar oud worden!",
            fr: "🦉 Les aras bleus peuvent vivre jusqu'à 80 ans !"
        }
    },
    {
        id: "2",
        names: { nl: "Loriquet Regenboog", fr: "Loriquet Arc-en-ciel" },
        category: { nl: "Vogel", fr: "Oiseau" },
        habitat: { nl: "Bos", fr: "Forêt" },
        continent: { nl: "Australië", fr: "Australie" },
        image: "https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/Loriquet.jpeg",
        fact: {
            nl: "🦉 Ze houden van nectar en hebben een speciale tong om te likken!",
            fr: "🦉 Ils aiment le nectar et ont une langue spéciale pour le lécher !"
        }
    },
    {
        id: "3",
        names: { nl: "Suricaten", fr: "Suricates" },
        category: { nl: "Zoogdier", fr: "Mammifère" },
        habitat: { nl: "Woestijn", fr: "Désert" },
        continent: { nl: "Afrika", fr: "Afrique" },
        image: "https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/Suricaten.jpeg",
        fact: {
            nl: "🦉 Suricaten staan graag op hun achterpoten om gevaren te spotten!",
            fr: "🦉 Les suricates aiment se tenir sur leurs pattes arrière pour repérer les dangers !"
        }
    }
];

// Function to dynamically load animals
function loadAnimals() {
    var container = document.getElementById("animals-container");
    container.innerHTML = ""; // Clear previous content

    animals.forEach(animal => {
        var animalItem = document.createElement("div");
        animalItem.classList.add("animal-item");

        animalItem.innerHTML = `
            <img src="${animal.image}" alt="${animal.names[taal]}" class="animal-image">
            <h1 class="animal-title">${animal.names[taal]}</h1>
            <div class="animal-info-wrapper">
                <div class="info-category">${animal.category[taal]}</div>
                <div class="info-habitat">${animal.habitat[taal]}</div>
                <div class="info-continent">${animal.continent[taal]}</div>
            </div>
            <p class="animal-fact">${animal.fact[taal]}</p>
        `;

        container.appendChild(animalItem);
    });
}

// Function to filter animals
function filterAnimals() {
    let searchQuery = document.getElementById("search").value.toLowerCase();
    let animalsList = document.querySelectorAll(".animal-item");

    animalsList.forEach(item => {
        let name = item.querySelector(".animal-title").innerText.toLowerCase();
        item.style.display = name.includes(searchQuery) ? "block" : "none";
    });
}

// Function to toggle language
function toggleLanguage() {
    taal = taal === "fr" ? "nl" : "fr";
    localStorage.setItem("taal", taal);
    document.getElementById("language-toggle").innerText = taal === "fr" ? "🇳🇱 NL" : "🇫🇷 FR";
    loadAnimals(); // Reload animals in the selected language
}

// Event listener for language toggle button
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("language-toggle").addEventListener("click", toggleLanguage);
    loadAnimals(); // Initial load
});
