/**
* The composite pattern is a partitioning design pattern.
* The composite pattern describes that a group of objects is to be treated in the same way
* as a single instance of an object. The intent of a composite is to “compose” objects into
* tree structures to represent part-whole hierarchies. Implementing the composite pattern
* lets clients treat individual objects and compositions uniformly.
*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Composite = (function () {
    function Composite() {
        this.subTasks = [];
    }
    Composite.prototype.addSubTask = function (subTask) {
        this.subTasks.push(subTask);
        return this;
    };
    Composite.prototype.perform = function () {
        for (var i = 0; i < this.subTasks.length; i++) {
            this.subTasks[i].perform();
        }
        console.log('Done!\n');
    };
    Composite.prototype.getTime = function () {
        var time = 0.0;
        for (var i = 0; i < this.subTasks.length; i++) {
            time += this.subTasks[i].getTime();
        }
        return time;
    };
    return Composite;
})();
var BoilWaterTask = (function () {
    function BoilWaterTask() {
    }
    BoilWaterTask.prototype.perform = function () { console.log('Boiling water...'); };
    BoilWaterTask.prototype.getTime = function () { return 2.0; };
    return BoilWaterTask;
})();
var AddCoffeeTask = (function () {
    function AddCoffeeTask() {
    }
    AddCoffeeTask.prototype.perform = function () { console.log('Adding instant coffee...'); };
    AddCoffeeTask.prototype.getTime = function () { return 0.1; };
    return AddCoffeeTask;
})();
var AddSugarTask = (function () {
    function AddSugarTask() {
    }
    AddSugarTask.prototype.perform = function () { console.log('Adding Sugar...'); };
    AddSugarTask.prototype.getTime = function () { return 0.1; };
    return AddSugarTask;
})();
var StirUpTask = (function () {
    function StirUpTask() {
    }
    StirUpTask.prototype.perform = function () { console.log('Stirring up...'); };
    StirUpTask.prototype.getTime = function () { return 0.3; };
    return StirUpTask;
})();
var MakeSandwichTask = (function () {
    function MakeSandwichTask() {
    }
    MakeSandwichTask.prototype.perform = function () { console.log('Making a sandwich...'); };
    MakeSandwichTask.prototype.getTime = function () { return 3; };
    return MakeSandwichTask;
})();
var MakeCoffeeCupComponent = (function (_super) {
    __extends(MakeCoffeeCupComponent, _super);
    function MakeCoffeeCupComponent() {
        _super.apply(this, arguments);
    }
    MakeCoffeeCupComponent.prototype.perform = function () {
        console.log('Making a cup of coffee:');
        _super.prototype.perform.call(this);
    };
    return MakeCoffeeCupComponent;
})(Composite);
var BreakfastComponent = (function (_super) {
    __extends(BreakfastComponent, _super);
    function BreakfastComponent() {
        _super.apply(this, arguments);
    }
    BreakfastComponent.prototype.perform = function () {
        console.log('Making a breakfast...\n');
        _super.prototype.perform.call(this);
    };
    return BreakfastComponent;
})(Composite);
var coffeeTask = new MakeCoffeeCupComponent();
coffeeTask.addSubTask(new BoilWaterTask())
    .addSubTask(new AddCoffeeTask())
    .addSubTask(new AddSugarTask())
    .addSubTask(new StirUpTask());
var breakfastTask = new BreakfastComponent();
breakfastTask.addSubTask(coffeeTask)
    .addSubTask(new MakeSandwichTask());
breakfastTask.perform();
console.log('Total time: ' + breakfastTask.getTime() + ' minutes.');
