abstract class Report {
    constructor(protected title: string,
                protected lines: string[]){}

    print() : void {
        this.print_start();
        this.print_title_start();
        this.print_title();
        this.print_title_end();
        this.print_body_start();
        this.print_body();
        this.print_body_end();
        this.print_end();
    }

    abstract print_start() : void;
    abstract print_title_start() : void;
    abstract print_title() : void;
    abstract print_title_end() : void;
    abstract print_body_start() : void;
    abstract print_body() : void;
    abstract print_body_end() : void;
    abstract print_end() : void;
}

class HTMLReport extends Report {
    print_start() {
        console.log('<html>')
    }

    print_title_start() {
        console.log('  <head>')
    }

    print_title() {
        console.log('    <title>' + this.title + '</title>');
    }

    print_title_end() {
        console.log('  </head>');
    }

    print_body_start() {
        console.log('  <body>');
    }

    print_body() {
        for(var i = 0; i < this.lines.length; i++) {
            console.log('    <p>' + this.lines[i] + '</p>');
        }
    }

    print_body_end() {
        console.log('  </body>');
    }

    print_end() {
        console.log('</html>\n')
    }
}

class PlainTextReport extends Report {
    print_start(){}
    print_title_start(){}
    print_title(){ console.log(this.title + '\n'); }
    print_title_end(){}
    print_body_start(){}
    print_body(){
        console.log(this.lines.join('\n'));
    }
    print_body_end(){}
    print_end(){}
}

var title = 'Sample Report';
var lines = ['Lorem ipsum.', 'Dolor sit amet.'];
new HTMLReport(title, lines).print();
console.log('-----\n');
new PlainTextReport(title, lines).print();