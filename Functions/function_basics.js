//  Function is reusable blocks of code that performs an specific task

// function addTwoNumbers(number1 , number2){   // Function with parameters
//     return number1 + number2;
// }

// let addition = addTwoNumbers(4,5)  // These are arguments , actual values passed to the function
// console.log(addition)


function userLogin(username){
    if( typeof username === "number"  || !username ){
        console.log("Enter a valid username")
        return
    }
    return console.log(`Hello ,${username} welcome to the jungle`)
}

userLogin(95)