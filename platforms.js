// Creacion de la clase para las plataformas
class Platforms {
    constructor(){
        this.width = 200
        this.height = 50
        this.x = 1280 - this.width
        this.y = 550
        this.directionX = -1 // Izquierda por default
        this.speed = 6
        this.sprite = document.createElement('div')
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
    remove(){
        playfield.removeChild(this.sprite)// Eliminar el div
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
        }else{
            this.remove()
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