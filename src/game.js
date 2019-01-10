import Car from './car.js';
import Background from './background.js';
import Track from './track.js';

class Game {
  constructor (canvas) {
    this.canvas = canvas;
    this.car = new Car(100, 100, 50, 50);
    this.moveCar.bind(this);
  }
  
  run () {
    const background = new Background(this.canvas)
    background.render();
    this.loadListeners();
    setInterval(() => {
      this.update();
      this.draw();
    }, 1000/60)
   
  }

  draw(rad) {
    const c = canvas.getContext('2d');
    const track = new Track(100, 100);
    c.fillStyle = 'white';
    this.car.draw();
    c.fillRect(600, 600, 50, 50);
  }

  update() {
    const c = canvas.getContext('2d');
    c.setTransform(1, 0, 0, 1, this.x, this.y);
    c.clearRect(0, 0, this.canvas.width, this.canvas.height);
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
      this.car.rad += 0.17
    } else if (e.key === 's') {
      c.translate(0, -50)
      this.car.update(0, -50);
    } else if (e.key === 'd') {
      // c.translate(-50, 0)
      // this.car.update(-50, 0);
      this.car.rad -= 0.17
    }
  }

}


export default Game;
