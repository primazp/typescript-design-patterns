/**
* The strategy pattern (also known as the policy pattern) is a software design pattern that
* enables an algorithm's behavior to be selected at runtime. The strategy pattern:
*
* - defines a family of algorithms
* - encapsulates each algorithm
* - makes the algorithms interchangeable within that family.
*/

// Strategy
interface Formatter {
    process(title: string, text: string[]) : string;
}

// Concrete Strategy A
class HTMLFormatter implements Formatter {
    process(title: string, lines: string[]) {
        var text = '';
        for(var i = 0; i < lines.length; i++) {
            text += '    <p>' + lines[i] + '</p>\n'
        }
        return '<html>\n' +
            '  <head>\n' +
            '    <title>' + title + '</title>\n' +
            '  </head>\n' +
            '  <body>\n' +
            text +
            '  </body>\n' +
            '</html>\n';
    }
}

// Concrete Strategy B
class PlainTextFormatter implements Formatter {
    process(title: string, lines: string[]) {
        return title + '\n\n' + lines.join('\n');
    }
}

// Context
class Report {
    constructor(private title: string,
                private lines: string[],
                private formatter: Formatter) {}

    setFormatter(formatter: Formatter) {
        this.formatter = formatter;
    }

    print() : void {
        console.log(this.formatter.process(this.title, this.lines));
    }
}

var report = new Report(
    'Sample Report',
    ['Lorem ipsum.', 'Dolor sit amet.'],
    new HTMLFormatter()
);
report.print();

console.log('-----\n');

report.setFormatter( new PlainTextFormatter() );
report.print();
