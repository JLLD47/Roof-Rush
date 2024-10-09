class Platforms {
  static speed = 7;
  constructor(width, height, x = 1280, crumb = false) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = 600 - this.height;
    this.directionX = -1; //
    this.sprite = document.createElement("div");
    this.crumb = crumb;
    this.fallSpeed = 0.5;
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
    let newX = this.x + Platforms.speed * this.directionX;

    if (newX + this.width > 0) {
      this.x = newX;
      this.sprite.style.left = this.x + "px";
    } else {
      platforms.shift();
      this.remove();
    }
  }
  crumble() {
    let newY = this.y + this.fallSpeed;

    if (this.x <= 640 && this.crumb === true) {
      this.y = newY;
      this.sprite.style.top = this.y + "px";
    } else {
      platforms.shift();
      this.remove();
    }
  }
}
