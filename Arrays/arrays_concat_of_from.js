const ramayana=["ram","sita","hanuman","laxman"]
const mahabharat=["karn","arjun","kirsna","bhism"]


let treta=ramayana.concat(mahabharat)    // returns concatination of two array without modifying original array
// console.log(treta)   


ramayana.push(mahabharat)
// console.log(ramayana)

let treta2=[...ramayana,...mahabharat]  // spread is also used to concat two or more arrays and return concatinated array
// console.log(treta2)

const arr=[1,2,2,[6,7,9],0,7,[4,6,2,[8,1]]]
// // console.log(arr)

let concatArray=arr.flat(2)   //flat returns concatinated of a particular depth in the array we can paas depth in the fxn(Infinity)
// console.log(concatArray)


/*  isArray ,from ,of */

const sid=[12,56,84,24,78]
// console.log(Array.isArray("anuj"))  // checks wheather any object is array or not
// console.log(Array.from("anujkr"))    // converts an array from iterable object or arraylike object
// console.log(Array.from({name : "anujkr"}))   // we have to give input wheater we want arrays from keys or values ot it will retuen empty array


let n1=2
let n2=6
let n3=7
const arr2=Array.of(n1,n2,n3)
// console.log(arr2)