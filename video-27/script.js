// alert("I'm really brocken from inside")

let a = prompt("Enter Your name here!")
alert(`You enter ${a}`)


let write = confirm("Do you wanna write it to page")
if(write){
    document.write(a)
}else{
    document.write("Please alow me to write")
}
