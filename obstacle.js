class Obstacle {
    constructor(x, y, width, height) {
        this.x = 50;
        this.y = 50;
        this.width = 10;
        this.height = 20; 
        this.sprite = document.createlement("div");    
        this.interval = setInterval(this.sprite(), 20) 
    }
    draw() {
        this.fillStyle = "red";
        this.fillRect(this.x, this.y, this.width, this.height);
    }
    insert() {
       this.sprite.position = "absolute";
       playfield.appendChild(this.sprite);
    }
}

