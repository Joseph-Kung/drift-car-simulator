// draw semicircles

class Corner {
  constructor (x, y, r, direction) {
    this.x = x;
    this.y = y;
    this.r = r;
    
    if (direction === 'right') {
      this.start = Math.PI * 1.5;
      this.end = Math.PI * 0.5;
    } else if (direction === 'left') {
      this.start = Math.PI * 0.5;
      this.end = Math.PI * 1.5;
    }

    this.render();
  }

  render() {
    const c = canvas.getContext('2d');
    c.beginPath();
    c.arc(this.x, this.y, this.r / 3, this.start, this.end);
    c.arc(this.x, this.y, this.r, this.start, this.end);
    c.closePath();
    c.stroke();
  }
}

export default Corner;