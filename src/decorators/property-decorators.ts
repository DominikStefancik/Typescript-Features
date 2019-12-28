// a property decorator is always a function which has to accept two arguments
// by the naming convention, the decorator's name starts with a capital letter
// NOTE: A decorator function is executed when the class property to which it is attached is defined!!!
//       (the class doesn't have to be instantiated, the decorator will be called anyway)
const PropertyLogger = (target: any, propertyName: string | Symbol) => {
  console.log("Property decorator!");
  console.log("Tagret:", target);
  console.log("PropertyName:", propertyName);
};

class Product1 {
  @PropertyLogger
  private title: string;
  private _price: number;

  set price(value: number) {
    if (value >= 0) {
      this._price = value;
    }
  }

  constructor(title: string, price: number) {
    this.title = title;
    this._price = price;
  }

  getPriceWithTax(tax: number) {
    return this._price * (1 + tax);
  }

  toString(): string {
    return `Product1(title=${this.title}, price=${this._price})`;
  }
}