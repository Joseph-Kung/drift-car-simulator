import Obstacle from './obstacle.js';

class Tree extends Obstacle {
  constructor(x,y, width, height) {
    super(x, y, width, height)
    this.img = new Image;
    this.img.src = '../assets/tree.png';
  }
}

export default Tree;