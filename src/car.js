class Car {
  constructor (x, y) {
    this.x = x;
    this.y = y;
    this.rad = Math.PI
  }

  draw() {
    const c  = canvas.getContext('2d');

    if (this.rad) {
      c.save()
      c.fillStyle = 'white';
      c.translate(this.x , this.y);
      c.rotate(this.rad);
      c.fillRect(25 * -1,25 * -1, 50, 50)
      c.restore();
    } else {
      c.fillStyle = 'white';
      c.fillRect(this.x - 25, this.y - 25, 50, 50)
    }
  }

  update(xShift, yShift) {
    this.x -= xShift;
    this.y -= yShift;
  }
}

export default Car;