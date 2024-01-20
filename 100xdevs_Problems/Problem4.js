
//Program that prints all the even numbers in an array

const nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
for (let i = 0; i < nums.length; i++){
    if(nums[i] % 2 == 0){
        console.log(nums[i]);
    }
}