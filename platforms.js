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
        playfield.removeChild(this.sprite)
        clearInterval(this.interval)
    }
    move(){
        let newX = this.x + this.speed * this.directionX
         if(newX + this.width >= 0 && newX <= 1280 - this.width){
           
            this.x = newX
            this.sprite.style.left = this.x + 'px'
        }else{
            this.remove()
        }
        
    }

}