// The namespace import has to start with "///"

/// <reference path="namespaces.ts" /> 

namespace App {
  // in order to use a member of a particular namespace from a different file we have to use
  // the same namespace here in this file 
  let itDepartment: Department;
  itDepartment = {
    name: "IT",
    employees: []
  }

  console.log(itDepartment);
} 

// a member of a namespace can be accessed by the namespace name as a prefix
let accountingDepartment: App.Department;
accountingDepartment = {
  name: "Accounting",
  employees: []
};
console.log(accountingDepartment);
