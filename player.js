class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 70;
    this.height = 90;
    this.countJump = 0;
    this.maxCount = 22;
    this.jumpSpeed = 16;
    this.gravity = 4;
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
    let isGrounded = false;
    platforms.forEach(function (platform, index) {
      if (
        platform.x < player.x + player.width &&
        platform.y < player.y + player.height &&
        platform.x + platform.width > player.x &&
        platform.y + platform.height > player.y
      ) {
        console.log("PLATAFORMA " + platform.y)
                console.log("PLAYER " + (player.y + player.height));

        player.isGrounded = true;
        player.isJumping = false;
        player.y = platform.y - player.height;
        isGrounded = true;
      }
    });
    if (!isGrounded) {
      player.isGrounded = false;
      player.y += player.gravity;
    }
  }
}
