class FirstPlatforms {
    constructor(){
        this.width = 350
        this.height = 50
        this.x = 90
        this.y = 0
        this.directionX = -1 // Izquierda por default
        this.speed = 6
        this.sprite = document.createElement('div')
        this.interval = setInterval(this.move.bind(this), 10)
    }
    insert(){
        this.sprite.setAttribute('class', 'platform')
        this.sprite.style.width = this.width + 'px'
        this.sprite.style.height = this.height + 'px'
        this.sprite.style.bottom = this.y + 'px'
        this.sprite.style.left = this.x + 'px'
        playField.appendChild(this.sprite)
    }

    move(){
        let newX = this.x + this.speed * this.directionX
        //this.checkCollision()
        console.log(this)
        console.log(this.width)
        if(newX >= 0 && newX <= 1280 - this.width){
           
            this.x = newX
            this.sprite.style.left = this.x + 'px'
        } else {
            // Reducir el ancho en lugar de eliminar la plataforma
            this.width -= 6; // Ajusta la cantidad que quieras reducir
            if (this.width <= 0) {
                this.remove(); // Eliminar cuando el ancho sea 0 o menor
            } else {
                this.sprite.style.width = this.width + 'px';
            }
        }
    }

    remove() {
        playField.removeChild(this.sprite); // Eliminar el div
        clearInterval(this.interval);
    }
}
