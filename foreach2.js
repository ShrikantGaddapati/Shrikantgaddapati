var sample = [1, 2, 3];
// es5
// sample.forEach(function (elem, index) {
//   console.log(elem + " comes at " + index);
// });
// es6
sample.forEach((elem, index) => console.log(`${elem} comes at ${index}`));

/*
output
1 comes at 0
2 comes at 1
3 comes at 2
*/
