"use strict";

const randomDamage = () => {
    Math.floor(Math.random() * 10 + 1);
}

const chooseOption = (opt1, opt2) => {
    let randNum = Math.floor(Math.random()* 1);
     return(randNum === 0 ? opt1 : opt2);
       
}

const attackPlayer = function(health){
     health = health - randomDamage
}

const logHealth = (player, health) => {
    console.log(`${player} health: ${health}`)
}

const logDeath = (winner,loser) =>{
    console.log(`${winner} defeated ${loser}`)

}

const isDead = (health) => {
   (health <= 0); 
}

function fight (player1,player2,player1Health,player2health){
    while(true){
        let attacker = chooseOption(player1,player2);
        if (attacker === player1){
            player2health === attackPlayer(player2health);
            logHealth(player2, player2health);
            isDead(player2health);
            logDeath(player1, player2);
            break;

        }
        else{
            player1Health = attackPlayer(player1Health);
            logHealth(player1,player1Health);
            isDead(player1Health);
            logDeath(player2,player1);
            break;
            }
    
        

    }
    
}

fight("johnny", "billy",100, 100);



/*
else if(isDead(player2health)){
    logDeath(player1,player2);
    break;
}*/