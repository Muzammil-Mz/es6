//used in function argument instead of defining the length of parameter whn you want to passs large no of values in arguments

// let name=(a)=>{
//     console.log(a);
// }
// name("hello","bye") //only hello as output isead of bye in 


let name=(...all)=>{
    console.log(all);

}
name("5",",68","557")