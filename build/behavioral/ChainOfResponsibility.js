/**
* The chain-of-responsibility pattern is a design pattern consisting of a source
* of command objects and a series of processing objects. Each processing object
* contains logic that defines the types of command objects that it can handle;
* the rest are passed to the next processing object in the chain. A mechanism also
* exists for adding new processing objects to the end of this chain.
*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["ERROR"] = 0] = "ERROR";
    LogLevel[LogLevel["INFO"] = 1] = "INFO";
    LogLevel[LogLevel["DEBUG"] = 2] = "DEBUG";
})(LogLevel || (LogLevel = {}));
var Logger = (function () {
    function Logger(mask) {
        this.mask = mask;
    }
    Logger.prototype.setNext = function (logger) {
        this.next = logger;
        return logger;
    };
    Logger.prototype.log = function (msg, priority) {
        if (priority <= this.mask) {
            this.logMessage(msg);
        }
        if (this.next) {
            this.next.log(msg, priority);
        }
    };
    return Logger;
})();
var StdoutLogger = (function (_super) {
    __extends(StdoutLogger, _super);
    function StdoutLogger() {
        _super.apply(this, arguments);
    }
    StdoutLogger.prototype.logMessage = function (msg) {
        console.log("Writing to stdout: " + msg);
    };
    return StdoutLogger;
})(Logger);
var EmailLogger = (function (_super) {
    __extends(EmailLogger, _super);
    function EmailLogger() {
        _super.apply(this, arguments);
    }
    EmailLogger.prototype.logMessage = function (msg) {
        console.log("Sending via email: " + msg);
    };
    return EmailLogger;
})(Logger);
var StderrLogger = (function (_super) {
    __extends(StderrLogger, _super);
    function StderrLogger(mask) {
        _super.call(this, mask);
    }
    StderrLogger.prototype.logMessage = function (msg) {
        console.log("Writing to stderr: " + msg);
    };
    return StderrLogger;
})(Logger);
var logger, logger1, logger2;
logger = new StdoutLogger(LogLevel.DEBUG);
logger1 = logger.setNext(new EmailLogger(LogLevel.INFO));
logger2 = logger1.setNext(new StderrLogger(LogLevel.ERROR));
// Handled by StdoutLogger
logger.log("Entering function y.", LogLevel.DEBUG);
// Handled by StdoutLogger and EmailLogger
logger.log("Step1 completed.", LogLevel.INFO);
// Handled by all three loggers
logger.log("An error has occurred.", LogLevel.ERROR);
