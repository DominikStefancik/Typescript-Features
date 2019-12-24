// for global variables the check "noUnusedLocals" is not applied because they might be used
// in other javascript/typecript files
let globalVariable;

// if in the compiler settings (tsconfig.json file) is the property "noUnusedParameters" 
// set to true the compiler will compile the following code with an error, because the parameter 
// "age" is never used in the function body 
const addNumbers = (number1: number, number2: number, age: number) => {

  // if in the compiler settings (tsconfig.json file) is the property "noUnusedLocals" set to true
  // the compiler will compile the following code with an error, because the local variable
  // "unusedVariable" is never used in the function body 
  let unusedVariable = 'Unused';

  return number1 + number2;
}

// if in the compiler settings (tsconfig.json file) is the property "noImplicitReturns" set 
// to true the compiler will compile the following code with an error, because the function
// doesn't always return a value 
const functionWithError = (number1: number, number2: number, showResult: boolean) => {
  if (showResult) {
    return number1 + number2;
  }
}

// however, the following code will compile because the function always returns something
// (either a number or undefined) 
const functionWithoutError = (number1: number, number2: number, showResult: boolean) => {
  if (showResult) {
    return number1 + number2;
  }

  return;
}