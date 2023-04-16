let lname:string;
lname='Yuriy';
let newname=lname.toUpperCase();
console.log(newname)
let age:number;
age=25;
age=25.5;
let dob='25';
let result=parseInt(dob);
let isValid:boolean=false;
console.log(isValid)
let empList:string[];
empList=['Yuriy1','Yuriy2','Yuriy3']
let numList:Array<number>;
numList=[1,2,3,4,5];
let results=numList.filter((num)=>num>2);
let newNum=numList[0];
let emp=empList.find((emp)=>emp==='Yuriy1');
let sum=numList.reduce((acc,num)=>acc+num)
console.log(results);
console.log(emp);
console.log(sum);
const enum Color{
    Red,
    Green,
    Blue,
    Black
};
let c:Color=Color.Blue;
let swapNumbs:[firstNumber:number,secondNumber:number];
function swapNumbers(num1:number,num2:number):[number,number]{
return[num1,num2]
}
swapNumbs=swapNumbers(10,20);
swapNumbs[0];
swapNumbs[1];
let department:any;
department='IT';
department=10;
// function add(num1:number,num2:number):any{
//     return num1+num2;
// }
// let newsum=add(10,20)