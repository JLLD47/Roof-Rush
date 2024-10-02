class Obstacle {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = 600;
    this.width = width;
    this.height = height;
    this.sprite = document.createElement("div");
    //this.interval = setInterval(this.move.bind(this), refreshRate);
    this.sprite.setAttribute("id", "obstacle");
    playfield.appendChild(this.sprite);    
        this.sprite.style.width = this.width + "px";
        this.sprite.style.height = this.height + "px";
        this.sprite.style.top = this.y + "px";
        this.sprite.style.left = this.x + "px";
        this.sprite.style.backgroundColor = "red";
        
   
  }
  insert() {
       
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


