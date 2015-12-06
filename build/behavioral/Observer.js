/**
* The observer pattern is a software design pattern in which an object, called the subject,
* maintains a list of its dependents, called observers, and notifies them automatically of any
* state changes, usually by calling one of their methods. It is mainly used to implement distributed
* event handling systems. The Observer pattern is also a key part in the familiar
* model–view–controller (MVC) architectural pattern. The observer pattern is implemented in
* numerous programming libraries and systems, including almost all GUI toolkits.

* The observer pattern can cause memory leaks, known as the lapsed listener problem, because
* in basic implementation it requires both explicit registration and explicit deregistration,
* as in the dispose pattern, because the subject holds strong references to the observers,
* keeping them alive. This can be prevented by the subject holding weak references to the observers.
*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BaseObserver = (function () {
    function BaseObserver() {
    }
    return BaseObserver;
})();
var Citizen = (function () {
    function Citizen(name, salary) {
        this.name = name;
        this.salary = salary;
        this.observers = [];
    }
    Citizen.prototype.subscribe = function (observer) {
        this.observers.push(observer);
    };
    Citizen.prototype.unsubscribe = function (observer) {
        var index = this.observers.indexOf(observer);
        if (index > -1) {
            this.observers.splice(index, 1);
        }
    };
    Citizen.prototype.notifyObservers = function () {
        for (var i = 0; i < this.observers.length; i++) {
            this.observers[i].update(this);
        }
    };
    Citizen.prototype.getName = function () { return this.name; };
    Citizen.prototype.setName = function (name) { this.name = name; };
    Citizen.prototype.getSalary = function () { return this.salary; };
    return Citizen;
})();
var PayRoll = (function (_super) {
    __extends(PayRoll, _super);
    function PayRoll() {
        _super.apply(this, arguments);
    }
    PayRoll.prototype.update = function (citizen) {
        console.log(citizen.getName() + ' salary is now ' + citizen.getSalary());
    };
    return PayRoll;
})(BaseObserver);
var TaxMan = (function (_super) {
    __extends(TaxMan, _super);
    function TaxMan() {
        _super.apply(this, arguments);
    }
    TaxMan.prototype.update = function (citizen) {
        console.log('Sending a new tax bill to ' + citizen.getName());
    };
    return TaxMan;
})(BaseObserver);
var citizen = new Citizen("John Doe", 5000);
citizen.subscribe(new PayRoll());
citizen.subscribe(new TaxMan());
citizen.notifyObservers();
