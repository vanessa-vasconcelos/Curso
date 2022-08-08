// Object.assign => copiar objeto
const produto = {nome: 'Produto', preco: 1.8};
const caneca = Object.assign({}, produto, {material: 'porcelana'});
caneca.nome = 'Outro nome';
caneca.preco = 2.5;
// console.log(produto,caneca)

//Object.values => exibir somente o valor
const produto1 = {nome: 'Produto', preco: 1.8};
// console.log(Object.values(produto1));

//object.entries => ler os dois objetos em uma array
const produto2 = {nome: 'Produto', preco: 1.8};
// console.log(Object.entries(produto2))

for(let [chave, valor] of Object.entries(produto2)) {
    console.log(chave, valor)
}

