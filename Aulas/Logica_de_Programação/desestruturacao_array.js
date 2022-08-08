//...resto ...spread
// const numeros = [100, 200, 300, 400, 500, 600, 700, 800, 900];
// const [um, dois, tres] = numeros;  // Forma de pegar varios valores de uma vez em uma array
// console.log(um, dois, tres); 

// const numeros = [100, 200, 300, 400, 500, 600, 700, 800, 900];
// const [um, dois, tres, ...resto] = numeros;  // Forma de pegar em uma array
// console.log(um, dois, tres); 
// console.log(resto);

// const numeros = [100, 200, 300, 400, 500, 600, 700, 800, 900];
// const [um, , tres, , cinco] = numeros;  // Forma de pegar um valor especifico no array
// console.log(um, tres, cinco); 


//                     0          1           2
//                  0  1  2    0  1  2    0  1  2
const numeros = [ [ 1, 2, 3], [1, 2, 3], [1, 2, 3]];
const [lista1, lista2, lista3] = numeros;
console.log(lista3[2]);
