// l'objet 'Faction' choisie sur la page précédente est récupéré et parsé depuis le sessionStorage 
const storedFactionString = sessionStorage.getItem("faction");
const storedFaction = JSON.parse(storedFactionString);

// le bandeau affiche le nom de la Faction
const headline = document.getElementsByClassName("headline");
headline[0].innerText = storedFaction.name;