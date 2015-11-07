abstract class Product {
    abstract getClass(): string;
}

class ConcreteProductA extends Product {
    getClass() {
        return 'ConcreteProductA';
    }
}

class ConcreteProductB extends Product {
    getClass() {
        return 'ConcreteProductB';
    }
}

abstract class Creator {
    abstract factoryMethod() : Product;
}

class ConcreteCreatorA extends Creator {
    factoryMethod() {
        return new ConcreteProductA();
    }
}

class ConcreteCreatorB extends Creator {
    factoryMethod() {
        return new ConcreteProductB();
    }
}

for (var creator of [new ConcreteCreatorA(), new ConcreteCreatorB()]) {
    var product = creator.factoryMethod();
    console.log(product.getClass());
}