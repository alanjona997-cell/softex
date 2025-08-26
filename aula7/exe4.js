// Crie um array chamado numeros com pelo menos 10 números, misturando pares e ímpares (Exercício 4)

let numeros = ["3", "8", "9", "12", "15", "18", "21", "24", "27", "30"]

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) 
        console.log(`${numeros[i]} é par`);
    else   
        console.log(`${numeros[i]} é ímpar`);
  
    }