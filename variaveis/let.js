/*
 let: O "mano mais novo" do var. O let é mais organizado, sabe? 
 Ele respeita os limites do bloco onde foi declarado. Se você declara dentro de um if, 
 por exemplo, fora dele ninguém conhece. É tipo aquele amigo que só fica na dele, na sua área.
 */


//forma errada de fazer ↓
//if (true) {
    //let exemploLet = "sou vou rodar aq"
//}

//console.log(exemploLet)

//vai dar erro pois let não pode ser chamado fora da sua estrutura

//forma certa ↓

if (true) {
    let exemploLet = "dessa forma o let roda"
    
    console.log(exemploLet)

    exemploLet = "posso mudar"

    console.log(exemploLet)
}

// o let pode ser mudado diferente do const

//Regra de Nomenclatura 

//pode ↓
let _idade = 20;
let $dinheiro = "pouco";
let temDuvidas = "pode perguntar";

// não pode ↓

//let 1chance = "não pode";
// let minha trajetoria = "vai dar bug";

