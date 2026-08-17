const user= new Object()
user.name="anuj kr"
user.id=892
user.branch="cse"
user.email="anuj@gmail.com"

const obj1={
    1 : "a",
    2 : "b",
    3 : "c"
}
const obj2={
    6 : "d",
    7 : "e",
    8 : "f"
}

// const obj3={obj1,obj2}   //This will make object of two objectss

// const obj3=Object.assign(obj1,obj2)  // This will actually concat the two objects
const obj3={...obj1,...obj2}            // spread_operator : This will also concat two objects as well as arrays so mostly we use this
// console.log(obj3)


console.log(user)
console.log(Object.keys(user))   // returns all the keys of the object in an array
console.log(Object.values(user))  // returns all the values of the object in an array
console.log(Object.entries(user))   // returns an array of key value pairs


console.log(user.hasOwnProperty('name'))  // returns wheather the object has the property with the specified name


const user=[     // array of objects this will come from the database
    {
        name : "anuj",    // we can access this objects will user[1].name
        id:892
    },
     {
        name : "anuj",
        id:892
    },
    {

    },
     {

    },
     {

    },
]