let playField = document.getElementById("playfield");

let restartView = document.getElementById("restart");
let buttonRestart = document.getElementById("btn-restart");

let startView = document.getElementById("start");
let buttonStart = document.getElementById("btn-start");

let optionsView = document.getElementById("options");
let buttonOptions = document.getElementById("btn-options");
let closeOptions = document.getElementById("close-options");

let podiumView = document.getElementById("podium");
let buttonPodium = document.getElementById("btn-podium");
let closePodium = document.getElementById("close-podium");

let controlVolume = document.getElementById("volume")

const deadSound = new Audio("./sounds/fall.wav");
const levelSound = new Audio("./sounds/level.wav");
const menuSound = new Audio("./sounds/menu.wav");
const coinSound = new Audio("./sounds/coin.wav");

deadSound.volume = 0.6
levelSound.volume = 0.6
menuSound.volume = 0.6
coinSound.volume = 0.3;


buttonStart.addEventListener("click", function (event) {
  gameLoop();
  playField.style.display = "block";
  startView.style.display = "none";
});

window.addEventListener("keydown", function (e) {
  if (e.key === " " && !restartView.classList.contains("show")) {
    player.jump();
  }
  if (e.key === " " && restartView.classList.contains("show")) {
    restart();
  }
});

buttonRestart.addEventListener("click", function () {
  restart();
});

buttonOptions.addEventListener("click", function () {
  startView.style.display = "none";
  optionsView.classList.add("show");
});

closeOptions.addEventListener("click", function () {
  optionsView.classList.remove("show");
  startView.style.display = "flex"
});

buttonPodium.addEventListener("click", function () {
  restartView.classList.remove("show");
  document.body.style.overflow = "auto";
  playField.style.display = "none";
  podiumView.classList.add("show");
  document.body.style.overflow = "hidden";
});

closePodium.addEventListener("click", function () {
  podiumView.classList.remove("show");
  restartView.classList.add("show");
});

controlVolume.addEventListener("input" , function(){
  deadSound.volume = this.value
  menuSound.volume = this.value
  levelSound.volume = this.value
  coinSound.volume = this.value
})

menuSound.play();
