class Car {
  constructor (x, y) {
    this.x = x;
    this.y = y;
  }

  draw() {
    const c  = canvas.getContext('2d');
    c.fillStyle = 'white';
    c.fillRect(this.x, this.y, 50, 50)
  }

  update(xShift, yShift) {
    this.x += xShift;
    this.y += yShift;
  }
}

export default Car;