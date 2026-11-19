// Tableau d'objets (des devinettes) et leur réponse
const devinettes = [
  {
    question:
      "Je commence la nuit et je finis le matin, mais je n'apparais qu'au milieu de la journée. Qui suis-je ?",
    reponse: "La lettre N.",
  },
  {
    question: "Qu'est-ce qui se brise dès qu'on prononce son nom ?",
    reponse: "Le silence.",
  },
  {
    question: "J'ai des dents, mais je ne mange jamais. Qui suis-je ?",
    reponse: "Une scie (ou un peigne).",
  },
  {
    question: "Qu'est-ce qui monte, mais ne descend jamais ?",
    reponse: "L'âge.",
  },
];

const zoneDevinette = document.querySelector("#zone-devinette");
const zoneReponse = document.querySelector("#zone-reponse");
const boutonNouvelleDevinette = document.querySelector(
  "#btn-nouvelle-devinette",
);
const boutonVoirReponse = document.querySelector("#btn-voir-reponse");

let devinetteEnCours = null;

// afficherDevinette : rien -> rien (Affiche la devinette et masque sa réponse)
const afficherDevinette = () => {
  let index = Math.floor(Math.random() * devinettes.length);
  while (devinetteEnCours === devinettes[index]) {
    index = Math.floor(Math.random() * devinettes.length);
  }
  zoneDevinette.textContent = devinettes[index].question;
  zoneReponse.textContent = "";
  devinetteEnCours = devinettes[index];
};

// voirReponse : rien -> rien (montrer la réponse de la devinette)
const voirReponse = function () {
  zoneReponse.textContent = devinetteEnCours.reponse;
};

boutonNouvelleDevinette.addEventListener("click", afficherDevinette);
boutonVoirReponse.addEventListener("click", voirReponse);
