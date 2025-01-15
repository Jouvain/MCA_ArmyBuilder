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

function createUnitCard(faction, unit) {
    // creation de nodes
    const unitCard = document.createElement("div");
    const unitLogo = document.createElement("img");
    const unitName = document.createElement("h3");
    const unitCost = document.createElement("p");
    const unitTypeRank = document.createElement("p");
    const unitM = document.createElement("p");
    const unitE = document.createElement("p");
    const unitV = document.createElement("p");
    const unitC = document.createElement("p");
    const unitWeaponTitle = document.createElement("p");
    const unitRules = document.createElement("p");



    // configuration des nodes
    unitLogo.src = faction.logo;
    unitName.innerText = unit.name;
    unitCost.innerText = unit.cost;
    unitTypeRank.innerText = `type : ${unit.type} / rang: ${unit.rank}`;
    unitM.innerText = `M : ${unit.move}`;
    unitE.innerText = `E : ${unit.endurance}`;
    unitV.innerText = `V : ${unit.will}`;
    unitC.innerText = `C : ${unit.combat}`;
    unitWeaponTitle.innerText = "Armes";
    unitRules.innerText = unit.specialRule;

    // injection des nodes
    presentationGamewise.appendChild(unitCard);
    // --- div head
    unitCard.appendChild(unitLogo);
    unitCard.appendChild(unitName);
    unitCard.appendChild(unitCost);
    // --- div type & rank
    unitCard.appendChild(unitTypeRank);
    // --- div stats
    unitCard.appendChild(unitM);
    unitCard.appendChild(unitE);
    unitCard.appendChild(unitV);
    unitCard.appendChild(unitC);
    // --- div weapon head
    unitCard.appendChild(unitWeaponTitle);
    // --- div weapons stats
    unit.weapons.forEach(weapon => {
        const weaponName = document.createElement("p");
        const weaponLongueur = document.createElement("p");
        const weaponRafale = document.createElement("p");
        const weaponPuissance = document.createElement("p");
        weaponName.innerText = weapon.name;
        weaponLongueur.innerText = `L : ${weapon.Longueur}`;
        weaponRafale.innerText = `R : ${weapon.Rafale}`;
        weaponPuissance.innerText = `P : ${weapon.Puissance}`;
        unitCard.appendChild(weaponName);
        unitCard.appendChild(weaponLongueur);
        unitCard.appendChild(weaponRafale);
        unitCard.appendChild(weaponPuissance);
    });
    // --- div special rules
    unitCard.appendChild(unitRules);
}

createUnitCard(storedFaction, storedFaction.profiles[4]);


// affiche les règles spéciales et cartes d'unités de la Faction
