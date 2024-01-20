
//Program to print the biggest number in an array

const numArray = [352,684,786,686,655,948,847,878,978,445,148];
let max_element = numArray[0];
for(let i = 0; i < numArray.length; i++){
    if(numArray[i] > max_element){
        max_element = numArray[i];
    }
}
console.log("Maximum number = ",max_element);