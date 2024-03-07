const newNumber = 18;
const anotherNumber = new Number(12);
console.log(newNumber);
console.log(anotherNumber);

const decimalNumber = 48.4769;
console.log(decimalNumber.toFixed(2));
console.log(decimalNumber.toPrecision(2));

const Salary = 5460000;
console.log(Salary.toLocaleString());
console.log(Salary.toLocaleString('en-IN'));

console.log(Math.abs(-18));
console.log(Math.round(64.6541));
console.log(Math.ceil(87.58));
console.log(Math.floor(36.52));

console.log(Math.min(458,89,561,548,547,74));
console.log(Math.max(458,89,561,548,547,74));

console.log(Math.random());
console.log(Math.floor((Math.random()*10) + 1));

const min = 1;
const max = 100;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);

