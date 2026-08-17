//  map is used to store unique key value pairs 

const map= new Map()
map.set('in', " india ")
map.set('fr' , "france")
map.set('pak', "pakistan")

// console.log(map)

for(const key of map){    // used to iterate through map
    // console.log(key)
} 
for(const [key,value] of map){  // this is used to print separate key value pairs of map
    // console.log(key, ":-" ,value)
}


// we can not iterate through objects through this loop

const myObject={
    name : "anuj kr",
    rollno : 948,
    branch : "cse"
}

// for(const key of myObject){   // This is wrong
//     // console.log(key)
// }

// we can use for in loop for iterating through objects

for(const key in myObject){
    // console.log(key)
    // console.log(`${key} is shortcut of ${myObject[key]}`)
}

// for of return value while for in loop return keys(for array)

let arr=["ram","shyam","sita"]
for(const key in arr){
    // console.log(key)
    // console.log(arr[key])
}

// for in loop can't be used to iterate through maps


