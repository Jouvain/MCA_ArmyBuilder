// l'objet 'Faction' choisie sur la page précédente est récupéré et parsé depuis le sessionStorage 
const storedFactionString = sessionStorage.getItem("faction");
const storedFaction = JSON.parse(storedFactionString);

// le bandeau affiche le nom de la Faction
const headline = document.getElementsByClassName("headline");
headline[0].innerText = storedFaction.name;

storedFaction.profiles.forEach(profile => {
    createUnitCard(storedFaction, profile);
})


function createUnitCard(faction, unit) {
    // creation de nodes
    const unitCard = document.createElement("div");
    // head
    const unitLogo = document.createElement("img");
    const unitName = document.createElement("h3");
    const unitCost = document.createElement("p");
    const head = document.createElement("div");
    const addBtn = document.createElement("button");
    // type & rank
    const unitTypeRank = document.createElement("p");
    const typeAndrank = document.createElement("div");
    // stats
    const unitM = document.createElement("p");
    const unitE = document.createElement("p");
    const unitV = document.createElement("p");
    const unitC = document.createElement("p");
    const stats = document.createElement("div");
    // ligne de type, reng et stats
    const typeRangStats = document.createElement("div");
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
    addBtn.classList.add("addBtn");
    addBtn.innerText = "+";
    addBtn.addEventListener("click", ()=> {
        addUnit(faction, unit);
    });
    // addBtn.innerHTML = "&#9960;"
    unitTypeRank.innerText = `type : ${unit.type} / rang: ${unit.rank}`;
    typeAndrank.classList.add("unitCard_typeAndRank");
    unitM.innerText = `M : ${unit.move}`;
    unitE.innerText = `E : ${unit.endurance}`;
    unitV.innerText = `V : ${unit.will}`;
    unitC.innerText = `C : ${unit.combat}`;
    stats.classList.add("unitCard_stats");
    unitWeaponTitle.innerText = "Armes";
    typeRangStats.classList.add("typeRangStats");
    weaponHead.classList.add("unitCard_weaponHead");
    unitRules.innerText = unit.specialRule;
    special.classList.add("unitCard_special");

    // injection des nodes
    const factionGallery = document.querySelector(".factionGallery");
    factionGallery.appendChild(unitCard);
    // --- div head
    unitCard.appendChild(head);
    head.appendChild(unitLogo);
    unitLogo.classList.add(".unitLogo");
    head.appendChild(unitName);
    unitName.classList.add(".unitName");
    head.appendChild(unitCost);
    head.appendChild(addBtn);
    // --- div type & rank & stats
    unitCard.appendChild(typeRangStats);
    typeRangStats.appendChild(typeAndrank)
    typeRangStats.appendChild(stats);
    typeAndrank.appendChild(unitTypeRank);
    // --- div stats
    
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


function addUnit(faction, unit) {
    
    // creation de nodes
    const unitCard = document.createElement("div");
    // head
    const unitLogo = document.createElement("img");
    const unitName = document.createElement("h3");
    const unitCost = document.createElement("p");
    const head = document.createElement("div");
    const addBtn = document.createElement("button");
    // type & rank
    const unitTypeRank = document.createElement("p");
    const typeAndrank = document.createElement("div");
    // stats
    const unitM = document.createElement("p");
    const unitE = document.createElement("p");
    const unitV = document.createElement("p");
    const unitC = document.createElement("p");
    const stats = document.createElement("div");
    // ligne de type, reng et stats
    const typeRangStats = document.createElement("div");
    // weaponHead
    const unitWeaponTitle = document.createElement("p");
    const weaponHead = document.createElement("div");
    // weapons 
    
    // special
    const unitRules = document.createElement("p");
    const special = document.createElement("div");


    // configuration des nodes
    unitCard.classList.add("unitCard");
    unitCard.classList.add("printable");
    unitLogo.src = faction.logo;
    unitName.innerText = unit.name;
    unitCost.innerText = unit.cost;
    head.classList.add("unitCard_head");
    addBtn.classList.add("addBtn");
    addBtn.innerText = "...";

    unitTypeRank.innerText = `type : ${unit.type} / rang: ${unit.rank}`;
    typeAndrank.classList.add("unitCard_typeAndRank");
    unitM.innerText = `M : ${unit.move}`;
    unitE.innerText = `E : ${unit.endurance}`;
    unitV.innerText = `V : ${unit.will}`;
    unitC.innerText = `C : ${unit.combat}`;
    stats.classList.add("unitCard_stats");
    unitWeaponTitle.innerText = "Armes";
    typeRangStats.classList.add("typeRangStats");
    weaponHead.classList.add("unitCard_weaponHead");
    unitRules.innerText = unit.specialRule;
    special.classList.add("unitCard_special");

    // injection des nodes
    const squadGallery = document.querySelector(".squadGallery");
    squadGallery.appendChild(unitCard);
    // --- div head
    unitCard.appendChild(head);
    head.appendChild(unitLogo);
    head.appendChild(unitName);
    head.appendChild(unitCost);
    head.appendChild(addBtn);
    // --- div type & rank & stats
    unitCard.appendChild(typeRangStats);
    typeRangStats.appendChild(typeAndrank)
    typeRangStats.appendChild(stats);
    typeAndrank.appendChild(unitTypeRank);
    // --- div stats
    
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


document.querySelector(".printBtn").addEventListener("click", () => {
    const {jsPDF} = window.jspdf;
    const pdf = new jsPDF({
        orientation: 'p',
        unit: 'mm',
        format: 'a4',
        putOnlyUsedFonts:true
       });
    const selection = document.querySelectorAll(".printable");
    let yPosition = 10; // Position verticale initiale
    

    const cardWidth = 100;
    const cardHeight = 100;
    const cardFill = [143, 23, 23];
    const textFill = [0, 0, 0];

    selection.forEach(card => {
        pdf.setFillColor(...cardFill);
        pdf.setTextColor(...textFill);
        pdf.rect(10, yPosition, cardWidth, cardHeight, "F");
        // Récupérer le contenu de chaque carte
        card.childNodes.forEach((node)=> {
            
            
            node.childNodes.forEach((subnode)=> {
                pdf.text(subnode.innerText, 10, yPosition);
                yPosition += 10; // Ajuster la position verticale
                console.log(subnode.childNodes);
            })
            
        })
        console.log(card.childNodes);

        yPosition += cardHeight + 20; // Ajouter un espace après chaque carte
    
        // Gérer les pages si nécessaire
        if (yPosition + cardHeight > pdf.internal.pageSize.getHeight()) {
            pdf.addPage();
            yPosition = 20; // Réinitialiser la position sur la nouvelle page
          }
      });
    
      // Sauvegarder le PDF
      pdf.save("cartes.pdf");

})


  