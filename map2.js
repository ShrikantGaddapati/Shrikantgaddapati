let numbers = [1, 4, 9];
let roots = numbers.map(function (num) {
  return Math.sqrt(num);
});
console.log(roots);
// roots is now     [1, 2, 3]
// numbers is still [1, 4, 9]
