type Combinable = number | string;

// the following two lines are function overload signatures
function combineItems(input1: number, input2: number): number;
function combineItems(input1: string, input2: string): string;

// the following lines are function implementation signature
function combineItems(input1: Combinable, input2: Combinable) {
  if (typeof input1 === 'number' && typeof input2 === 'number') {
    return input1 + input2;
  } else {
    return input1.toString() + input2.toString();
  }
};

// When a function is overloaded, Typescript takes all its overload signatures and merges them
// into the function implementation.
// Then, when the function is called, Typescript knows according to used parameters which 
// overloaded version is being called and what type the result it will have

const resultNumber = combineItems(5,2); // the return type is "number"
const resultString = combineItems("Hello", "there"); // the return type is "string"
