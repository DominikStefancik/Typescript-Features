// a accessor decorator is always a function which has to accept three arguments
// by the naming convention, the decorator's name starts with a capital letter
// NOTE: A decorator function is executed when the class accessor to which it is attached is defined!!!
//       (the class doesn't have to be instantiated, the decorator will be called anyway)
const AccessorLogger = (target: any, accessorName: string, 
  accessorDescriptor: PropertyDescriptor) => {
  console.log("Accessor decorator!");
  console.log("Tagret:", target);
  console.log("AccessorName:", accessorName);
  console.log("AccessorDescriptor:", accessorDescriptor);
};

class Product2 {
  private title: string;
  private _price: number;

  @AccessorLogger
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
    return `Product2(title=${this.title}, price=${this._price})`;
  }
}