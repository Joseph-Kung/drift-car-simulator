class Car {
  constructor (x, y, game) {
    this.img = new Image()
    this.img.src = '../assets/audi.png';
    this.imgw = 256 //
    this.imgh = 256 //46.3
    this.scale = 0.5
    this.x = x;
    this.y = y;
    this.rad = Math.PI
    this.velX = 0
    this.velY = 0
    this.accX = 0
    this.accY = 0
    this.game = game
  }

  draw() {
    const c  = canvas.getContext('2d');

    const friction = 0.96;
    this.velX *= friction;
    this.velY *= friction;

    c.translate(this.velX, this.velY)
    this.update();
    this.viewportHeight -= (this.velY + this.accY);
    this.viewportWidth -= (this.velX + this.accX);

    c.save()
    c.translate(this.x , this.y);
    c.rotate(this.rad);
    c.drawImage(this.img, 50 * -1, 60 * -1, this.imgw * this.scale, this.imgh * this.scale)
    c.restore();
  }

  update() {
    const c = canvas.getContext('2d');
    this.velX += this.accX;
    this.velY += this.accY;
    this.viewportHeight -= (this.velY + this.accY);
    this.viewportWidth -= (this.velX + this.accX);

    this.x -= (this.velX);
    this.y -= (this.velY);
  }


  moveCar() {
    const c = canvas.getContext('2d');
    if (this.game.keys['w']) {
      let ax = Math.cos(this.rad) * 0.08;
      let ay = Math.sin(this.rad) * 0.08;
      this.accX = ax;
      this.accY = ay;
    } else {
      this.accX = this.accY = 0;
    }

    if (this.game.keys['a']) {
      this.rad -= 0.03
    } else if (this.game.keys['d']) {
      this.rad += 0.03
    }

    if (this.game.keys['s']) {
      let ax = Math.cos(this.rad) * 0.01 * - 1
      let ay = Math.sin(this.rad) * 0.01 * - 1
      this.accX = ax;
      this.accY = ay;
    }
  }
}

export default Car;
