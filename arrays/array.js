let series = ["stranger things", "breaking bad", "agente noturno"]

// Jeito mais comum

let animes = new Array("spyxfamily", "One Piece", "Demon Slayer", "Jujutsu Kaisen");

//também funciona mas é menos utilizado


//Acessando Elementos de um Array:

let primeiraSerie = series[0];

//stranger things

let anime = animes[-1];

// undefined, não rola

console.log(primeiraSerie);

console.log(anime)

/*
### Métodos de Arrays:

**Push**: Pra colocar alguém no final da lista, usa `push` . ↓
 */

series.push("Prison Break")
console.log(series)

/*
Pop: Pra mandar o último da lista embora, usa pop . ↓
*/

series.pop();
console.log(series)

/*
Shift: Se quiser tirar o primeiro da lista, o lance é shift.
*/

series.shift();
console.log(series)

/*
Unshift: E se a ideia é adicionar alguém no começo da lista, usa unshift.
*/

series.unshift("the wicther");
console.log(series);

/*
Alterando Elementos do Array: Se você quer mudar alguém que já tá na lista,
 é só chegar no índice dele e trocar.
*/

let games = ["fifa", "devil may cry", "uncharted"];

games[0] = "FIFA 25"
//agora fifa vira FIFA25
console.log(games)

let totalSeries = series.length
//vai dizer quantos elementos estão no array
console.log(totalSeries)

/*
Percorrendo um Array com Loop: Às vezes, você vai querer falar com cada um da fila.
 Para isso, usa um loop, como o for.
*/

for(let i = 0; i < games.length; i++) {
    console.log(games[i]) //mostra cada jogo
}