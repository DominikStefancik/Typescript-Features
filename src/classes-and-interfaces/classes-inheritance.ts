class Department {
  name: string;
  // "protected" ensures that the property is accessible also to subclasses
  protected employees: string[] = [];

  constructor(private id: string, name: string) {
    this.name = name;
  }

  describe() {
    console.log(`Department (${this.id}):`, this.name);
  }

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

  // the getter is a function which has to start with "get" keyword and has any name 
  get getLastReport() {
    return this.lastReport;
  }

  // the setter is a function which has to start with "set" keyword and has any name 
  set setLastReport(report: string) {
    this.lastReport = report;
  }

  constructor(id: string, private reports: string[]) {
    super(id, "AccountingDepartment"); // calling "super()" has to be the first statement in 
                                       // the subclass constructor
    this.lastReport = reports && reports.length > 0 ? reports[reports.length -1] : null;                                   
  }

  addReport(report: string) {
    this.reports.push(report);
    this.lastReport = report;
  }

  printReports() {
    console.log("Reports: ", this.reports);
  }
}

const accountingDepartment = new AccountingDepartment("accounting", []);
console.log("AccountingDepartment", accountingDepartment);
accountingDepartment.printEmployees();
accountingDepartment.printReports();

// "getter" is called as a property, not as a function!!!
console.log(accountingDepartment.getLastReport);

// "setter" is called as an assignment, not as a function!!!
accountingDepartment.setLastReport = "New Report";
console.log(accountingDepartment.getLastReport);

