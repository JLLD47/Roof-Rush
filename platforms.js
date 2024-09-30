// Creacion de la clase para las plataformas
class Platforms {
    constructor(){
        this.width
        this.height
        this.x
        this.y
        this.directionX = -1 // Izquierda por default
        this.speed = 1
        this.sprite = document.createElement('div')
    }
    insert(){
        this.sprite.setAttribute('class', 'platform')
        this.sprite.style.width = this.width + 'em'
        this.sprite.style.height = this.height + 'em'
        this.sprite.style.top = this.y + 'em'
        this.sprite.style.left = this.x + 'em'
        playfield.appendChild(this.sprite)
    }
    remove(){
        playfield.removeChild(this.sprite)// Eliminar el div
    }
}