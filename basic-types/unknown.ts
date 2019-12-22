// The 'unknown' type is similar to 'any', but a bit stricter. It says that variable will hold 
// value of type which we don't know yet
let unknownValue: unknown;
let stringValue: string;
let anyValue: any;

unknownValue = 5;
unknownValue = 'Hello';
anyValue = true;

// compiles ok, because with the type 'any', Typescript compiler doesn't do a type check
stringValue = anyValue;

// compiles with error, because the type 'unknown' is not the same as the type 'any'
// even though it can contain any value
stringValue = unknownValue;

// However, if we do an explicit type check, the compiler recognizes it and 
// compiles without and error
if (typeof unknownValue === 'string') {
  stringValue = unknownValue; // compiles ok
}

