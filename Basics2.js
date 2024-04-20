// Day2 - Basics

/*
1.Logical Operators
2.Ternary Operators
3.Function declaration vs Function definition
4.Arrow Functions in detail
5. Scope - Global, Local, Lexical scope and Closure
6.Arrays,Objects in detail


*/


// 1.Logical Operators

// <,> , >= and <= , ===(strict equality !!!)

// const a = 1;
// const b = '2';
// console.log(a>=b) // true
// console.log(a<=b) //  true


// // 2.Ternary/Conditional Operators - simplified version for if-else statements

// // let variablename = (condition) ? value1:value2 

// // let c = 1;

// // if (c===1){
// //     console.log("1")
// // }else{
// //     console.log("2")
// // }

// // let res = (c!==1) ? "1":"2";
// // console.log(res);

// // // function declaration vs function definition

// // let vishnu; // variable declaration
// // vishnu = 18; // variable initiation

// // function functionName(){

// // }



// //Arrow functions are nothing simplified version normal functions


// // const hello = function(){
// //     return 'hello';
// // }
// // console.log(hello());


// // Arrow functions 

// const hello = () => {
//     return "Hello World!";
//   }

// console.log(hello())


// // Scope 


// var some = 1;
// print(some)

//Global Scope -  throughout the program you can access

// Function scope - within the function
// let g = 2; // global scope

// const scope =() =>{
//     let g = 1;
//     console.log(g) // 1

// }
// scope();
// console.log(g) //throws error 


// Lexical Scope and Closure +++++++++(post task)


// Arrays 

const arr = []; // empty array
arr[0] = 1;
arr[1] = 2;
arr[2] = 3;
arr.push(4,5,6,7,8,9,10)
// slice() , map()
console.log(arr) // arr

res = arr.slice(-1);
console.log(res) // 


console.log(arr);

const newArr = arr.map(Square)

function Square(val) {
    return val * val;
  
}
console.log(newArr);

// Objects 
const obj = {name:"square" , age:20};



console.log(obj.age);

// Task5 -  Write a program with multiple examples of Ternary operations
// Task6 - Calculator program using arrow functions
// Task7 - Array Manipulation and Object Manipulation 
// Task8 - Any example of map()

// BONUS

//Task: Implement a shopping list using arrays and methods to add, remove, and display items.

//