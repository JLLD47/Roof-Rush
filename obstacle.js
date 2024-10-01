class Obstacle {
    constructor() {
        this.x = 50;
        this.y = 50;
        this.width = 10;
        this.height = 20; 
        this.sprite = document.createElement("div");    
         
    }
    insert() {
       this.position = "absolute";
       playfield.appendChild(this);
       this.setAttribute("id", "obstacle");
    }
    draw() {
        this.style.width = this.width + "px";
        this.style.height = this.height + "px";
        this.style.top = this.y + "px";
        this.style.left = this.x + "px";
        this.style.backgroundColor = "red";
    }
}

