class Background {
  constructor(canvas) {
    this.canvas = canvas;
  }

  render() {
    this.canvas.width = 800;
    this.canvas.height = 600;
  }
}

export default Background;