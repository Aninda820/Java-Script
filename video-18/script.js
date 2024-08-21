let num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let num_more = [11, 12, 13, 14, 15, 16, 17, 18, 19]
// console.log(num.length)
// delete num[0]
// console.log(num)



let newArray = num.concat(num_more)
console.log(newArray)


// sort method 
let a = [43, 64, 886, 23, 544, 77, 323]
a.sort()  // sort alfabatically like: 1 2 3 4 44 47 5  6 77 777, change the original array
console.log(a) 


//sort disending order
let x = [33, 53, 232, 754, 44, 27, 859, 212]

let compare = (a,b) => {
    return a - b
}

x.sort(compare)
console.log(x)




//reverce method
let rev_arr = [32, 55, 2323, 893, 784, 994, 90]
rev_arr.reverse()
console.log(rev_arr) // it reverce the hole array, and it modify the original array instade




// Splice
console.log("Splice method")

let number = [32, 55, 893, 675, 84, 33, 99]
let del_num = number.splice(2, 3, 2221, 2222, 2223, 3333) // (start length, number of item you wanna remove, what you wanna add)
console.log(del_num) //return the deleted item
console.log(number)


// Slice 
console.log("Slice method")

let number1 = [32, 55, 893, 675, 84, 33, 99]
let anothe_num = number1.slice(3, 5)
console.log(anothe_num) //it don't madify the original array


