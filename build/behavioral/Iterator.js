var BookIterator = (function () {
    function BookIterator(collection) {
        this.collection = collection;
        this.position = 0;
    }
    BookIterator.prototype.hasNext = function () {
        if (this.position < this.collection.getTitles().length) {
            return true;
        }
        else
            return false;
    };
    BookIterator.prototype.next = function () {
        if (this.hasNext()) {
            return this.collection.getTitles()[this.position++];
        }
        else
            return null;
    };
    return BookIterator;
})();
var BooksCollection = (function () {
    function BooksCollection() {
        this.titles = [
            "Design Patterns",
            "Unbelievable Code",
            "Practical coding in a zero gravity: 1000 simple steps."
        ];
    }
    BooksCollection.prototype.createIterator = function () {
        return new BookIterator(this);
    };
    BooksCollection.prototype.getTitles = function () { return this.titles; };
    return BooksCollection;
})();
var booksCollection = new BooksCollection();
var iterator = booksCollection.createIterator();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.hasNext());
