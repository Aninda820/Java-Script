let Name = "Akatsuki"

console.log(Name.length)

console.log(Name[0])
console.log(Name[1])
console.log(Name[2])
console.log(Name[3])
console.log(Name[4])
console.log(Name[5])
console.log(Name[6])
console.log(Name[7])


console.log("Another methods")

for (let i in Name){
    console.log(Name[i])
}


// Templates literals
let boy1 = "Kakashi"
let boy2 = "Obito"


let sentence = `${boy1} is friend of ${boy2}`
console.log(sentence)



// Escape Sequence Charactors
let fruit = 'Banana\'s'
console.log(fruit)