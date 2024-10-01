const levelConfig = [
  { width: 60, height: 150 },
  { width: 50, height: 220, },
  { width: 400, height: 100 },
  { width: 350, height: 70 },
];
let playField = document.getElementById("playfield");
let player;
let platform;
let platforms = [];
let refreshRate = 16;
let gameInterval
let platformInterval
let i = 0

function gameLoop() {
  newPlayer();
  insertFirstPlatform();
  platformInterval = setInterval(generateLevel, 1000);
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

gameLoop();
window.addEventListener("keypress", function (e) {
  if (e.key === " ") {
    player.jump();
  }
});
let obstacle;

function endGame() {
 
    player.gameOver()
    clearInterval(gameInterval)
    ;
}




function generateLevel() {
  platform = new Platforms(levelConfig[i].width, levelConfig[i].height, levelConfig[i].x);
  console.log('insrrt', levelConfig[i])
    platform.insert();
    platforms.push(platform);
    i++;
}

function insertFirstPlatform(){
  let firstPlat = new Platforms(1000,100,150)
  firstPlat.insert()
  platforms.push(firstPlat)
}
