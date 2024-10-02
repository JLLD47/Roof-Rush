
class Coin {
    constructor(x, y) {
        this.height = 16
        this.width = 16
        this.y = y
        this.x = x
        this.sprite = document.createElement('div')
        this.direction = -1
        this.speed = 5
        this.interval = setInterval(this.move.bind(this), 16)
        this.directionX = -1

    }
    insert() {
        this.sprite.setAttribute('class', 'coin')
        this.sprite.style.width = this.width + 'px'
        this.sprite.style.height = this.height + 'px'
        this.sprite.style.top = this.y + 'px'
        this.sprite.style.left = this.x + 'px'
        playField.appendChild(this.sprite)
    }
    move() {
        let newC = this.x + this.speed * this.directionX
        this.checkCollisions()
        if (newC >= 0 && newC <= 1280 - this.width) {
            this.x = newC
            this.sprite.style.left = this.x + 'px'
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
                player.score += 50
                console.log(player)
            }
        })
    }

    remove() {
        playField.removeChild(this.sprite)
        clearInterval(this.interval)
    }


}