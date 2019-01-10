import Car from './car.js';
import Background from './background.js';

class Game {
  constructor (canvas) {
    this.canvas = canvas;
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
    c.fillStyle = 'white';
    c.fillRect(100, 100, 50, 50)
    c.fillRect(600, 600, 50, 50)
  }

  update() {
    const c = canvas.getContext('2d');
    c.clearRect(0, 0, 1200, 1000)
  }

  loadListeners() {
    window.addEventListener("keydown", moveCar, false);
  }
}


const moveCar = e => {
  console.log(e)
  const c = canvas.getContext('2d');
  if(e.key === 'w') {
      console.log('w')
      c.translate(0, 100)
  } else if (e.key === 'a') {
      console.log('a')
      c.translate(100, 0)
  } else if (e.key === 's') {
    console.log('s')
    c.translate(0, -100)
  } else if (e.key === 'd') {
    console.log('d')
    c.translate(-100, 0)
  }
}

export default Game;
