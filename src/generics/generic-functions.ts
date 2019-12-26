// Implementation of generic function with the "function" keyword
function mergeClassic<T extends object, U extends object>(object1: T, object2: U) {
  return Object.assign(object1, object2);
};

// Implementation of generic function with the arrow function
const mergeArrow = <T, U>(object1: T, object2: U) => {
  return Object.assign(object1, object2);
};

let mergedObjectClassic = mergeClassic({ name: "Max" }, { age: 36 });
console.log(mergedObjectClassic);

// the following call causes compilation error, because second argument (number) doesn't extend
// the object type
mergedObjectClassic = mergeClassic({ name: "Max" }, 36);

const mergedObjectArrow = mergeClassic({ name: "Max", hobbies: ["reading"] }, { age: 36 });
console.log(mergedObjectArrow);


interface Lengthy {
  length: number;
}

const countAndDescribe = <T extends Lengthy>(element: T): [T, string] => {
  let describedText = "Got no value.";
  if (element.length === 1) {
    describedText = "Got 1 element.";
  } else if (element.length > 1) {
    describedText = "Got " + element.length + " elements.";
  }

  return [element, describedText];
};

console.log(countAndDescribe("String argument"));
console.log(countAndDescribe(["Running", "Jumping"]));


// The keyword "keyof" ensures that "U" will be one of the keys of the object "T" 
const extractAndConvert = <T extends object, U extends keyof T>(obj: T, key: U) => {
  return `Value for the key '${key}': ${obj[key]}`;
};

console.log(extractAndConvert({ name: "Max" }, "name"));

// compiles with error, because an empty object doesn't have the key "name"
console.log(extractAndConvert({}, "name"));

// compiles with error, because the object doesn't have the key "nickname"
console.log(extractAndConvert({ name: "Max", age: 36 }, "nickname"));
