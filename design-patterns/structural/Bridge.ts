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