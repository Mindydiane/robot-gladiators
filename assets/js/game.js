//this creates a prompt for robots name, the player's info
var playerName = window.prompt(" What is your robot's name? ");
var playerHealth = 100;
var playerAttack = 15;

//you can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

// enemies info
var enemyName = "Roborto ";
var enemyHealth = 30;
var enemyAttack = 25;

//this creates a function named "fight" promps msg
var fight = function() {
    //Alert players that they are startig the round    
    window.alert("Welcome to Robot Gladiators!");

// this gives player option to Fight or Skip   
var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");    


    // Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable
    enemyHealth = enemyHealth - playerAttack;

    // Log a resulting message to the console so that we know that it worked.
    console.log(
        playerName + " attacked " + enemyName + "." + enemyName + " now has " + enemyHealth + " health remaining." 
    );

    // check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    // Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth" variable.
    playerHealth = playerHealth - enemyAttack;    

    // Log a resulting message to the console so we know that it worked.
    console.log(
        enemyName + " attacked " + playerName + "." + playerName + " now has " + playerHealth + " health remaining."
    )    

    // check player's health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
};
