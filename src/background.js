import Barrier from './barrier.js';
import Tire from './tire.js';
import Cone from './cone.js';
import Boulder from './boulder.js';

class Background {
  constructor(canvas, obstacles, game) {
    this.canvas = canvas;
    this.game = game;
    this.obstacles = obstacles;
    this.img = new Image;
    this.img.src = '../assets/track.png';
  }

  render() {
    const c = canvas.getContext('2d');
    c.drawImage(this.img, -500, -500, 3101, 3774)

    const obj = ['tree', 'cone', 'tire'];
    if (this.obstacles.length < 100) {
      let random;
      this.obstacles.push(new Barrier(-750, 1300, 500, 4300));
      this.obstacles.push(new Barrier(1050, -750, 3400, 500));
      this.obstacles.push(new Barrier(2851, 1300, 500, 4300));
      this.obstacles.push(new Barrier(1050, 3524, 3400, 500));
      for (let i = 0; i < 30; i++) {
        random = Math.floor(Math.random() * 3);
        if (obj[random] === 'tree') {
          this.obstacles.push(new Boulder(this.randomInt(0, 2500), this.randomInt(0, 3100), 60, 60))
        } else if (obj[random] === 'cone') {
          this.obstacles.push(new Cone(this.randomInt(0, 2500), this.randomInt(0, 3100), 22, 22))
        } else {
          this.obstacles.push(new Tire(this.randomInt(0, 2500), this.randomInt(0, 3100), 50, 50))
        }
      }
    }
    
    this.obstacles.forEach(obstacle => {
      obstacle.draw();
    })
  }

  randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

export default Background;