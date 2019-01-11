class Background {
  constructor(canvas, obstacles) {
    this.canvas = canvas;
    this.obstacles = obstacles;
  }

  render() {
    this.canvas.width = 1000;
    this.canvas.height = 700;
    // this.obstacles.forEach(obstacle => {
    //   obstacle.draw();
    // })
  }
}

export default Background;