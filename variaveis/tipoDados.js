/*
String: Sabe aquele texto, frase, palavra?
 Isso é uma string. Tudo que fica entre aspas, pode ser simples ou duplas:
*/

let nome = "Javascript";
let frase = 'é muito bom';

/*
Number: Aqui é o mundo dos números. Não importa se é inteiro, decimal, positivo ou negativo.
 */

let idade = 17;
let pi = 3.14;

/*
Boolean: Só tem dois valores: true ou false. É o tipo "sim ou não" do JavaScript.
*/

let amoCodar = true
let odeioCodar = false

/*
Undefined: Tipo, quando você cria uma variável e 
não dá nenhum valor pra ela, ela fica undefined, ou seja, indefinida.
*/

let vazio; console.log(vazio); //vai retornar undefinaded

/*
Null: Parecido com undefined, mas aqui é quando
você quer deixar claro que a variável tá vazia, sem nada mesmo.
*/

let semValor = null;

/*
Object: Objeto é tipo uma coleção de dados. Pensa num pacote que tem várias coisas dentro,
cada coisa com seu nome
(vamos nos aprofundar em objetos mais para a frente).
*/

let pessoa = {
    nome: "dev",
    idade: 17,
    linguagemFavorita: "JavaScript" 
}

/*
Array: Array é uma lista de coisas, que podem ser números, strings, objetos, até outros arrays.
*/

let linguagens = ['java', 'javascript', 'python', 'typescript'];

/*
**Symbol:** É um tipo mais raro, usado para criar identificadores únicos.
Não é tão comum para iniciantes, mas é bom saber que existe.
*/

let id = Symbol('id')
