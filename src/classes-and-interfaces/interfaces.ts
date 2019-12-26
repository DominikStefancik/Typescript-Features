interface Person {
  name: string;
  age: number;

  // a property with "?" is optional and objects of this inteface don't have to have it
  nickname?: string;

  greet(phrase: string): void;
  // the parameter "phrase" is optional because "?" is present
  sayGoodbey(phrase?: string): void;

  // a method with "?" is optional
  saySomething?(): void;
}

let user1: Person;

user1 = {
  name: 'Dominik',
  age: 36,
  
  // one way of writting the method implementation
  greet(phrase: string) {
    console.log(`${phrase} - ${this.name}`);
  },

  // another way of writting the method implementation
  // NOTE: if you use an arrow function as an implementation, you might have a problem of using
  // the keyword "this" in this context
  sayGoodbey: (phrase: string) => {
    console.log(`${phrase} - ${this.name}`); // causes a problem
  }
};

user1.greet("Hello");
user1.sayGoodbey("Goodbey");


// Interfaces can be used to define a function type
interface addNumbersFunctionInterface {
  (number1: number, number2: number): number;
}

let addFunctionInterface: addNumbersFunctionInterface;
addFunctionInterface = (number1: number, number2: number) => {
  return number1 + number2;
}

// The same function defined as a type
type addNumbersFunctionType = (number1: number, number2: number) => number;

let addFunctionType: addNumbersFunctionType;
addFunctionType = (number1: number, number2: number) => {
  return number1 + number2;
}