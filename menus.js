let playField = document.getElementById("playfield");
let restartView = document.getElementById("restart");
let buttonRestart = document.getElementById("btn-restart");
let buttonStart = document.getElementById("btn-start");
let buttonPodium = document.getElementById("btn-podium");
let startView = document.getElementById("start");
let podiumView = document.getElementById("podium");
let closePodium = document.getElementById("close-podium")

const deadSound = new Audio("./sounds/fall.wav");
const levelSound = new Audio("./sounds/level.wav");
const menuSound = new Audio("./sounds/menu.wav");

buttonStart.addEventListener("click", function (event) {
  gameLoop();
  playField.style.display = "block";
  startView.style.display = "none";
});

buttonPodium.addEventListener("click", function (event) {
  restartView.classList.remove("show");
  document.body.style.overflow = "auto";
  playField.style.display = "none";
  podiumView.classList.add("show");
  document.body.style.overflow = "hidden";
});

closePodium.addEventListener("click", function(){
  podiumView.classList.remove("show")
  restartView.classList.add("show")

} )


window.addEventListener("keydown", function (e) {
  if (e.key === " " && !restartView.classList.contains("show")) {
    player.jump();
  }
  if (e.key === " " && restartView.classList.contains("show")) {
    restart();
  }
});

buttonRestart.addEventListener("click", function (event) {
  restart();
});

menuSound.play();
