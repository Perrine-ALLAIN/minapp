//const bonjour = ()=> console.log("Bonjour!"); bonjour();

const cases = document.querySelectorAll(".cell");
const gameStatus=document.getElementById("gameStatus"); //renvoie le statut du jeu aka on joue ou pas
const endgameStatus=document.getElementById("endgameStatus"); //renvoie le statut de fin de partie
const playerOne='X', playerTwo='O';
let playerTurn=playerOne;



function playgame(e){
    e.target.textContent = playerTurn;
    playerTurn==playerOne ? playerTurn=playerTwo : playerTurn=playerOne; //opérateur ternaire ? si la condition au dessus est vraie il fait le truc d'après et sinon il fait ce qu'il y a après les :
    console.log("CLICK");
}

cases.forEach(cell =>{cell.addEventListener('click',playgame,{once : true})})

function updateGameStatus(status){
//pas nécessaire
}

function reloadgame()  {
window.location.reload()
}


