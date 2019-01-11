class Background {
  constructor(canvas, obstacles) {
    this.canvas = canvas;
    this.obstacles = obstacles;
  }

  render() {
    this.obstacles.forEach(obstacle => {
      obstacle.draw();
    })
  }
}

export default Background;