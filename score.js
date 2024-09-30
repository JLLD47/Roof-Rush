//import player from "./player.js";


let scoreText;
let score = 0;
let count = 0;
let coin = 50; 

function setCoin() {
  let coin = document.getElementById("coin");
 
}

function scoreSet() {
  scoreText = document.getElementById("score");
  
  if (player == true) {
    count += coin;
    score = count;
  }

  scoreText.innerHTML = `Score: ${score}`;
}

let player = true;
scoreSet();




