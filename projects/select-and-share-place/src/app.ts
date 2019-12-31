const form = document.querySelector("form")!;

const searchAddressHandler = (event: Event) => {
  event.preventDefault();

  const addressInput = document.getElementById("address") as HTMLInputElement;
  const enteredAddress = addressInput.value;

  // send the input address to Google's API
  
}

form.addEventListener("submit", searchAddressHandler);
