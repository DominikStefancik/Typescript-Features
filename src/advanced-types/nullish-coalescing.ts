// Nullish Coalescing operator "??" checks if the value is "null" or "undefined"
// if it is, the operator returns the second value, otherwise it returns the original one 

let userInput = null;
const storedInput1 = userInput ?? "Default Value"; // returns the second value
console.log("storedInput1:", storedInput1);

userInput = undefined;
const storedInput2 = userInput ?? "Default Value"; // returns the second value
console.log("storedInput2:", storedInput2);

userInput = "";
const storedInput3 = userInput ?? "Default Value"; // returns the original value
console.log("storedInput3:", storedInput3);

userInput = "Some input";
const storedInput4 = userInput ?? "Default Value"; // returns the original value
console.log("storedInput4:", storedInput4);
