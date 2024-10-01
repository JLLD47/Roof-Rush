class Obstacle {
    constructor(x,y,width,height) {
        this.x = x;
        this.y = height- Platforms.height;
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

let obstacle = new Obstacle(70,70);

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

*/ 