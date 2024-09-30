let playField = document.getElementById("playfield");
let player;
let platform;
let platforms = [];

function gameLoop() {
  newPlayer();
  newPlatform();
  setInterval(updateGame, 16);
}

function newPlayer() {
  player = new Player(500, 400);
  player.spawn();
}

function updateGame() {
    player.checkCollision()
  player.updatePosition();
}

function newPlatform() {
  platform = new Platforms();
  platform.insert();
  platforms.push(platform);
}

gameLoop();
window.addEventListener("keydown", function (e) {
  if (e.key === " ") {
    player.jump();
  }
});
