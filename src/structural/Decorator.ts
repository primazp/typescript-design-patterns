/**
* Decorator allows behavior to be added to an individual object, either statically
* or dynamically, without affecting the behavior of other objects from the same class.
* The decorator pattern is often useful for adhering to the Single Responsibility
* Principle, as it allows functionality to be divided between classes with unique
* areas of concern.
*/

// Concrete Component
class BaseWriter {
    writeLine(line: string) {
        console.log(line);
    }
}

// Decorator
class WriterDecorator {
    constructor(private realWriter: BaseWriter) {}

    writeLine(line: string) {
        this.realWriter.writeLine(line);
    }
}

// Component 1
class NumberingWriter extends WriterDecorator {
    private lineNumber: number = 1;

    writeLine(line: string) {
        super.writeLine(this.lineNumber + ": " + line);
        this.lineNumber++;
    }
}

// Component 2
class TimeStampingWriter extends WriterDecorator {
    writeLine(line: string) {
        super.writeLine(new Date() + ": " + line);
    }
}

var writer = new TimeStampingWriter(new NumberingWriter(new BaseWriter()));

writer.writeLine('Hello, World!');
