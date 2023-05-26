//fonction qui  genere un nombre aleatoire entre 1 et 5
function getRandomNumber() {
    return Math.floor(Math.random()*5) +1;
}
//fonction qui affiche le nombre aleatoire dans la premiere cellule du tableau
function displayRandomNumber(){
    var randomNumber = getRandomNumber();
    document.getElementById("results").innerHTML = randomNumber;
}
//Ajout d'un ecouteur d'evenement sur le bouton pour appeler la fonction  displayRandomNumber au clic
window.onload = function() {
    document.getElementById("random").addEventListener("click", displayRandomNumber);
}