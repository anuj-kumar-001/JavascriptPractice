
let userName="Anuj Kumar"
console.log(userName[1])

const userEmail=new String("anuj@gmail.com")//run in console and type userEmail to see all string functions

console.log(userEmail.charAt(3))
console.log(userEmail.indexOf('@'))
console.log(userEmail.substring(0,4))
console.log(userEmail.substring(4))
console.log(userEmail.length)
console.log(userEmail.__proto__)

let userHobby="   playing guitar  "
console.log(userHobby.trim())

console.log(userHobby.trim().replace("guitar" , "dsa"))

console.log(userEmail.includes("gmail.com"))
console.log(userEmail.includes('anuska'))

console.log("myname is " + "anuj kumar " + "and my id is " + "892")
console.log(`my name is ${"anuj kummar"} and my id is ${892}`)// modern way to use added strings