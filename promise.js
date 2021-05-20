// // What is a Promise?
// // A promise is an object that may produce a single value some time in the future: either a resolved value, or a reason that it’s not resolved (e.g., a network error occurred). A promise may be in one of 3 possible states: fulfilled, rejected, or pending. Promise users can attach callbacks to handle the fulfilled value or the reason for rejection.
// // Promises are eager, meaning that a promise will start doing whatever task you give it as soon as the promise constructor is invoked

// How Promises Work

// A promise is an object which can be returned synchronously from an asynchronous function. It will be in one of 3 possible states:
// Fulfilled: onFulfilled() will be called (e.g., resolve() was called)
// Rejected: onRejected() will be called (e.g., reject() was called)
// Pending: not yet fulfilled or rejected
// A promise is settled if it’s not pending (it has been resolved or rejected). Sometimes people use resolved and settled to mean the same thing: not pending.
// Once settled, a promise can not be resettled. Calling resolve() or reject() again will have no effect. The immutability of a settled promise is an important feature.
// Native JavaScript promises don’t expose promise states. Instead, you’re expected to treat the promise as a black box. Only the function responsible for creating the promise will have knowledge of the promise status, or access to resolve or reject.
// Here is a function that returns a promise which will resolve after a specified time delay:

// //example1
// const wait = time => new Promise((resolve) => setTimeout(resolve, time));

// wait(3000).then(() => console.log('Hello!')); // 'Hello!'

// Our wait(3000) call will wait 3000ms (3 seconds), and then log 'Hello!'. All spec-compatible promises define a .then() method which you use to pass handlers which can take the resolved or rejected value.

// // detailed explanation/
// Promises are used to handle asynchronous operations in JavaScript. They are easy to manage when dealing with multiple asynchronous operations where callbacks can create callback hell leading to unmanageable code.

// Prior to promises events and callback functions were used but they had limited functionalities and created unmanageable code.
// Multiple callback functions would create callback hell that leads to unmanageable code.
// Events were not good at handling asynchronous operations.

// Promises are the ideal choice for handling asynchronous operations in the simplest manner. They can handle multiple asynchronous operations easily and provide better error handling than callbacks and events.

// Benefits of Promises
// Improves Code Readability
// Better handling of asynchronous operations
// Better flow of control definition in asynchronous logic
// Better Error Handling
// A Promise has four states:

// fulfilled: Action related to the promise succeeded
// rejected: Action related to the promise failed
// pending: Promise is still pending i.e not fulfilled or rejected yet
// settled: Promise has fulfilled or rejected
// A promise can be created using Promise constructor.
// Syntax

// var promise = new Promise(function(resolve, reject){
//      //do something
// });
// Parameters

// Promise constructor takes only one argument,a callback function.
// Callback function takes two arguments, resolve and reject
// Perform operations inside the callback function and if everything went well then call resolve.
// If desired operations do not go well then call reject.

//example :

var promise = new Promise(function (resolve, reject) {
  const x = "My bro";
  const y = "My bro";
  if (x === y) {
    resolve();
  } else {
    reject();
  }
});

promise
  .then(function () {
    console.log("Success, You are a My best kid");
  })
  .catch(function () {
    console.log("Some error has occured");
  });

//   Promise Consumers
// Promises can be consumed by registering functions using .then and .catch methods.

// then()
// then() is invoked when a promise is either resolved or rejected.
// Parameters:
// // then() method takes two functions as parameters.

// First function is executed if promise is resolved and a result is received.
// Second function is executed if promise is rejected and an error is received. (It is optional and there is a better way to hanlde error using .catch() method
// Syntax:

// .then(function(result){
//         //handle success
//     }, function(error){
//         //handle error
//     })

//Resolved
var promise = new Promise(function (resolve, reject) {
  resolve("My bro");
});

promise.then(
  function (successMessage) {
    //success handler function is invoked
    console.log(successMessage);
  },
  function (errorMessage) {
    console.log(errorMessage);
  }
);

//Rejected
var promise = new Promise(function (resolve, reject) {
  reject("Promise Rejected");
});

promise.then(
  function (successMessage) {
    console.log(successMessage);
  },
  function (errorMessage) {
    //error handler function is invoked
    console.log(errorMessage);
  }
);

// Applications
// Promises are used for asynchronous handling of events.
// Promises are used to handle asynchronous http requests.

//sorry bhai yh bht lamba tha :D
