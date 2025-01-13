// Chargement des données factions
async function loadFactions() {
    const response = await fetch('data/armyBook.json');
    return await response.json();
}
  
// Initialisation de l'application
async function init() {
const factionsData = await loadFactions();
console.log(factionsData.factions);
selectFaction(factionsData.factions);
}

function selectFaction(factions) {
    // const selectedFaction = factions[0].name;
    const selectedFaction = factions.find(f => f.name === storedFaction);
    const factionTitle = document.createElement("h2");
    factionTitle.innerText = selectedFaction.name;
    document.getElementById("body").appendChild(factionTitle);
}

init();

const storedFaction = sessionStorage.getItem("faction");


// const factionTitle = document.createElement("h2");
// factionTitle.innerText = Faction;
// document.getElementById("body").appendChild(factionTitle);
