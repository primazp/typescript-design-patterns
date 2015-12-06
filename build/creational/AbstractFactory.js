var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
* The abstract factory pattern provides a way to encapsulate a group of individual factories
* that have a common theme without specifying their concrete classes. This pattern separates
* the details of implementation of a set of objects from their general usage and relies on object
* composition, as object creation is implemented in methods exposed in the factory interface.
*
* Let’s imagine that we are developing a game about WW2. This is an early start and we have
* only two states and only two type of units: Tank and Aircraft. These are abstract classes
* and they correspond to ProductA and ProductB on the diagram:
*/
var Tank = (function () {
    function Tank() {
    }
    return Tank;
})();
var Aircraft = (function () {
    function Aircraft() {
    }
    return Aircraft;
})();
// The concrete implementations of Tank and Aircraft can be as follows:
// Concrete Product A1
var T34 = (function (_super) {
    __extends(T34, _super);
    function T34() {
        _super.call(this);
        console.log('T-34 USSR');
    }
    return T34;
})(Tank);
// Concrete Product A2
var Il2 = (function (_super) {
    __extends(Il2, _super);
    function Il2() {
        _super.call(this);
        console.log('Il-2 USSR');
    }
    return Il2;
})(Aircraft);
// Concrete Product B1
var E25 = (function (_super) {
    __extends(E25, _super);
    function E25() {
        _super.call(this);
        console.log('E-25 Germany');
    }
    return E25;
})(Tank);
// Concrete Product B2
var MesserschmittBf110 = (function (_super) {
    __extends(MesserschmittBf110, _super);
    function MesserschmittBf110() {
        _super.call(this);
        console.log('Messerschmitt Bf.110 Germany');
    }
    return MesserschmittBf110;
})(Aircraft);
// USSRVehicleFactory implements abstract factory and creates only USSR tanks and aircrafts:
// Concrete factory 1
var USSRVehicleFactory = (function () {
    function USSRVehicleFactory() {
    }
    USSRVehicleFactory.prototype.createTank = function () {
        return new T34();
    };
    USSRVehicleFactory.prototype.createAircraft = function () {
        return new Il2();
    };
    return USSRVehicleFactory;
})();
// GermanyVehicleFactory is created in a similar way:
// Concrete factory 2
var GermanyVehicleFactory = (function () {
    function GermanyVehicleFactory() {
    }
    GermanyVehicleFactory.prototype.createTank = function () {
        return new E25();
    };
    GermanyVehicleFactory.prototype.createAircraft = function () {
        return new MesserschmittBf110();
    };
    return GermanyVehicleFactory;
})();
// A simple demonstration:
function showFactory(factory) {
    factory.createTank();
    factory.createAircraft();
    console.log('\n');
}
showFactory(new USSRVehicleFactory());
showFactory(new GermanyVehicleFactory());
