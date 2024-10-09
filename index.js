let player;
let platform;
let platforms = [];
let coins = [];
let refreshRate = 16;
let gameInterval;
let platformInterval;
let i = 0;
let coinsSpawnInterval;
let scoreInterval;
let distanceScore = 0;
let increment = 1000;
let crazySpeed = true;
let stopPlease;
let checkCollisions;

function gameLoop() {
  distanceScore = 0;
  stopSound();
  crazySpeed = true;
  levelSound.loop = true;
  levelSound.play();
  newPlayer();
  insertFirstPlatform();
  insertSecondPlatform();
  newCoin();
  speedIncrement();
  scoreInterval = setInterval(sumScore, 1000);
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
    scoreUpdate();
    fallingPlatforms();

    distance();
  }
}

function scoreUpdate() {
  let score = document.getElementById("score");
  score.innerText = player.score;
  let endScore = document.getElementById("endScore");
  endScore.innerText = player.score;
}

function distance() {
  let distance = document.getElementById("distance");
  distance.innerText = distanceScore;
}

window.addEventListener("keyup", function (e) {
  if (e.key === " ") {
    player.countJump = 25;
  }
});

function endGame() {
  playField.style.display = "none";
  restartView.classList.add("show");
  document.body.style.overflow = "hidden";
  stopSound();
  cleanAllIntervals();
  cleanArrays();
  player.gameOver();
  deadSound.play();
  stopIncrement();
}

function generateLevel() {
  // platform i.x es menor +200px que  + platform i-1.x + platform i-1.width

  if (i < levelConfig.length) {
    let lastPlatform = platforms[platforms.length-1];
    if (lastPlatform.x + lastPlatform.width + 70 < 1280) {
      platform = new Platforms(
        levelConfig[i].width,
        levelConfig[i].height,
        levelConfig[i].x,
        levelConfig[i].crumb
      );
      platform.insert();
      platforms.push(platform);
      i++;
    }
  } else {
    i = 0;
  }
}

function insertFirstPlatform() {
  let firstPlat = new Platforms(1000, 20, 150);
  firstPlat.insert();
  platforms.push(firstPlat);
}

function insertSecondPlatform() {
  let secondPlat = new Platforms(300, 50);
  secondPlat.insert();
  platforms.push(secondPlat);
}

function newCoin() {
  coinsSpawnInterval = setInterval(function () {
    let random = Math.floor(Math.random() * 5);
    let altura = 0;
    if (random == 0) {
      altura = 400;
    }
    if (random == 1) {
      altura = 350;
    }
    if (random == 2) {
      altura = 300;
    }
    if (random == 3) {
      altura = 250;
    }
    if (random == 4) {
      altura = 375;
    }

    let coin = new Coin(1260, altura);
    coins.push(coin);
    coin.insert();
  }, 500);
}

function restart() {
  stopSound();
  cleanAllIntervals();
  cleanArrays();
  stopIncrement();
  gameLoop();
  playField.style.display = "block";

  restartView.classList.remove("show");
  document.body.style.overflow = "auto";
}

const levelConfig = [
  { width: 200, height: 100 },
  { width: 180, height: 120 },
  { width: 160, height: 150 },
  { width: 720, height: 110, x: 1280, crumb: true },
  { width: 220, height: 110 },
  { width: 240, height: 150 },
  { width: 180, height: 120 },
  { width: 550, height: 200, x: 1200, crumb: true },
  { width: 150, height: 130 },
  { width: 280, height: 130 },
  { width: 180, height: 100 },
  { width: 200, height: 160 },
  { width: 500, height: 140 },
];

function speedIncrement() {
  generateLevel();
  if (crazySpeed) {
    platformInterval = setInterval(generateLevel, increment);

    stopPlease = setTimeout(function () {
      clearInterval(platformInterval);
      increment -= 100;
      Platforms.speed += 1;
      levelSound.playbackRate += 0.09;
      speedIncrement();
    }, 10000);
  }
}

function stopIncrement() {
  crazySpeed = false;
  Platforms.speed = 7;
  increment = 1000;
  clearTimeout(stopPlease);
  i = 0;
}

function cleanAllIntervals() {
  clearInterval(coinsSpawnInterval);
  clearInterval(platformInterval);
  clearInterval(gameInterval);
  clearInterval(scoreInterval);
}

function cleanArrays() {
  if (coins.length) {
    for (let index = 0; index < coins.length; index++) {
      coins[index].remove();
    }
  }
  coins = [];

  platforms.forEach(function (platform) {
    platform.remove();
  });
  platforms = [];
}

function stopSound() {
  coinSound.currentTime = 0;
  coinSound.pause();
  levelSound.pause();
  levelSound.currentTime = 0;
  menuSound.pause();
  levelSound.playbackRate = 1;
}

function sumScore() {
  player.score += 20;
  distanceScore += 20;
}

function fallingPlatforms() {
  platforms.forEach(function (platform) {
    if (platform.crumb === true && platform.x <= 640) {
      platform.crumble();
    }
  });
}
