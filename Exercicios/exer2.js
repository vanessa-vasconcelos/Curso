const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 33;
const peso = 84;
const altura = 1.80;
let imc;
let anoDeNascimento;

imc = peso / (altura * altura);
anoDeNascimento = 2022 - idade;

console.log(nome, sobrenome, 'tem',idade, 'anos, pesa',84, 'kg');
console.log(`tem de ${altura} altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoDeNascimento}`);