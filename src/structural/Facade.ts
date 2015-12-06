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