var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Context = (function () {
    function Context() {
    }
    return Context;
})();
var AbstractExpression = (function () {
    function AbstractExpression() {
    }
    return AbstractExpression;
})();
var TerminalExpression = (function (_super) {
    __extends(TerminalExpression, _super);
    function TerminalExpression() {
        _super.apply(this, arguments);
    }
    TerminalExpression.prototype.interpret = function (context) {
        console.log("Called Terminal interpret()");
    };
    return TerminalExpression;
})(AbstractExpression);
var NonterminalExpression = (function (_super) {
    __extends(NonterminalExpression, _super);
    function NonterminalExpression() {
        _super.apply(this, arguments);
    }
    NonterminalExpression.prototype.interpret = function (context) {
        console.log("Called Nonterminal interpret()");
    };
    return NonterminalExpression;
})(AbstractExpression);
var context = new Context();
var list = [];
list.push(new TerminalExpression());
list.push(new NonterminalExpression());
list.push(new TerminalExpression());
list.push(new TerminalExpression());
for (var i = 0; i < list.length; i++) {
    list[i].interpret(context);
}
