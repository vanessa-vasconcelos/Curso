const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for(let numero of numeros) {
    
    if(numero === 2) {
        console.log('Pulei o numero 2'); 
        continue; // serve para a operação continuar, excluindo o número dois
        
    }
    console.log(numero)

    if(numero ===7) {
        console.log('7 encontrado, saindo...');
        break; // condição encontrada, ele encerra o laço de repetição
    }
}