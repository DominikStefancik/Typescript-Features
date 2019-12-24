const hobbies = ["Sports", "Travelling", "Reading"];
const activeHobbies = ["Computers"];
const favouriteHobbies = ["Sleeping", ...hobbies];

activeHobbies.push(...hobbies);

const person = {
  name: "Dominik",
  age: 36
};
console.log("Person:", JSON.stringify(person));

// "copiedPerson" is now the exact copy of "person" object
const copiedPerson = { ...person };
console.log("Copied:", JSON.stringify(copiedPerson));

// "copiedAndModifiedPerson" has the same properties as "person" object, but the the value of 
// the "name" property has changed
const copiedAndModifiedPerson = {
  ...person, // copy the properties from the "person" object
  name: "Peter", // but change the name value
  hobbies: favouriteHobbies // and add additional property
};
console.log("Copied and modified person:", JSON.stringify(copiedAndModifiedPerson));


// the function accepts any number of parameters which are of type number
const sumNumbers = (...numbers: number[]) => {
  return numbers.reduce((previous, current) => {
    return current + previous;
  }, 0);
};
console.log("No number: ", sumNumbers());
console.log("One number: ", sumNumbers(3));
console.log("Two numbers: ", sumNumbers(4,7));
console.log("Six number: ", sumNumbers(1,2,3,4,5,6));

// "..." as a rest operator can be combined with tuples, in case we know that a function
// accepts a list of parameters with exact number of items
const sumExactlyFourNumbers = (...numbers: [number, number, number, number]) => {
  return numbers.reduce((previous, current) => {
    return current + previous;
  }, 0);
};
// the function has to be called with exactly 4 numbers as parameters
console.log("Four number: ", sumExactlyFourNumbers(1,2,3,4));
