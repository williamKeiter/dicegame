

function rollDice(){

var result1 = [];
var result2 = [];


var diceImg = [
  "images/dice1.png",
  "images/dice1.png",
  "images/dice2.png",
  "images/dice3.png",
  "images/dice4.png",
  "images/dice5.png",
  "images/dice6.png",
];

var randomNumber1 = diceImg[Math.floor(Math.random() * diceImg.length)];
var randomNumber2 = diceImg[Math.floor(Math.random() * diceImg.length)];

result1.push(randomNumber1);
result2.push(randomNumber2);

var dice1 = result1.toString();
var dice2 = result2.toString();


document.querySelector(".img1").setAttribute("src", dice1);
document.querySelector(".img2").setAttribute("src", dice2);



  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins! 🤪";
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 wins! 🥳";
  } else if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw! 😤";

  }
}

rollDice();
