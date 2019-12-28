// a parameter decorator is always a function which has to accept three arguments
// by the naming convention, the decorator's name starts with a capital letter
// NOTE: A decorator function is executed when the method parameter to which it is attached is 
//       defined!!! (the class doesn't have to be instantiated, the decorator will be called anyway)
const ParameterLogger = (target: any, methodName: string | Symbol, 
  parameterPosition: number) => {
  console.log("Parameter decorator!");
  console.log("Tagret:", target);
  console.log("MethodName:", methodName);
  console.log("ParameterPosition:", parameterPosition);
};

class Product4 {
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

  getPriceWithTax(@ParameterLogger tax: number) {
    return this._price * (1 + tax);
  }

  toString(): string {
    return `Product4(title=${this.title}, price=${this._price})`;
  }
}