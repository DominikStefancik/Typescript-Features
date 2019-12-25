abstract class Department {
  name: string;
  // "protected" ensures that the property is accessible also to subclasses
  protected employees: string[] = [];

  constructor(protected id: string, name: string) {
    this.name = name;
  }

  // an abstract class should have defined a return type to indicate what it returns
  abstract describe(): void;

  addEmployee(employeesName: string) {
    this.employees.push(employeesName);
  }

  printEmployees() {
    console.log("Number of employees:", this.employees.length);
    console.log("Employees:", this.employees);
  }
}

class ITDepartment extends Department {
  constructor(id: string, private admins: string[]) {
    super(id, "ITDepartment"); // calling "super()" has to be the first statement in the subclass
                               // constructor
  }

  describe() {
    console.log(`ITDepartment (${this.id}):`, this.name);
  }

  // subclass can override a method defined in the superclass
  addEmployee(employeesName: string) {
    this.employees.push(employeesName);
  }

  printAdmins() {
    console.log("Admins: ", this.admins);
  }
}

const itDepartment = new ITDepartment("it", ["Max"]);
console.log("ITDepartment", itDepartment);
itDepartment.printEmployees();
itDepartment.printAdmins();

class AccountingDepartment extends Department {
  private lastReport: string | null;
  private static instance: AccountingDepartment;

  private constructor(id: string, private reports: string[]) {
    super(id, "AccountingDepartment"); // calling "super()" has to be the first statement in 
                                       // the subclass constructor
    this.lastReport = reports && reports.length > 0 ? reports[reports.length -1] : null;                                   
  }

  static getInstance() {
    // NOTE: "this" keyword in the static method refers to the class and NOT to an instance 
    // of the class!!!
    // In this case "this" has access to all static properties and method of the class
    if (!this.instance) {
      this.instance = new AccountingDepartment("accounting", []);
    }

    return this.instance;
  }

  // the getter is a function which has to start with "get" keyword and has any name 
  get getLastReport() {
    return this.lastReport;
  }

  // the setter is a function which has to start with "set" keyword and has any name 
  set setLastReport(report: string) {
    this.lastReport = report;
  }

  describe() {
    console.log(`AccountingDepartment (${this.id}):`, this.name);
  }

  addReport(report: string) {
    this.reports.push(report);
    this.lastReport = report;
  }

  printReports() {
    console.log("Reports: ", this.reports);
  }
}

const accountingDepartment = AccountingDepartment.getInstance();
console.log("AccountingDepartment", accountingDepartment);
accountingDepartment.printEmployees();
accountingDepartment.printReports();

// "getter" is called as a property, not as a function!!!
console.log(accountingDepartment.getLastReport);

// "setter" is called as an assignment, not as a function!!!
accountingDepartment.setLastReport = "New Report";
console.log(accountingDepartment.getLastReport);

