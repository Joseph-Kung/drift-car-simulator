import Car from './car.js';
import Background from './background.js';
import Track from './track.js';

class Game {
  constructor (canvas) {
    this.canvas = canvas;
    this.car = new Car(100, 175)
    this.moveCar.bind(this);
  }

  run () {
    const background = new Background(this.canvas)
    background.render();
    this.loadListeners();
    setInterval(() => {
      this.update();
      this.draw();
    }, 60)
   
  }

  draw() {
    const c = canvas.getContext('2d');
    const track = new Track(100, 100);
    c.fillStyle = 'white';
    this.car.draw();
    c.fillRect(600, 600, 50, 50)
  }

  update() {
    const c = canvas.getContext('2d');
    c.clearRect(-100, -100, window.innerWidth, window.innerHeight);
  }

  loadListeners() {
    window.addEventListener("keydown", this.moveCar.bind(this), false);
  }

  moveCar(e) {
    const c = canvas.getContext('2d');
    if (e.key === 'w') {
      c.translate(0, 50)
      this.car.update(0, 50);
    } else if (e.key === 'a') {
      // c.translate(50, 0)
      // this.car.update(50, 0);
      this.car.rotate()
    } else if (e.key === 's') {
      c.translate(0, -50)
      this.car.update(0, -50);
    } else if (e.key === 'd') {
      // c.translate(-50, 0)
      // this.car.update(-50, 0);
      this.car.rotate();
    }
  }
}


export default Game;
