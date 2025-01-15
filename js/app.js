// Chargement des données factions
async function loadFactions() {
  const response = await fetch('data/armyBook.json');
  return await response.json();
}
  
// Initialisation de l'application
async function init() {
  const factionsData = await loadFactions();
  createGallery(factionsData.factions);
}
  

  
function createGallery(factions) {
  factions.forEach(faction => {
    createFactionCard(faction);
  })
}

function createFactionCard(faction) {
  // création des éléments
  const linkWrapper = document.createElement("a");
  linkWrapper.href = "pageFaction.html";
  const factionCard = document.createElement("div");
  const factionDesignation = document.createElement("p");
  const factionLogo = document.createElement("img");
  // attributs selon faction
  factionDesignation.innerText = faction.name;
  factionLogo.src = faction.logo;
  // injection dans le DOM
  linkWrapper.appendChild(factionCard);
  factionCard.appendChild(factionLogo);
  factionCard.appendChild(factionDesignation);
  document.getElementById("gallery").appendChild(linkWrapper);
  factionCard.classList.add("factionCard");

  linkWrapper.addEventListener("click", ()=> {
    storeInSession(faction)
  })
}

init();

// document.getElementById('export-pdf').addEventListener('click', () => {
//   const { jsPDF } = window.jspdf;
//   const doc = new jsPDF();

//   doc.text("Liste d'armée", 10, 10);
//   const units = document.querySelectorAll('#unit-list input');
//   let y = 20;

//   units.forEach(input => {
//     const quantity = input.value;
//     const unitName = input.dataset.unit;
//     doc.text(`${unitName}: ${quantity}`, 10, y);
//     y += 10;
//   });

//   doc.save('army_list.pdf');
// });

function storeInSession(faction) {
  const storedFaction = JSON.stringify(faction);
  sessionStorage.setItem("faction", storedFaction);
}

 
  