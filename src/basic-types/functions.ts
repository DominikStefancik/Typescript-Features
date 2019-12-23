let anyFunction: Function; // variable can represent any function

// variable can represent any function which accepts exactly two numbers and returns a number
let specificFunction: (input1: number, input2:number) => number;

const addNumbers = (number1: number, number2: number) => {
  return number1 + number2;
};

const combineStrings = (string1: string, string2: string) => {
  return string1 + string2;
};

const printHello = () => {
  console.log('Hello');
} 

anyFunction = addNumbers; // compiles ok
anyFunction = printHello; // compiles ok

// compiles ok, because the function 'addNumbers' has the same type as the function type of
// the variable 'specificFunction'
specificFunction = addNumbers; 

// compiles with error, because the function 'combineStrings' has a different type as
// the function type of the variable 'specificFunction'
specificFunction = combineStrings; 

// compiles with error, because the function 'printHello' has a different type as
// the function type of the variable 'specificFunction'
specificFunction = printHello;

// Typescript doesn't care about the return value of the callback function
// The return type 'void' says here that we don't care if the callback function 
// does or doesn't return a value
const addAndHandle = (number1: number, number2: number, callback: (result: number) => void) => {
  const result = addNumbers(number1, number2);
  console.log(callback(result));
};

// This compiles without error, because the implementation of the callback function may return
// a string, but Typescript doesn't force the match of the return value in the defition of the
// callback function in the 'addAndHandle'
addAndHandle(5, 10, (result) => {
  console.log(result);
  return 'Hello';
});