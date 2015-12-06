/**
* The composite pattern is a partitioning design pattern.
* The composite pattern describes that a group of objects is to be treated in the same way
* as a single instance of an object. The intent of a composite is to “compose” objects into
* tree structures to represent part-whole hierarchies. Implementing the composite pattern
* lets clients treat individual objects and compositions uniformly.
*/

interface Task {
    perform(): void;

    getTime(): number;
}

class Composite implements Task {
    private subTasks: Task[] = [];

    addSubTask(subTask: Task): Composite {
        this.subTasks.push(subTask);
        return this;
    }

    perform() {
        for(var i = 0; i < this.subTasks.length; i++) {
            this.subTasks[i].perform();
        }
        console.log('Done!\n');
    }

    getTime() {
        var time = 0.0;
        for(var i = 0; i < this.subTasks.length; i++) {
            time += this.subTasks[i].getTime();
        }
        return time;
    }
}

class BoilWaterTask implements Task {
    perform() { console.log('Boiling water...'); }

    getTime() { return 2.0; }
}

class AddCoffeeTask implements Task {
    perform() { console.log('Adding instant coffee...'); }

    getTime() { return 0.1; }
}

class AddSugarTask implements Task {
    perform() { console.log('Adding Sugar...'); }

    getTime() { return 0.1; }
}

class StirUpTask implements Task {
    perform() { console.log('Stirring up...'); }

    getTime() { return 0.3; }
}

class MakeSandwichTask implements Task {
    perform() { console.log('Making a sandwich...'); }

    getTime() { return 3; }
}

class MakeCoffeeCupComponent extends Composite {
    perform() {
        console.log('Making a cup of coffee:');
        super.perform();
    }
}

class BreakfastComponent extends Composite {
    perform() {
        console.log('Making a breakfast...\n');
        super.perform();
    }
}

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
