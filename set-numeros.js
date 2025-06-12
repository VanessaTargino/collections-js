const leia = require('readline-sync');

const numeros = new Set(); // igual array, mas não aceita dados repetidos

console.log("Digite 10 números inteiros (sem repetir):");

while (numeros.size < 10) { //Inicia um laço de repetição que continua até o Set ter 10 números diferentes.

    const numero = leia.questionInt(`Digite o ${numeros.size + 1}º número: `);

    if (isNaN(numero)) { // isNaN() verifica se o valor não é um número válido.
        console.log("Valor inválido. Digite um número inteiro.");
        continue;
    }

    if (numeros.has(numero)) { //Verifica se o número já foi digitado com .has().
        console.log("Número repetido! Tente outro.");
    } else {
        numeros.add(numero);
    }
}

console.log("\n Números inseridos no Set:");
for (let num of numeros) {
    console.log(num);
}

// 
// | O valor **não é um número válido (NaN)**       | `isNaN(valor)` |
// | O valor **é igual a um número específico**     | `valor === 5`  |
// | O valor **não é igual a um número específico** | `valor !== 5`  |
