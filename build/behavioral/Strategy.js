/**
* The strategy pattern (also known as the policy pattern) is a software design pattern that
* enables an algorithm's behavior to be selected at runtime. The strategy pattern:
*
* - defines a family of algorithms
* - encapsulates each algorithm
* - makes the algorithms interchangeable within that family.
*/
// Concrete Strategy A
var HTMLFormatter = (function () {
    function HTMLFormatter() {
    }
    HTMLFormatter.prototype.process = function (title, lines) {
        var text = '';
        for (var i = 0; i < lines.length; i++) {
            text += '    <p>' + lines[i] + '</p>\n';
        }
        return '<html>\n' +
            '  <head>\n' +
            '    <title>' + title + '</title>\n' +
            '  </head>\n' +
            '  <body>\n' +
            text +
            '  </body>\n' +
            '</html>\n';
    };
    return HTMLFormatter;
})();
// Concrete Strategy B
var PlainTextFormatter = (function () {
    function PlainTextFormatter() {
    }
    PlainTextFormatter.prototype.process = function (title, lines) {
        return title + '\n\n' + lines.join('\n');
    };
    return PlainTextFormatter;
})();
// Context
var Report = (function () {
    function Report(title, lines, formatter) {
        this.title = title;
        this.lines = lines;
        this.formatter = formatter;
    }
    Report.prototype.setFormatter = function (formatter) {
        this.formatter = formatter;
    };
    Report.prototype.print = function () {
        console.log(this.formatter.process(this.title, this.lines));
    };
    return Report;
})();
var report = new Report('Sample Report', ['Lorem ipsum.', 'Dolor sit amet.'], new HTMLFormatter());
report.print();
console.log('-----\n');
report.setFormatter(new PlainTextFormatter());
report.print();
