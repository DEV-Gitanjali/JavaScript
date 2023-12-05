// this code for arrays

let marks=[12,45,67,false,"not present"]

console.log(marks)
console.log(marks[0])
console.log(marks[1])
console.log(marks[2])
console.log(marks[3])
console.log(marks[4])
// console.log(marks[5])will bw undefined because index 6 and 5 does not exist
console.log(marks[6]) 

console.log("the length of marks", marks.length)

marks[6]=98   //adding a new value  to the array 
marks[0]=90  //changing the value of an array

console.log(marks)

console.log(typeof marks)
