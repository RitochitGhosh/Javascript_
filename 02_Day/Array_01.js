//Declaring Array explicitly
const myArr = new Array(10,20,30,40,50);
console.log(myArr);

//normal way of declaring an array
const newArr = [0,1,2,3,4,5];
console.log(newArr);

//Accessing individual elements with their index number
console.log(myArr[4]);

//Checking the index of specific element
console.log(myArr.indexOf(40));

//Adding element in the array in last position
newArr.push(6);
console.log(newArr);

//Removing element from last
newArr.pop();
console.log(newArr);

//Adding element at the first
myArr.unshift(5);
console.log(myArr);

//Removing element from the first
myArr.shift();
console.log(myArr);

//Convert array into string;
const Arr = myArr.join();
console.log(Arr);
console.log(typeof Arr);

console.log("A ",myArr);
//splice & slice
//splice 
const myn1 = myArr.slice(1,4);
console.log(myn1);
console.log(myArr); //We can see that .slice() do not manipulate the original array

//splice
const myn2 = myArr.splice(1,4);
console.log(myn2);
console.log(myArr); //.splice() manipulates the original array




