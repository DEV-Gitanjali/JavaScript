// map filter and reduced

// let arr=[12,34,56]

// let a= arr.map((value,index,array)=>{

//     return value + index
// })

// console.log(arr)

// // array filter method

// let arr2=[45,23,21,0,3,5]
// let a2=arr2.filter((a)=>{
//      return a<10
// })

// console.log(a2,)

// Array reduce method

let arr3=[1,2,3,4,5,2,1]

const reduce_func=(h1,h2)=>{
    return h1+h2
}

let newarr3=arr3.reduce(reduce_func)

console.log(newarr3)