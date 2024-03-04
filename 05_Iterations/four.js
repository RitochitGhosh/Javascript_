const coding = ["js", "cpp", "c", "java", "python"];

// Way 1:
coding.forEach( function (item) {
    console.log(`${item} is a computer language`);
} )


//Way 2:
coding.forEach( (item) => {     // Arrow Function
    console.log(item);
})


//Way 3:
function print(item){
    console.log(item);
}
coding.forEach(print);

coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
})