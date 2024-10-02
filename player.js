class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 48;
    this.height = 48;
    this.countJump = 0;
    this.maxCount = 25;
    this.jumpSpeed = 8;
    this.gravity = 6;
    this.isJumping = false;
    this.isGrounded = false;
    this.sprite = document.createElement("div");
  }
  spawn() {
    this.sprite.setAttribute("id", "player");
    this.sprite.style.width = this.width + "px";
    this.sprite.style.height = this.height + "px";
    this.sprite.style.top = this.y + "px";
    this.sprite.style.left = this.x + "px";
    playfield.appendChild(this.sprite);
  }
  jump() {
    if (this.isGrounded) {
      this.isJumping = true;
      this.isGrounded = false;
      this.countJump = 0;
    }
  }
  updatePosition() {
    if (this.isJumping) {
      this.countJump += 1;
      this.y -= this.jumpSpeed;
      if (this.countJump >= this.maxCount) {
        this.isJumping = false;
      }
    } else {
      if (!this.isGrounded) {
        this.y += this.gravity;
      }
    }
    this.sprite.style.top = this.y + "px";
  }
  checkCollision() {
    let collision = platforms.some(function (platform, index) {
      if (
        platform.x < player.x + player.width &&
        platform.y <= player.y + player.height &&
        platform.x + platform.width > player.x &&
        platform.y + platform.height >= player.y
      ) {
        console.log(platform.width);
        return true;
      } else {
        return false;
      }
    });
    if (collision) {
      player.isGrounded = true;
      player.isJumping = false;
    } else {
      player.isGrounded = false;
    }
  }
  checkWalls() {
    let smash = platforms.some(function (platform) {
      if (
        player.x + player.width >= platform.x &&
        player.x < platform.x &&
        player.y + player.height > platform.y &&
        player.y < platform.y + platform.height
      ) {
        return true;
      } else {
        return false;
      }
    });
    if (smash) {
      //add sound
      console.log("CHECKED");
    }
  }

  gameOver() {
    playField.removeChild(this.sprite);
  }
}
