// The 'never' type represents the type of values that never occur. 
// For instance, never is the return type for a function that always throws an exception 
// or one that never returns.
// Variables also acquire the type never when narrowed by any type guards that can never be true.

// Function returning never must have unreachable end point
const error = (message: string): never => {
  throw new Error(message);
};

const infiteLoop = (): never => {
  while (true) {}
}

