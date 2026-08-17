/* Array declaration */

const sid=[892,893,894,895,896,897]
const sName=["anuj","ankit","anuska","arpita","shila"]

// console.log(sid)
// console.log(sName)
// console.log(typeof sid)

const myArray=new Array(3,4,6,2,6)
// console.log(myArray)

// console.log(sid.length)
// console.log(sid.slice(1,3))  // slice does not manipulate original array while splice manipulate original 
// console.log(sid)
// console.log(sid.splice(1,3))  // includes the range and cut this part from original array
// console.log(sid)


/*  includes or indexof fxn */
// console.log(sid.includes(895))       // returns boolean value if the element is present or not
// console.log(sName.indexOf("shila"))  // returns index of any element


/* push,pop,unshift,shift */

// console.log(sid.unshift(891)) //insert element at the start of the array and returns the new length of the array
// console.log(sid)
// console.log(sid.shift())   //removes the first element and returns it
// console.log(sid)

// sid.push(991)  // pushes element at the end of the array
// console.log(sid)
// sid.pop()
// console.log(sid) // removes element from the end of the array
