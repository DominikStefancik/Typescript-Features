type Admin = {
  name: string;
  privileges: string[];
}

type Employee = {
  name: string;
  startDate: Date;
}

// the type "PromotedEmployee" contains properties of both types "Admin" and "Employee"
// NOTE: in case of intersection of object types, the intersection type will have properties of
// all object types
// NOTE: properties from both types with the same are in the intersection type only once 
type PromotedEmployee = Admin & Employee;

let user: PromotedEmployee;
user = {
  name: "Max",
  privileges: ['read'],
  startDate: new Date
};


// you can also create an intersection type of classes and interfaces
interface Greetable {
  sayGoodbey(phrase: string): void;
}

interface Attentive {
  giveCompliment(phrase: string): void;
}

type Polite = Greetable & Attentive;

let politePerson: Polite;
politePerson = {
  sayGoodbey(phrase: string) {
    return "Goodbey and " + phrase;
  },

  giveCompliment(phrase: string) {
    return "You look good today and " + phrase;
  }
}

type Combinable = string | number;
type NumericAndBoolean = number | boolean;

// NOTE: in case of intersection of union types, the intersection type will have types which are
// present in all union types
type Universal = Combinable & NumericAndBoolean;
let universalVariable: Universal; 

universalVariable = 5; // compiles ok
universalVariable = "Text"; // compiles with error, because variable can contain only numbers

// NOTE: if there all union types have no common type, then the intersection type will have type
// "never"
type Textable = string | null;
type Neverable = Textable & NumericAndBoolean;