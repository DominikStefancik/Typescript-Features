console.log("First lines of Typescript");

const button = document.querySelector('button')!;
button.addEventListener('click', () => { // compiles with error
  console.log("Button was clicked");
})