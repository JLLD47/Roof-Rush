
class Coin {
    constructor(x, y) {
        this.height = 20
        this.width = 20
        this.y = y
        this.x = x
        this.sprite = document.createElement('div')
        this.direction = -1
        this.speed = 20
        this.value = 0
        this.interval = setInterval(this.move.bind(this), 10)
    }
    insert() {
        this.sprite.setAttribute('class', 'coin')
        this.sprite.style.width = this.width + 'px'
        this.sprite.style.height = this.height + 'px'
        this.sprite.style.top = this.y + 'px'
        this.sprite.style.left = this.x + 'px'
        playfield.appendChild(this.sprite)
    }
    move() {
        let newC = this.y + this.speed * this.directionY
        this.checkCollisions()
        if (newC >= 0 && newC <= 700 - this.height) {
            this.y = newC
            this.sprite.style.top = this.y + 'px'
        } else {
            coins.shift()
            this.remove()
        }
    }

    checkCollisions() {
        coins.forEach(function (coin, index) {
            if (coin.x < player.x + player.width &&
                 coin.y < player.y + player.height &&
                  coin.x + coin.width > player.x &&
                   coin.y + coin.height > player.y) {
                coin.remove()
                coins.splice(index, 1)
                player.value += 50
            }
        })
    }

remove(){
    playField.removeChild(this.sprite)
    clearInterval(this.interval)
}


}
