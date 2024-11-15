//Spread Operator is used to combine one array in to one

// let x=[1,2,3,4,5,6]
// let y=[...x, 88,99]
// console.log(y); //here x array is added into some of values of y


// without spread operator
let x=[1,2,3,4]
let y=[x,5,86]
console.log(y); //this output shows that it contains 2 diff arrays 



let z=y.flat() //this flat is used to flat two diff arrays in to one 
console.log(z);


let zz=z.flatMap(x=>[x,x*10])
console.log(zz); //here flatmap used to multiply by arrow function and x is parametre and x,x*10 as argument
