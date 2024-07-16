console.log("While Loop and Do-While loop")

let x = prompt("Enter the value of x");
x = Number.parseInt(x);
let i = 0
while(i < x){
    console.log(i)
    i++
}


let j = 0
do{
    console.log(j)
    j++
}while(j < x)