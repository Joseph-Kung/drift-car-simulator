import Track from './track.js'

class Background {
  constructor(canvas, obstacles) {
    this.canvas = canvas;
    this.obstacles = obstacles;
  }

  render() {
    new Track(-475,-350);
    new Track(-475,-50);
    new Track(-475,250);
    new Track(-475,550);
    new Track(-475,850);
    new Track(-475,1150);
    this.obstacles.forEach(obstacle => {
      obstacle.draw();
    })
  }
}

export default Background;