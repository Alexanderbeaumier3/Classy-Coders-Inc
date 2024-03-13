class Employees {
    #salary
    #isHired

    static allEmployees=[];
    
    constructor(name, position, salary) {
        this.name = name;
        this.position = position
        this.#salary = salary
        this.#isHired = true;
        Employees.allEmployees.push(this)
    }

    getSalary() {
        return this.#salary
    }

    setSalary(amount) {
        if(amount<0){
            throw new Error("Salary cannot be negative")
        }
        this.#salary = amount;
    }

    getStatus() {
        return this.#isHired
    }

    setStatus(command) {
        if (command === 'hire') {
            this.#isHired = true;
        } else if (command === 'fire') {
            this.#isHired = false;
        }
    }

    static getEmployees(){
        return Employees.allEmployees
    }

    static getTotalPayroll(){
        let total = 0;
        for(let i=0;i<Employees.allEmployees.length;i++){
            const employee = Employees.allEmployees[i];
            total+=employee.getSalary();
        }
        return total;

        
        // Array.forEach()
        // let total = 0;
        // Employees.allEmployees.forEach(employee=>{
        //     total+=employee.getSalary();
        // })
        // return total

        // Array.reduce()
        // return Employees.allEmployees.reduce((total,employee)=>{
        //     return total+employee.getSalary();
        // },0)
    }

    promote(position, salary){
        this.position = position;
        this.setSalary(salary);
    }
    
}

module.exports = {
    Employees,
}