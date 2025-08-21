let readline = require(`readline-sync`)

let nome = readline.question ("qual o seu nome?")
console.log(`ola ${nome}`)

let anoNascimento = readline.question ("qual a sua data de nascimento?")
console.log(`você nasceu em ${anoNascimento}`)

let pergunta = readline.question ("você mora sozinho?")
console.log(`você: ${pergunta}`)

let pergunta2 = readline.question ("você tem animal?")
console.log(`você ${pergunta2} animal`)
