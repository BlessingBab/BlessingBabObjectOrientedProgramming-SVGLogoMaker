class Shape {
  constructor() {
    this.color = "";
  }
  setColor(color) {
    this.color = color;
  }
}

class Square extends Shape {
  render() {
    // Returns polygon with color input
    return `<rect x="73" y="40" width="180" height="180" fill="${this.color}" />`;
  }
}

class Circle extends Shape {
  render() {
    return `<circle cx=30%" cy="30%" r="90" height="100%" width="100%" fill="${this.color}"/>`;
  }
}

class Triangle extends Shape {
  render() {
    // Returns polygon with color input
    return `<polygon points="190, 18 200, 300 56, 175" fill="${this.color}" />`;
  }
}

module.exports = { Square, Circle, Triangle };
