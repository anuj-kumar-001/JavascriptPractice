let userId=123
let isLoggedIn=true// boolean variable
console.log(typeof userId)
console.log(userId)

//conversion from number to string
userId=String(userId)
console.log(typeof userId)
console.log(userId)

//conversion from boolean to number
isLoggedIn=Number(isLoggedIn)
console.log(typeof isLoggedIn)
console.log(isLoggedIn)



// we just use first letter capital to typecast any variable
//invalid conversion give NaN-not a number if we try to convert string into number

console.log("1"+2+2)
console.log(1+2+"2")