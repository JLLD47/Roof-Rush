class Obstacle {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.sprite = document.createElement("div");
    //this.interval = setInterval(this.move.bind(this), refreshRate);
   
  }
  insert(){
    this.sprite.setAttribute("id", "player");
    this.sprite.style.width = this.width + "px";
    this.sprite.style.height = this.height + "px";
    this.sprite.style.top = this.y + "px";
    this.sprite.style.left = this.x + "px";
    playfield.appendChild(this.sprite);
  }
}
export default Obstacle;
