

let  a = prompt("hey what you age ?");
a=Number.parseInt(a);

console.log(typeof a);

if(a<0){
    alert("this is valid age")
}

else if(a<9)
{
    alert("you are a kid and you cannot even think of driving");
}

else{
    alert("you can now drive as you are above 18");
}

console.log("done")

