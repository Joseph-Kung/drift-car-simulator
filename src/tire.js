import Obstacle from './obstacle.js';

class Tire extends Obstacle {
  constructor(x, y, width, height) {
    super(x, y, width, height)
    this.img = new Image;
    this.img.src = '../assets/tire.png';
  }
}

export default Tire