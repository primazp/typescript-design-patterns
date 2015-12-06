/**
* The chain-of-responsibility pattern is a design pattern consisting of a source
* of command objects and a series of processing objects. Each processing object
* contains logic that defines the types of command objects that it can handle;
* the rest are passed to the next processing object in the chain. A mechanism also
* exists for adding new processing objects to the end of this chain.
*/

enum LogLevel {
    ERROR,
    INFO,
    DEBUG
}

abstract class Logger {
    private mask: LogLevel;
    private next: Logger;

    constructor(mask: LogLevel) {
        this.mask = mask;
    }

    public setNext(logger: Logger) : Logger {
        this.next = logger;
        return logger;
    }

    public log(msg: string, priority: LogLevel) : void {
        if (priority <= this.mask) {
            this.logMessage(msg);
        }
        if (this.next) {
            this.next.log(msg, priority);
        }
    }

    abstract logMessage(msg: string) : void;
}

class StdoutLogger extends Logger {
    logMessage(msg: string) {
        console.log("Writing to stdout: " + msg);
    }
}

class EmailLogger extends Logger {
    logMessage(msg: string) {
        console.log("Sending via email: " + msg);
    }
}

class StderrLogger extends Logger {
    constructor(mask: LogLevel) {
        super(mask);
    }

    logMessage(msg: string) {
        console.log("Writing to stderr: " + msg);
    }
}

var logger, logger1,logger2;
logger = new StdoutLogger(LogLevel.DEBUG);
logger1 = logger.setNext(new EmailLogger(LogLevel.INFO));
logger2 = logger1.setNext(new StderrLogger(LogLevel.ERROR));

// Handled by StdoutLogger
logger.log("Entering function y.", LogLevel.DEBUG);

// Handled by StdoutLogger and EmailLogger
logger.log("Step1 completed.", LogLevel.INFO);

// Handled by all three loggers
logger.log("An error has occurred.", LogLevel.ERROR);
