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
    while(true){
        let attacker = chooseOption(player1,player2);
        if (attacker === player1){
            player2health === attackPlayer(player2health);
            logHealth(player2, player2health);
        }
        else if(isDead(player2health)){
            logDeath(player1,player2);
            break;
        }
        else{
            player1Health = attackPlayer(player1Health);
            logHealth(player1,player1Health);
            if (isDead === player1Health){
                logDeath(player2,player1);
                break;
            }
    
        }

    }
    
}