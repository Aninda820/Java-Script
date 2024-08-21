let arr = [32, 84, 23, 87, 13, 93, 73]

// Array map method
// not modify the original Array
console.log("Array map method")
let a = arr.map((value, index, array)=>{
    console.log(value, index, array)
    return value + index
})
console.log(a)


// Array filter method
// not modify the original Array
console.log("Array filter method")
let arr1 = [32, 84, 23, 87, 13, 93, 73]
let n = arr1.filter((x)=>{
    return x < 50
})

console.log(n)



// Array Reduce method
console.log('Array Reduce method')
let anime = [23, 43, 53, 83, 92, 90, 72]
let diman = anime.reduce((naruto, saskey)=>{
    return naruto + saskey
})
console.log(diman)