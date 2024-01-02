const myName = "Ritochit Ghosh";
const anotherName = "Rivu";
const age = new Number(19);

console.log(`Hello my name is ${myName}, aka ${anotherName} and I am ${age} years old`);
console.log(myName.__proto__);
console.log(myName.bold());
console.log(myName.charAt(0));
console.log(myName.indexOf('R'));
console.log(myName.length);
const newName = "     Rivu     ";
console.log(newName.trimEnd());
console.log(newName.trim());

const url = "https://ritochit.com/ritochit%20ghosh";
console.log(url.replace("%20","-"));
console.log(url.includes("ritochit"));

console.log(myName.substring(0,7));
console.log(anotherName.slice(-1,2)); //Why .slice() is not working when I am giving -ve index? It should start from reverse order... If anyone can fix it help with it
console.log(url.split("/"));

console.log(anotherName.toUpperCase());
console.log(anotherName.toLowerCase());