class Car {
  constructor (x, y, game) {
    this.img = new Image()
    this.img.src = '../assets/ken.png';
    this.scale = 0.07
    this.imgw = 1520 * this.scale
    this.imgh = 766 * this.scale
    this.x = x;
    this.y = y;
    this.rad = 0;
    this.radDiff = 0;
    this.frontLeft = {corner: 'frontLeft', x: this.x - this.imgw / 2, y: this.y + this.imgh / 2};
    this.backLeft = {corner: 'backLeft', x: this.x + this.imgw / 2, y: this.y + this.imgh / 2};
    this.frontRight = { corner: 'frontRight', x: this.x - this.imgw / 2, y: this.y - this.imgh /2};
    this.backRight = {corner: 'backRight', x: this.x + this.imgw / 2, y: this.y - this.imgh / 2};
    this.corners = [this.frontLeft, this.frontRight, this.backLeft, this.backRight];
    this.prev = []
    this.velX = 0
    this.velY = 0
    this.accX = 0
    this.accY = 0
    this.game = game
    console.log(this.corners);
  }

  draw() {
    const c  = canvas.getContext('2d');

    const friction = 0.96;
    this.velX *= friction;
    this.velY *= friction;

    c.translate(this.velX, this.velY)
    
    this.update();
    c.save()
    c.translate(this.x , this.y);
    c.rotate(this.rad);

    c.drawImage(this.img, this.imgw / 2 * -1, this.imgh / 2 * -1, this.imgw , this.imgh)
    c.restore();
  }

  update() {
    this.velX += this.accX;
    this.velY += this.accY;
    this.prev = [this.x, this.y]
    this.x -= (this.velX);
    this.y -= (this.velY);

    this.movePoints()
    const newCorners = this.corners.map(corner => {
      return this.turnCorners(corner)
    })

    this.corners = newCorners;
    console.log(this.corners);
  }


  moveCar() {
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
      this.radDiff = -0.03
    } else if (this.game.keys['d']) {
      this.rad += 0.03
      this.radDiff = 0.03
    } else {
      this.radDiff = 0
    }

    if (this.game.keys['s']) {
      let ax = Math.cos(this.rad) * 0.01 * - 1
      let ay = Math.sin(this.rad) * 0.01 * - 1
      this.accX = ax;
      this.accY = ay;
    }
  }

  turnCorners(corner) {
    let tempX = corner.x - this.x
    let tempY = corner.y - this.y

    let rotatedX = tempX * Math.cos(this.radDiff / 2) - tempY * Math.sin(this.radDiff / 2);
    let rotatedY = tempX * Math.sin(this.radDiff / 2) + tempY * Math.cos(this.radDiff / 2);


    
    return Object.assign(corner, {x: rotatedX + this.x, y: rotatedY + this.y})
  }

  movePoints() {
    if (this.prev) {
      let diffX = this.x - this.prev[0];
      let diffY = this.y - this.prev[1];
      this.corners.forEach(corner => {
        corner['x'] += diffX;
        corner['y'] += diffY; 
      })
    }
  }
}

// 0.466800515

export default Car;
