//On pointe sur l'élément de message
const espaceMessage = document.getElementById("message");
//On pointe sur l'élément de bouton
const bouton = document.getElementById("bouton");
//On pointe sur l'élément de champ de saisie de l'année
const anneeInput = document.getElementById("annee");

let params = [];
// invert 
for (let i = 0; i <= 12; i++) {
  params.push(i); 
}

//On défini la variable année
let annee;

function onConvert() {
  //On récupère la saisie de l'année et on transforme le texte en nombre entier
  annee = parseInt(anneeInput.value);
  //Si la saisie n'est pas un nombre, on affiche un message d'erreur
  if (isNaN(annee)) {
    alert("Ceci n'est pas un nombre");
    return;
  }
  const mois = annee * params[12];

  // ANALYSER ICI AVEC CONSOLE LOG
  // Analyser la variable annee
  console.log("annee -> " + annee)
  // Analyser la variable params
  console.log("params -> " + params)
  // Analyser la variable mois
  console.log("mois -> " + mois)
  // FIN ANALYSE

  espaceMessage.innerHTML = annee + " années font " + mois + "mois ";
}

//On écoute l'action de click sur le onConvert et on appelle la fonction onConvert
bouton.addEventListener("click", onConvert);
