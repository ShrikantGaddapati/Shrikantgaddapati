var sample = [1, 2, 3]; // yeah same kind of array

// es5
var result = sample.filter(function (elem) {
  return elem !== 8;
});
console.log(result);

// es6
var result = sample.filter((elem) => elem !== 2)[
  /* output */
  (1, 3)
];


// See how easy it was. We passed a callback to filter which got run against every element in the array. In the callback we checked if the element !== 2 if the condition fails ( when elem was equal to 1 or 3 ) include them into the resulting array else don’t include the element in the resulting array.


// Also take notice filter does not update the existing array it will return a new filtered array every time.
