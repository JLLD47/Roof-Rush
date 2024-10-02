class Obstacle {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.directionX = 1;
    this.speed = 7;
    this.sprite = document.createElement("div");
    //this.interval = setInterval(this.move.bind(this), refreshRate);
   
  }
  insert(){
    this.sprite.setAttribute("class", "obstacle");
    this.sprite.style.width = this.width + "px";
    this.sprite.style.height = this.height + "px";
    this.sprite.style.top = this.y + "px";
    this.sprite.style.left = this.x + "px";
    playfield.appendChild(this.sprite);
  }

  remove(){
    playfield.removeChild(this.sprite);
    //clearInterval(this.interval);
  }
  move(){
    let newX = this.x +this.width*3 + this.speed * this.directionX;
    if (newX + this.width > 0) {
      this.x = newX;
      this.sprite.style.left = this.x + "px";
    } else {
      obstacles.shift();
      this.remove();
    }
  }
}

