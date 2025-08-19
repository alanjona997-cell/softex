let readline = require(`readline-sync`)

let nome = readline.question ("qual o seu nome?")
console.log(`ola ${nome}`)

let anoNascimento = readline.question ("em que ano voce nasceu?")

let anoAtual = new Date().getFullYear();

let idade = anoAtual - anoNascimento

console.log("idade:",idade);

if(anoNascimento <= 2007){
    console.log("voce pode entrar, bem vindo")

}else{
    console.log("voce nao pode entrar, voce pode ser preso")
}

let name = readline.question ("Posso ajudar em algo mais?")
console.log(`Posso ajudar em algo mais? ${name}`)

if(name == "sim"){
    console.log("o que deseja?")

}else{
    console.log("tudo bem entao, estou a disposicao")
}

