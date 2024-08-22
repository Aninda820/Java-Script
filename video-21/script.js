// Question no 1

let arr1 = [1, 2, 3, 4, 5, 6, 7]
let a = prompt("Enter a number")
a = Number.parseInt(a)
arr1.push(a)
console.log(arr1)



// Question no 2
//until you not enter 0, You can't exit the loop
let arr2 = [1, 2, 3, 4, 5, 6, 7]
let b
do{
b = prompt("Enter a number")
b = Number.parseInt(b)
arr2.push(b)
}while(b != 0);
console.log(b)



// Question no 3

let arr3 = [21, 200, 43, 54, 55, 60, 70]
let n = arr3.filter((x)=>{
    return x%10==0
})
console.log(n)



// Question no 4
let arr4 = [1, 2, 3, 4, 5, 6, 7]
let m = arr4.map((a)=>{
    return a*a
})
console.log(m)




// Question no 5
let arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let y = arr5.reduce((i,j)=>{
    return i*j
})
console.log(y)