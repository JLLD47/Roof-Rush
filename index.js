
let playField = document.getElementById("playfield");
let restartView = document.getElementById('restart');
let buttonRestart = document.getElementById('btn-restart')
let player;
let platform;
let platforms = [];
let refreshRate = 16;
let gameInterval

function gameLoop() {
  newPlayer();
  newPlatform();
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
window.addEventListener("keydown", function (e) {
  if (e.key === " ") {
    player.jump();
  }
});
let obstacle;

function newObstacle() {
  obstacle = new Obstacle();
  obstacle.insert();
}

function endGame() {
    playField.style.display = 'none'
    restart.style.display = 'block'
  player.gameOver()
  platforms.forEach(function(platform) {
  platform.remove();})
  platforms = [];
  clearInterval(platformInterval);
  clearInterval(gameInterval)

}




function generateLevel() {
  platform = new Platforms(levelConfig[i].width, levelConfig[i].height, levelConfig[i].x);
  console.log('insrrt', levelConfig[i])
    platform.insert();
    platforms.push(platform);
    i++;
}

function insertFirstPlatform(){
  let firstPlat = new Platforms(1000,20,150)
  firstPlat.insert()
  platforms.push(firstPlat)
}


function insertSecondPlatform() {
  let secondPlat = new Platforms(150, 50);
  secondPlat.insert();
  platforms.push(secondPlat);
}
 


const levelConfig = [
  { width: 150, height: 100 },
  { width: 160, height: 120 },
  { width: 170, height: 90 },
  { width: 180, height: 110 },
  { width: 190, height: 80 },
  { width: 200, height: 100 },
  { width: 210, height: 150 },
  { width: 220, height: 170 },
  { width: 230, height: 130 },
  { width: 240, height: 110 },
  { width: 250, height: 160 },
  { width: 260, height: 140 },
  { width: 270, height: 150 },
  { width: 280, height: 130 },
  { width: 290, height: 120 },
  { width: 300, height: 140 },
  { width: 310, height: 160 },
  { width: 320, height: 100 },
  { width: 330, height: 110 },
  { width: 340, height: 150 },
  { width: 350, height: 170 },
  { width: 360, height: 130 },
  { width: 370, height: 140 },
  { width: 380, height: 120 },
  { width: 390, height: 160 },
  { width: 400, height: 140 },
  { width: 410, height: 150 },
  { width: 420, height: 130 },
  { width: 430, height: 110 },
  { width: 440, height: 170 },
  { width: 450, height: 100 },
  { width: 460, height: 120 },
  { width: 470, height: 90 },
  { width: 480, height: 110 },
  { width: 490, height: 80 },
  { width: 500, height: 130 },
  { width: 510, height: 100 },
  { width: 520, height: 160 },
  { width: 530, height: 140 },
  { width: 540, height: 150 },
  { width: 550, height: 130 },
  { width: 560, height: 120 },
  { width: 570, height: 140 },
  { width: 580, height: 160 },
  { width: 590, height: 100 },
  { width: 600, height: 110 },
  { width: 610, height: 150 },
  { width: 620, height: 170 },
  { width: 630, height: 130 },
];


function insertSecondPlatform() {
  let secondPlat = new Platforms(150, 50);
  secondPlat.insert();
  platforms.push(secondPlat);
}
 

buttonRestart.addEventListener('click', function(event){
    gameLoop()
    playField.style.display = 'block'
    restartView.style.display = 'none'
})