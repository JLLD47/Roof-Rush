let playField = document.getElementById("playfield");
let player;
let platform;
let platforms = [];
let refreshRate = 16

function gameLoop() {
  setInterval(updateGame, refreshRate);
  newPlayer()
  newPlatform();
}

function newPlayer() {
  player = new Player(800, 0);
  player.spawn();
}

function updateGame() {
  player.updatePosition();
  player.checkCollision();
}

function newPlatform() {
  platformInterval = setInterval(function(){
 
   let newPlatform = new Platforms();
    if (!newPlatform.overlap(platforms)) {  
      newPlatform.insert();
      platforms.push(newPlatform);
      console.log('insert: ' + platforms)
    }
  }, 1000);
}

gameLoop();
window.addEventListener("keypress", function (e) {
  if (e.key === " ") {
    player.jump();
  }
});
let obstacle;

function newObstacle() {
  obstacle = new Obstacle();
  obstacle.insert();
}
