//date
let myDate=new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toJSON())

// customized date 
let myCreatedDate=new Date(2023,0,14)
let myCreatedDate2=new Date(2023,1,15,3,5)
let myCreatedDate3=new Date("01-14-2012")   // to get dd/mm//yy we have to declear like this mm/dd/yy 0r yy/mm/dd
let myCreatedDate4=new Date("2012-01-14")
// console.log(myCreatedDate.toLocaleString())
// console.log(myCreatedDate2.toLocaleString())
// console.log(myCreatedDate3.toLocaleString())
// console.log(myCreatedDate4.toLocaleString())

// Time stamps

let myTime=Date.now();   // This gives time in milisecond from an arbitrarty date decleared already
// console.log(myTime)
// console.log(myDate.getTime())
// console.log(Math.floor(myDate.getTime()/1000))   // This is the time in seconds

/* If we want specific date or month or year */
// console.log(myDate.getDate())
// console.log(myDate.getMonth())
// console.log(myDate.getFullYear())


/* Creating customizable Format */
 
 console.log( myDate.toLocaleString('default' ,{ weekday : "long"}))