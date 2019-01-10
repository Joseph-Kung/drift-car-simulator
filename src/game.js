import Car from './car.js';
import Background from './background.js';
import Track from './track.js';

class Game {
  constructor (canvas) {
    this.canvas = canvas;
    canvas.width = 800;
    canvas.height = 600;
    this.viewportWidth = canvas.width
    this.viewportHeight = 0
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
    c.fillRect(200, -200, 50, 50);
  }

  update() {
    const c = canvas.getContext('2d');
    c.clearRect(0, this.viewportHeight, this.viewportWidth, 600);
  }

  loadListeners() {
    window.addEventListener("keydown", this.moveCar.bind(this), false);
  }

  moveCar(e) {
    const c = canvas.getContext('2d');
    if (e.key === 'w') {
      let x = Math.cos(this.car.rad) * 17
      let y = Math.sin(this.car.rad) * 17
      this.viewportHeight -= y;
      this.viewportWidth -= x;
      c.translate(x, y)
      this.car.update(x, y);
    } else if (e.key === 'a') {
      this.car.rad -= 0.12
    } else if (e.key === 's') {
      let x = Math.cos(this.car.rad) * 17 * - 1
      let y = Math.sin(this.car.rad) * 17 * - 1
      this.viewportHeight += y
      this.viewportWidth += x
      c.translate(x, y)
      this.car.update(x, y);
    } else if (e.key === 'd') {
      this.car.rad += 0.12
    }
  }

}


export default Game;
