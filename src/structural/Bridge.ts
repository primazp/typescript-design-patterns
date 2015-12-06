/**
* The bridge pattern is a design pattern used in software engineering which is meant to
* “decouple an abstraction from its implementation so that the two can vary independently”. 
* The bridge uses encapsulation, aggregation, and can use inheritance to separate responsibilities
* into different classes. When a class varies often, the features of object-oriented programming
* become very useful because changes to a program’s code can be made easily with minimal prior
* knowledge about the program. The bridge pattern is useful when both the class and what it
* does vary often. The class itself can be thought of as the implementation and what the class
* can do as the abstraction. The bridge pattern can also be thought of as two layers of abstraction.
*/

// Implementor
interface Drawer {
    drawCircle(x: number, y: number, radius: number): void;
}

// Concrete Implementor A
class SmallCircleDrawer implements Drawer {
    private multiplier: number = 0.25;

    drawCircle(x: number, y: number, radius: number) {
        console.log("Small circle center = " + x + "," +
        y + " radius = " + radius*this.multiplier);
    }
}

// Concrete Implementor B
class LargeCircleDrawer implements Drawer {
    private multiplier: number = 5;

    drawCircle(x: number, y: number, radius: number) {
        console.log("Large circle center = " + x + "," +
        y + " radius = " + radius*this.multiplier);
    }
}

// Abstraction
abstract class Shape {
    constructor(protected drawer: Drawer){}

    abstract draw(): void;
}

// Refined Abstraction
class Circle extends Shape {
    constructor(private x: number,
                private y: number,
                private radius: number,
                drawer: Drawer) {
        super(drawer);
    }

    draw() {
        this.drawer.drawCircle(this.x, this.y, this.radius)
    }
}

var shapes: Shape[] = [
  new Circle(1, 2, 2, new LargeCircleDrawer()),
  new Circle(5, 10, 10, new SmallCircleDrawer())
];

for(var shape of shapes){
    shape.draw();
}
