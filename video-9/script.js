let a = prompt('Enter a number: ')
a = Number.parseInt(a);
let sum = 0;
for (let i = 0; i < a; i++) {
    console.log(i);
    sum += i
}
console.log(sum)



let obj = {
    harry : 40,
    aninda : 89,
    nila: 55,
    subham: 33,
    akatsuki: 99
}


// calculate oject length 
let obj_length = Object.keys(obj).length
console.log(obj_length)


for (let x in obj){
    console.log(x)
    console.log(obj[x])
}


for (y of 'Hacking'){
    console.log(y)
}