import {Login, User} from './interface';

interface Adress {
    street: string;
    city: string;
    state: string; 
    pin: string;
}
class Employee implements Login{
    #id: number;
    protected name: string;
    adress: Adress;
    get empId(): number {
        return this.#id
    }
    set empId(id: number) {
        this.#id = id;
    }
    static getEmplyeeCount(): number {
        return 50;
    }
    constructor(id: number, name: string, adress: Adress) {
        this.adress = adress;
        this.#id = id;
        this.name = name;
    }
    Login(): User {
       return {name:'John',age:30, id:1,email:''}
    }
    getNameWithAdress(): string {
        return `${this.name} stays at ${this.adress}`;
    }
}
let john = new Employee(1, 'John', { street: 'ABC', city: 'Striy', state: 'Lvivska obl.', pin: '82400' });
john.empId = 100;
console.log(john.empId)
class Manager extends Employee {
    constructor(id: number, name: string, adress: Adress) {
        super(id, name, adress)
    }
    getNameWithAdress(): string {
        return `${this.name} is a manager at ${this.adress}`;
    }
}
let adress = john.getNameWithAdress()
// john.id=1;
// john.name='John';
// john.adress='Highway 81';

console.log(adress)
// let mike = new Manager(2, 'Mike', 'Cherise Drive');
// console.log(mike.getNameWithAdress())