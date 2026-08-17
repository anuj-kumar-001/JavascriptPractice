
// map is used to transform every elemennts of array

let arr=[1,2,3,4,5,6]
let changedArray=arr.map( (val)=> val*10)  // changes the elements of array and returns them
// console.log(changedArray)


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


// we can use chaining to apply multiple methods

// let names=students
//                   .map( (val)=> val.marks*10)
//                   .filter( (num)=> num>800)

let names= students 
                    .filter( (m)=> m.marks > 70)
                    .map( (val)=> val.name)

console.log(names)