/**
* The builder pattern is an object creation software design pattern. Unlike the abstract factory
* pattern and the factory method pattern whose intention is to enable polymorphism, the intention
* of the builder pattern is to find a solution to the telescoping constructor anti-pattern.
* The telescoping constructor anti-pattern occurs when the increase of object constructor parameter
* combination leads to an exponential list of constructors. Instead of using numerous constructors,
* the builder pattern uses another object, a builder, that receives each initialization parameter
* step by step and then returns the resulting constructed object at once.
*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// Product
var Pizza = (function () {
    function Pizza() {
    }
    Pizza.prototype.getInfo = function () {
        return "Pastry: " + this.pastry +
            ", sauce: " + this.sauce +
            ", topping: " + this.topping;
    };
    return Pizza;
})();
// Abstract builder
var PizzaBuilder = (function () {
    function PizzaBuilder() {
    }
    return PizzaBuilder;
})();
// Concrete builder 1
var HawaiianPizzaBuilder = (function (_super) {
    __extends(HawaiianPizzaBuilder, _super);
    function HawaiianPizzaBuilder() {
        _super.apply(this, arguments);
    }
    HawaiianPizzaBuilder.prototype.getPizza = function () {
        var pizza = new Pizza();
        pizza.pastry = 'cross';
        pizza.sauce = 'mild';
        pizza.topping = 'ham+pineapple';
        return pizza;
    };
    return HawaiianPizzaBuilder;
})(PizzaBuilder);
// Concrete builder 2
var SpicyPizzaBuilder = (function (_super) {
    __extends(SpicyPizzaBuilder, _super);
    function SpicyPizzaBuilder() {
        _super.apply(this, arguments);
    }
    SpicyPizzaBuilder.prototype.getPizza = function () {
        var pizza = new Pizza();
        pizza.pastry = 'pan baked';
        pizza.sauce = 'hot';
        pizza.topping = 'pepperoni+salami';
        return pizza;
    };
    return SpicyPizzaBuilder;
})(PizzaBuilder);
// Director
var Waiter = (function () {
    function Waiter() {
    }
    Waiter.prototype.setPizzaBuilder = function (builder) { this.pizzaBuilder = builder; };
    Waiter.prototype.getPizza = function () { return this.pizzaBuilder.getPizza(); };
    return Waiter;
})();
var waiter = new Waiter();
waiter.setPizzaBuilder(new HawaiianPizzaBuilder());
var pizza = waiter.getPizza();
console.log(pizza.getInfo());
waiter.setPizzaBuilder(new SpicyPizzaBuilder());
var anotherPizza = waiter.getPizza();
console.log(anotherPizza.getInfo());
