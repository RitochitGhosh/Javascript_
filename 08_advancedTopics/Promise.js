```
BASIC PROMISE CREATION & CONSUMPTION
```
const promiseOne = new Promise(function(resolve, reject){
    //Async task
    //DB Calls, Cryptography, Network 
    setTimeout(function(){
        console.log("Async task is complete");
        resolve();
    },2000)
    
});
promiseOne.then(function (){
    console.log("Promise consumed");
})

```
Directly using promise

```

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve();
    },2000)
}).then(function(){
    console.log("Async 2 resolved");
})


// Resolving promise
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({
            username: "Ritochit Ghosh",
            email: "arbitrary@example.com"
        })
    }, 2000)
})
promiseThree.then(function(user){
    console.log(user);
})


//Error handling using try, catch
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({
                username: "Ritochit Ghosh",
                email: "arbitrary@example.com"
            })
        }
        else{
            reject('ERROR: Something went wrong!')
        }
    },2000)
})
promiseFour
.then((user)=>{
    console.log(user);
    return user.username;
})
.then((username) => {
    console.log(username);
})
.catch((err) => {
    console.log(err);
})
.finally(() => {
    console.log("The promise is either resolved or rejected");
})


//async-await syntax
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({
                username: "Ritochit Ghosh",
                email: "arbitrary@example.com"
            })
        }
        else{
            reject('ERROR: Something went wrong!')
        }
    },2000)
})
async function counsumePromiseFive(){
    try{
        const response = await promiseFive;
        console.log(response);
    }
    catch(err){
        console.log(err);
    }
}
counsumePromiseFive();


//fetching json using async-await syntax
async function getAllUsers() {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const data = await response.json()
        console.log(data);
    }catch(E){
        console.log("Err:", E);
    }
}
getAllUsers();


//fetching json using .then syntax
fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json();
})
.then((data) => console.log(data))
.catch((error) => console.log(error))