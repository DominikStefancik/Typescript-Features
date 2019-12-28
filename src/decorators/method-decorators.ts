// a method decorator is always a function which has to accept three arguments
// by the naming convention, the decorator's name starts with a capital letter
// NOTE: A decorator function is executed when the class method to which it is attached is defined!!!
//       (the class doesn't have to be instantiated, the decorator will be called anyway)
const MethodLogger = (target: any, methodName: string | Symbol, 
  methodDescriptor: PropertyDescriptor) => {
  console.log("Method decorator!");
  console.log("Tagret:", target);
  console.log("MethodName:", methodName);
  console.log("MethodDescriptor:", methodDescriptor);
};

class Product3 {
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

  @MethodLogger
  getPriceWithTax(tax: number) {
    return this._price * (1 + tax);
  }

  toString(): string {
    return `Product3(title=${this.title}, price=${this._price})`;
  }
}