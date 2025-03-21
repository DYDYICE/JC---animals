// Language definition
var taal = typeof taal !== "undefined" ? taal : "fr";

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
        console.error("Animal data is not loaded correctly.");
    }
});

// Filter animals by search
function filterAnimals() {
    let searchQuery = document.getElementById("search").value.toLowerCase();
    let animalsList = document.querySelectorAll(".animal-item");

    animalsList.forEach(item => {
        let name = item.querySelector(".animal-title").innerText.toLowerCase();
        item.style.display = name.includes(searchQuery) ? "block" : "none";
    });
}
