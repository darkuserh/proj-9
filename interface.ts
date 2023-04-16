export interface User{
    name:string;
    age:number;
    id:number;
    email:string;
}
let {name:userName,email:userLogin}:User={
name:'John',
age:30,
id:1,
email:''
}
// user.name;
// user.email;

interface Employees extends User{
salary:number;
}
let employee:Employees={name:'John',age:30, id:1,email:'',salary:1000};
export interface Login{
Login():User;
}
let [user1,user2,...restUsers]:User[]=[
    {name:'John',age:30, id:1,email:''},
    {name:'John1',age:31, id:2,email:''},
    {name:'John2',age:32, id:3,email:''},
    {name:'John3',age:33, id:4,email:''}
]
console.log(user1);
console.log(user2);
console.log(restUsers);
// let results=restUsers.filter(user=>user.id>2)
// @Component({})
// class Component{
// constructor(public name:string){}
// }