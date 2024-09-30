//import player from "./player.js";


let scoreText;
let score = 0;
let count = 0;
//let coin = 50;

function setCoin() {
  let coin = document.getElementById("coin");
  coin = 50;
}

function scoreSet() {
  scoreText = document.getElementById("score");
  setCoin();
  let coin = document.getElementById("coin");
  if (player == true) {
    count += coin;
    score = count;
  }

  scoreText.innerHTML = `Score: ${score}`;
}

let player;
scoreSet();


