// Define the language dynamically (default: FR)
var taal = typeof taal !== "undefined" ? taal : "fr";

// ANIMALS LIST with FR and NL translations + Images + Fun Facts
let animals = [
    {
        id: "1",
        names: { nl: "Ara Blauw & Geel", fr: "Ara Bleu & Jaune" },
        category: { nl: "Vogel", fr: "Oiseau" },
        habitat: { nl: "Jungle", fr: "Jungle" },
        continent: { nl: "Zuid-Amerika", fr: "Amérique du Sud" },
        image: "https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/blue-and-yellow macaws1.jpeg",
      infoImage: "https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/2021%20eclectus.png",
          gallery: [
  "https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/emu1.jpeg",
  "https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/emu2.jpeg"
],
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
      infoImage: "https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/2021%20eclectus.png",
          gallery: [
  "https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/emu1.jpeg",
  "https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/emu2.jpeg"
],
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
      infoImage: "https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/2021%20eclectus.png",
          gallery: [
  "https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/emu1.jpeg",
  "https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/emu2.jpeg"
],
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
        infoImage: "https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/2021%20eclectus.png",
      gallery: [
  "https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/emu1.jpeg",
  "https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/emu2.jpeg"
],
        fact: { 
            nl: "Mannetjes zijn groen, maar vrouwtjes zijn rood en blauw!", 
            fr: "Les mâles sont verts, mais les femelles sont rouges et bleues !"
        }
    },
    {
        id: "5",
        names: { nl: "Stokstaartjes", fr: "Suricates" },
        category: { nl: "Zoogdier", fr: "Mammifère" },
        habitat: { nl: "Woestijn", fr: "Désert" },
        continent: { nl: "Afrika", fr: "Afrique" },
        image: "https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/meerkats%206.jpeg",
      infoImage: "https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/2021%20eclectus.png",
          gallery: [
  "https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/emu1.jpeg",
  "https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/emu2.jpeg"
],
        fact: { 
            nl: "Stokstaartjes staan graag op hun achterpoten om gevaar te spotten!", 
            fr: "Les suricates aiment se tenir sur leurs pattes arrière pour repérer les dangers !"
        }
    },
    {
        id: "6",
        names: { nl: "Bennett Wallaby", fr: "Wallaby de Bennett" },
        category: { nl: "Zoogdier", fr: "Mammifère" },
        habitat: { nl: "Bos", fr: "Forêt" },
        continent: { nl: "Australië", fr: "Australie" },
        image: "https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/Bennett's%20wallaby1.jpeg",
      infoImage: "https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/2021%20eclectus.png",
          gallery: [
  "https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/emu1.jpeg",
  "https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/emu2.jpeg"
],
        fact: { 
            nl: "Wallaby’s kunnen heel ver springen met hun sterke achterpoten!", 
            fr: "Les wallabies peuvent sauter très loin avec leurs pattes arrière puissantes !"
        }
    },
    {
        id: "7",
        names: { nl: "Pauw", fr: "Paon" },
        category: { nl: "Vogel", fr: "Oiseau" },
        habitat: { nl: "Bos en open velden", fr: "Forêt et champs ouverts" },
        continent: { nl: "India", fr: "Inde" },
        image: "https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/Indian%20peafowl1.jpeg",
      infoImage: "https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/2021%20eclectus.png",
          gallery: [
  "https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/emu1.jpeg",
  "https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/emu2.jpeg"
],
        fact: { 
            nl: "Mannetjes hebben prachtige veren en kunnen ze als een waaier openen!", 
            fr: "Les mâles ont de magnifiques plumes qu'ils peuvent ouvrir comme un éventail !"
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
  <img src="${animal.image}" alt="${animal.names[taal]}" class="animal-image" onclick="openGallery(${JSON.stringify(animal.gallery || [animal.image])})">

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
