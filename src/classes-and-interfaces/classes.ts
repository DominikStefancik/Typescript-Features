class Department {
  name: string;
  private employees: string[] = [];

  constructor(name: string) {
    this.name = name;
  }

  describe() {
    console.log("Department:", this.name);
  }

  addEmployee(employeesName: string) {
    this.employees.push(employeesName);
  }

  printEmployees() {
    console.log("Number of employees:", this.employees.length);
    console.log("Employees:", this.employees);
  }
}

const accounting = new Department("Accounting");
console.log("Instance of class Department:", accounting);

const objectLiteral = {
  name: "Accounting"
};
console.log("Object literal:", objectLiteral);

accounting.describe();

accounting.addEmployee("Dominik");
accounting.addEmployee("Peter");

// the following line will throw a compilation error, because the field "employees" is declared 
// as private
// however, if the compiler stting "noEmitOnError" is set to false, the compiler compiles
// the code to Javascript which then will be executed, because Javascript till the version ES7
// doesn't know the concept of "private fields" in a class
accounting.employees.push("Anna");

accounting.printEmployees();

//////////////////////////////////////////////
class User {
  // By adding the "private" or "public" modifier to the constructor parameters Typescript 
  // automatically creates class properties of the same name as the parameters name with the same
  // modifiers
  constructor(private username: string, private age: number) {}

  printUser() {
    console.log("User:", this.username, ", Age:", this.age);
  }
}

class UserRecord {
  // By adding the "readonly" modifier to the constructor parameters Typescript automatically
  // creates class properties, initialises them and throws an compilation error if in any place
  // there is a new value assigned to the property
  constructor(private readonly id: string, private name: string) {}

  printUserRecord() {
    console.log("Id:", this.id, ", Name:", this.name);
  }
}


