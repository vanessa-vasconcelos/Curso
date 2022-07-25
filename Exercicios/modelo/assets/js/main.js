const formulario = document.querySelector('.formulário');
const resultado = document.querySelector('.resultado');
const inputPeso = formulario.querySelector('#input-peso');
const inputAltura = formulario.querySelector('#input-altura');

formulario.addEventListener('submit', enviarDados);
console.log(formulario)

function enviarDados(evento) {
    evento.preventDefault();
    
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    
    if(!peso) {
        setResultado('Peso Invalido', false);
        return;
    }
    if(!altura) {
        setResultado('Altura Inválida', false);
        return;
        
    }

    const imc = calculaIMC(peso, altura);
    const nivelImc = condicaoImc(imc);

    const msg = `Seu Imc é ${imc} (${nivelImc})`;

    setResultado(msg, true)

}


function calculaIMC(peso, altura) {
    const imc = peso / altura**2;
    return imc.toFixed(2);
}

function setResultado(msg, isValid) {
    resultado.innerHTML = '';
    
    const p = criarP();

    if(isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
}

function criarP() {
    const p = document.createElement('p');
    return p;
}


function condicaoImc(imc) {
    const nivel = ['Abaixo do peso', 'Peso Normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc < 18.5) {
        return nivel[0];
    }
    if (imc >= 18.5 && imc <= 24.9) {
        return nivel[1];
    } 
    if (imc >= 25 && imc <= 29.9) {
        return nivel[2];
    }
    if (imc >= 30 && imc <= 34.9) {
        return nivel[3];
    } else if (imc >= 35 && imc <= 39.9) {
        return nivel[4];
    } else if (imc >= 40) {
        return nivel[5];
    }

}