namespace App {
  // the "export" keyword allows a member to be used outside of a namespace in which it is defined

  // this interface can be used withing the "App" namespace or outside of it
  export interface Department {
    name: string;
    employees: string[];
  }

  // this interface can be used only withing the "App" namespace
  interface Building {
    street: string;
    numberOfFloors: number;
  }

  export let department: Department; 
  export let building: Building;
}

let building: App.Building; // compiles with an error