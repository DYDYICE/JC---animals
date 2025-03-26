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
 "https://https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/kookaburra.jpeg",
  "https://https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/kookaburra1.jpeg",
"https://https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/kookaburra2.jpeg",
  "https://https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/kookaburra3.jpeg",
"https://https://www.jungle-city.be/site/files/images/jungle%20city/Animaux/Dydy2025/kookaburra4.jpeg"
],
  fact: {
    nl: "Kookaburra's lachen luid — het klinkt als mensenlachen!",
    fr: "Les kookaburras rient fort — cela ressemble à un rire humain !"
  }
},
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
