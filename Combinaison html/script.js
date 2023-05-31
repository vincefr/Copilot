//Fonction qui genere un nombre aleatoire entre 1 et 5
window.onload = function() {function getRandomNumber(){
    return Math.floor(Math.random()*5)+1;
}
//Fonction qui affiche le nombre aleatoire  dans la premiere cellule du tableau
function displayRandomNumber(){
    console.log("La fonction displayRandomNumber a été appelée");
    var randomNumber = getRandomNumber();

    document.getElementById("#resultat_generateOne").innerHTML=randomNumber;
    document.getElementById("#resultat2_generateOne").innerHTML=randomNumber;

}
//Ajout d'un ecouteur d'evenement sur le bouton
//pour appeler la fonction displayRandomNumber au clic
document.getElementById("generateOne").addEventListener("click", displayRandomNumber);
}