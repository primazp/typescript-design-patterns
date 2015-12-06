/**
* The builder pattern is an object creation software design pattern. Unlike the abstract factory
* pattern and the factory method pattern whose intention is to enable polymorphism, the intention
* of the builder pattern is to find a solution to the telescoping constructor anti-pattern.
* The telescoping constructor anti-pattern occurs when the increase of object constructor parameter
* combination leads to an exponential list of constructors. Instead of using numerous constructors,
* the builder pattern uses another object, a builder, that receives each initialization parameter
* step by step and then returns the resulting constructed object at once.
*/

// Product
class Pizza {
    pastry: string;
    sauce: string;
    topping: string;

    getInfo() : string {
        return "Pastry: " + this.pastry +
            ", sauce: " + this.sauce +
            ", topping: " + this.topping;
    }
}

// Abstract builder
abstract class PizzaBuilder {
    pizza: Pizza;

    abstract getPizza() : Pizza;
}

// Concrete builder 1
class HawaiianPizzaBuilder extends PizzaBuilder {
    getPizza() {
        var pizza = new Pizza();
        pizza.pastry = 'cross';
        pizza.sauce = 'mild';
        pizza.topping = 'ham+pineapple';
        return pizza;
    }
}

// Concrete builder 2
class SpicyPizzaBuilder extends PizzaBuilder {
    getPizza() {
        var pizza = new Pizza();
        pizza.pastry = 'pan baked';
        pizza.sauce = 'hot';
        pizza.topping = 'pepperoni+salami';
        return pizza;
    }
}

// Director
class Waiter {
    private pizzaBuilder;

    setPizzaBuilder(builder: PizzaBuilder) { this.pizzaBuilder = builder; }
    getPizza() : Pizza { return this.pizzaBuilder.getPizza(); }
}

var waiter = new Waiter();
waiter.setPizzaBuilder(new HawaiianPizzaBuilder());
var pizza = waiter.getPizza();
console.log(pizza.getInfo());

waiter.setPizzaBuilder(new SpicyPizzaBuilder());
var anotherPizza = waiter.getPizza();
console.log(anotherPizza.getInfo());
