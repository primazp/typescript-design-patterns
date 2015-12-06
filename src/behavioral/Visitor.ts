interface CarVisitor {
  visitWheel(element: Wheel): void;
  visitEngine(element: Engine): void;
  visitCar(element: VisitableCar): void;
}

interface CarElement {
  accept(visitor: CarVisitor): void;
}

class Wheel implements CarElement {
  accept(visitor: CarVisitor) {
    visitor.visitWheel(this);
  }
}

class Engine implements CarElement {
  accept(visitor: CarVisitor) {
    visitor.visitEngine(this);
  }
}

// Concrete Visitor A. First of many possible various visitors;
class CarElementDoVisitor implements CarVisitor {
  visitWheel(element: Wheel) {
    console.log("Spinning wheel...");
  }

  visitEngine(element: Engine) {
    console.log("Starting engine...");
  }

  visitCar(element: VisitableCar) {
    console.log("Moving car...");
  }
}

class VisitableCar implements CarElement {
    private elements: CarElement[] = [];

    constructor(private engine: Engine, private wheel: Wheel) {
      this.elements.push(engine);
      this.elements.push(wheel);
    }

    accept(visitor: CarVisitor) {
      for(var i = 0; i < this.elements.length; i++){
        this.elements[i].accept(visitor);
      }
      visitor.visitCar(this);
    }
}

var car = new VisitableCar(new Engine(), new Wheel());
car.accept(new CarElementDoVisitor());
