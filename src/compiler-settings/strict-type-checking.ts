// 'querySelector' method can return null, if the button element doesn't exist
const button = document.querySelector('button');

// if in the compiler settings (tsconfig.json file) is the property "strictNullChecks" set to true
// the compiler will compile the following code with an error, because the constant "button"
// can be null and adding an event listener might throw a runtime error
button.addEventListener('click', () => { // compiles with error
  console.log("Button was clicked");
})

// However, if you explicitly check if the "button" is not true, the compiler recognises it
// and doesn't complain
if (button) {
  button.addEventListener('click', () => { // compiles ok
    console.log("Button was clicked");
  })
}

// if in the compiler settings (tsconfig.json file) is the property "noImplicitAny" set to true
// the compiler will compile the following code with an error, because the function parameter
// has not explicitly defined its type and there is no way the compiler can infer it 
const logData = (data) => {
  console.log(data);
}

// How ever in the following code the compiler with the property "noImplicitAny" set to true
// will not complain, because it is able to track the code flow and hence the type of the variable 
// "canBeAny"
let canBeAny;
canBeAny = 1;
canBeAny = 'Hello'
