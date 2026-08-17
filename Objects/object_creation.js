
// objects are collection of key-value pairs

let mySymbol= Symbol("key1")

let user={                          // This is non-singaltan object declaration
    name   : "Anuj Kumar",
    rollNo : 892,
    branch : "cse",
    email  :  "anuj@gmail.com",
    isStudent : true,
    [mySymbol]  : "myKey" ,  // we must use square braces to initialize symbol as symbol
    "test" : "lalal "          // we can access this only like this console.log(user.["test"]);
}
// console.log(user["name"])  // each key is by default string like  "name" : Anuj Kumar we can access object element like this too
// console.log(user.name)

// console.log(typeof mySymbol)

/*  freezing any object */

// Object.freeze(user)
// user.email="golu@gmail.com" // This won't modidy the email because we have freezed the object
// console.log(user)

/* declaring functions(greeting fuction) */

user.greetings=function(){
    console.log("Hello " +user.name)
}

// user.greetings=function(){
//     console.log(`Hello , ${user.name}`)    // This is backticks which allow us to use string interpolation without +
// }

console.log(user.greetings())  // returned undefined because the function is not returning anything