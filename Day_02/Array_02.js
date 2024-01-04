const indPlayers = ['Dhoni', 'Kohli', 'Shami'];
const ausPlayers = ["Warner", "Maxwel", "Starc"];

indPlayers.push(ausPlayers); //joining both the string arrays
console.log(indPlayers);
//Arrays in js push any value as it is without checking its datatype
indPlayers.pop(); //As the ausPlayers is considered as the last element with index no. 4 it is poppped out

//There are 2 ways to join two arrays
//Concat
const allPlayers = indPlayers.concat(ausPlayers);
console.log(allPlayers);

//Spread
const newPlayers = [...indPlayers, ...ausPlayers]; //This menthod is recommended as this can be used to concat more than two arrays
console.log(newPlayers);

//.flat(depth) function
const complexArr = [1, 2, 3, [4, 5, 6], 7, [8, 6, [3, 9]]];
console.log(complexArr.flat(Infinity));

console.log(Array.isArray("Ritochit"));
console.log(Array.from("Ritochit"));

let e1 = 78;
let e2 = 14;
let e3 = 98;
console.log(Array.of(e1, e2, e3));//Array.of(elments)

