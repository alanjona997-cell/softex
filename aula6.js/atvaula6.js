let readline = require(`readline-sync`)

let acolhimento = readline.question ("ola, para iniciarmos as operacoes precisamos que preencha os campos a seguir:")
console.log

let numero1 = readline.question("qual o primeiro numero")

let numero2 = readline.question ("qual o segundo numero")

let operação = readline.question ("digite a operacao (+, -, *, /):");


switch(operação){
    case "+":
        console.log(`Resultado: ${Number (numero1) + Number (numero2)}`)
        break;
    case "-":
        console.log(`Resultado: ${numero1 - numero2}`)
        break;
    case "*":
        console.log(`Resultado: ${numero1 * numero2}`)
        break;
    case "/":
        console.log(`Resultado: ${numero1 / numero2}`)

    default:
        console.log("Não compreendi")
}


