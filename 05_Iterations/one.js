// for
let array = [1,2,3,4,5];
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element); 
}

for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} X ${j} => ${i*j}`);
    }   
    console.log("\n"); 
} 
//continue
for(let i = 1; i <= 20; i++){
    if(i % 2 != 0) continue;
    console.log(i);
    if(i == 10) break;
}