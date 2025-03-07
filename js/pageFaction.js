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
const gallery = document.querySelector(".gallery");

// affiche le logo et le lore de la Faction
const logoFaction = document.createElement("img");
logoFaction.src=storedFaction.logo;
logoFaction.classList.add("logoFaction");
presentationLorewise.appendChild(logoFaction);
const loreFaction = document.createElement("p");
loreFaction.innerText = storedFaction.description;
presentationLorewise.appendChild(loreFaction);

// affiche les règles spéciales de la Faction


// affiche les spécialisations possibles
const specialties = document.createElement("div");
specialties.classList.add("specialties");
specialties.innerText = ` Spécialités possibles : ${storedFaction.specialties}`;
presentationGamewise.insertBefore(specialties,gallery);


// affiche les règles spéciales et cartes d'unités de la Faction
createFactionRules(storedFaction.specialRule);
storedFaction.profiles.forEach(profile => {
    createUnitCard(storedFaction, profile);
})

function createFactionRules(factionRules) {
    const factionRulesWrapper = document.createElement("div");
    factionRulesWrapper.classList.add("factionRulesWrapper");
    presentationGamewise.insertBefore(factionRulesWrapper, specialties);
    factionRules.forEach(rule => {
        const factionRule = document.createElement("div");
        const ruleName = document.createElement("p");
        ruleName.innerText = `${rule.name} :`;
        ruleName.classList.add("ruleName");
        factionRule.appendChild(ruleName);
        const ruleGamewise = document.createElement("p");
        ruleGamewise.innerText = rule.rule;
        ruleGamewise.classList.add("ruleGamewise");
        factionRule.appendChild(ruleGamewise);
        factionRulesWrapper.appendChild(factionRule);
    })
}

function createUnitCard(faction, unit) {
    // creation de nodes
    const unitCard = document.createElement("div");
    // head
    const unitLogo = document.createElement("img");
    const unitName = document.createElement("h3");
    const unitCost = document.createElement("p");
    const head = document.createElement("div");
    // type & rank
    const unitTypeRank = document.createElement("p");
    const typeAndrank = document.createElement("div");
    // stats
    const unitM = document.createElement("p");
    const unitE = document.createElement("p");
    const unitV = document.createElement("p");
    const unitC = document.createElement("p");
    const stats = document.createElement("div");
    // weaponHead
    const unitWeaponTitle = document.createElement("p");
    const weaponHead = document.createElement("div");
    // weapons 
    
    // special
    const unitRules = document.createElement("p");
    const special = document.createElement("div");


    // configuration des nodes
    unitCard.classList.add("unitCard");
    unitLogo.src = faction.logo;
    unitName.innerText = unit.name;
    unitCost.innerText = unit.cost;
    head.classList.add("unitCard_head");
    unitTypeRank.innerText = `type : ${unit.type} / rang: ${unit.rank}`;
    typeAndrank.classList.add("unitCard_typeAndRank");
    unitM.innerText = `M : ${unit.move}`;
    unitE.innerText = `E : ${unit.endurance}`;
    unitV.innerText = `V : ${unit.will}`;
    unitC.innerText = `C : ${unit.combat}`;
    stats.classList.add("unitCard_stats");
    unitWeaponTitle.innerText = "Armes";
    
    weaponHead.classList.add("unitCard_weaponHead");
    unitRules.innerText = unit.specialRule;
    special.classList.add("unitCard_special");

    // injection des nodes
    gallery.appendChild(unitCard);
    // --- div head
    unitCard.appendChild(head);
    head.appendChild(unitLogo);
    head.appendChild(unitName);
    head.appendChild(unitCost);
    // --- div type & rank
    unitCard.appendChild(typeAndrank);
    typeAndrank.appendChild(unitTypeRank);
    // --- div stats
    unitCard.appendChild(stats);
    stats.appendChild(unitM);
    stats.appendChild(unitE);
    stats.appendChild(unitV);
    stats.appendChild(unitC);
    // --- div weapon head
    unitCard.appendChild(weaponHead);
    weaponHead.appendChild(unitWeaponTitle);
    // --- div weapons stats
    
    unit.weapons.forEach(weapon => {
        const weapons = document.createElement("div");
        unitCard.appendChild(weapons);
        weapons.classList.add("unitCard_weapons");
        const weaponName = document.createElement("p");
        const weaponLongueur = document.createElement("p");
        const weaponRafale = document.createElement("p");
        const weaponPuissance = document.createElement("p");
        weaponName.innerText = weapon.name;
        weaponLongueur.innerText = `L : ${weapon.Longueur}`;
        weaponRafale.innerText = `R : ${weapon.Rafale}`;
        weaponPuissance.innerText = `P : ${weapon.Puissance}`;
        weapons.appendChild(weaponName);
        weapons.appendChild(weaponLongueur);
        weapons.appendChild(weaponRafale);
        weapons.appendChild(weaponPuissance);
    });
    // --- div special rules
    unitCard.appendChild(special);
    special.appendChild(unitRules);
}
