/*
# Classes

Se você tá pensando em aprender js, entender classes é crucial.
 Elas são como moldes para criar objetos mais organizados e reutilizáveis.
  Então, sem mais delongas, bora lá! 🚀

## **O que são Classes?**

Classes, introduzidas no ES6, são um recurso do JavaScript que facilita a
criação de objetos. Elas agem como um template ou um molde,
a partir do qual você pode criar novos objetos que seguem um padrão.

### **Criando uma Classe**
*/

class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    falar() {
        console.log('Exemplo número 1: ' + ` Olá meu nome é ${this.nome} e eu tenho ${this.idade} anos!`)
    }
}

/*
## **Criando Objetos a partir de Classes**

Para criar um objeto a partir de uma classe, usamos a palavra-chave **`new`**.
*/

let joao = new Pessoa('João', 25);

joao.falar();

/*
## **Herança de Classes**

Uma das grandes vantagens das classes é a habilidade de herdar propriedades e métodos de outras classes.

### **Exemplo de Herança**
*/

class Estudante extends Pessoa {
    constructor(nome, idade, curso, notas) {
        super(nome, idade);
        this.curso = curso;
        this.notas = notas;
    }

    estudar() {
        console.log(` E estou estudando ${this.curso}`)
    }

    
}

let Ana = new Estudante('Ana', 20, 'Medicina');

Ana.falar() + Ana.estudar() + Ana.calcularMedia()

/*
## **Métodos Estáticos**

As classes também podem ter métodos estáticos. Estes são métodos que você pode chamar diretamente na classe, sem criar uma instância dela.

### **Exemplo de Método Estático**
*/

class Utilitario {
    static numeroAleatorio() {
        return Math.floor(Math.random() * 100);
    }
} 

console.log('Exemplo 2: ' + Utilitario.numeroAleatorio());


/*
## **Propriedades Privadas**

Com a introdução do ES2020, agora é possível definir propriedades privadas em classes, usando o **`#`**.
*/

class ContaBancaria {
    #saldo;

    constructor(saldoInicial) {
        this.#saldo = saldoInicial;
    }

    depositar(valor) {
        this.#saldo += valor;
    }

    getSaldo() {
        return this.#saldo
    }

}

let conta =  new ContaBancaria(1000);
conta.depositar(500)
console.log('Exemplo 3: ' + conta.getSaldo())

/* Exercícios*/

class Animal {
    constructor(nome, som) {
        this.nome = nome;
        this.som = som
    }
    falar() {
        console.log('Exercício 1: ' + ` O ${this.nome}, ${this.som} `)
    }
}

let gato = new Animal('Cavalo', 'relincha');

gato.falar()


class Veículo {
    constructor(marca, modelo, velomax) {
        this.marca = marca;
        this.modelo = modelo;
        this.velomax = velomax;
    }

    descrever() {
        console.log(`Este veículo é uma ${this.marca}, modelo: ${this.modelo} e sua velocidade é de: ${this.velomax}`)
    }
}


let lambo = new Veículo('Lamborghini', 'Huracàn A', '325km/h');
lambo.descrever()