//destructuring accessing the array elemnts without index numebr

// let name=["audi","bmw","honda"]
// let [car1,car2,car3]=name
// console.log(car2); //output as bmw as we stored each array elemnt in a var in one time just destructured the array elements


let name=["audi","bmw","honda"]
let [car1,,car2]=name
console.log(car2);//output is honda