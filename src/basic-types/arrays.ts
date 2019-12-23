const array1 = [1, 2, 3, 4]; // array1 is of type number[]
const array2 = ['One', 'Two']; // array2 is of type string[]
const array3 = [1, 2, 'Three']; // array3 is of type (number | string)[]
const array4 = []; // array4 is of type any[]

for (let item of array1) {
  console.log(item + item);
}

for (let item of array2) {
  console.log(item.toUpperCase());
}

for (let item of array3) {
  console.log(item + item); // causes a compile error
}