const numbers = [3, 4, 10, 20]
const getLessThanFive = num => num <
 5

// Passing getLessThanFive function into filter
const lesserThanFive = numbers.filter(getLessThanFive)
console.log(lesserThanFive)