// Global scope - A variable declared outside of any function or block is called global scope/global variable.
// Global scope can be accessed from anywhere

// let name = "Anuj";   // Global variable

// function greet() {
//     console.log(name);
// }

// greet();
// console.log(name);

// Local scope - A variable declared inside a function or block , it can not be accessed from outside

// function greet() {
//     let message = "Hello";
//     console.log(message);
// }

// greet();
// console.log(message);

// Block scope - variables declared with let or const inside {} ; accessible only inside that block
// var is function scope it can be declared from anywhere


// let name1="sita"
// const name2="gita"
// var name3="sujata"
if(true){
    let name1 ="anuj"
    var name3="kumar"
    const name2="singh"
}



// console.log(name1)
// console.log(name2)
console.log(name3)