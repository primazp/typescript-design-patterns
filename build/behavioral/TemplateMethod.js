/**
* The template method pattern is a behavioral design pattern that defines the program skeleton
* of an algorithm in a method, called template method, which defers some steps to subclasses.
* It lets one redefine certain steps of an algorithm without changing the algorithm's structure.
*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Report = (function () {
    function Report(title, lines) {
        this.title = title;
        this.lines = lines;
    }
    Report.prototype.print = function () {
        this.print_start();
        this.print_title_start();
        this.print_title();
        this.print_title_end();
        this.print_body_start();
        this.print_body();
        this.print_body_end();
        this.print_end();
    };
    return Report;
})();
var HTMLReport = (function (_super) {
    __extends(HTMLReport, _super);
    function HTMLReport() {
        _super.apply(this, arguments);
    }
    HTMLReport.prototype.print_start = function () {
        console.log('<html>');
    };
    HTMLReport.prototype.print_title_start = function () {
        console.log('  <head>');
    };
    HTMLReport.prototype.print_title = function () {
        console.log('    <title>' + this.title + '</title>');
    };
    HTMLReport.prototype.print_title_end = function () {
        console.log('  </head>');
    };
    HTMLReport.prototype.print_body_start = function () {
        console.log('  <body>');
    };
    HTMLReport.prototype.print_body = function () {
        for (var i = 0; i < this.lines.length; i++) {
            console.log('    <p>' + this.lines[i] + '</p>');
        }
    };
    HTMLReport.prototype.print_body_end = function () {
        console.log('  </body>');
    };
    HTMLReport.prototype.print_end = function () {
        console.log('</html>\n');
    };
    return HTMLReport;
})(Report);
var PlainTextReport = (function (_super) {
    __extends(PlainTextReport, _super);
    function PlainTextReport() {
        _super.apply(this, arguments);
    }
    PlainTextReport.prototype.print_start = function () { };
    PlainTextReport.prototype.print_title_start = function () { };
    PlainTextReport.prototype.print_title = function () { console.log(this.title + '\n'); };
    PlainTextReport.prototype.print_title_end = function () { };
    PlainTextReport.prototype.print_body_start = function () { };
    PlainTextReport.prototype.print_body = function () {
        console.log(this.lines.join('\n'));
    };
    PlainTextReport.prototype.print_body_end = function () { };
    PlainTextReport.prototype.print_end = function () { };
    return PlainTextReport;
})(Report);
var title = 'Sample Report';
var lines = ['Lorem ipsum.', 'Dolor sit amet.'];
new HTMLReport(title, lines).print();
console.log('-----\n');
new PlainTextReport(title, lines).print();
