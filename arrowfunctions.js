// ES6 arrow functions provide you with an alternative way to write a shorter syntax compared to the function expression.

// The following example defines a function expression that adds two numbers:

let add = function(x,y) {
  return x + y;
}
console.log(add(10, 20)); // 30

// The following example uses an arrow function which is equivalent to the above add() function expression:

let add = (x,y) => x + y;
console.log(add(10, 20)); // 30;

// In this example, the arrow function has one expression x + y so it returns the result of the expression.

// However, if you use the block syntax, you need to specify the return keyword:

let add = (x, y) => { return x + y; };


// Arrow functions, introduced in ES6, provides a concise way to write functions in JavaScript.
// Another significant advantage it offers is the fact that it does not bind its own this. In other words, the context inside arrow functions is lexically or statically defined.

// What do we mean by that?

// Unlike other functions, the value of this inside arrow functions is not dependent on how they are invoked or how they are defined.It depends only on its enclosing context.





