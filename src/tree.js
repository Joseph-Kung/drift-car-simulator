import Obstacle from './obstacle.js';

class Tree extends Obstacle {
  constructor(x,y, width, height) {
    super(x, y, width, height)
    this.img = new Image;
    this.img.src = '../assets/tree.png';
  }

  draw() {
    const c = canvas.getContext('2d');
    c.drawImage(this.img, this.x, this.y, this.width, this.height)
  }
}

export default Tree;