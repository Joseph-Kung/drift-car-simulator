import Obstacle from './obstacle.js';

class Cone extends Obstacle {
  constructor(x, y, width, height) {
    super(x, y, width, height)
    this.img = new Image;
    this.img.src = '../assets/cone.png';
  }
}

export default Cone;