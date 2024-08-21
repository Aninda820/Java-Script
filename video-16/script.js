// Arrays are mutable array can be change 

let rating_char = [88, 33 ,74, 99, 72, 54, 88, "Naruto", "Madara", false]
console.log(typeof rating_char)
console.log(rating_char)

console.log(rating_char[0])
console.log(rating_char[1])
console.log(rating_char[2])
console.log(rating_char[3])
console.log(rating_char[4])


console.log("The langth of the array is: ",rating_char.length)


// change the array vlaues:
rating_char[6] = 112  // Adding a new value to the array
rating_char[0] = 200 // changing the value of an array
console.log(rating_char)


console.log("Print the array elements using for loop")
for (let i = 0; i < rating_char.length; i++){
    console.log(rating_char[i])
}