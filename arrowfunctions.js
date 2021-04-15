// // Arrow functions (also called “fat arrow functions”) are undoubtedly one of the more popular features of ES6. They introduced a new way of writing concise functions.

// // Arrow function is one of the features introduced in the ES6 version of JavaScript. It allows you to create functions in a cleaner way compared to regular functions. For example,

// // This function

// // // function expression
// // let x = function(x, y) {
// //    return x * y;
// // }
// // can be written as

// // // using arrow functions
// // let x = (x, y) => x * y;
// // using an arrow function.

// Arrow Function Syntax
// The syntax of the arrow function is:

// let myFunction = (arg1, arg2, ...argN) => {
//     statement(s)
// }
// Here,

// myFunction is the name of the function
// arg1, arg2, ...argN are the function arguments
// statement(s) is the function body
// If the body has single statement or expression, you can write arrow function as:

// let myFunction = (arg1, arg2, ...argN) => expression

let greet = x => console.log(x);
greet('Hello'); // Hello 

let age = 22;

let welcome = (age < 18) ?
  () => console.log('Shri') :
  () => console.log('Akhil');

welcome(); // 


let sum = (a, b) => {
    let result = a + b;
    return result;
}

let result1 = sum(5,7);
console.log(result1); 