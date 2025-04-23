/*
## **O que são Objetos?🧐**

No JavaScript, um objeto é uma coleção de propriedades,
e uma propriedade é uma associação entre uma chave e um valor.
O valor de uma propriedade pode ser uma função, que é então conhecida como um método do objeto.
 */

/*
Criação de Objeto
*/

let pessoa = {
    nome: 'Pedro',
    idade: 25,
    falar: function() {
        console.log(`Olá meu nome é ${this.nome}`)
    }

}

/*
Aqui, criamos um objeto **`pessoa`** com três propriedades: **`nome`**, **`idade`** e **`falar`**. **`falar`** é um método, ou seja, uma função dentro de um objeto.
*/

console.log(pessoa.nome)
pessoa.falar();


/*
## **Alterando e Adicionando Propriedades📈**

Você pode alterar as propriedades de um objeto ou adicionar novas propriedades a ele após sua criação.
*/

pessoa.idade = 30;
pessoa.sobrenome = 'Silva'


/*
## **Iterando sobre Propriedades🧙🏻**

Podemos percorrer todas as propriedades de um objeto usando um loop **`for...in`**.

### **Exemplo de Iteração**
*/

for (let chave in pessoa) {
    console.log(`${chave}: ${pessoa[chave]}`)
}


/*
## **Objetos como Referências🤯**

Em JavaScript, objetos são referenciados. Quando você atribui um objeto a uma variável, está passando uma referência a esse objeto.

Ou seja, se você faz uma “cópia” de um objeto, e altera alguma propriedade, o objeto original também será alterado.

### **Exemplo de Referência**
*/

let outraPessoa = pessoa;
outraPessoa.nome = 'Maria';
console.log(pessoa.nome);

/*
outraPessoa é uma referência ao mesmo objeto que pessoa.
Ao mudar nome através de outraPessoa, o objeto original pessoa também é alterado.
*/


/*
## **Métodos Avançados🥷🏻**

JavaScript oferece métodos avançados para trabalhar com objetos, como **`Object.keys()`**, **`Object.values()`**, e **`Object.entries()`**.

### **Exemplo de Métodos Avançados**
*/

console.log(Object.keys(pessoa))

