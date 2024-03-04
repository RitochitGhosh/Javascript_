//if
const isLoggedIn = true;
if(isLoggedIn){
    console.log("You are logged in");
}

// <, >, <=, >=, ==, !=, ===, !==

//if-else 
let temperature = 42;
if(temperature < 50){
    console.log("Temperature is less than 50");
}
else{
    console.log("Temperature is greater than 50");
}

//implicit scope for single line of code
const balance = 1000000;
if(balance < 500000) console.log("Balance is less than 500000");
else if(balance <900000){
    console.log("Balance is less than 900000");
}
else{
    console.log("Balance is less than 1200000");
}

// && - AND condition || - OR condition  => Logical operator

//switch case

const month = 3;
switch (month){
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    default:
        console.log("Any other month");

}

//falsy values: false, 0, -0, BigInt 0n, "", null, undefined, NaN
//truthy values: true, 1, "0", 'false', " ", [], {}, function(){} ->Empty Function

const emptyObj = {};
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

//Nullish Coalescing Operator (??): null undefined
let val1;
val1 = 5 ?? 10;
val1 = null ?? 10;
val1 = undefined ?? 15;

val1 = null ?? 5 ?? 15;

console.log(val1);

//Ternary Operator
//condition ? true : false
const price = 100;
price >= 80 ? console.log("More than 80") : console.log("Less tham 80");

