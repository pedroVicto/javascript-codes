// Exercícios com loops:

/*
    Criando um loop: Crie um loop for que imprima números de 0 a 10.
*/

for(let i = 0; i < 11; i++) {
    console.log(i + "↓");
}

/*
Loop com condição: Crie um loop for que imprima somente números ímpares de 0 a 20.
*/

for(let i = 0; i < 20; i++) {
    if(i % 2 === 0) {
        continue;
    }
    console.log(i + "◘")
}

/* 
    Usando while: Crie um loop while que imprima números de 0 a 10.
*/

let i = 0;while(i < 11) {
    console.log(i);i++
}

/* 
Interrompendo um loop: Crie um loop for que imprima números de 0 a 100,
mas interrompa a execução quando chegar ao número 50.
*/

for(let i = 1; i < 101; i++) {
    if( i === 51) {
        break
    }
    console.log(i)
}

/*
Pulando uma iteração: Crie um loop for que imprima números de 0 a 20, mas pule a impressão do número 13.
*/

for(let i = 0; i < 21; i++) {

    if(i === 13) {
        continue
    }
    console.log(i)
}

/*
Iterando um Array: Crie um array de nomes e use um loop for...of para imprimir cada nome do array.
*/

let nomes = ["aline", "enila", "antonia"];
for( nome of nomes ) {
    console.log(nome)
}
