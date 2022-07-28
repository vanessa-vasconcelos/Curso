// Função recursiva é uma função que se chama de volta

function recursiva(max) {
    console.log(max);
    if(max >= 100) return;
    max++;
    recursiva(max);
}

recursiva(0)