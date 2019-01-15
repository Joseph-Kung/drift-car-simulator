class Track {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.img = new Image;
    this.img.src = './assets/road.png';
    this.render();
  }

  render() {
    const c = canvas.getContext('2d');
    for (let i = 0; i < 15; i++) {
      c.drawImage(this.img, this.x, this.y, 300, 300)
      this.x += 300;
    }
  }
}

export default Track;