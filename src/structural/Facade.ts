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

// Private inaccessible subsystem
interface CarEngine {
    getModel(): string;
}
interface CarBody {
    getType(): string;
}

class N54Engine implements CarEngine {
    getModel() { return 'N54'; }
}
class E92Body implements CarBody {
    getType() { return 'E92'; }
}

class V10Engine implements CarEngine {
    getModel() { return 'V10'; }
}
class TwoDoorRoadster implements CarBody {
    getType() { return '2-door roadster'; }
}

class Car {
    constructor(private model: string,
                private engine: CarEngine,
                private body: CarBody){}

    toString(): string {
        return this.model +
            ', engine: ' + this.engine.getModel() +
            ', body: ' + this.body.getType();
    }
}

// Facade
class CarDistributor {
    getBMWCar(): Car {
        return new Car('BMW E92', new N54Engine(), new E92Body());
    }

    getPorscheCar(): Car {
        return new Car('Porsche Carrera GT', new V10Engine(), new TwoDoorRoadster());
    }
}

var facade = new CarDistributor();

console.log(facade.getBMWCar().toString());
console.log(facade.getPorscheCar().toString());
