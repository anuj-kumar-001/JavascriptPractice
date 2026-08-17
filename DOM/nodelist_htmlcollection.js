// both nodelist and htmlcollection are arraylike collections of dom elements/nodes
// returned by certain dom methods  they look like arrays but they are not actual js arrays

// htmlcollection -- contains html elements only ,, get element by classname returns htmlcollection
// NodeList -- collection of dom nodes,, node list returned by queryselector supports foreach();


// const nodelist=document.querySelectorAll('li');
// nodelist.forEach( (val)=> {
//     val.style.color="green"
//     val.style.padding="23px"
// })

// reflects on all the nodes of the list