class Obstacle {
    constructor(x, y, width, height) {
        this.x = 50;
        this.y = 50;
        this.width = 10;
        this.height = 20; 
    }
    draw() {
        ctx.fillStyle = "red";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}