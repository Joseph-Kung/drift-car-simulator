class Track {
  constructor(x, y) {
    this.x = x
    this.y = y

    this.render();
  }

  render() {
    const c = canvas.getContext('2d');
    c.fillStyle = 'gray';

    for (let i = 0; i < 25; i++) {
      c.fillRect(this.x, this.y, 100, 200);
      this.x += 100;
    }
  }
}

export default Track;