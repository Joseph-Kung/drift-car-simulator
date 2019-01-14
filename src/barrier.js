import Obstacle from './obstacle.js';

class Barrier extends Obstacle {
  constructor(x, y, width, height) {
    super(x, y, width, height)
    this.img = new Image;
  }

  draw() {
    const c = canvas.getContext('2d');
    c.save();
    c.translate(-this.width / 2, -this.height / 2)
    c.fillStyle = 'green';
    c.fillRect(this.x, this.y, this.width, this.height);
    c.restore();
  }
}

export default Barrier;