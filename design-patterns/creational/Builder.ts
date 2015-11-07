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