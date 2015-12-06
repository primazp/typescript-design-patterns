/**
* Usually a program is made up of a large number of classes. So the logic and computation is
* distributed among these classes. However, as more classes are developed in a program, especially
* during maintenance and/or refactoring, the problem of communication between these classes may
* become more complex. This makes the program harder to read and maintain. Furthermore, it can become
* difficult to change the program, since any change may affect code in several other classes.
*
* With the mediator pattern, communication between objects is encapsulated with a mediator object.
* Objects no longer communicate directly with each other, but instead communicate through the mediator.
* This reduces the dependencies between communicating objects, thereby lowering the coupling.
*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Colleague = (function () {
    function Colleague(mediator) {
        this.mediator = mediator;
    }
    Colleague.prototype.send = function (message) {
        this.mediator.send(message, this);
    };
    return Colleague;
})();
var Mediator = (function () {
    function Mediator() {
    }
    return Mediator;
})();
var ConcreteColleague1 = (function (_super) {
    __extends(ConcreteColleague1, _super);
    function ConcreteColleague1() {
        _super.apply(this, arguments);
    }
    ConcreteColleague1.prototype.notify = function (message) {
        console.log("Colleague1 gets message: " + message);
    };
    return ConcreteColleague1;
})(Colleague);
var ConcreteColleague2 = (function (_super) {
    __extends(ConcreteColleague2, _super);
    function ConcreteColleague2() {
        _super.apply(this, arguments);
    }
    ConcreteColleague2.prototype.notify = function (message) {
        console.log("Colleague2 gets message: " + message);
    };
    return ConcreteColleague2;
})(Colleague);
var ConcreteMediator = (function (_super) {
    __extends(ConcreteMediator, _super);
    function ConcreteMediator() {
        _super.apply(this, arguments);
    }
    ConcreteMediator.prototype.setColleague1 = function (colleague) {
        this.colleague1 = colleague;
    };
    ConcreteMediator.prototype.setColleague2 = function (colleague) {
        this.colleague2 = colleague;
    };
    ConcreteMediator.prototype.send = function (message, colleague) {
        if (colleague === this.colleague2) {
            this.colleague1.notify(message);
        }
        else {
            this.colleague2.notify(message);
        }
    };
    return ConcreteMediator;
})(Mediator);
var mediator = new ConcreteMediator();
var colleague1 = new ConcreteColleague1(mediator);
var colleague2 = new ConcreteColleague2(mediator);
mediator.setColleague1(colleague1);
mediator.setColleague2(colleague2);
colleague1.send("How are you?");
colleague2.send("Fine, thanks");
