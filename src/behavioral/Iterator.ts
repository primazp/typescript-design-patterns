interface Iterator {
	hasNext(): boolean;
	next(): Object;
}

interface Container {
	createIterator(): Iterator;
}

class BookIterator implements Iterator {
  private position: number = 0;

  constructor(private collection: BooksCollection){}

  public hasNext(): boolean {
    if (this.position < this.collection.getTitles().length) {
      return true;
    } else return false;
  }
  public next(): Object {
    if (this.hasNext()) {
      return this.collection.getTitles()[this.position++];
    } else return null;
  }
}

class BooksCollection implements Container {
	private titles: string[] = [
          "Design Patterns",
          "Unbelievable Code",
          "Practical coding in a zero gravity: 1000 simple steps."
        ];

	public createIterator(): Iterator {
		return new BookIterator(this);
	}

  public getTitles(): string[] { return this.titles; }
}

var booksCollection = new BooksCollection();
var iterator = booksCollection.createIterator();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.hasNext());
