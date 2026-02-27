class employee {
    constructor (name, department) {
        this.name = name;
        this.department = department;
    }
    describe() {
        return `${this.name} works in ${this.department}`;
    }
}
class Manager extends employee {
    constructor (name, department, teamSize) {
        super(name, department);
        this.teamSize = teamSize;
    }
    describe() {
        return `${this.name} is a manager in the ${this.department} and manages ${this.teamSize} employees.`;
    }
}
const emp1 = new employee('James', 'Production');
const emp2 = new employee('Zack', 'Sales', 5);
 
const manager1 = new Manager('Errick', 'Sales', 10);
const manager2 = new Manager('Sarah', 'Marketing', 8);
 
class Company {
    constructor(name) {
        this.name = name;
        this.employees = [];
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    listEmployees() {
        this.employees.forEach(employee => {
            console.log(employee.describe());
        });
    }
}
const myCompany = new Company('Tech Solutions');
myCompany.addEmployee(emp1);
myCompany.addEmployee(emp2);
myCompany.addEmployee(manager1);
myCompany.addEmployee(manager2);
 
myCompany.listEmployees();
 