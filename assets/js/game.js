var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
console.log("Your bots name is " + playerName);

// You can also log multiple values at once like this
console.log(playerName +" attack amount is "+ playerAttack, " remaining health is " + playerHealth);

var enemyName = "Robort";
var enemyHealth = 50;
var enemyAttack = 12;

console.log(playerName + " VS " + enemyName);

var fight = function() {
  window.alert("Welcome to Robot Gladiators!");
};

fight();