const num1 = Number(prompt("Digite um número: ")); 
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = num1;
texto.innerHTML = '';   
texto.innerHTML += `<p>A raiz quadrada é: ${num1 **0.5}.</p>`;
texto.innerHTML += `<p>${num1} é inteiro: ${Number.isInteger(num1)}.</p>`;
texto.innerHTML += `<p>É NaN: ${Number.isNaN(num1)}.</p>`;
texto.innerHTML += `<p>Arredondado para baixo: ${Math.floor(num1)}.</p>`;
texto.innerHTML += `<p>Arrendondqdo para cima: ${Math.ceil(num1)}.</p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${num1.toFixed(2)}.</p>`;

