class Shape {
  constructor(a) {
    this.Area = a;
  }
  print() {
    console.log('Print is called from parent');
  }
}

class Circle extends Shape {
  constructor(radius) {
    this.radius = radius;
    super(pi * radius ^ 2);
  }

  display() {
    super.print();
    console.log('Area of the circle:  ' + this.Area);
  }
}

const obj = new Circle(223);
obj.display();

