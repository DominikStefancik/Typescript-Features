// With custom types you can define your own types from already existing types
// They are often used with unions

type Combinable = number | string;
const combineInput = (input1: Combinable, input2: Combinable) => {
  let result: Combinable;
  if (typeof input1 === 'number' && typeof input2 === 'number') {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString(); // explicitly say that we are using strings
  }
  return result;
}

console.log("Adding: ", combineInput(5, 2.8));
console.log("Adding: ", combineInput('Max', 'Anna'));

type Binary = 0 | 1;
let binaryValue: Binary;
binaryValue = 0; // compiles ok
console.log("Binary ok: ", binaryValue);

binaryValue = 2; // compiles with error
console.log("Binary error: ", binaryValue);

type BinaryString = '0' | '1';
type BinaryNumberOrString = Binary | BinaryString;

let binaryNumberOrStringValue: BinaryNumberOrString;
binaryNumberOrStringValue = 0; // compiles ok
console.log("Binary ok: ", binaryNumberOrStringValue);

binaryNumberOrStringValue = '0'; // compiles ok
console.log("Binary ok: ", binaryNumberOrStringValue);

binaryNumberOrStringValue = 2; // compiles with error
console.log("Binary error: ", binaryNumberOrStringValue);

binaryNumberOrStringValue = '2' // compiles with error
console.log("Binary error: ", binaryNumberOrStringValue);
