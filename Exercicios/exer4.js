let varA = 'a'; //b
let varB = 'b'; //c
let varC = 'c'; //a

const varATemp = varA

varA = varB;
varB = varC;
varC = varATemp;

console.log(varA, varB, varC);

 //OU

 let a = 'A'; //B
let b = 'B'; //C
let c = 'C'; //A

const letras = [b, c, a];
[a, b, c] = letras;
console.log(a, b, c);