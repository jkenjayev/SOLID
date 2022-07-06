class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  setWidth(width) {
    this.width = width;
  }

  setHeight(height) {
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  setWidth(width) {
    this.width = width;
    this.height = width;
  }

  setHeight(height) {
    this.width = height;
    this.height = height;
  }
}

function increaseRectangleWidth(rectangle) {
  rectangle.setWidth(rectangle.width + 1);
}

const rectangleOne = new Rectangle(10, 2);
const square = new Square(5, 5);

increaseRectangleWidth(rectangleOne);
increaseRectangleWidth(square);

console.log(rectangleOne, "\n", rectangleOne.area());
console.log(square, "\n", square.area());