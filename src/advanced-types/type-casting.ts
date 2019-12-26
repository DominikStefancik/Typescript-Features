// one way of type casting
const inputElement1 = document.getElementById("input-id") as HTMLInputElement;
inputElement1.value = "Hello1";

// another way of type casting
const inputElement2 = <HTMLInputElement>document.getElementById("input-id");
inputElement2.value = "Hello2";


const inputElement3 = document.getElementById("input-id");
if (inputElement3) {
  // one way of type casting
  (inputElement3 as HTMLInputElement).value = "Hello3";

  // another way of type casting
  (<HTMLInputElement>inputElement3).value = "Hello4";
}