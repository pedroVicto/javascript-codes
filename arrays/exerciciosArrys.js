/* Exercicio 1
Adicionando Elementos a um Array:
Declare um array chamado animais e adicione três nomes de animais usando o método push.
*/

let animais = [];

animais.push("gato");
animais.push("cachorro");
animais.push("peixe");

console.log(animais);

/* Exercicio 2
Removendo o Primeiro Elemento do Array:
A partir do array animais criado anteriormente, remova o primeiro
elemento usando shift e imprima o array modificado.
*/

animais.shift();
console.log(animais);

/*
Inserindo Elementos no Início do Array:
Utilize o método unshift para adicionar dois novos animais no início do array animais.
*/

animais.unshift("Leão", "Rato");

console.log(animais);

/*
Alterando Elementos Específicos do Array:
Mude o segundo elemento do array animais para "girafa".
*/

animais[1] = "Girafa";
console.log(animais);

/*
Usando Length para Contar Elementos:
Declare um array frutas e adicione algumas frutas a ele. Use length para imprimir
 o número total de frutas no array.
*/

let frutas = ["Maçã", "Banana", "Laranja"];
 let totalFrutas = frutas.length

console.log(totalFrutas);

/*
6. **Percorrendo um Array com Loop For**:
Utilize um loop **`for`** para percorrer o array **`frutas`** criado e imprimir cada fruta individualmente.
*/

for(let i = 0; i < frutas.length; i++ ) {
        console.log(frutas[i])
}