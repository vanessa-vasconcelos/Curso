// const nome = new Array('Eduardo', 'Maria', 'Sabrina');
//               0         1         2         3
// const nome = ['Maria', 'Cecilia', 'Diogo', 'Samanta'];
//                        -3        -2        -1
// Copia o valor de nome, mas se alterar algo em valor, não altera em nome
// const novo = [...nome]; 

// novo.pop();
// console.log(nome);
// console.log(novo);

// console.log(nome.length) // tamanho do array 
//                  inicia | um índices depois do que voce deseja ter
// const novo = nome.slice(1, 3) // ele fatia o array
// console.log(novo)

// const nome = 'Tamara Souza Nascimento';
// const nomes = nome.split(' '); // ele separa o nome com os espaços, nesse caso
// console.log(nomes)

const nome = [ 'Tamara', 'Souza', 'Nascimento' ];
const nomes = nome.join(' '); // ele uni a string pelo espaço, nesse caso
console.log(nomes)