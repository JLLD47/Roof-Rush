class Obstacle {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = 600;
    this.width = width;
    this.height = height;
    this.sprite = document.createElement("div");
    this.interval = setInterval(this.move.bind(this), refreshRate);
   
  }
  insert() {
       this.sprite.setAttribute("id", "obstacle");
        
        this.sprite.style.width = this.width + "px";
        this.sprite.style.height = this.height + "px";
        this.sprite.style.top = this.y + "px";
        this.sprite.style.left = this.x + "px";
        this.sprite.style.backgroundColor = "red";
        playfield.appendChild(this.sprite);
  }
  draw() {

      playFieldfillStyle = "red"; // Color del obstáculo
      playField.fillRect (obstacle.x,obstacle.y,obstacle.width,obstacle.height);
  }
  remove() {
    playField.removeChild(this.sprite);
    clearInterval(this.interval);
  }
  move() {
    let newX = this.x + this.speed * this.directionX;
    if (newX + this.width > 0) {
      this.x = newX;
      this.sprite.style.left = this.x + "px";
    } else {
      obstacles.shift();
      this.remove();
    }
  }
}


/*
function gameLoop() {
       context.clearRect(0, 0, canvas.width, canvas.height); // Limpia el canvas
       platforms.forEach(drawPlatform);
       obstacles.forEach(drawObstacle);
       requestAnimationFrame(gameLoop); // Llama al siguiente frame
   }

 function drawObstacle(obstacle) {
       context.fillStyle = 'red'; // Color del obstáculo
       context.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
   }

*/ class Platforms {
  constructor(width, height, x = 1280) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = 600 - this.height;
    this.directionX = -1; //
    this.speed = 7;
    this.sprite = document.createElement("div");
    this.interval = setInterval(this.move.bind(this), refreshRate);
  }
  insert() {
    this.sprite.setAttribute("class", "platform");
    this.sprite.style.width = this.width + "px";
    this.sprite.style.height = this.height + "px";
    this.sprite.style.top = this.y + "px";
    this.sprite.style.left = this.x + "px";
    playField.appendChild(this.sprite);
  }
  remove() {
    playField.removeChild(this.sprite);
    clearInterval(this.interval);
  }
  move() {
    let newX = this.x + this.speed * this.directionX;
    if (newX + this.width > 0) {
      this.x = newX;
      this.sprite.style.left = this.x + "px";
    } else {
      platforms.shift();
      this.remove();
    }
  }
  overlap(platformsArray) {
    for (let platform of platformsArray) {
      if (
        this.x < platform.x + platform.width &&
        this.x + this.width > platform.x
      ) {
        return true;
      }
    }
    return false;
  }
}
