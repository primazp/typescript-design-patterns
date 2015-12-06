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