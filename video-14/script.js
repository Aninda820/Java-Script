let Name = "Akatsuki"
let frind_name = "Uzumaki"
console.log(Name.length)

console.log(Name.toLocaleUpperCase())  // Change  the string total upper case
console.log(Name.toLocaleLowerCase())  // change the total string total lower case

console.log(Name.slice(2,4))
console.log(Name.slice(2,))
console.log(Name.slice(0,5))


console.log(Name.replace('Akatsui', 'Uchiha')) //replace the string



console.log(Name.concat(" is a friend of ", frind_name, " Ok"))  // concat add all of the string tugather



//Trim method
let clan = "           Huga           "
console.log(clan)
console.log(clan.trim())   // it trim the start and end spaces