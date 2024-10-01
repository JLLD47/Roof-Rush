class Obstacle {
    constructor(x,y,width,height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height; 
        this.sprite = document.createElement("div");
        this.sprite.setAttribute("id", "obstacle");    
        playfield.appendChild(this.sprite);
        this.sprite.style.width = this.width + "px";
        this.sprite.style.height = this.height + "px";
        this.sprite.style.top = this.y + "px";
        this.sprite.style.left = this.x + "px";
        this.sprite.style.backgroundColor = "red";

    }

}

//let obstacle = new Obstacle(100,100,50,50);