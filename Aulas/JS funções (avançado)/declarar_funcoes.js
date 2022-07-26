//Declaração de função (Function hoisting)
falaOi();
function falaOi() {
    console.log('Oi');
} 

//Function expression
const souUmDado = function() {
    console.log('Sou um dado');
};
souUmDado();

//Arrow function 
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
};
funcaoArrow()