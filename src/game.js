import Car from './car.js';
import Background from './background.js';
import Track from './track.js';
import Tree from './tree.js';
import Corner from './corner.js';

class Game {
  constructor (canvas) {
    this.canvas = canvas;
    this.keys = [];
    canvas.width = 1000;
    canvas.height = 700;
    this.obstacles = [new Tree(300, 300, 100, 100), new Tree(0, 0, 100, 100)];
    this.background = new Background(this.canvas, this.obstacles);
    this.car = new Car(canvas.width / 2, canvas.height / 2, this);
  }
  
  run () {
    this.loadListeners();
    this.car.update();
    this.draw();
    requestAnimationFrame(this.run.bind(this))
  }

  draw() {
    const c = canvas.getContext('2d');
    c.save();
    c.clearRect(0, 0, this.canvas.width, this.canvas.height);
    c.translate(-this.car.x + this.canvas.width / 2, -this.car.y + this.canvas.height / 2);
    this.background.render();
    this.checkCollision();
    this.car.moveCar();
    this.car.draw();
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

  checkCollision(){
    for (let i = 0; i < this.obstacles.length; i++) {
      this.isColliding(this.car.corners, this.obstacles[i].corners)
    }
  }

  isColliding(car, obj) {
    const polygons = [car, obj]
    let minA, maxA, minB, maxB;
    for (let i = 0; i < polygons.length; i++) {

        let polygon = polygons[i];
        for (let i1 = 0; i1 < polygon.length; i1++) {

          let i2 = (i1 + 1) % polygon.length;
          let p1 = polygon[i1];
          let p2 = polygon[i2];
          
          let normal = { x: p2.y - p1.y, y: p1.x - p2.x };

           minA = undefined;
           maxA = undefined;

          for (let j = 0; j < car.length; j++) {
            let projected = normal.x * car[j].x + normal.y * car[j].y;
            if (minA === undefined || projected < minA) {
              minA = projected;
            }
            if (maxA === undefined || projected > maxA) {
              
              maxA = projected;
            }
          }

           minB = undefined;
           maxB = undefined;
          for (let j = 0; j < obj.length; j++) {
            let projected = normal.x * obj[j].x + normal.y * obj[j].y;
            if (minB === undefined || projected < minB) {
              minB = projected;
            }
            if (maxB === undefined || projected > maxB) {
              maxB = projected;
            }
          }
          if (maxA < minB || maxB < minA) {
            return false;
        }
      }
    }
    debugger
    return true;
  }
}


export default Game;
