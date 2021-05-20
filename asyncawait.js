// We all know that Javascript is a Synchronous which means that it has an event loop that allows you to queue up an action that won’t take place until the loop is available sometime after the code that queued the action has finished executing. But there’s a lot of functionalities in our program which makes our code Asynchronous. One of them is the Async/Await functionality.

// Async/Await is the extension of promises which we get as a support in the language. You can refer Promises in Javascript to know more about it.

// Async:
// It simply allows us to write promises based code as if it was synchronous and it checks that we are not breaking the execution thread. It operates asynchronously via the event-loop. Async functions will always return a value. It makes sure that a promise is returned and if it is not returned then javascript automatically wraps it in a promise which is resolved with its value.

// Examples:

// const getData = async() => {
//     var data = "Hello World";
//     return data;
// }

// getData().then(data => console.log(data));

// Await:
// Await function is used to wait for the promise. It could be used within the async block only. It makes the code wait until the promise returns a result. It only makes the async block wait.

// const getData = async () => {
//   var y = await "Hello World";
//   console.log(y);
// };

// console.log(1);
// getData();
// console.log(2);

// Notice that the console prints 2 before the “Hello World”. This is due to the usage of the await keyword.

// Supported Browsers: The browsers supported by Async/Await Function are listed below:

// Google Chrome
// Firefox
// Apple Safari
// Opera

// How it works
// An async function returns a promise, like in this example:

// const doSomethingAsync = () => {
//   return new Promise(resolve => {
//     setTimeout(() => resolve('I did something'), 3000)
//   })
// }

// When you want to call this function you prepend await, and the calling code will stop until the promise is resolved or rejected. One caveat: the client function must be defined as async. Here's an example:

// const doSomething = async () => {
//   console.log(await doSomethingAsync());
// };

//example

// const doSomethingAsync = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve("I did something"), 3000);
//   });
// };

const doSomething = async () => {
  console.log(await doSomethingAsync());
};

console.log("Before");
doSomething();
console.log("After");

// //example 3
// async function example() {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("done!"), 2000);
//   });

//   let result = await promise; // wait until the promise resolves (*)

//   alert(result); // "done!"
// }

// example();
