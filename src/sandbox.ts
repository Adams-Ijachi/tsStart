import { Invoice } from "./classes/invoice.js";
import { Payment } from './classes/Payment.js';
import { HasFormatter } from './interfaces/hasFormatter.js';
import { ListTemplate } from './classes/listTemplate.js';


// DATA TYPES

// // generate array of names
// let names = ["John", "Jane", "Mary", "Mark", "Bob",8];
// let age: number  = 5  ;

// names.push(7)
// console.log(names);

// let ninja = {
//     name: "Yoshi",
//     belt: "black",
//     age: 'po',
//     beltColor: function() {
//         console.log(this.belt);
//     }
// }
// // ninja.belt = "blue";
// // pipe operator    

// ninja.beltColor();
// let uid: string | number;
// uid = 1;
// console.log(uid)


// FUNCTIONS TYPESCRIPT 
// const greet : Function = () => {
//     console.log('hello ')
// }

//  const add = (a: number, b:number, c: number = 10 ) => {
//     console.log(a+b+c )
// }

// add(1,9)

// const minus = (a:number , b:number): Number => {
//     return a +  b;
// }

// let result = minus(1,2);

// type StringOrNum = string | number ;
// type UserType = 'Admin' | 'Customer'
    



// const log = (uid:StringOrNum, item: string ) => console.log(`${item} uid is ${uid}`)
// const userType = (type:UserType) => console.log(type)

// log(2,'name')
// userType('Customer')

// FUNCTION  Signature
 
// let greet : (a:string, b:string) => void;
// greet = (name:string, greeting:string) =>{
//     return 'name'
// }
// let result = greet('john','doe')
// console.log(result)

// 
// let calc: (a:number, b: number, c: string) => number;

// calc =(num1:number,num2:number)  => 2

// let result = calc(1,2,'2')
// console.log(result)


// DOM Manipulations
// Interfaces

// let doc1: HasFormatter;
// let doc2:HasFormatter;
// doc1 = new Invoice('adam','website',50)



// console.log(typeof doc1.greeting())

// interface isPerson{
//     name: string;
//     age:number;
//     speak(a:string):void;
//     spend(a:number):number
// }


// const me: isPerson = {
//     name:'adam',
//     age:20,
//     speak(text:string) {console.log(text)},
//     spend(amount:number) {return amount }
// }

// const greetPerson = (person:isPerson) =>{
//     console.log('hello', person.name )
// }

// greetPerson(me)


// function logInput(e:any){
//     console.log(typeof e)
//     console.log(e.target)
// }




// const anchor = document.querySelector('a');

// console.log(anchor?.href)

const form = document.querySelector('.new-item-form') as HTMLFormElement;
console.log(form.children)

const type = document.querySelector('#type') as HTMLSelectElement ;
const toForm = document.querySelector('#tofrom') as HTMLInputElement ;
const details = document.querySelector('#details') as HTMLInputElement ;
const amount = document.querySelector('#amount') as HTMLInputElement ;
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul)

function submitForm(e:Event){
    e.preventDefault();

    let doc: HasFormatter;
    let values: [string,string,number]
    values = [toForm.value,details.value,amount.valueAsNumber]
    if(type.value==="invoice"){
        doc =  new Invoice(...values)
    }
    else{
        
        doc = new Payment(...values)
    }
    console.log(
       doc
    )
    list.render(doc,type.value,'end')
}

form.onsubmit = submitForm

// // CLASSES

// const inv = new Invoice('adam','looooooooooooooooooooooooooooooooo',2)
// console.log(inv.changeAmount(100))
// console.log(inv.greeting())
// let invoices: Invoice[] = [];
// invoices.push(inv)

// console.log(invoices)

/// GENERICS
// ENUMS

// enum ResourceType {BOOK,AUTHOR,FILM}

// interface Resource <T> {
//     uid: number;
//     resourceName:ResourceType;
//     data:T
// }
// const addUID = <T extends object> (obj: T) =>{
//     let uid = Math.floor(Math.random() * 100);
//     return {...obj, uid}
// }

// let docOne = addUID({name:'yoshi',age:20})
// // let doc2 = addUID('d')
// console.log(docOne)

// const doc3:Resource <string[]> = {
//     uid:1,
//     resourceName: ResourceType.BOOK,
//     data : ['j']
// }

// console.log(doc3)

// TUPLES

let tup: [string,number,boolean] = ['ryu',2,true]



