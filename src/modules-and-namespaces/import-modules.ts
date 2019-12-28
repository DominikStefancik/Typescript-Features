// named import have to be in the curly braces
import { sayHello, echo } from "./functions";

// a default import is without curly braces (because a file can have only one default export)
import Writeable from "./writeable";

// "*" imports every exported member defined in the given file
// any name as a prefix has to be provided and then used when using an exported member;
import * as MathConstants from "./constants";

sayHello();

// to access "PI" constant, the prefix "MathConstants" 
// defined in the import statement has to be used
let value = MathConstants.PI;
console.log(echo(value.toString()));

const writeable: Writeable = {};
console.log(writeable);

 