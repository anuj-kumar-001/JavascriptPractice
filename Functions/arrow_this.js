
// this refers to the same context

// const user ={
//     userName : "Anuj kr",
//     userId : 892,
//     branch : "cse",
  
//     welcomeMessage : function (){
//         // console.log(`${this.userName} , welcome to my website`)
//         console.log(this)
//     }
  
// }
// user.welcomeMessage()
// console.log(this)

// Arrow function  -  shorter way to write functions in js , handles this differently 

// function isLogged(){         //Normal function
//      let userName="anuj"
//      let isLoggedIn=false
//      console.log(this.userName)
// }
// isLogged()

const isLogged = () => {                          // Arrow function
     let userName="anuj"
     let isLoggedIn=false
     console.log(this.userName)
}
isLogged()


// const addition = (num1 , num2) => {return num1+num2}    // if we use curly bracets then write return
// const addition = (num1, num2)  => (num1 + num2)         // if we use parantheses then no need to write return  ( implicit return)
// const addition = (num1 , num2) => num1+num2                //  we can directly write like this too without parantheses
const addition = (num1 , num2) => ({username : "Anuj Kumar"})   // if we have to return object then we must use curly braces inside parantheses
console.log(addition(5,6))
