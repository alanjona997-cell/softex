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



