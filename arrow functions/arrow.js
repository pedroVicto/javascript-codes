/*
# **Arrow Functions 🏹**

Vamos se aprofundar sobre Arrow Functions em JavaScript. Esse é um tópico super legal
 e importante porque as Arrow Functions não só simplificam a sintaxe,
 mas também têm algumas peculiaridades que você precisa entender. Vamos lá! 🚀

 ## **Introdução às Arrow Functions**

Arrow Functions, introduzidas no ES6, são uma forma mais curta de escrever funções em JavaScript.
 Elas são especialmente úteis para funções anônimas e têm uma sintaxe mais enxuta.
*/

let somar = (a, b) => a + b;
console.log(somar(5, 3)); // Saída: 8

/*
Aqui, **`somar`** é uma Arrow Function que recebe dois parâmetros
 **`a`** e **`b`** e retorna a soma deles. Note que não usamos a palavra-chave **`function`** e o retorno é implícito.

### **Funções Sem Parâmetros**
*/


let saudacao = () => console.log("Olá, Mundo!");
saudacao(); // Saída: Olá, Mundo!

/*
Funções com Corpo de Bloco
*/

let multiplicar = (a, b) => {
    let resultado = a * b;
    return resultado;
};

console.log(multiplicar(4, 5)); // saída: 20;


/*
## **Características Importantes das Arrow Functions**

Arrow Functions não são apenas uma sintaxe mais curta.
 Elas têm características únicas que as diferenciam das funções tradicionais.

### **`this` nas Arrow Functions**
*/

function pessoa() {
    this.idade = 0

    setInterval(()=> {
        this.idade++;
        console.log(this.idade);
    }, 1000)
}

new pessoa()

setTimeout(() => console.log("Olá depois de 1 segundo"), 1000);

