// É o if e else
// (condição) ? -valor para verdadeiro- : -valor para falso-
const pontuacaoUsuario = 1001;
const nivelUsuario = pontuacaoUsuario >=1000 ? 'Usuario VIP' : 'Usuario normal';

const corUsuario = "blue";
const corPadrao = corUsuario || 'Preta'; //uma condição ou a outra condição

console.log(nivelUsuario, corPadrao)