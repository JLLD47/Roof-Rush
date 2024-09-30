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
  player.checkCollision();
  player.updatePosition();
}

function newPlatform() {
  platformInterval = setInterval(function(){
    platform = new Platforms();
    platform.insert();
    platforms.push(platform);
  }, 1000)
}

gameLoop();
window.addEventListener("keydown", function (e) {
  if (e.key === " ") {
    player.jump();
  }
});
let obstacle;


function newObstacle(){
    obstacle = new Obstacle();
    obstacle.insert();}
