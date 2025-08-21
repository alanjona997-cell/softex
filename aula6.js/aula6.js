let readline = require(`readline-sync`)

let nome = readline.question ("qual o seu nome?")

switch(nome){
    case "alan":
        console.log("o seu nome é alan")
        break;
    case "Alan":
        console.log("eu to aqui")
        break;
    case "ALAN":
        console.log("EU TO AQUI!")
        break;
    default:
        console.log("eu n conheço")
}