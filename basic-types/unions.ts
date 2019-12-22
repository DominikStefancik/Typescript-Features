const combine = (input1: number | string, input2: number | string) => {
  let result: number | string;
  if (typeof input1 === 'number' && typeof input2 === 'number') {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString(); // explicitly say that we are using strings
  }
  return result;
}

const num1 = 5;
const num2 = 2.8;
console.log("Adding: ", combine(num1, num2));

const text1 = 'Max';
const text2 = 'Anna';
console.log("Adding: ", combine(text1, text2));
