let carro = {
    marca: 'Porsche',
    modelo: '911',
    ano: 2024
}

console.log(carro.modelo);


/*
Adicionar e Modificar Propriedades de um Objeto:
A partir do objeto carro criado, adicione uma propriedade cor e modifique o ano do carro.
Imprima o objeto modificado.
*/

let corDoCarro = carro

corDoCarro.cor = 'cinza';

console.log(carro.cor);


/*
Criar um Método em um Objeto:
Crie um objeto chamado calculadora com um método soma que aceite dois números e retorne a soma deles.
*/

let calculadora = {
    soma: function soma(num1, num2) {
        return num1 + num2
    }

}

let resultado = calculadora.soma(2, 2)

console.log(resultado)


/*
Iterar Sobre as Propriedades de um Objeto:
Dado um objeto, use um loop for...in para iterar sobre todas as suas propriedades e imprimir cada uma delas.
*/

