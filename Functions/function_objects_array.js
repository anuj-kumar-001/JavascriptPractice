// passing many arguments in the function

function addToCart(...val){    // It is also callled rest operator when used like this,, returns and array of all the values passed
    return val;
}
let item=addToCart(400,500,389);
console.log(item)

// passing objects to the fuction

const user={
    userName : "Anuj Kumar",
    userId : 892
}

function passingObject(anyObject){
    console.log(`username is ${anyObject.userName} and user id is ${anyObject.userId}`)
}
passingObject(user)

// passing any array to the function

const students=["anuj", " shila ", "munni" , "chunni"]

function arrayPassing(anyArray){
    console.log(anyArray[2])
}
arrayPassing(students)