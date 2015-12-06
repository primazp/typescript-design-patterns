/**
* The factory method pattern is a creational pattern that uses factory methods to deal with the
* problem of creating objects without having to specify the exact class of the object that will
* be created. This is done by creating objects by calling a factory method—either specified in
* an interface and implemented by child classes, or implemented in a base class and optionally
* overridden by derived classes – rather than by calling a constructor.
*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// abstract Product
var Warrior = (function () {
    function Warrior() {
    }
    return Warrior;
})();
// Concrete Product A
var Archer = (function (_super) {
    __extends(Archer, _super);
    function Archer() {
        _super.apply(this, arguments);
    }
    Archer.prototype.getInfo = function () {
        return 'The one with the bow.';
    };
    return Archer;
})(Warrior);
var SwordsMan = (function (_super) {
    __extends(SwordsMan, _super);
    function SwordsMan() {
        _super.apply(this, arguments);
    }
    SwordsMan.prototype.getInfo = function () {
        return 'The one with the sword.';
    };
    return SwordsMan;
})(Warrior);
// Creator
var Barracks = (function () {
    function Barracks() {
    }
    return Barracks;
})();
// Concrete creator A
var ArcheryRange = (function (_super) {
    __extends(ArcheryRange, _super);
    function ArcheryRange() {
        _super.apply(this, arguments);
    }
    ArcheryRange.prototype.trainUnit = function () {
        return new Archer();
    };
    return ArcheryRange;
})(Barracks);
// Concrete creator B
var TrainingYard = (function (_super) {
    __extends(TrainingYard, _super);
    function TrainingYard() {
        _super.apply(this, arguments);
    }
    TrainingYard.prototype.trainUnit = function () {
        return new SwordsMan();
    };
    return TrainingYard;
})(Barracks);
for (var _i = 0, _a = [new ArcheryRange(), new TrainingYard()]; _i < _a.length; _i++) {
    var creator = _a[_i];
    var warrior = creator.trainUnit();
    console.log(warrior.getInfo());
}
