// for each loop

let nameList=["anuj","golu","bholu"]

// nameList.forEach( function (val){ console.log(val)})      // use of normal function
// nameList.forEach((val)=>{console.log(val)})                 //use of arrow function




function printMe(item){
    console.log(item)
}
// nameList.forEach(printMe)   // we can pass the refrence of a function directly


let objectArr=[
    {
        name: "anuj",
        rollno :344
    },

    {
        name : " sonu ",
        rollno :990
    },
    {
        name : "sonali",
        rollno : 893
    }
]

// objectArr.forEach((item)=>{ console.log(item.rollno)})     // we can access elements inside an array of objects



// for each loop if we want to return something

const students = [
    { id: 1, name: "Anuj", age: 20, course: "CSE", marks: 85, city: "Ranchi", placed: false },
    { id: 2, name: "Rahul", age: 22, course: "ECE", marks: 72, city: "Delhi", placed: true },
    { id: 3, name: "Priya", age: 21, course: "CSE", marks: 91, city: "Patna", placed: true },
    { id: 4, name: "Aman", age: 19, course: "ME", marks: 65, city: "Ranchi", placed: false },
    { id: 5, name: "Sneha", age: 22, course: "CSE", marks: 78, city: "Delhi", placed: true },
    { id: 6, name: "Rohit", age: 20, course: "ECE", marks: 88, city: "Patna", placed: false },
    { id: 7, name: "Neha", age: 21, course: "CSE", marks: 95, city: "Ranchi", placed: true },
    { id: 8, name: "Karan", age: 23, course: "ME", marks: 69, city: "Delhi", placed: false },
    { id: 9, name: "Pooja", age: 20, course: "ECE", marks: 82, city: "Ranchi", placed: true },
    { id: 10, name: "Arjun", age: 22, course: "CSE", marks: 76, city: "Patna", placed: false }
];



// let data=[]
// students.forEach( (val)=> {         // better to use filter in such cases
//     if(val.city==='Ranchi'){
//         data.push(val)
//     }
// })
// console.log(data)


// map is used to transform every elemennts of array

let arr=[1,2,3,4,5,6]
let changedArray=arr.map( (val)=> val*10)  // changes the elements of array and returns them
// console.log(changedArray)