import axios, { AxiosResponse } from "axios";

const form = document.querySelector("form")!;

const GOOGLE_GEOCODING_API_KEY = "";

const searchAddressHandler = (event: Event) => {
  event.preventDefault();

  const addressInput = document.getElementById("address") as HTMLInputElement;
  const enteredAddress = addressInput.value;
  const GOOGLE_GEOCODING_API_URL = `https://maps.googleapis.com/maps/api/geocode/json?address=
    ${encodeURI(enteredAddress)}&key=${GOOGLE_GEOCODING_API_KEY}`;

  // send the input address to Google's API
  axios.get(GOOGLE_GEOCODING_API_URL)
          .then((response: AxiosResponse<any>) => {
            console.log(response);
          })
          .catch((error: string) => console.error(error));
}

form.addEventListener("submit", searchAddressHandler);
