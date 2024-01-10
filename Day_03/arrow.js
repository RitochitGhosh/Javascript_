const user = {
    userName:"Ritochit",
    price:2999,
    welcomeMessage: function() {
        console.log(`${this.userName}, Welcome to the course`); //this. is used to refer current context
        console.log(this)
    },
    age: 19
}
user.welcomeMessage();
user["userName"]  = "Aritra";
user.welcomeMessage();
console.log(this); // Current context is empty as it is running inside nod e but if we run it inside a browser it will give us window as the context...

//Finding out what is returned by this inside a function
function coffee(){
    console.log(this);
}
coffee();

//this only works inside object
function chai(){
    const username = "Rivu";
    console.log(this.username);
}
chai();

//Arrow Function Syntax
// () => {}
//Example:-
const addTwo = (num1, num2) => {
    return num1 + num2;
} //This is explicit return with arrow function
console.log(addTwo(12, 18));

//Implicit return with arrow function

const addtwo = (num1, num2) =>  (num1 + num2);

console.log(addtwo(38, 83));