var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 25;
var playerMoney = 10;
console.log("Your bots name is " + playerName);

// You can also log multiple values at once like this
console.log(playerName +" attack amount is "+ playerAttack, " remaining health is " + playerHealth);

var enemyName = "Robort";
var enemyHealth = 75;
var enemyAttack = 25;

console.log(playerName + " VS " + enemyName);

var fight = function() {
  // Alert players that they are starting the round
  window.alert("Welcome to Robot Gladiators!");

  // create a variable called promptFight to prompt question to fight or not
  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
  console.log(promptFight);

  // if player choses to fight, then fight
  if (promptFight === "fight" || promptFight === "FIGHT") {
    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    // Log a resulting message to the console so we know that it worked.
    console.log(
      playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
  )
  // ck enemy's health
  if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");
      return;
  }
  else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
  }

  
  // remove player's health by subtracting the amount set in the enemyAttack variable
  playerHealth = playerHealth - enemyAttack;
  console.log(
    enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
  );

  // ck player's health
  if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
      return;
  }
  else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
  }
  // Log a resulting message to the console so we know that it worked.
  console.log(
      enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
  )

  // if player choses to skip
  } else if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit? If so points will be deducted!");

      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerName + " has decided to skip the fight and points will be deducted!");
        // subtract money from playerMoney for skipping
        playerMoney = playerMoney - 2;
      }
  } else {
    window.alert("You need to choose a valid option. Try again!");
  } 
    
  
};
fight();
