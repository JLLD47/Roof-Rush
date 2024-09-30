let playField = document.getElementById("playfield");
let player;
let platform;
let platforms = [];

function gameLoop() {
  setInterval(updateGame, 16);
  newPlayer();
  newPlatform();
}

function newPlayer() {
  player = new Player(800,0);
  player.spawn();
}

function updateGame() {
  player.updatePosition();
  player.checkCollision();
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
