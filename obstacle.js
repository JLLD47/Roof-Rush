class Obstacle {
    constructor() {
        this.x = 50;
        this.y = 50;
        this.width = 10;
        this.height = 20; 
        this.sprite = document.createElement("div");    
        this.interval = setInterval(this.sprite(), 20) 
    }
    insert() {
       this.sprite.position = "absolute";
       playfield.appendChild(this.sprite);
       this.sprite.setAttribute("id", "obstacle");
    }
}

