const { Square, Circle, Triangle } = require("./shapes");

describe("Square test", () => {
  test("Rendered correctly", () => {
    const shape = new Square();
    var color = "grey";
    shape.setColor(color);
    expect(shape.render()).toEqual(
      `<rect x="73" y="40" width="180" height="180" fill="${color}" />`
    );
  });
});

describe("Circle test", () => {
  test("renders correctly", () => {
    const shape = new Circle();
    var color = "blue";
    shape.setColor(color);
    expect(shape.render()).toEqual(
      `<circle cx=30%" cy="30%" r="90" height="100%" width="100%" fill="${color}"/>`
    );
  });
});

describe("Triangle", () => {
  test("renders correctly", () => {
    const shape = new Triangle();
    var color = "pink";
    shape.setColor(color);
    expect(shape.render()).toEqual(
      `<polygon points="190, 18 200, 300 56, 175" fill="${color}" />`
    );
  });
});
