interface ErrorContainer {
  // this declaration says that the interface can contain any number of properties which
  // keys will be of a type string and their value will be of type string
  [property: string]: string;
};

let errorContainer: ErrorContainer;

errorContainer = {}; // compiles ok, because the list of properties can be empty

errorContainer = {
  email: "Invalid email"
};

errorContainer = {
  email: "Invalid email",
  username: "Invalid username"
};