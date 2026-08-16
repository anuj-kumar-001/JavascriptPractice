//  reduce is used to reduce the array into final single value

let arr=[1,2,3]
// let newNum=arr.reduce(function (accumulator,value){ return accumulator+value},0)
let newNum=arr.reduce((acc,val)=>acc+val , 0)       // zero is used as initial value of accumulator we can use any number
console.log(newNum)




const orders = [
    { id: 1, product: "Laptop", category: "Electronics", price: 55000, quantity: 1 },
    { id: 2, product: "Mouse", category: "Electronics", price: 800, quantity: 2 },
    { id: 3, product: "Keyboard", category: "Electronics", price: 1500, quantity: 1 },
    { id: 4, product: "T-Shirt", category: "Clothing", price: 700, quantity: 3 },
    { id: 5, product: "Shoes", category: "Clothing", price: 2500, quantity: 2 },
    { id: 6, product: "Book", category: "Education", price: 500, quantity: 4 },
    { id: 7, product: "Headphones", category: "Electronics", price: 3000, quantity: 1 },
    { id: 8, product: "Notebook", category: "Education", price: 100, quantity: 5 }
];



// finding the sum of all product prices

const totalPrice=orders.reduce( (acc,val)=> (acc+val.price) , 0)
console.log(totalPrice)

// finding total quantity of all products

const totalqty = orders.reduce( (acc, val)=> acc+val.quantity , 0)
console.log(totalqty)