//The forEach() method executes a provided function once for each array element.

//return value is undefined.

// forEach() executes the callback function once for each array element; unlike map() or reduce() it always returns the value undefined and is not chainable. The typical use case is to execute side effects at the end of a chain.

// forEach() does not mutate the array on which it is called. (However, callback may do so)


const array1 = ["a", "b", "c"];

array1.forEach((element) => console.log(element));
return array1;