
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

//nomes.splice(indice, quant. elementos a deletar, quais elementos)
//pop
// const removidos1 = nomes.splice(-2, Number.MAX_VALUE); // vai até o valor max. do array
// const adiciona = nomes.splice(3, 0,'luiz'); // adiciona a string no indice 2 e os resto vai para frente
// const adiciona = nomes.splice(3, 2,'luiz', 'otavio'); // troca o valor no ondice indicado
// const removidos = nomes.splice(3,2); // elimina do array
// console.log(nomes, adiciona)

//pop simulado
// const removidos = nomes.splice(-1, 1); //removi
// console.log(removidos)

//shift simulado
// const removido = nomes.splice(0, 1);
// console.log(removido);

// push simulado
// nomes.splice(nomes.length, 0, 'Luiz'); // adiciona no final
// console.log(nomes);


//unshift simulado
nomes.splice(0, 0, 'Sabrina', 'Nazare', 'Vanessa');
console.log(nomes);