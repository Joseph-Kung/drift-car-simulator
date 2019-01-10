import Car from './car.js';
import Background from './background.js';
import Track from './track.js';

class Game {
  constructor (canvas) {
    this.canvas = canvas;
    canvas.width = 800;
    canvas.height = 600;
    this.viewportWidth = canvas.width
    this.viewportHeight = canvas.height
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
    c.clearRect(0, 0, this.viewportWidth, this.viewportHeight);
  }

  loadListeners() {
    window.addEventListener("keydown", this.moveCar.bind(this), false);
  }

  moveCar(e) {
    const c = canvas.getContext('2d');
    if (e.key === 'w') {
      this.viewportHeight -= 50
      c.translate(0, 50)
      this.car.update(0, 50);
    } else if (e.key === 'a') {
      this.car.rad += 0.12
    } else if (e.key === 's') {
      this.viewportHeight += 50
      c.translate(0, -50)
      this.car.update(0, -50);
    } else if (e.key === 'd') {
      this.car.rad -= 0.12
    }
  }

}


export default Game;
