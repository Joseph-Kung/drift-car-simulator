class Obstacle {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.topLeft = {x: this.x - this.width / 2, y: this.y - this.height / 2}
    this.botLeft = {x: this.x - this.width / 2, y: this.y + this.height / 2}
    this.topRight = {x: this.x + this.width / 2, y: this.y - this.height / 2}
    this.botRight = {x: this.x + this.width / 2, y: this.y + this.height / 2}
    this.corners = [this.topLeft, this.topRight, this.botLeft, this.botRight]
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