// Practice Question 1

let marks = {
    naruto : 40,
    minato: 76,
    madara: 94,
    itachi: 100
}

console.log(marks)
// let x = Object.keys(marks)
// for (i in marks){
//     console.log(marks[i])
// }

for (let i = 0; i < Object.keys(marks).length; i++){
    console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])
}

let val = Object.values(marks)
console.log(val)




// example:
console.log(marks.naruto)
console.log(marks.ban)

// explain: Object.keys(marks)[i]
console.log(Object.keys(marks)[1])
console.log(Object.keys(marks)[2])
console.log(Object.keys(marks)[3])
console.log(Object.keys(marks)[0])


// explain: marks[Object.keys(marks)[i]]
console.log(marks['minato'])
console.log(marks['naruto'])




console.log("Question no 2")
// Practice Question 2
for (let key in marks){
    console.log("The marks of "+ key + " are " + marks[key])
}



// This is question number 3
// console.log("Questin no 3")
// let number = 5
// let uNum
// while(uNum != number){
//     uNum = prompt("Guess the number!")
//     console.log("Try again")
//     console.log('You entered', uNum)
// }
// console.log("You won the game")





// This is Question 4
console.log("This is Question 4")

const meen = (a ,b ,c , d) => {
    return (a + b + c + d) / 4
}

console.log(meen(40 ,70 ,80, 33))