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
        //Metodo para insertar el obstaculo 
        this.obstacle.setAttribute('id', 'obstacle')
        this.obstacle.style.width = 50 + 'px'
        this.obstacle.style.height = 50 + 'px'
        this.obstacle.style.bottom = this.height + 'px'
        this.obstacle.style.left = this.x  + 'px'

        playField.appendChild(this.obstacle)
    }
    remove(){
        //Metodo para elminar el obstaculo y 
        playfield.removeChild(this.sprite)// Eliminar el div
        playfield.removeChild(this.obstacle)// Eliminar el div
        clearInterval(this.interval)
    }
    move(){
        let newX = this.x + this.speed * this.directionX
    
        if (newX >= 0 && newX <= 1280 - this.width) {
            // Mover la plataforma y el obstáculo juntos
            this.x = newX
            this.sprite.style.left = this.x + 'px'
            this.obstacle.style.left = this.x + 'px'
        } else {
            // Reducir el ancho de la plataforma en 6px en cada iteración
            this.width -= 6;
    
            // Reducir el ancho del obstáculo de la misma manera
            let obstacleWidth = parseInt(this.obstacle.style.width) || 50;  // Si no se ha definido el ancho, comienza en 50px
            if (obstacleWidth >= 0) {  // Asegurar que no sea menor de 6px
                obstacleWidth -= 6;
            } else {
                obstacleWidth = 0;  // Tamaño mínimo para evitar que desaparezca completamente
            }
    
            // Verificar si la plataforma debe ser eliminada
            if (this.width <= 0) {
                this.remove();  // Eliminar la plataforma y el obstáculo cuando su ancho sea <= 0
            } else {
                // Actualizar el ancho de la plataforma y el obstáculo de manera gradual
                this.sprite.style.width = this.width + 'px';
                this.obstacle.style.width = obstacleWidth + 'px';
    
                // Ajustar la posición del obstáculo si es necesario
                const maxObstacleLeft = this.width - obstacleWidth;
                const currentObstacleLeft = parseInt(this.obstacle.style.left, 10);
                if (currentObstacleLeft > maxObstacleLeft) {
                    this.obstacle.style.left = maxObstacleLeft + 'px';
                }
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