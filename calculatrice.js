let string = ""; //on initialise notre string

function addToString(str) { //fonction ajouter un nombre
  string = string.concat(str); //on ajoute un nombre à la string
  document.getElementById("zs").innerHTML = string; //on rafraichit ce qu'on écrit dans la zone de saisie
  console.log(string); 
}

function operation(ope){ 

  var lastC = string.charAt(string.length-1); //on recupere le dernier caractère du string
  console.log(lastC);  
  if(lastC!='+' && lastC!='-' && lastC!='/' && lastC!='.' && lastC!=')' && lastC!='(' && lastC!='*'){ //si le dernier caractère n'est une opération, on l'ajoute au string.
    string = string.concat(ope);
    document.getElementById("zs").innerHTML = string;
  }
  else{
    //on ne fait rien
  }
  
}




function calcul_et_affichage() {
  res = eval(string); //on calcule ce qu'il y a dans la string
  document.getElementById("input").innerHTML = string; //puis on affiche
  document.getElementById("egale").innerHTML = "=";
  document.getElementById("res").innerHTML = res;

  console.log(res);
}

function effacer() {
  string = ""; //on efface la string
  document.getElementById("zs").innerHTML = string; //on efface la zone de saisie
  document.getElementById("input").innerHTML = ""; // on efface la partie resultat
  document.getElementById("egale").innerHTML = "";
  document.getElementById("res").innerHTML = "";

}
