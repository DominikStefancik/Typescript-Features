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
            if (response.data.status == "OK") {
              throw Error("Could not fetch location.");
            }
            const coordinates = response.data.results[0].geometry.location;

            // show map
            const map = new google.maps.Map(document.getElementById('map')!, {
              center: coordinates,
              zoom: 12
            });

            // add marker to the found location
            new google.maps.Marker({position: coordinates, map: map});
          })
          .catch((error: Error) => {
            alert(error.message);
            console.error(error);
          });
}

form.addEventListener("submit", searchAddressHandler);
