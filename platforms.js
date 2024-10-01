// Creacion de la clase para las plataformas
class Platforms {
    constructor(){
        this.width = Math.floor(Math.random() * 700) + 200
        this.height = Math.floor(Math.random() * 150) + 100
        this.x = 1280 - this.width
        this.y = 600 - this.height
        this.directionX = -1 // Izquierda por default
        this.speed = 6
        this.sprite = document.createElement('div')
        this.obstacle = document.createElement('div')
        this.interval = setInterval(this.move.bind(this), 10)
    }
    insert(){
        this.sprite.setAttribute('class', 'platform')
        this.sprite.style.width = this.width + 'px'
        this.sprite.style.height = this.height + 'px'
        this.sprite.style.top = this.y + 'px'
        this.sprite.style.left = this.x + 'px'
        playField.appendChild(this.sprite)
    }
    insertObstacle(){
        this.obstacle.setAttribute('id', 'obstacle')
        this.obstacle.style.width = 50 + 'px'
        this.obstacle.style.height = 50 + 'px'
        this.obstacle.style.bottom = this.height + 'px'
        this.obstacle.style.left = this.x + 'px'

        playField.appendChild(this.obstacle)
    }
    remove(){
        playfield.removeChild(this.sprite)// Eliminar el div
        playfield.removeChild(this.obstacle)// Eliminar el div
        clearInterval(this.interval)
    }
    move(){
        let newX = this.x + this.speed * this.directionX
        //this.checkCollision()
        console.log(this)
        console.log(this.width)
        if(newX >= 0 && newX <= 1280 - this.width){
           
            this.x = newX
            this.sprite.style.left = this.x + 'px'
            this.obstacle.style.left = this.x + 'px'
        }else {
            // Reducir el ancho en lugar de eliminar la plataforma
            this.width -= 6; 
            
            // Ajusta la cantidad que quieras reducir
            if (this.width <= 0) {
                this.remove(); // Eliminar cuando el ancho sea 0 o menor
            } else {
                this.sprite.style.width = this.width + 'px';
            }
        }
        
    }

/*     checkCollision(){
        if (this.x < player.x + player.width &&
            this.y < player.y + player.height &&
            this.x + this.width > player.x &&
            this.y + this.height > player.y) {
            this.remove()
            }
    } */

}