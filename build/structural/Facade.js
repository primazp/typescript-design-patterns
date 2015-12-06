/**
* The pattern name is by analogy to an architectural facade.
* A facade is an object that provides a simplified interface to a larger body of code,
* such as a class library. A facade can:
*
*  - make a software library easier to use, understand and test, since the facade has
*    convenient methods for common tasks;
*  - make the library more readable, for the same reason;
*  - reduce dependencies of outside code on the inner workings of a library,
*    since most code uses the facade, thus allowing more flexibility in developing the system;
*  - wrap a poorly designed collection of APIs with a single well-designed API.
*
* The Facade design pattern is often used when a system is very complex or difficult to
* understand because the system has a large number of interdependent classes or its source
* code is unavailable. This pattern hides the complexities of the larger system and provides
* a simpler interface to the client. It typically involves a single wrapper class which
* contains a set of members required by client. These members access the system on behalf of
* the facade client and hide the implementation details.
*/
var N54Engine = (function () {
    function N54Engine() {
    }
    N54Engine.prototype.getModel = function () { return 'N54'; };
    return N54Engine;
})();
var E92Body = (function () {
    function E92Body() {
    }
    E92Body.prototype.getType = function () { return 'E92'; };
    return E92Body;
})();
var V10Engine = (function () {
    function V10Engine() {
    }
    V10Engine.prototype.getModel = function () { return 'V10'; };
    return V10Engine;
})();
var TwoDoorRoadster = (function () {
    function TwoDoorRoadster() {
    }
    TwoDoorRoadster.prototype.getType = function () { return '2-door roadster'; };
    return TwoDoorRoadster;
})();
var Car = (function () {
    function Car(model, engine, body) {
        this.model = model;
        this.engine = engine;
        this.body = body;
    }
    Car.prototype.toString = function () {
        return this.model +
            ', engine: ' + this.engine.getModel() +
            ', body: ' + this.body.getType();
    };
    return Car;
})();
// Facade
var CarDistributor = (function () {
    function CarDistributor() {
    }
    CarDistributor.prototype.getBMWCar = function () {
        return new Car('BMW E92', new N54Engine(), new E92Body());
    };
    CarDistributor.prototype.getPorscheCar = function () {
        return new Car('Porsche Carrera GT', new V10Engine(), new TwoDoorRoadster());
    };
    return CarDistributor;
})();
var facade = new CarDistributor();
console.log(facade.getBMWCar().toString());
console.log(facade.getPorscheCar().toString());
