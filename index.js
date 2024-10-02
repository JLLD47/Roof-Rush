let playField = document.getElementById("playfield");
let restartView = document.getElementById("restart");
let buttonRestart = document.getElementById("btn-restart");
let player;
let platform;
let platforms = [];
let refreshRate = 16;
let gameInterval;
let platformInterval;
let i = 0
let obstacles = [];

function gameLoop() {
  newPlayer();
  insertFirstPlatform();
  insertSecondPlatform();
  newObstacle();
  platformInterval = setInterval(generateLevel, 1000);
  gameInterval = setInterval(updateGame, refreshRate);
}

function newPlayer() {
  player = new Player(300, 200);
  player.spawn();
}

function updateGame() {
  if (player.y + player.height >= 600) {
    endGame();
  } else {
    player.updatePosition();
    player.checkCollision();
  }
}

gameLoop();
window.addEventListener("keydown", function (e) {
  if (e.key === " ") {
    player.jump();
  }
});

window.addEventListener("keyup", function (e) {
  if (e.key === " ") {
    player.countJump = 25;
  }
});


function newObstacle() {
  let obstacle = new Obstacle(300, 50, 20, 20);
  obstacle.insert();
  obstacles.push(obstacle);
  
}

// const newObstacles = [
//   {width: 20, height: 50},
//   {width:50, height: 20},
// ]
// function generateNewObstacle() {
//   let obstacle = new Obstacle(
//     newObstacles[i].width,
//     newObstacles[i].height,
//     newObstacles[i].x
//   );
//   obstacle.insert();
//   obstacles.push(obstacle);
//   i++;
// }


function endGame() {
  playField.style.display = "none";
  restart.style.display = "block";
  player.gameOver();
  platforms.forEach(function (platform) {
    platform.remove();
  });
  platforms = [];
  clearInterval(platformInterval);
  clearInterval(gameInterval);
}

function generateLevel() {
  platform = new Platforms(
    levelConfig[i].width,
    levelConfig[i].height,
    levelConfig[i].x
  );
  console.log("insrrt", levelConfig[i]);
  platform.insert();
  platforms.push(platform);
  i++;
}

function insertFirstPlatform() {
  let firstPlat = new Platforms(1000, 20, 150);
  firstPlat.insert();
  platforms.push(firstPlat);
}

function insertSecondPlatform() {
  let secondPlat = new Platforms(150, 50);
  secondPlat.insert();
  platforms.push(secondPlat);
}

const levelConfig = [
  { width: 200, height: 100 },
  { width: 180, height: 120 },
  { width: 160, height: 90 },
  { width: 220, height: 110 },
  { width: 240, height: 80 },
  { width: 180, height: 130 },
  { width: 160, height: 150 },
  { width: 150, height: 170 },
  { width: 200, height: 130 },
  { width: 180, height: 110 },
  { width: 220, height: 160 },
  { width: 160, height: 140 },
  { width: 190, height: 150 },
  { width: 210, height: 130 },
  { width: 200, height: 120 },
  { width: 160, height: 140 },
  { width: 190, height: 160 },
  { width: 180, height: 100 },
  { width: 220, height: 110 },
  { width: 200, height: 150 },
  { width: 230, height: 170 },
  { width: 250, height: 130 },
  { width: 180, height: 140 },
  { width: 190, height: 120 },
  { width: 200, height: 160 },
  { width: 150, height: 140 },
  { width: 170, height: 150 },
  { width: 210, height: 130 },
  { width: 180, height: 110 },
  { width: 230, height: 170 },
  { width: 220, height: 100 },
  { width: 210, height: 120 },
  { width: 240, height: 90 },
  { width: 200, height: 110 },
  { width: 160, height: 80 },
  { width: 230, height: 130 },
  { width: 220, height: 100 },
  { width: 250, height: 160 },
  { width: 180, height: 140 },
  { width: 190, height: 150 },
  { width: 210, height: 130 },
  { width: 220, height: 120 },
  { width: 170, height: 140 },
  { width: 190, height: 160 },
  { width: 230, height: 100 },
  { width: 250, height: 110 },
  { width: 210, height: 150 },
  { width: 180, height: 170 },
  { width: 200, height: 130 },
];

function insertSecondPlatform() {
  let secondPlat = new Platforms(150, 50);
  secondPlat.insert();
  platforms.push(secondPlat);
}

buttonRestart.addEventListener("click", function (event) {
  gameLoop();
  playField.style.display = "block";
  restartView.style.display = "none";
});
