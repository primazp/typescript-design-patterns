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
var Wheel = (function () {
    function Wheel() {
    }
    Wheel.prototype.accept = function (visitor) {
        visitor.visitWheel(this);
    };
    return Wheel;
})();
var Engine = (function () {
    function Engine() {
    }
    Engine.prototype.accept = function (visitor) {
        visitor.visitEngine(this);
    };
    return Engine;
})();
// Concrete Visitor A. First of many possible various visitors;
var CarElementDoVisitor = (function () {
    function CarElementDoVisitor() {
    }
    CarElementDoVisitor.prototype.visitWheel = function (element) {
        console.log("Spinning wheel...");
    };
    CarElementDoVisitor.prototype.visitEngine = function (element) {
        console.log("Starting engine...");
    };
    CarElementDoVisitor.prototype.visitCar = function (element) {
        console.log("Moving car...");
    };
    return CarElementDoVisitor;
})();
var VisitableCar = (function () {
    function VisitableCar(engine, wheel) {
        this.engine = engine;
        this.wheel = wheel;
        this.elements = [];
        this.elements.push(engine);
        this.elements.push(wheel);
    }
    VisitableCar.prototype.accept = function (visitor) {
        for (var i = 0; i < this.elements.length; i++) {
            this.elements[i].accept(visitor);
        }
        visitor.visitCar(this);
    };
    return VisitableCar;
})();
var car = new VisitableCar(new Engine(), new Wheel());
car.accept(new CarElementDoVisitor());
