class Game {
  constructor (canvas) {
    this.canvas = canvas;
  }

  run () {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    
    const c = canvas.getContext('2d');
    
    c.fillStyle = 'white';
    c.fillRect(100, 100, 50, 50)
  }
}


// const moveCar = e => {
//   switch(e.key) {
//     case 'w':
//       canvasTransform.Y = 3;
//     case 'a':
//       canvasTransform.X = -3;
//     case 's':
//       canvasTransform.Y = -3;
//     case 'd':
//       canvasTransform.X = 3;
//   }
// }

// window.addEventListener("keydown", moveCar, false);

module.exports = Game
