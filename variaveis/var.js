// var: O vovô das variáveis. Era tipo o único jeito de declarar uma variável antigamente. 
// O lance é que ele é meio bagunçado, porque não se importa muito com onde você o declara. Pode criar umas paradas estranhas,
//  como você declarar ela dentro de uma função e acessar fora. 
// É tipo o cara que não respeita as regras de onde deve estar,
//  por isso você não vai estar utilizando var durante o andamento desse curso.

if (true) {
    var exemploVar = "var é global e bagunçado por isso não é tão utilizado mais"
}

console.log(exemploVar);

// Funciona mas é global pode ser declarado em qualque lugar.