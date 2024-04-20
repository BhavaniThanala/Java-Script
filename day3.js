// let x ;
// console.log(x);

// Hoisting :-

// x=5;
//console.log(x);
//var x;

// view();
// function view(){
//     console.log("Hello");
//     n= 10;
// }
// console.log(n);


//Global scope
// let x = 10;
// function Gscope(){
//     console.log(x)
//     x=5;  // Function scope 
//     console.log(x)
// }
// Gscope();
// console.log(x);

// x=[1,2,3,5,7,90];
// b=x.length;
// //console.log(b);
// // for(let i=0; i<x.length ; i++){
// //     n = x[i];
// //     console.log(n);
// //     }
// for(let i=0 ; i<=10 ; i++){
//     console.log(i);
// }

var car = {
    name: "ford",
    color: "black",
    model: "mustang" 
  }
  
  for (var prop in car) { // prop represent properties of car 
    console.log(`${prop} = ${car[prop]}`);
  }

  var i=[1,2,3,4,5,6,7,8,9,10];
  for (var x in i){
    console.log(`${x}`)
  }




