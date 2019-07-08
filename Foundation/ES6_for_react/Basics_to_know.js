/*1. Var and  and const
    -var can be accesed outside the local scope
    -let resolves this problem
    -replace var with let
*/ 
// function sayHello(){
//     for(var i=0; i<5; i++){
//         console.log(i)
//     }

//     console.log("outside the local scope i is: "+i)

//     const a=10
//     a=20 //error const is read only
// }
// sayHello()

/*2. Objects
  a thing with a set of property
*/

// const Person={
//     name:"sanket",
//     walk() { return "Hello walking"},  //es6 syntex   old: walk: function(){}
//     talk() {}   //methods
// };

// console.log(Person.walk())
// Person['name']="john";  //change the object peoperty
// console.log(Person.name)

/*
    3.this
     -its a reference to its current object
     -functions in js is object
*/

// const Person={
//     name:"sanket",
//     walk() {return this}
// };  

// console.log(Person.walk())

/*
 4.Arrow functions
   -short way of declaring functions
*/
// const sum=function(number){  // normal function
//     return number*number
// }

// const sum_=(number)=> number*number  //arrow function

// console.log(sum(10)+"  "+sum_(10))

// let jobs=[
//     {id:1, isActive:true},
//     {id:2, isActive:true},
//     {id:3, isActive:false}
// ]

// var res=jobs.filter((job)=>job.isActive)
// console.log(res)

/*
 5. Array Map
    -iterate the items one by one without modifying orignal array
*/
// let colors=['red', 'green', 'blue']

// //var items=colors.map((item)=>"<p>"+item+'<p>')  
// var items=colors.map((item)=>`<p>${item}<p>`)     //using template litrals
// console.log(items)

/*
 6. Object Destructuring
*/ 

// [a, b]=[1, 2];
// console.log(a)

// ///
// var foo = ['one', 'two', 'three'];

// var [one, two, three] = foo;
// console.log(one); // "one"
// console.log(two); // "two"
// console.log(three); // "three"

////

// var rest

// [a, b, ...rest]=[10,20,30,40,50]   //rest param

// console.log(rest)

// ////
// let address={
//     street:"hone_road",
//     city:"karwar",
//     state:"karnataka"
// }

// let {street, city:cty}=address  //cty is the other name given 
// console.log(street, cty)

/*
 8. Spread operator
    -declared by 3 dots
*/ 
//  const first=[1, 2, 3];
//  const second=[4, 5, 6];

// //  const combined = first.concat(second)
//  const combined=[...first, 'a', ...second,'b'] //'' is adding element in middle

//  console.log(combined)

////
// const first={name:"mouh"}
// const second={jon:'Instrucctor'}

// const combine={...first, ...second, location:"India"}
// console.log(combine)

/*
 9. Classes
*/ 
// class Person{
//     constructor(name){
//         this.name=name
//     }
//     walk(){
//         console.log("walk")
//     }
// }

// const person= new Person('Sanket')
// console.log(person.name)
// person.walk()

/*
 10. Inheritance
*/ 

// class Person{
//     constructor(name){
//         this.name=name
//     }

//     walk(){
//         console.log("walk")
//     }
// }

// class Teacher extends Person{
//     constructor(name, degree){
//         super(name);
//         this.degree=degree;
//     }

//     teach(){
//         console.log("teaching")
//     }
// }

// var teacher=new Teacher("Sanket","MCA")
// console.log(teacher.degree, teacher.name)

/*
 11 modularity
  -arrange every class in modules iwth diffrent js file
 */