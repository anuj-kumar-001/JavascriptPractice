//primitive data types

let userId=892;  //number
let userName="anuj kumar" //string
let isIntern=false // bollean
let userEmail; //undefined- A variable which is decleared but not assigned
let phoneNumber=null; //null- empty value 

let id1= Symbol("id")
let id2= Symbol("id")
console.log(id1===id2)

console.log(typeof userName)
console.log(typeof isIntern)
console.log(typeof userEmail)
console.log(typeof phoneNumber)

//Non-primitive data types : array  , object , function

let students=["ram","lakhan","janak"];


const student_details={
     studentName : "janak",
     studentId : 345,
     studentCourse : "Btech"

}
console.log(student_details.studentName)


function MyFunction(){
    console.log("hello world")
}
MyFunction();


                /*  Stack and heap Memory */

//  All primitive data types are given stack memory(pass by value)  : A copy is generated when we call the data types again
//  All none-primitive data types are given Heap memory(pass by refrence)  : Address refrence is passed when we call the data types agian

let anujHeight=5;
let userHeight = anujHeight;
userheight=6;
console.log(anujHeight)
console.log(userHeight)

// Heap memory allocation in object

let userOne={
    userEmail : "anuj@gmail.com",
    userId : 892

}
let userTwo=userOne;
userTwo.userEmail="rekha@gmail.com"
console.log(userOne.userEmail)
console.log(userTwo.userEmail)