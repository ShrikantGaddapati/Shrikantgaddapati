// One of my favourite and most used array method of all time. As a ReactJS developer I use map a lot inside my application UI.
// Map like filter & foreach takes a callback and run it against every element on the array but whats makes it unique is it generate a new array based on your existing array.

var sample = [1, 2, 3]; //Hey bro, even i can call you bro, hi Im array, and im never gonna change!yeppiieeee


// es5
var mapped = sample.map(function (elem) {
  return elem * 10;
});
console.log(mapped);
// es6
// let mapped = sample.map((elem) => elem * 10);
// console.log(mapped);


// //Map ran through every element of the array, multiplied it to 10 and returned the element which will be going to store inside our resulting array.

// Like filter, map also returns an array. The provided callback to map modifies the array elements and save them into the new array upon completion that array get returned as the mapped array.