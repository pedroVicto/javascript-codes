/*
# Desestruturação

## **O que é Desestruturação?**

Desestruturação é um recurso do ES6 que permite extrair dados de arrays
 ou propriedades de objetos em variáveis distintas de forma prática e direta.
 É como desempacotar uma caixa e colocar cada item em seu próprio lugar.

 Desestruturação de Arrays
*/

let numeros = [1, 2, 3];
let [primeiro, segundo, terceiro] = numeros;
console.log(primeiro, segundo, terceiro);


/*
Aqui, criamos um array numeros e, em seguida, usamos a desestruturação para criar três novas variáveis,
 cada uma recebendo um elemento do array.
 É uma maneira rápida de acessar itens individuais de um array.
*/

// Desestruturação de Objetos

let pessoa = {nome: 'João', idade: 25};
let {nome, idade} = pessoa;
console.log(nome, idade);

/*
## **Usos Práticos da Desestruturação**

A desestruturação é extremamente útil em várias situações,
 como ao trabalhar com funções, arrays, ou quando lidamos com dados mais complexos.

### **Em Funções**

*/

function exibirInfo() {
    console.log(`Nome: ${nome}, idade: ${idade}`)
}

exibirInfo(pessoa);

//Com Arrays Aninhados

let cores = [["vermelho", "azul"], ["verde", "Roxo"]];
let [primarias, secundarias] = cores;
console.log(primarias, secundarias);


// Exercícios

let frutas = ['maçã', 'banana', 'melão'];
let [primeira, segunda, terceira] = frutas;
console.log(primeira, segunda, terceira);

let carro = {modelo: 'sedan', cor: 'azul', marca: 'fiat'};
let {modelo, cor, marca} = carro;
function info() {
    console.log(`este carro é um ${modelo} de cor ${cor} da marca ${marca}`)
}

info();