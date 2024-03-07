if (true) {
    const a = 10;
    let b = 20;
    var c = 30;
}

// console.log(a); //Compilation error due to block-scoped nature of const variable
// console.log(b); //Compilation error due to block-scoped nature of let variable
console.log(c);

function one() {
    const userName = "Ritochit";
    function two() {
        const website = "YouTube";
        console.log(userName);
    }
    // console.log(website); //scope of website variable is limited within fuction two
    two();
}
one();
//SCOPE
// The term "scope" refers to the region of a program where a particular identifier, such as a variable or a function, is recognized and can be used. Scopes help manage the visibility and accessibility of these identifiers within the code. There are mainly two types of scopes:

//Global Scope:

// Variables and functions declared in the global scope are accessible throughout the entire program.
// They are defined outside of any specific function or block of code.

// Local Scope:

// Variables and functions declared within a specific block or function have local scope.
// They are only accessible within that block or function.

//------------Two Types of syntaxes and their difference in scope-------------------

//I.  
console.log(addOne(567));
function addOne(num) {
    return num + 1;
}
//In this method addOne can be accessed befor eits initialization

//II.
// console.log(addTwo(567)); //Cannot access 'addTwo' before initialization
const addTwo = function(num) {
    return num + 2;
}
console.log(addTwo(567));