console.log("hello")

let uname = prompt("Hey what's your name");
let age = prompt("Hey what's your age");
age = Number.parseInt(age) //convert string into number

console.log(uname)

if(age < 18){
    alert("You can't drive")
}else{
    alert("You can drive")
}
console.log(typeof age)



let x = prompt("Naruto, Minato, Kakasi");
switch (x) {
    case 'Naruto':
        console.log('7th Hukagey');
        break;
    case "Minato":
        console.log('4th Hukagey');
        break;
    case "Kakasi":
        console.log('6th Hukagey');
        break;
}