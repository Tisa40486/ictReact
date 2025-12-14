let nom = null;

document.getElementById("btnNom").onclick = function() {
    nom = prompt("Entrer votre nom")
}


document.getElementById("btnNomDisplay").onclick = function() {
    if(nom == null)
        alert("Error, enter a name!")
    else{
        document.getElementById("message").textContent = "Bonjour " + nom;
    }
}

const BtnNon = document.getElementById("BtnNon");

document.getElementById("BtnOui").onclick = function() {
    alert("BRAVO !")
}


document.getElementById("BtnNon").onmouseover = function() {
BtnNon.style.position = "relative";
BtnNon.style.left = Math.random() * 500 + "px";
}
document.getElementById("BtnNon").onclick = function() {
    alert("Ah bon bah....")
}
