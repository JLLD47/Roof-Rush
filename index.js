let scoreText;
let score = 0;
let count = 0;

function scoreSet() {
  scoreText = document.getElementById("score");
  if (player == true) {
    count += coin.value;
  }

  scoreText.innerHTML = `Score: ${score}`;
}
scoreSet();
