/*
# **Estrutura de Dados Map**

Map é uma daquelas ferramentas que podem fazer a diferença entre um código ok e um código top! Então,
se liga nesse tópico e bora aprender! 🚀

## **O que é um Map? 🤔**

Map é uma coleção de pares chave-valor. Diferente dos objetos, no Map, as chaves podem ser de qualquer tipo
- até objetos ou funções! Além disso, ele mantém a
ordem de inserção, o que pode ser mega útil em algumas situações.
*/

let meuMap = new Map()


meuMap.set('chave1', 'valor1');
meuMap.set('chave2', 'valor2');


/*
## **Acessando Elementos 🔍**

Agora, vamos ver como pegar valores de volta do nosso Map.

### **Exemplo de Acesso**
*/

console.log(meuMap.get('chave1'));


/*
## **Iterando sobre um Map 🔄**

Maps são iteráveis, então podemos percorrer eles de várias maneiras.

### **Exemplo de Iteração**
*/

for (let [chave, valor] of meuMap) {
    console.log(`${chave}: ${valor}`)
}

console.log(meuMap.size);
meuMap.delete('chave2');
console.log(meuMap.has('chave2'))

/*
- **`size`** nos mostra quantos pares chave-valor temos no Map.
- **`delete`** remove um par baseado na chave.
- **`has`** verifica se uma chave específica existe no Map.
*/

/*
## **Quando Usar um Map? 🧐**

Map é perfeito quando você precisa de uma coleção de pares chave-valor,
onde as chaves são únicas e podem ser de qualquer tipo. É uma escolha melhor que
objetos quando as chaves são desconhecidas até o tempo de execução,
ou quando todas as chaves são do mesmo tipo e os valores também.
*/

/*
## **Convertendo Map para Objetos e Arrays ↔️**

Às vezes, você pode querer converter seu Map em um objeto ou array.
*/

let mapParaObjeto = Object.fromEntries(meuMap)
console.log(mapParaObjeto)

let chavesArray = [...meuMap.keys()];
console.log(chavesArray);

/*
Object.fromEntries transforma o Map em um objeto.
Usando spread (...), pegamos todas as chaves ou valores do Map e colocamos em um array.
*/


/*
## Exercícios para Praticar:

1. **Criar e Adicionar Pares Chave-Valor no Map**:
Crie um **`Map`** chamado **`livros`** e adicione nele três pares de chave-valor, onde a chave é
 o título do livro e o valor é o autor.
2. **Acessar Valor no Map**:
Acesse o valor associado a uma das chaves no **`Map`** **`livros`** que você criou e imprima o nome do autor.
3. **Iterar Sobre um Map**:
Use um loop **`for...of`** para iterar sobre o **`Map`** **`livros`** e imprimir todos os pares chave-valor.
4. **Usando Métodos do Map: size, delete, has**:
No seu **`Map`** **`livros`**, use o método **`size`**
 para imprimir o número de livros, delete para remover um livro pelo título e **`has`** para verificar
  se um livro ainda está no **`Map`**.
5. **Map com Tipos de Chaves Diferentes**:
Crie um **`Map`** chamado **`colecao`** que contém diferentes tipos de chaves (como **`string`**, **`number`**,
 **`object`**)
 e seus respectivos valores.
*/

let livros = new Map()

livros.set('Harry potter', 'J.K Rowling');
livros.set('Game Of Thrones', 'George R.R Martin');
livros.set('Assasinato no Expresso Oriente', 'Agatha Cristhie');

console.log(livros.get('Game Of Thrones'));

for (let [livro, autor] of livros) {
    console.log(`${livro}: ${autor}`)
}


console.log(livros.size);
meuMap.delete('Game Of Thrones');
console.log(meuMap.has('Game Of Thrones'));


const colecao = new Map();

// Chave do tipo string
colecao.set("nome", "Alice");

// Chave do tipo number
colecao.set(42, "A resposta para tudo");

// Chave do tipo objeto
const objChave = { id: 1 };
colecao.set(objChave, "Objeto como chave");

// Chave do tipo função
const funcChave = function() {};
colecao.set(funcChave, "Função como chave");

// Exibindo todos os valores do Map
for (let [chave, valor] of colecao) {
  console.log("Chave:", chave, "| Valor:", valor);
}
