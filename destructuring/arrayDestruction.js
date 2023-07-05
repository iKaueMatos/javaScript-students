const frutas = ['banana','uva','morango'];

//Maneira padrão de acessar os valores de uma array
const primeiraFruta = frutas[0];
const segundaFruta = frutas[1];
const terceiraFruta = frutas[2];


//Dessa forma estamos Desestruturando uma array e acessando o seus valores
const [primeira,segunda,terceira] = frutas;


//Basicamente atribuimos uma variavel para cada posição do array e conseguimos acessar esse valor apenas colocando essa variavel onde queremos
console.log(primeira)