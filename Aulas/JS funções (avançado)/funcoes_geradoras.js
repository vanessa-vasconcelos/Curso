function* gerador1() {
    // código qualquer...
    yield 'Valor 1';
    // código qualquer...
    yield 'Valor 2';
    // código qualquer...
    yield 'Valor 3';
}

const g1 = gerador1();

for(let valor of g1) {
    console.log(valor);
}

//mostrar o valor
// console.log(g1.next().value)
// console.log(g1.next().value)
// console.log(g1.next().value)
//mostra os 3 valores


function* gerador2() {
    yield 0;
    yield 1;
    yield 2;
}

function* gerador3() {
    yield* gerador2();
    yield 3;
    yield 4;
    yield 5;
} 

const g3 = gerador3();
for(let valor of g3) {
    console.log(valor);
}

function* gerador4() {
    yield function() {
        console.log('Vim do y1');
    };

    //...

    yield function() {
            console.log('Vim do y2')
    };
};

const g4 = gerador4();
const func1 = g4.next().value;
const func2 = g4.next().value;
func1();
func2();