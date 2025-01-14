// l'objet 'Faction' choisie sur la page précédente est récupéré et parsé depuis le sessionStorage 
const storedFactionString = sessionStorage.getItem("faction");
const storedFaction = JSON.parse(storedFactionString);

// le bandeau affiche le nom de la Faction
const headline = document.getElementsByClassName("headline");
headline[0].innerText = storedFaction.name;

// récupère les sections HTML pour injections futures d'enfants
const presentationLorewise = document.querySelector(".presentationLorewise");
const interaction = document.querySelector(".interaction");
const presentationGamewise = document.querySelector(".presentationGamewise");

// affiche le logo et le lore de la Faction
const logoFaction = document.createElement("img");
logoFaction.src=storedFaction.logo;
logoFaction.classList.add("logoFaction");
presentationLorewise.appendChild(logoFaction);
const loreFaction = document.createElement("p");
loreFaction.innerText = storedFaction.description;
presentationLorewise.appendChild(loreFaction);

// affiche les règles spéciales et cartes d'unités de la Faction
// ********* TODO