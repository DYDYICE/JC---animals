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
        id: "19",
        names: { nl: "Stokstaartjes", fr: "Suricates" },
        category: { nl: "Zoogdier", fr: "Mammifère" },
        habitat: { nl: "Woestijn", fr: "Désert" },
        continent: { nl: "Afrika", fr: "Afrique" }
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
                <img src="https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Jungle_City_224.jpg" 
                    alt="${animal.names[taal]}" class="animal-image">
                <h1 class="animal-title">${animal.names[taal]}</h1>
                <div class="animal-info-wrapper">
                    <div class="info-category">${animal.category[taal]}</div>
                    <div class="info-habitat">${animal.habitat[taal]}</div>
                    <div class="info-continent">${animal.continent[taal]}</div>
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
