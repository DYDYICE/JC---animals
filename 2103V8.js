// Define language dynamically (default: FR)
var taal = typeof taal !== "undefined" ? taal : "fr";

// Animal Data
let animals = [
    {
        id: "1",
        names: { nl: "Ara Blauw", fr: "Ara Bleu & Jaune" },
        category: { nl: "Vogel", fr: "Oiseau" },
        habitat: { nl: "Jungle", fr: "Jungle" },
        continent: { nl: "Zuid-Amerika", fr: "Amérique du Sud" },
        image: "https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/Ara.jpeg",
        info: { nl: "Blauwe ara's kunnen tot 80 jaar leven!", fr: "Les aras bleus peuvent vivre jusqu'à 80 ans !" }
    },
    {
        id: "2",
        names: { nl: "Loriquet Regenboog", fr: "Loriquet Arc-en-ciel" },
        category: { nl: "Vogel", fr: "Oiseau" },
        habitat: { nl: "Forêt", fr: "Forêt" },
        continent: { nl: "Australië", fr: "Australie" },
        image: "https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/Loriquet.jpeg",
        info: { nl: "Ze houden van nectar en hebben een speciale tong!", fr: "Ils aiment le nectar et ont une langue spéciale pour le lécher !" }
    },
    {
        id: "3",
        names: { nl: "Stokstaartje", fr: "Suricates" },
        category: { nl: "Zoogdier", fr: "Mammifère" },
        habitat: { nl: "Désert", fr: "Désert" },
        continent: { nl: "Afrika", fr: "Afrique" },
        image: "https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/Suricate.jpeg",
        info: { nl: "Ze staan rechtop om gevaar te spotten!", fr: "Les suricates aiment se tenir sur leurs pattes arrière pour repérer les dangers !" }
    },
    {
        id: "4",
        names: { nl: "Bennett Wallaby", fr: "Wallaby de Bennett" },
        category: { nl: "Zoogdier", fr: "Mammifère" },
        habitat: { nl: "Forêt", fr: "Forêt" },
        continent: { nl: "Australië", fr: "Australie" },
        image: "https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/Wallaby.jpeg",
        info: { nl: "Ze kunnen ver springen met hun achterpoten!", fr: "Les wallabies peuvent sauter très loin avec leurs pattes arrière puissantes !" }
    }
];

// Load animals dynamically
function loadAnimals() {
    let container = document.getElementById("animals-container");
    container.innerHTML = ""; // Clear existing content

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
            <p>${animal.info[taal]}</p>
        `;

        container.appendChild(animalItem);
    });
}

// 🔍 Search + Filter Function
function filterAnimals() {
    let searchQuery = document.getElementById("search").value.toLowerCase();
    let categoryFilter = document.getElementById("filter-category").value;
    let habitatFilter = document.getElementById("filter-habitat").value;
    
    let animalsList = document.querySelectorAll(".animal-item");

    animalsList.forEach(item => {
        let name = item.querySelector(".animal-title").innerText.toLowerCase();
        let category = item.querySelector(".info-category").innerText;
        let habitat = item.querySelector(".info-habitat").innerText;
        
        let matchesSearch = name.includes(searchQuery);
        let matchesCategory = (categoryFilter === "all" || category === categoryFilter);
        let matchesHabitat = (habitatFilter === "all" || habitat === habitatFilter);

        item.style.display = (matchesSearch && matchesCategory && matchesHabitat) ? "block" : "none";
    });
}

// Load animals on page load
document.addEventListener("DOMContentLoaded", function () {
    loadAnimals();
});
