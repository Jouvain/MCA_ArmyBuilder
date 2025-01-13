// Chargement des données factions
async function loadFactions() {
    const response = await fetch('data/armyBook.json');
    return await response.json();
  }
  
  // Initialisation de l'application
  async function init() {
    const factionsData = await loadFactions();
    populateFactionDropdown(factionsData.factions);
    // createFactionCard(factionsData.factions[1]);
    createGallery(factionsData.factions);
    console.log(factionsData.factions);
  }
  
  
  function populateFactionDropdown(factions) {
    const dropdown = document.getElementById('faction-dropdown');
    factions.forEach(faction => {
      const option = document.createElement('option');
      option.value = faction.name;
      option.textContent = faction.name;
      dropdown.appendChild(option);
      console.log(faction.name);
    });
  
    // Listener pour la sélection
    dropdown.addEventListener('change', (event) => {
      const selectedFaction = factions.find(f => f.name === event.target.value);
      if (selectedFaction) {
        showArmyCreation(selectedFaction);
        storeInSession(selectedFaction.name);
      }
    });
  }
  
  function showArmyCreation(faction) {
    document.getElementById('army-creation').style.display = 'block';
    const unitList = document.getElementById('unit-list');
    unitList.innerHTML = ''; // Clear existing units
    
    faction.profiles.forEach(profile => {
      const unitDiv = document.createElement('div');
      unitDiv.innerHTML = `
        <div>
          <h3>${profile.name} (${profile.cost} points)</h3>
          <p>Attaque : ${profile.name}, Défense : ${profile.type}</p>
          </label>
        </div>
      `;
      unitList.appendChild(unitDiv);
    });
  }
  
function createGallery(factions) {
  factions.forEach(faction => {
    createFactionCard(faction);
  })
}

  function createFactionCard(faction) {
    // création des éléments
    const factionCard = document.createElement("div");
    const factionDesignation = document.createElement("p");
    const factionLogo = document.createElement("img");
    // attributs selon faction
    factionDesignation.innerText = faction.name;
    factionLogo.src = faction.logo;
    // injection dans le DOM
    factionCard.appendChild(factionLogo);
    factionCard.appendChild(factionDesignation);
    document.getElementById("gallery").appendChild(factionCard);
    factionCard.classList.add("factionCard");
  }

  init();
  
  document.getElementById('export-pdf').addEventListener('click', () => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
  
    doc.text("Liste d'armée", 10, 10);
    const units = document.querySelectorAll('#unit-list input');
    let y = 20;
  
    units.forEach(input => {
      const quantity = input.value;
      const unitName = input.dataset.unit;
      doc.text(`${unitName}: ${quantity}`, 10, y);
      y += 10;
    });
  
    doc.save('army_list.pdf');
  });

  function storeInSession(faction) {
    sessionStorage.setItem("faction", faction);
  }

  // document.getElementById("choixFaction").addEventListener("click", ()=> {
  //   storeInSession("Domination");
  // })
  