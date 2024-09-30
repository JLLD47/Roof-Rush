// Creacion de la clase para las plataformas
class Platforms {
    constructor(){
        this.width = 50
        this.height = 50
        this.x = 1230
        this.y = 550
        this.directionX = -1 // Izquierda por default
        this.speed = 1
        this.sprite = document.createElement('div')
    }
    insert(){
        this.sprite.setAttribute('class', 'platform')
        this.sprite.style.width = this.width + 'px'
        this.sprite.style.height = this.height + 'px'
        this.sprite.style.top = this.y + 'px'
        this.sprite.style.left = this.x + 'px'
        playfield.appendChild(this.sprite)
    }
    remove(){
        playfield.removeChild(this.sprite)// Eliminar el div
    }
    move(){
        let newX = this.x + this.speed * this.directionX

        if(newX >= 0 && newX <= 600 - this.width){
            this.x = newX
            this.sprite.style.left = this.x + 'px'
        }else{
            this.remove()
        }
    }
}