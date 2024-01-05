//Object 
const mysym = Symbol("key"); //If you want to use Symbol you must declare it first outside
const jsUser ={
    name: "Ritochit",
    "fullname": "Ritochit Ghosh",
    age: 19,
    location: "Kolkata",
    email: "ritochit@gmail.com",
    [mysym]: Symbol("key1"),
    isLoggedIn: true,
};

 //One way to access an object 
 console.log(jsUser.name); //"fullname" element cannot be accessed using this method

 //Another way to access an object 
 console.log(jsUser["age"]); //This method is recommended // " " irrespective of any datatype

 console.log(jsUser["fullname"]);
 console.log(jsUser[mysym]);

 //changing any declared value 
 jsUser["email"] = "ritochit@microsoft.com"
 console.log(jsUser["email"]);

 //Locking an object

// Object.freeze(jsUser);  //*** */

 jsUser["email"] = "rivu@microsoft.com";
 console.log(jsUser);

 //Adding function as an element inside object
 jsUser.greetings = function() {
    console.log(`Hello, ${this.name}. Good Evening`);    //***  */
 }
 //Cannot be updated if the object is freezed

