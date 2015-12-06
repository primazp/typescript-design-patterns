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
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// Concrete Implementor A
var SmallCircleDrawer = (function () {
    function SmallCircleDrawer() {
        this.multiplier = 0.25;
    }
    SmallCircleDrawer.prototype.drawCircle = function (x, y, radius) {
        console.log("Small circle center = " + x + "," +
            y + " radius = " + radius * this.multiplier);
    };
    return SmallCircleDrawer;
})();
// Concrete Implementor B
var LargeCircleDrawer = (function () {
    function LargeCircleDrawer() {
        this.multiplier = 5;
    }
    LargeCircleDrawer.prototype.drawCircle = function (x, y, radius) {
        console.log("Large circle center = " + x + "," +
            y + " radius = " + radius * this.multiplier);
    };
    return LargeCircleDrawer;
})();
// Abstraction
var Shape = (function () {
    function Shape(drawer) {
        this.drawer = drawer;
    }
    return Shape;
})();
// Refined Abstraction
var Circle = (function (_super) {
    __extends(Circle, _super);
    function Circle(x, y, radius, drawer) {
        _super.call(this, drawer);
        this.x = x;
        this.y = y;
        this.radius = radius;
    }
    Circle.prototype.draw = function () {
        this.drawer.drawCircle(this.x, this.y, this.radius);
    };
    return Circle;
})(Shape);
var shapes = [
    new Circle(1, 2, 2, new LargeCircleDrawer()),
    new Circle(5, 10, 10, new SmallCircleDrawer())
];
for (var _i = 0; _i < shapes.length; _i++) {
    var shape = shapes[_i];
    shape.draw();
}
