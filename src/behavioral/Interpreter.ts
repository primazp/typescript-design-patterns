/**
* The interpreter pattern is a design pattern that specifies how to evaluate sentences
* in a language. The basic idea is to have a class for each symbol (terminal or nonterminal)
* in a specialized computer language. The syntax tree of a sentence in the language is an
* instance of the composite pattern and is used to evaluate (interpret) the sentence for a client.
*/

class Context{}

abstract class AbstractExpression {
  public abstract interpret(context: Context): void;
}

class TerminalExpression extends AbstractExpression {
  public interpret(context: Context) {
    console.log("Called Terminal interpret()");
  }
}

class NonterminalExpression extends AbstractExpression {
  public interpret(context: Context) {
    console.log("Called Nonterminal interpret()");
  }
}

var context = new Context();

// Usually a tree
var list = [];

// Populate 'abstract syntax tree'
list.push(new TerminalExpression());
list.push(new NonterminalExpression());
list.push(new TerminalExpression());
list.push(new TerminalExpression());

// Interpret
for(var i = 0; i < list.length; i++) {
  list[i].interpret(context);
}
