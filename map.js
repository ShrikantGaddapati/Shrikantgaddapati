//The map() method creates a new array populated with the results
//of calling a provided function on every element in the calling array.

//let newArray = arr.map(callback(currentValue[, index[, array]]) {
  // return element for newArray, after executing something
//}[, thisArg]);



//map calls a provided callback function once for each element in an array, in order, and constructs a new array from the results. callback is invoked only for indexes of the array which have assigned values (including undefined).
// It is not called for missing elements of the array; that is:
// indexes that have never been set;
// indexes which have been deleted.





const array1 = [1, 4, 9, 16];

// passing a function to map
const map1 = array1.map(x => 2 * 2);

console.log(map1);
 



// // When not to use map()
// Since map builds a new array, using it when you aren't using the returned array is an anti-pattern; use forEach or for...of instead.
//you're not using the array it returns; and/or
// you're not returning a value from the callback.