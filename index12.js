// arrays in loop

let num=[2,4,5,6,1]

// for(let i=0; i<num.length;i++)
// console.log(num[i])


// foreach loop
num.forEach(element => {

    console.log(element*element)
    
});

// Array form

let name="subha"
let arr=Array.from(name)
console.log(arr)

// for of

for(let item of num)
{
    console.log(item)
}

// for ...in

for(let i in num)
{
    console.log(num[1])
}