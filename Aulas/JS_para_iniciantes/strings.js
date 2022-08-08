// let umaString = 'Um "texto"'  "Um 'texto'"  "Um \"texto\""
//               01234567
let umaString = "O rato roeu a roupa do rei de roma."

console.log(umaString[4])

//concatenação
console.log(umaString.concat(' em um lindo dia.')); // é a mesma coisa
console.log(umaString + ' em um lindo dia.');
console.log(`${umaString} em um lindo dia`);

//Para encontrar uma letra especifica
console.log(umaString.indexOf('t')); //ele vai dizer qual posição está essa letra

//                                Depois da posição 3, encontre o O
console.log(umaString.indexOf('o', 3))

// começa a buscar de trás para frente
console.log(umaString.lastIndexOf('o'));

//substituição de palavra
console.log(umaString.replace('r', '#'));

// substituir a mesma letras em varias palavras
console.log(umaString.replace(/r/g, '#'));

//Vê o tamanho da frase(quantas caracteries possui)
console.log(umaString.length); // ele inicia com 1

// Fatiar a palavra ou frase
console.log(umaString.slice(2, 6)); // de onde começa e um numero depois do que voce quer

// vai separar as frases eu letras 
console.log(umaString.split('r', 2)); // a quantidade q quero

// string toda em maiusculo
console.log(umaString.toUpperCase());
console.log(umaString.toLowerCase());