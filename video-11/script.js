let a = 3;
let b = 5;
let c = 4;


function onePulesAvg(a, b, c){
    console.log("Done")
    return 1+((a+b+c)/3)
}

console.log("Sum of", a , "+", b , "is:", a+b)
console.log("Avarage of a, b and c is: ", onePulesAvg(10 ,4, 1))



// arrow function 
const sum = (x, y) => {
    return x+y
}

console.log(sum(2 ,5))


const hello = () => {
    return "Hey how are you, I am too fine yaar"
}

console.log(hello())




const funcHI = () => {
    return 'Hi';
}

let ex = funcHI()
console.log(ex)