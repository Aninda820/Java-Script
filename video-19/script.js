let num = [34, 32, 43, 22, 54, 82, 23]

for (let i = 0; i < num.length; i++) {
    console.log(num[i])
}



// forEach loop
console.log("Example of forEach loop")
num.forEach((element) => {
    console.log(element * element)
})



// Array.from
console.log("Exmaple of Array.from")
let name1 = "Akatsuki"
let arr = Array.from(name1)  //it use to convarte a string into an Array
console.log(arr)



//For of
console.log("Exmaple of for-of") //it return values of an Array elements
for (let item of num) {
    console.log(item)
}


//for in
console.log("Exmaple of for-in") //it return keys of an Array elements
for(let i in num){
    console.log(num[i])
}
