/**
* The visitor design pattern is a way of separating an algorithm from an object structure on which
* it operates. A practical result of this separation is the ability to add new operations to existing
* object structures without modifying those structures. It is one way to follow the open/closed principle.
* 
* In essence, the visitor allows one to add new virtual functions to a family of classes without
* modifying the classes themselves; instead, one creates a visitor class that implements all of the
* appropriate specializations of the virtual function. The visitor takes the instance reference as
* input, and implements the goal through double dispatch.
*/

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
