// 🌍 Define language dynamically (default: FR)
var taal = localStorage.getItem("lang") || "fr";

// 🦜 Animal Data
let animals = [
    {
        id: "1",
        names: { nl: "Ara Blauw & Geel", fr: "Ara Bleu & Jaune" },
        category: { nl: "Vogel", fr: "Oiseau" },
        habitat: { nl: "Jungle", fr: "Jungle" },
        continent: { nl: "Zuid-Amerika", fr: "Amérique du Sud" },
        image: "https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/blue-and-yellow macaws1.jpeg",
        fact: { 
            nl: "Blauwe ara’s kunnen wel 80 jaar oud worden!", 
            fr: "Les aras bleus peuvent vivre jusqu'à 80 ans !"
        }
    },
    {
        id: "2",
        names: { nl: "Amazone Aourou", fr: "Amazone Aourou" },
        category: { nl: "Vogel", fr: "Oiseau" },
        habitat: { nl: "Regenwoud", fr: "Forêt tropicale" },
        continent: { nl: "Zuid-Amerika", fr: "Amérique du Sud" },
        image: "https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/Amazone-Aourou1.jpeg",
        fact: { 
            nl: "Deze papegaaien kunnen menselijke woorden leren!", 
            fr: "Ces perroquets peuvent apprendre des mots humains !"
        }
    },
    {
        id: "3",
        names: { nl: "Loriquet Regenboog", fr: "Loriquet Arc-en-ciel" },
        category: { nl: "Vogel", fr: "Oiseau" },
        habitat: { nl: "Bos", fr: "Forêt" },
        continent: { nl: "Australië", fr: "Australie" },
        image: "https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/rainbow%20lorikeet1.jpeg",
        fact: { 
            nl: "Ze eten graag nectar en hebben een speciale tong om het op te likken!", 
            fr: "Ils aiment le nectar et ont une langue spéciale pour le lécher !"
        }
    },
    {
        id: "4",
        names: { nl: "Grote Eclectus", fr: "Grand Eclectus" },
        category: { nl: "Vogel", fr: "Oiseau" },
        habitat: { nl: "Tropisch", fr: "Tropical" },
        continent: { nl: "Oceanië", fr: "Océanie" },
        image: "https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/Eclectus%20parrotF1.jpeg",
        fact: { 
            nl: "Mannetjes zijn groen, maar vrouwtjes zijn rood en blauw!", 
            fr: "Les mâles sont verts, mais les femelles sont rouges et bleues !"
        }
    }
];

// 🖼️ Load animals dynamically
function loadAnimals() {
    let container = document.getElementById("animals-container");
    container.innerHTML = ""; // Clear previous content

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
            <p>🦉 ${animal.fact[taal]}</p>
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

// 🌍 Change Language
function changeLanguage() {
    taal = document.getElementById("language").value;
    localStorage.setItem("lang", taal);
    loadAnimals(); // Reload animals in new language
}

// Load animals on page load
document.addEventListener("DOMContentLoaded", function () {
    loadAnimals();
});
