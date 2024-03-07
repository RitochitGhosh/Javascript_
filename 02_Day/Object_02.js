//Singleton Object - Objects created by Object constructor method
const ourAppUser = new Object();

console.log(ourAppUser);

ourAppUser.userId = "3453bcd";
ourAppUser.userName = "Hitesh Choudhary";
ourAppUser.userEmail = "hiteshch@gmail.com";
ourAppUser.fullName = new Object();

ourAppUser.fullName.nickName = "Unknown";
ourAppUser.fullName.originalName = new Object();

ourAppUser.fullName.originalName.firstName = "Hitesh";
ourAppUser.fullName.originalName.lastName = "Choudhury";

console.log(ourAppUser.fullName);
console.log(ourAppUser.fullName.originalName.firstName);

//Merging different Objects
const obj1 = { 1: 'a', 2: 'b'};
const obj2 = { 3: 'a', 4: 'b'};
const obj3 = { 5: 'a', 6: 'b'};

//Not recommended 
const collection1 = {obj1, obj2, obj3};
console.log(collection1);

//Classical Way
const collection2 = Object.assign({}, obj1, obj2, obj3); //{} is used as if obj1 was used without {} at the end (obj1 == collection2) => true
console.log(collection2);

//Best and latest way 
const collection3 = {...obj1, ...obj2, ...obj3};
console.log(collection3);


//Methods
console.log(Object.keys(ourAppUser));
console.log(Object.values(ourAppUser));
console.log(Object.entries(ourAppUser));
console.log(ourAppUser.hasOwnProperty('userId'));