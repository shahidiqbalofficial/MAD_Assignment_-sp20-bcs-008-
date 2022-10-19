// static method ......
class Employee{
    static company='comsats'
    constructor(_name,_salary){
        this._name
        this._salary
    }
    get name(){
        return this._name
    }
    set name(givename){
        this._name=givename

    }
    display(){
        return `${this._name} has salary ${this._salary}`
    }
    static dutyHoure(){
        return `duty hours from 8 to 7`
    }
    }
    class Teacher extends Employee{
        constructor(name, salary,department){
            super(name,salary)
            this._department=department
        }
        display(){
            return `${this._name} has department ${this._department}`
        }
    }
    let EI =new Employee('Ali',30000)
    console.log(EI.display())
    console.log(Employee.dutyHoure())
    console.log(Employee.company)
    let T1 =new Teacher('Ali ',20000,'cs')
    console.log(T1.display())