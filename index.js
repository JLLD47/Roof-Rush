let playField = document.getElementById("playfield");
let buttonStart = document.getElementById('btn-start');
let startView = document.getElementById('start');
let player;
let platform;
let platforms = [];
let refreshRate = 16;
let gameInterval



let checkCollisions
let newC




function gameLoop() {
  newPlayer();
  newPlatform();
  newCoin();
  gameInterval = setInterval(updateGame, refreshRate);
}

function newPlayer() {
  player = new Player(300, 200);
  player.spawn();
}

function updateGame() {
  if (player.y + player.height >= 600) {
    endGame()
  } else {
    player.updatePosition();
    player.checkCollision();
  }

}

gameLoop();
window.addEventListener("keypress", function (e) {
  if (e.key === " ") {
    player.jump();
  }
});
let obstacle;


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
function newObstacle() {
  obstacle = new Obstacle();
  obstacle.insert();
}

function endGame() {

  player.gameOver()
  clearInterval(gameInterval)
}









function newCoin() {
  coinsSpawnInterval = setInterval(function () {
    coin = new Coin(1260, 300)
    coin.insert()
    coin.push(coin)
  }, 1000)
}

newCoin()





//let coinsSpawnInterval = gameLoop
let coinMovementInterval = setInterval(coin, 10);



//coinsSpawnInterval()



buttonStart.addEventListener('click', function (event) {
  startGame()
  playField.style.display = 'none'
  startView.style.display = 'none'
})