import Car from './car.js';
import Background from './background.js';
import Tree from './tree.js';
import Collision from './collision.js';
import Boulder from './boulder.js';
import Tire from './tire.js';
import Cone from './cone.js';

class Game {
  constructor (canvas) {
    this.canvas = canvas;
    this.keys = [];
    canvas.width = 1000;
    canvas.height = 700;
    this.obstacles = [new Tree(300, 300, 100, 100), new Tree(0, 0, 100, 100), new Boulder(500, 500, 100, 100), new Tire(400, 400, 100, 100), new Cone(600, 600, 100, 100)];
    this.background = new Background(this.canvas, this.obstacles);
    this.car = new Car(canvas.width / 2, canvas.height / 2, this);
    this.points = 0;
    this.gameDone = false

    this.seconds = 59;
    this.milliseconds = 99;
    this.millisecondsTimer;
    this.secondsTimer;
  }
  
  run () {
    if (this.gameDone === false) {
      this.loadListeners();
      this.car.update();
      this.draw();
      requestAnimationFrame(this.run.bind(this))
    }
  }

  draw() {
    const c = canvas.getContext('2d');
    c.save();
    c.clearRect(0, 0, this.canvas.width, this.canvas.height);
    c.translate(-this.car.x + this.canvas.width / 2, -this.car.y + this.canvas.height / 2);
    this.background.render();
    this.drawUI();
    this.checkCollision();
    this.givePoints();
    this.car.moveCar();
    this.car.draw();
    c.restore();
  }

  drawUI() {
    document.getElementById('score').innerHTML = `Score: ${this.points}`;
    document.getElementById('time').innerHTML = `Time Remaining: ${('0' + this.seconds).slice(-2)}:${('0' + this.milliseconds).slice(-2)}s`;
  } 

  givePoints() {
    if ((Math.abs(this.car.velX) >= 1.5 || Math.abs(this.car.velY) >= 1.5) && Math.abs(this.car.radDiff) === 0.03 ) {
      this.points += 1;
    }
  }


  loadListeners() {
    window.addEventListener("keydown", this.handleKeyDown.bind(this));
    window.addEventListener("keyup", this.handleKeyUp.bind(this))
  }

  checkCollision(){
    for (let i = 0; i < this.obstacles.length; i++) {
      if (Collision(this.car, this.obstacles[i]) === true) {
        this.car.velX *= -0.75
        this.car.velY *= -0.75

        this.points -= 20
        if (this.points < 0) {
          this.points = 0
        }
      }
    }
  }

  handleKeyUp(e) {
    this.keys[e.key] = false;
  }

  handleKeyDown(e) {
    this.keys[e.key] = true;
  }

  setTimers() {
    this.millisecondsTimer = setInterval(() => {
      this.milliseconds -= 1
      if (this.milliseconds === -1) {
        this.milliseconds = 99
      }
    }, 10)

    this.secondsTimer = setInterval(() => {
      this.seconds -= 1
      if (this.seconds === 0) {
        this.gameOver();
      }
    }, 1000)
  }

  gameOver() {
    this.seconds = 0
    this.milliseconds = 0

    clearInterval(this.millisecondsTimer);
    clearInterval(this.secondsTimer);
    window.removeEventListener("keydown", this.handleKeyDown.bind(this));
    window.removeEventListener("keyup", this.handleKeyUp.bind(this))
    this.gameDone = true
    this.draw();
    document.getElementById('description').innerHTML = `Good job! You had a final score of ${this.points}`;
    document.getElementById('play').innerHTML = 'Play again'
    document.getElementById('welcome').style.display = 'flex'
  }
}


export default Game;
