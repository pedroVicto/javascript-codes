/*
`if` e `else`: É o básico do "se isso, então aquilo". Se a condição for verdadeira, rola uma coisa, 
se não, rola outra.

**Sintaxe básica:** ↓
*/

// Exemplo: ↓


/*
## **Encadeamento com Else If**

Às vezes, precisamos verificar várias condições. Aqui, `else if` entra em ação.
*/

let hora = 0;

if(hora >= 5 & hora <= 12) {
    console.log('Bom Dia!');
}   else if(hora > 12 & hora < 18) {
    console.log('Boa Tarde!');
} else if(hora === 0 || hora <= 5) {
    console.log('Boa Madrugada!');
} else {
    console.log('Boa Noite!');
}

/*
`switch` é utilizado quando você tem várias condições pra checar. Funciona tipo escolhendo um caminho baseado no valor de uma variável.

**Sintaxe Básica do Switch:**
*/

let corFavorita = 'Preto';

switch(corFavorita) {
    case 'Vermelho':
        console.log('Sua comida Favorita é vermelho');
        break;
    case 'Azul':
        console.log("Sua cor favorita é Azul");
        break;
    case 'Preto':
        console.log('Sua cor favorita é preto');
        break;
    
    default:
        console.log('cor não identificada')
    
}

/*
## **Exercícios com condicionais🔥**

**1) Classificação por Idade:** Escreva um programa que classifica uma pessoa em categorias de idade:
 'criança' (menos de 13 anos), 'adolescente' (entre 13 e 17 anos),
 'adulto' (entre 18 e 64 anos) e 'idoso' (65 anos ou mais). Use a estrutura `if/else/else if`.
*/

let idade = 70;

if(idade < 13) {
    console.log('Você é uma criança');
} else if(idade >= 13 & idade < 18) {
    console.log('Você é um adolescente');
} else if( idade > 18 & idade < 65) {
    console.log('Você é um adulto');
} else {
    console.log('Você é um idoso');
}

/*
2) Jogo de Adivinhação com Switch: Desenvolva um jogo simples de adivinhação onde o usuário
 tenta adivinhar um número
 entre 1 e 5. Use switch para verificar a escolha e imprimir se acertou ou não.
*/

let numero = 1;

switch(numero) {
    case 1:
        console.log('vc errou');
        break
    case 2:
        console.log('vc errou');
        break
    case 3:
        console.log('vc errou');
        break
    case 4:
        console.log('vc acertou!');
        break
    case 5:
        console.log('vc errou');
        break
}

/*
3) Avaliação de Notas: Crie um programa que, dada uma nota de um aluno,
 classifica a nota como 'Reprovado' (menos de 6),
 'Recuperação' (entre 6 e 7), ou 'Aprovado' (mais de 7). Use switch.
*/
 let nota = 8;

 switch(nota) {
    case nota < 6:
        console.log('vc está reprovado');
        break
    case nota < 6 & nota === 7:
        console.log('vc está de recuperação');
        break
    case nota > 7:
        console.log('vc passou de ano! boa férias');
        break 
 }
