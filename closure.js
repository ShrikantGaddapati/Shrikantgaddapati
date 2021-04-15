//what are closures?
// In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.


//const name = "Akhil"

// closure is a way where we can access other variables in a scope
// let name="akhil bro"

// function myName() {
//     console.log(name);
// }

// name="is best"
// myName()
// name = "is best is";
// myName();

// function outerfunction(outVar) {
//     return function innerFunction(inVar)
//     {
//         console.log("outer Variable" + outVar)
//          console.log("inner Variable" + inVar);
//         }
// }

// const newFunction = outerfunction("outside")
// newFunction("inner")


function add(fno, sno) //outer function
{
    let result = "Result is";
    function addnos() //inner function
    {
        return result +(fno+sno) //result is outer function variable which can be called in inner function, meant it can access

    }
    return addnos(); //outer function calling inner function
}

var results = add(10,20); //calling outer function
console.log(results)
