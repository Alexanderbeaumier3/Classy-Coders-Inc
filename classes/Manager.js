const { Employees } = require("./Employees");

class Manager extends Employees{
    #employeesManaged
constructor(name, position, salary, department) {
    super(name, position, salary)
    this.department = department;
    this.#employeesManaged = [];
}
getEmployeesManaged() {
    return this.#employeesManaged
}

setEmployeesManaged(employee) {
    this.#employeesManaged.push(employee);
}

    
}

module.exports = {
    Manager,
}