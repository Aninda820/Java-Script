let arr = [32, 55, 22, 54, 123, 43, 'Itachi', 'Madara', 'Kakashi', 'Obito', 'Orochimaru']

console.log(arr)
console.log(typeof arr)



// Convert array into string
let arr_string = arr.toString()
console.log(arr_string)
console.log(typeof arr_string)



let c = arr.join('-') 
console.log(c)
console.log(typeof c)


//pop method

let d = arr.pop() // it dont return a new array, it mainly change the existing array, remove the last element of the array
console.log(d) //pop return the poped element

arr.pop()
console.log(arr)



console.log('example of push method') 
let n = arr.push(12)  //push returns the new array length, add the pushed element at the end of the array
console.log(arr, n) //it change the existing array



// Example of shift method
console.log("Example of Shift method")
let s = arr.shift() 
console.log(s) // it modify the original array, and it return the first element from the array




//Ecample of unshift method
let us = arr.unshift(343, 6565)
console.log(arr, us) // add the element add the first of the array, we can more then one number at a time, it modify the original array and return the unshift value