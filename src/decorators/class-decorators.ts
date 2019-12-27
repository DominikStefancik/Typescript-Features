// a class decorator is always a function which has to accept one argument which is 
// a class constructor
// by the naming convention, the decorator's name starts with a capital letter
// NOTE: A decorator function is executed when the class to which it is attached is defined!!!
//       (the class doesn't have to be instantiated, the decorator will be called anyway)
const Logger = (constructor: Function) => {
  console.log("Logging...");
  console.log(constructor);
}


// Decorators can be defined as decorator factories
// a decorator factory can =, but doesn't have to, accept a list of arguments which then can be
// passed to the inner decorator function 
const PersonLogger = (loggingText: string) => {
  // A decorator factory has to return a function
  return (constructor: Function) => {
    console.log(loggingText);
    console.log(constructor);
  }
}

@Logger
// a decorator defined as a factory has to be used with brackets (to return a function)
@PersonLogger("Logging Person")
class Person {
  name = "Max";

  constructor() {
    console.log("Creating Person object...");
  }
}