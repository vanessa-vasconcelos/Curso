let num1 = 0.7;
const num2 = 0.1;

//console.log(num1.toString() + num2) // vai concatenar os dois
//console.log(typeof num1); // o num1 continua sendo um numero
//num1 = num1.toString // aqui ele converte o num1 em string
//console.log(num1.toString(2)); // Representação em binário
//console.log(num1.toFixed(2)); // quantas casas decimais eu quero
//console.log(Number.isInteger(num1)); // para saber se o número é inteiro ou não

//let temp = num1 * 'Olá'
//console.log(Number.isNaN(temp)); // ele vai dizer se sua conta é válida ou não

num1 += num2; // o valor da 0.79 e não 0.8
console.log(num1)
num1 += num2;
num1 += num2;
num1 += num2;
//     Number - pode usar um dos dois
num1 = parseFloat(num1.toFixed(2)); // Transforma o número inteiro
console.log(num1);
console.log(Number.isInteger(num1));
