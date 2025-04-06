/*
Loop for: É o cara quando você sabe quantas vezes quer rodar algo. Tipo, "faz isso aqui 10 vezes".
*/

for(let i = 0; i < 11; i++) {
    console.log(i)
}

/*
Loop while: Esse aqui é mais quando você tá naquela de "vou fazer isso até algo acontecer".
Mas cuidado, se não botar um jeito de parar, vira festa sem hora pra acabar.
*/

let i = 0; while (i < 10) {
    console.log(i); i++
}

/*
Loop do...while: Parecido com o while, mas a diferença
é que ele executa pelo menos uma vez, mesmo que a condição já comece falsa.

let i = 0;
do {
	console.log(i); i++;
} while (i < 10);
*/

/*
Loop for...of: Esse é pra quando você tem um array ou algo iterável e quer passar por cada elemento dele.
*/

let nomes =["Ana", "Aline", "Pedro"];

for (let nome of nomes) {
    console.log(nome); //mostra cada nome
}

/*
## **Controle de Loops**

`break`: Usado para sair de um loop antes que ele atinja sua condição de parada natural.

`continue`: Pula a iteração atual e continua com a próxima.
*/

for( let i = 0; i < 10; i++){
     if(i === 5) {
        break //Sai do loop quando i é 5
     }
     if(i % 2 === 0) {
        continue; //Pula os números pares
     }

     console.log(i);
}