// What is a Callback Function?
// In JavaScript, functions are objects. Can we pass objects to functions as parameters? Yes.

// So, we can also pass functions as parameters to other functions and call them inside the outer functions. Sounds complicated? Let me show that in an example below:

// function print(callback) {
//   callback();
// }

// The print( ) function takes another function as a parameter and calls it inside. This is valid in JavaScript and we call it a “callback”. So a function that is passed to another function as a parameter is a callback function. But that’s not all.



// Callbacks make sure that a function is not going to run before a task is completed but will run right after the task has completed. It helps us develop asynchronous JavaScript code and keeps us safe from problems and errors.

// In JavaScript, the way to create a callback function is to pass it as a parameter to another function, and then to call it back right after something has happened or some task is completed. Let’s see how…

// const message = function () {
//   console.log("This message is shown after 3 seconds");
// };

// setTimeout(message, 1000);


// There is a built-in method in JavaScript called “setTimeout”, which calls a function or evaluates an expression after a given period of time (in milliseconds). So here, the “message” function is being called after 3 seconds have passed. (1 second = 1000 milliseconds)

// In other words, the message function is being called after something happened (after 3 seconds passed for this example), but not before. So the message function is an example of a callback function

const numbers=[1,2,4,5,6,7,8]
let oddNumbers = numbers.filter(function(number) {
    return number !==2;
});
console.log(oddNumbers); // [ 1, 7, 3, 5 ]

