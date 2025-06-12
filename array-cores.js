const leia = require ('readline-sync');

let cores = [];

for (let i = 0; i < 5; i++) {
    const cor = leia.question(`Digite a  ${i + 1}ª cor: `);
    cores.push(cor);
}

console.log("\nTodas as cores digitadas:");
cores.forEach(cor => console.log(cor));

// Mostrar as cores ordenadas
console.log("\nCores em ordem crescente:");
let coresOrdenadas = [...cores].sort(); // cópia do array original
coresOrdenadas.forEach(cor => console.log(cor)); // percorre todo o array e imprimi linha a linha