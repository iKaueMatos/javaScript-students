//Data e object => javbascript onde abre a possibilidade de criarmos varios objetos datase onde contenham um valor e com esse valor você consiga 
//manipular elementos HTML


//podemos selecionar desta forma e também  podemos selecionar desta forma aqui
// const div = document.querySelector('[data]');
const dataCor = document.querySelector('[data-cor]');

//dataset e o objeto [data] onde estamos selecionando o objeto e o valor dele que e width;
div.dataset.height = 1000;

//adicionando uma novo dataset => object que vai se chamar height [data-height];
div.dataset.totalHeight = 2000;


//Deletando um object [data] com a propriedade delete
delete div.dataset.width;

console.log(dataCor.dataset);