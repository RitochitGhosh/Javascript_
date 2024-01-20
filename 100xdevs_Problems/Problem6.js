const allUsers =[{
    firstName : "Ritochit",
    isMale : true,
},
{
    firstName : "Antara",
    isMale : false,
},
{
    firstName : "Tamojit",
    isMale : true,
}]

for(let i = 0; i <allUsers.length; i++){
    if(allUsers[i]["isMale"] == true){
        console.log(allUsers[i]["firstName"]);
    }
}