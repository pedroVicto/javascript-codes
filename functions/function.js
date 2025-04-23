/*
## **O que São Funções?**

Pensa em funções como ferramentas que você cria para realizar tarefas específicas. 
No mundo da programação, elas ajudam a evitar repetições e tornam o código mais organizado e
 fácil de gerenciar.

## **Por que Usar Funções?**

Imagine ter que escrever o mesmo código várias vezes. Chato, né? Com funções,
 você escreve uma vez e chama essa função sempre que precisar.

## **Criando Funções em JavaScript 🧙🏻**

### **Definindo uma Função Simples**:

Aqui, criamos uma função chamada **`somar`**
 que pega dois números (**`num1`** e **`num2`**) e retorna a soma deles. A palavra **`return`**
 é usada para dar o resultado da função.
*/

function somar(num1, num2) {
    return num1 + num2
}

let resultado = somar(5, 5);
console.log(resultado);


/*
## **Parâmetros e Argumentos Explicados**🥷🏻

**Parâmetros vs. Argumentos**:

Os parâmetros são como placeholders que definem que tipo de valores a função espera receber. Já os argumentos são os valores reais passados para a função.

**Exemplo Prático**:↓
*/

function saudar(nome) {
    console.log("Olá " + nome)
}

saudar('Pedro')


/*
## **Arrow Functions**

As Arrow Functions, ou funções seta, são um jeito mais novo e mais elegante de escrever funções.
Elas são especialmente úteis para funções anônimas e curtas, vão ser muito úteis em um futuro próximo,
então é bom ter prática com isso.
*/

let soma = (a, b) => a + b;

/*
## Exercícios práticos🔥:

1. Função que Calcula a Área de um Retângulo:
 Crie uma função que calcula a área de um retângulo dado largura e altura.
*/

function calcArea(l, a) {
    return l * a;
}

let result = calcArea(5, 6);
console.log(result);


/*
Função para Verificar Número Par:
 Faça uma função que recebe um número e retorna true se for par e false se for ímpar.
*/

function verificarNum(num) {
    if( num % 2 === 0) {
        return true
    } else {
         return false
    }
}

let resulta = verificarNum(12);
console.log(resulta)

/* 
Converter Polegadas em Centímetros: Escreva uma função que converte polegadas em centímetros.
*/

function converterPolegada(p) {
    return p * 2.54
}

let res = converterPolegada(45);

console.log(res);


/*
IMC: Escreva uma função que calcula o Índice de Massa Corporal (IMC).
*/

function imc(m, a) {
    return m / (a * a)
}

let resultado1 = imc(80, 1.70)
console.log(resultado1)


/*
Crie uma arrow function chamada multiplicaPorDez
que recebe um número como parâmetro e retorna o valor multiplicado por 10.
*/

let multiplicaPorDez = (a) => a * 10;

let resultado2 = multiplicaPorDez(100)

console.log(resultado2);