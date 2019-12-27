// the "DataStorage" class can contain only primitive types
class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data]; // return copy of the array
  }
}

const genericStorage = new DataStorage(); // the storage is generic, it can contain items of any type
genericStorage.addItem("Max");
genericStorage.addItem("Anna");
genericStorage.addItem(5);
console.log("Generic storage: ", genericStorage.getItems());

const textStorage = new DataStorage<string>(); // now the storage can contain only strings
textStorage.addItem("Max");
textStorage.addItem("Anna");
textStorage.addItem(5); // compiles with error
console.log("Text storage: ", textStorage.getItems());

const numberStorage = new DataStorage<number>(); // now the storage can contain only numbers
numberStorage.addItem(10);
numberStorage.addItem(5);
numberStorage.addItem("Anna"); // compiles with error
console.log("Number storage: ", numberStorage.getItems());

const stringOrNumberStorage = new DataStorage<string | number>();
stringOrNumberStorage.addItem(10);
stringOrNumberStorage.addItem(5);
stringOrNumberStorage.addItem("Anna");
console.log("StringOrNumber storage: ", stringOrNumberStorage.getItems());

// compiles with error, because the "object" type is not a primitive type
const objectStorage = new DataStorage<object>();
