let playField = document.getElementById("playfield");
let player;
let platform;
let platforms = [];
let refreshRate = 16;
let gameInterval
let obstacle;

function gameLoop() {
  newPlayer();
  newPlatform();
  newObstacle();
  gameInterval = setInterval(updateGame, refreshRate);
}

function newPlayer() {
  player = new Player(300, 200);
  player.spawn();
}

function updateGame() {
  if(player.y+player.height>= 600){
    endGame()
  }else{
    player.updatePosition();
    player.checkCollision();
  }
  
}


function newPlatform() {
  let firstPlat = new Platforms(50, 650);

  let secondPlat = new Platforms(920, 650);

  firstPlat.insert();
  secondPlat.insert();
  console.log(firstPlat.x);
  platforms.push(firstPlat);
  platforms.push(secondPlat);

  platformInterval = setInterval(function () {
    let newPlatform = new Platforms();
    // if (!newPlatform.overlap(platforms)) {
    newPlatform.insert();
    platforms.push(newPlatform);
    console.log("insert: " + platforms);
    // }
  }, 2000);
}



gameLoop();
window.addEventListener("keypress", function (e) {
  if (e.key === " ") {
    player.jump();
  }
});


function newObstacle() {
  obstacle = new Obstacle();
  obstacle.insert();
  obstacles.push(obstacle);
  obstacleInterval = setInterval(function () {
  let newObstacle = new Obstacle();
  newObstacle.insert();
  obstacle.push(newObstacle);
}, 2000);
}

function endGame() {
  
  player.gameOver()
  clearInterval(gameInterval)
}


