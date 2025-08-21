let readline = require(`readline-sync`)

let nome = readline.question ("ola, qual o seu nome?")

let anoNascimento = readline.question ("qual a sua data de nascimento?")

let endereco = readline.question ("Onde você mora?")

let pergunta = readline.question ("qual a sua porofissao?")

let pergunta1 = readline.question ("atualmente voce trabalha na sua area?")

let pergunta2 = readline.question ("voce tem animal?")

let pergunta3 = readline.question ("Qual o seu plano para daqui a 10 anos?")



console.log(`-------------Formulário de ${nome}----------------`)
console.log(`Voce nasceu em ${anoNascimento}`)
console.log(`Voce mora em ${endereco}`)
console.log(`Você é ${pergunta}`)
console.log(`Atualmente você ${pergunta1} trabalha na area`)
console.log(`Sobre animais, você ${pergunta2}`)
console.log(`Seu plano para daqui a 10 anos é ${pergunta3}`)

