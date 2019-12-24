const activities = ["Sports", "Travelling", "Reading"];

// deconstruct the array into separate items
// the name of the variables represeting array items can be anything, because deconstructing 
// an array is according to its indices
const [activity1, activity2, activity3] = activities;
console.log("Activity1: ", activity1);
console.log("Activity2: ", activity2);
console.log("Activity3: ", activity3);


// deconstruct the array to only few items and rest will be a subarray
const [favouriteActivity, ...otherActivities] = activities;
console.log("Favourite Activity: ", favouriteActivity);
console.log("Other activities: ", otherActivities);


const user = {
  firstName: "Dominik",
  age: 36
};

// deconstruct an object
// the name of the variables represeting object properties, has to be exactly the same as 
// properties name because deconstructing an object is according to names of its properties
const { firstName, age } = user;
console.log("First name: ", firstName, ", Age: ", age);


// can also overwrite the variable name to be different than the property name
const { firstName: username, age: years } = user;
console.log("Username: ", username, ", Years: ", years);