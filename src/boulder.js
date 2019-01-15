import Obstacle from './obstacle.js';

class Boulder extends Obstacle {
  constructor(x, y, width, height) {
    super(x, y, width, height)
    this.img = new Image;
    this.img.src = './assets/boulder.png';
  }
}

export default Boulder;