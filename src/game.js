import Car from './car.js';
import Background from './background.js';
import Track from './track.js';
import Tree from './tree.js';

class Game {
  constructor (canvas) {
    this.canvas = canvas;
    this.keys = [];
    canvas.width = 800;
    canvas.height = 600;
    this.viewportWidth = 0
    this.viewportHeight = 0
    this.car = new Car(canvas.width / 2, canvas.height / 2, this);
    this.moveCar.bind(this);
  }
  
  run () {
    const background = new Background(this.canvas)
    background.render();
    this.loadListeners();
    setInterval(() => {
        this.car.update();
        this.draw();
      }, 1000/60)
  }

  draw() {
    const c = canvas.getContext('2d');
    c.save();
    c.clearRect(0, 0, 5000, 5000);
    c.translate(-this.car.x + this.canvas.width / 2, -this.car.y + this.canvas.height / 2);
    new Track(this.canvas.width / 3, this.canvas.height / 3);
    new Tree(this.canvas.width/3 , this.canvas.height / 6 + 7);
    c.fillStyle = 'white';
    this.moveCar();
    this.car.draw();

    c.fillRect(-200, -200, 100, 100);
    c.restore();
  }


  loadListeners() {
    window.addEventListener("keydown", (e) => {
      this.keys[e.key] = true;
    });

    window.addEventListener("keyup", (e) => {
      this.keys[e.key] = false;
    })
  }

  moveCar() {
    const c = canvas.getContext('2d');
    if (this.keys['w']) {
      let ax = Math.cos(this.car.rad) * 0.08;
      let ay = Math.sin(this.car.rad) * 0.08;
      this.viewportHeight -= (this.car.velY + this.car.accY);
      this.viewportWidth -= (this.car.velX + this.car.accX);
      this.car.accX = ax;
      this.car.accY = ay;
    } else {
      this.car.accX = this.car.accY = 0;
    }

    if (this.keys['a']) {
      this.car.rad -= 0.03
    } else if (this.keys['d']) {
      this.car.rad += 0.03
    }
    
    if (this.keys['s']) {
      let ax = Math.cos(this.car.rad) * 0.01 * - 1
      let ay = Math.sin(this.car.rad) * 0.01 * - 1
      this.viewportHeight -= (this.car.velY + this.car.accY);
      this.viewportWidth -= (this.car.velX + this.car.accX);
      this.car.accX = ax;
      this.car.accY = ay;
    } 
  }
}


export default Game;
