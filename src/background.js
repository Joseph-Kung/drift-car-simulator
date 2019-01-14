import Track from './track.js'
import Barrier from './barrier.js';

class Background {
  constructor(canvas, obstacles) {
    this.canvas = canvas;
    this.obstacles = obstacles;
    this.img = new Image;
    this.img.src = '../assets/track.png';
  }

  render() {
    // new Track(-475,-375);
    // new Track(-475,-75);
    // new Track(-475,225);
    // new Track(-475,525);
    // new Track(-475,825);
    // new Track(-475,1125);
    // new Track(-475,1425);
    // new Track(-475,1625);
    const c = canvas.getContext('2d');
    c.drawImage(this.img, -500, -500, 4512, 7040)

    this.obstacles.forEach(obstacle => {
      obstacle.draw();
    })
  }
}

export default Background;