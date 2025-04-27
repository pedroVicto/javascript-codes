/* 
## **O que é um Set? 🤔**

Um Set é como um array, só que cada valor nele é único.
Nada de repetição aqui, galera! Isso é super útil quando
 você quer garantir que cada elemento seja único,
tipo quando tá lidando com uma lista de IDs ou algo assim.
*/

let meuSet = new Set();


/*
## **Adicionando Valores ao Set 🛒**

Para adicionar coisas no nosso Set, usamos o método **`add`**.

### **Exemplo de Adição**
*/

meuSet.add(1)
meuSet.add(2)
meuSet.add(2) // Esse cara não vai entrar, porque 2 já está no Set

/*
## **Verificando a Presença de Valores 🔍**

Quer saber se algo tá no Set? Usa o **`has`**.

### **Exemplo de Verificação**
*/

console.log(meuSet.has(1));
console.log(meuSet.has(3)); //false


/*
## **Contando os Valores 💯**

Pra saber quantos itens tem no Set, dá uma olhada no **`size`**.

### **Exemplo de Tamanho**
*/

console.log(meuSet.size) //2


/*
## **Dando um Rolê pelo Set 🚶‍♂️🚶‍♀️**

Quer ver tudo que tem no Set? É só iterar sobre ele.

### **Exemplo de Iteração**
*/

for (let valor of meuSet) {
    console.log(valor)
}


/*
## **Limpando a Casa 🧹**

Sets têm uns métodos maneiros tipo **`delete`** e **`clear`**.

### **Exemplo de Métodos**
*/

meuSet.delete(1);
meuSet.clear();


/*
## **Sets no Dia a Dia 🌞**

Sets são ótimos pra quando você precisa de uma coleção sem repetição. Tipo, sabe quando você tem um monte de dados e precisa garantir que não tem nada duplicado? Então, Sets são perfeitos pra isso.

### **Exemplo Prático**
*/

let numeros = [1, 2, 3, 2, 1]
let numerosUnicos = new Set(numeros)
console.log(...numerosUnicos); //[1, 2, 3]


/*
## Exercícios para Praticar Sets🔥:

1. **Criar e Adicionar Valores ao Set**:
Crie um **`Set`** chamado **`frutas`** e adicione
 nele três frutas diferentes. Depois, tente adicionar uma fruta que já está no **`Set`**.
2. **Verificar Valores no Set**:
Use o método **`has`** para verificar se uma fruta específica está no seu **`Set`** **`frutas`**.
3. **Remover Valores do Set**:
Use o método **`delete`** para remover uma fruta do seu **`Set`** **`frutas`**.
4. **Limpar o Set**:
Use o método **`clear`** para limpar todo o seu **`Set`** **`frutas`**.
5. **Tamanho do Set**:
Crie um **`Set`** com vários valores e use a propriedade **`size`** para
 imprimir o número de elementos no **`Set`**.
6. **Iterar Sobre um Set**:
Use um loop **`for...of`** para iterar sobre o seu **`Set`** e imprimir cada valor.
7. **Criar um Set a Partir de um Array**:
Crie um **`array`** com alguns valores duplicados. Em seguida, crie um **`Set`** a partir 
desse **`array`** para remover as duplicatas.
*/

let frutas = new Set()

frutas.add('maçã');
frutas.add('banana');
frutas.add('abacaxi');
frutas.add('abacaxi')


console.log(frutas.has('maçã'));
console.log(frutas.has('pêra'));

frutas.delete('banana');
frutas.clear()


console.log(frutas.size);

for( let valor of frutas) {
    console.log(valor)
}


let nomes = ['pedro', 'aline', 'odilon', 'pedro'];
let nomesUnicos =  new Set(nomes)
console.log(...nomesUnicos)