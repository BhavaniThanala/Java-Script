// Task 1:-

// let a = 3;
// let b = "4";
// console.log('sum '+ a+b);
// console.log('subtraction '+ a-b); //check*
// console.log('product '+ a*b);
// console.log(a%b);
// console.log(a/b);



//Task 2 :-
// coercion :-Coercion is the implicit type conversion that happens when JavaScript tries to perform an operation with values of different types.

// coercion of number to string
// let num = 23;
// let str ="23";
// console.log(num == str);

// //coercion of string to boolean
// let str1 = "Bhavani"
// let bool =Boolean(str);
// console.log(bool);




//Task 3 :- Event , Event Listner - Event handler in html file.





//Task 4 :- Arrow functions , Rest operator , Spread operator.

// let c = ([a,b]=[20,100])=>a+b;
// console.log(c());
// let d= (a=50,b=100)=>a+b;
// console.log(d());
// let sum2 = (a,b) => a+b;
// console.log(sum2(20,30));

//Write a program to find the area of a rectangle.
// function area(length,breadth){
//     areaOfRect=0.5*length*breadth;
//     console.log(areaOfRect);
// }
// area(5,7);









// Task5 -  Write a program with multiple examples of Ternary operations
//Ternary operator(?) :- The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy. This operator is frequently used as an alternative to an if...else statement.
//Syntax :- condition ? exprIfTrue : exprIfFalse

//Ex:- 1
// function gender(girl){
//     return girl ? 'yes' :'no';
// }
// console.log(gender(true));
// console.log(gender(false));
// console.log(gender(null));

//Ex:- 2
// const greeting = (person) => {
//     const name = person ? person.name : "stranger";
//     return `Howdy, ${name}`;
//   };
  
//   console.log(greeting({ name: "Alice" })); // "Howdy, Alice"
//   console.log(greeting(null)); // "Howdy, stranger"

//Ex:- 3
// let age = 19;
// let hasLicense = false;
// let canDrive = age >= 18
//   ? hasLicense
//     ? "You can drive"
//     : "You are old enough, but you don't have a license"
//   : "You are not old enough to drive";
// console.log(canDrive); 


  


// Task6 - Calculator program using arrow functions

// let sum=(a,b) => a+b;
// console.log(sum(10,29));
// let sub=(a,b) => a-b;
// console.log(sub(10,29));
// let prod=(a,b) => a*b;
// console.log(prod(10,29));
// let div=(a,b) => a/b;
// console.log(div(10,20));

// const Calculator={
//     sum:(a,b) => a+b,
//     sub:(a,b) => a-b,
//     product:(a,b) => a*b,
//     div:(a,b) => a/b,
// }
// console.log(Calculator.sum(10,20));



// Task7 - Array Manipulation and Object Manipulation 

// let array=[10,20,30,40,50,60,70];
// let arr2=['apple','ball','cat'];
// console.log(array[1]);
// array[7]='bhavani';
// console.log(array); //Adds to array
// let arr3=array.concat(arr2);//concatination of two arrays
// console.log(arr3);
// array.pop();//Removes the last item of an array and returns it.
// console.log(array);
// array.shift();
// console.log(array);// Removes the first element of an array .
//  array.unshift('dog','donkey');
//  console.log(array);// Adds an item to the beginning.
//  console.log(array.slice(0,5));
//  console.log(array.slice(3));







// Task8 - Any example of map()

// BONUS

//Task: Implement a shopping list using arrays and methods to add, remove, and display items.


//Task :Create a program that prints numbers from 1 to 100. For multiples of 3, print "Fizz", for multiples of 5, print "Buzz", and for numbers that are multiples of both 3 and 5, print "FizzBuzz".

// for(let i=1; i<100 ;i++){
//     console.log(i);
//     if (i%3===0 && i%5===0){
//         console.log("FizzBuzz");
//     }
//     else if(i%5===0){

//         console.log("Buzz");
//     }
//     else if(i%3===0 ){
//         console.log("Fuzz");
//     }
// }


//Task:-Create a program that takes a number as input and prints its reverse using a while loop.
// function rev(i){
    
//     let reverse=0;
//     while(i!=0){
//         let rem = i%10;
//         reverse=reverse*10+rem;
//         i=Math.floor(i/10);
        
//     }
//     console.log(reverse);
// }
// rev(897);






// let n=1234567809;
// let result = n.toString().split('').reverse().join('');
// console.log(result);


















