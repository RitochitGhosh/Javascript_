let score = 38;

//console.log(typeof score);
//console.log(typeof(score));

let newScore = "38";
//console.log(typeof newScore);

let valueInNumber = Number(newScore);
//console.log(typeof valueInNumber);

let anotherNumber = "183abc";
let thisIsNumber = Number(anotherNumber);
//console.log(typeof thisIsNumber);
//console.log(thisIsNumber);

let nullNumber = null;
//console.log(typeof nullNumber);
let nullInNumber = Number(nullNumber);
//console.log(typeof nullInNumber);
//console.log(nullInNumber);

let undefinedNumber = undefined;
//console.log(typeof undefinedNumber);
let undefinedInNumber = Number(undefinedNumber);
//console.log(typeof undefinedInNumber);
//console.log(undefinedInNumber);

let booleanValue = true;
let booleanInNumber = Number(booleanValue);
//console.log(booleanInNumber);

let number = 0;
let numberInBoolean = Boolean(number);
//console.log(numberInBoolean);

/* only 0 => false; other numbers => true;
   "" => false; "(any_string)"=> true; */

let someNumber = 12;
let numberInString = String(someNumber);
console.log(numberInString);
console.log(typeof numberInString);

