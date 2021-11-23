"use strict";

const randomDamage = () => {
    Math.floor(Math.random() * 10 + 1);
}

const chooseOption = (opt1, opt2) => {
    let randNum = Math.floor(Math.random() * 1);
        return(opt1 ? `0` : `1`)
}

const attackPlayer = function(health){
    let health = health - randomDamage
}

const logHealth = (player, health) => {
    console.log(`${player} health ${playerHealth}`)
}

const logDeath = (winner,loser) =>{
    console.log(`${winner} defeated ${loser}`)

}

const isDead = (health) => {
    health <= 0;
}

function fight (player1,player2,player1Health,player2health){
    
}