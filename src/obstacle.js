class Obstacle {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  draw() {
    const c = canvas.getContext('2d');
    c.save();
    c.translate(-this.width / 2, -this.height / 2)
    c.drawImage(this.img, this.x, this.y, this.width, this.height)
    c.restore();
  }
}

export default Obstacle;