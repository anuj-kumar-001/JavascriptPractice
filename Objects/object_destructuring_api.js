// Destructuring extract properties from objects and assign them to variables in a concise way
// without destructuring  we have to access each value separately

const user = {
    name: "Anuj Kumar",
    age: 20,
    branch: "CSE"
};

// without destructuring 

// const name=user.name;
// const age=user.age;
// const branch=user.branch;
// console.log(name,age,branch)

// with destructuring

const {name,age,branch} = user
console.log(name,age,branch)

// if we want different names for calling

const {name : n} = user
console.log(n)

const {name : na , age :a} = user
console.log(na,a)
