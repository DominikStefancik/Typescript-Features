// Tuples are a special type of array, which has fixed number of elements with types know in advance

const array = [1, 'admin']; // the variable type will be infered as an (string | number)[]

// if you want to declare a tuple variable, you have to explicitly define its type
let tuple: [number, string]; // now the variable is of type tuple with exactly 2 items
                             // where the type of the first item is number and 
                             // the type of the second item is string
tuple = [2, 'user'];

array[1] = 10; // doesn't cause a compilation error
tuple[1] = 10; // causes a compilation error, because the second item is expected to be a string

array.push('New item'); // doesn't cause a compilation error, cause array can be extended

// doesn't cause a compilation error even though the tuple is defined to have exactly two elements
// 'push' operation on tuples cannot be verified by the Typescript compiler
tuple.push('New item'); 