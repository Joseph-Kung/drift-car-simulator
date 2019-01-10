import Game from './game.js';
class Car {
  constructor (x, y, game) {
    this.x = x;
    this.y = y;
    this.rad = Math.PI / 2
    this.velX = 0
    this.velY = 0
    this.accX = 0
    this.accY = 0
    this.game = game
  }

  draw() {
    const c  = canvas.getContext('2d');
    c.translate(this.velX, this.velY)
    this.update();
    if (this.rad) {
      c.save()
      c.fillStyle = 'white';
      c.translate(this.x , this.y);
      c.rotate(this.rad);
      c.fillRect(25 * -1,25 * -1, 50, 50)
      c.restore();
    } else {
      c.fillStyle = 'white';
      c.fillRect(this.x - 25, this.y - 25, 50, 50)
    }
  }

  update(x, y) {
    const c = canvas.getContext('2d');

    this.velX += this.accX;
    this.velY += this.accY;
    
    this.x -= (this.velX);
    this.y -= (this.velY);

    this.game.viewportHeight += this.velY + this.accY;
    this.game.viewportWidth += this.velX + this.accY;
  }
}

export default Car;