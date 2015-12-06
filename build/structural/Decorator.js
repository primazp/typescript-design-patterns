/**
* Decorator allows behavior to be added to an individual object, either statically
* or dynamically, without affecting the behavior of other objects from the same class.
* The decorator pattern is often useful for adhering to the Single Responsibility
* Principle, as it allows functionality to be divided between classes with unique
* areas of concern.
*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// Concrete Component
var BaseWriter = (function () {
    function BaseWriter() {
    }
    BaseWriter.prototype.writeLine = function (line) {
        console.log(line);
    };
    return BaseWriter;
})();
// Decorator
var WriterDecorator = (function () {
    function WriterDecorator(realWriter) {
        this.realWriter = realWriter;
    }
    WriterDecorator.prototype.writeLine = function (line) {
        this.realWriter.writeLine(line);
    };
    return WriterDecorator;
})();
// Component 1
var NumberingWriter = (function (_super) {
    __extends(NumberingWriter, _super);
    function NumberingWriter() {
        _super.apply(this, arguments);
        this.lineNumber = 1;
    }
    NumberingWriter.prototype.writeLine = function (line) {
        _super.prototype.writeLine.call(this, this.lineNumber + ": " + line);
        this.lineNumber++;
    };
    return NumberingWriter;
})(WriterDecorator);
// Component 2
var TimeStampingWriter = (function (_super) {
    __extends(TimeStampingWriter, _super);
    function TimeStampingWriter() {
        _super.apply(this, arguments);
    }
    TimeStampingWriter.prototype.writeLine = function (line) {
        _super.prototype.writeLine.call(this, new Date() + ": " + line);
    };
    return TimeStampingWriter;
})(WriterDecorator);
var writer = new TimeStampingWriter(new NumberingWriter(new BaseWriter()));
writer.writeLine('Hello, World!');
