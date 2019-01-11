class Tree {
  constructor(x,y) {
    this.img = new Image;
    this.img.src = '../assets/background/tree.png';
    this.x = x;
    this.y = y;

    this.render();
  }

  render() {
    const c = canvas.getContext('2d');
    for (let i = 0; i < 34; i++) {
      c.drawImage(this.img, this.x, this.y, 100, 100);
      c.drawImage(this.img, this.x, this.y + 285, 100, 100);
      this.x += 75
    }
  }
}

export default Tree;