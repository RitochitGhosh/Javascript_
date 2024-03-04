const arr = [1, 2, 3, 4, 5];
for (const iterator of arr) {
    console.log(iterator);
}
const greetings = "Hello!";
for (const greet of greetings) {
    if (greet == 'l') continue;
    console.log(greet);    
}

//Maps 
const map = new Map();
map.set("IN", "India");
map.set("USA", "Unitedd Statets of America");
map.set("UK", "United Kingdom");
map.set("AUS", "Australia");
map.set("IN", "India");
console.log(map);

// Iterating over map
for (const key of map) {
    console.log(key);
}
//If you don't want both the key values together as an array:-
for (const [key, values] of map) {
    console.log(key, ":-", values);
}

const myObj = {
    'game1': 'DLS',
    'game2': 'PES',
    'game3': 'BGMI',
    'game4': 'FIFA'
}

//It is not iteratable using forof loop... 

// for (const [key, values] of myObj) {
//     console.log(key, ":-", values);
// }

const myObj1 = {
    cpp: 'c++',
    js: 'javascript',
    ts: 'typescript',
    swift: 'swift by apple',
    py: 'python'
}

for (const key in myObj1) {
    console.log(key);
    console.log(myObj1[key]);
}

const programming = ["java", "javascript", "cpp", "c", "python"];
for (const key in programming) {
    //console.log(key); // 0 1 2 3 4
    console.log(programming[key]);
}         