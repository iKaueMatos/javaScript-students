const cliente = {
    nome:'Kaue de matos oliveira',
    compras : {
        digitais: {
            livros: ['livro 1','Livro 2'],
            videos: ['video js', 'video HTML']
        },
        fisicas: {
            cadernos: ['Caderno 1']
        }
    }
}

//Dessa forma eu iria esta acessando um objeto de livros onde poderiamos acessar uma array que contem valores
console.log(cliente.compras.digitais.livros);
//Acessando o elemento do array de objetos
console.log(cliente.compras.digitais.livros[0]); 

//Desestruturando um objeto de arrays
const {livros, videos} = cliente.compras.digitais;
console.log(livros[0]);

//Destruturando o objeto e acessando o seu segundo valor
const {cadernos} = cliente.compras.fisicas;

console.log(cadernos.join(''));



// const cliente = {
//     nome: 'kaue',
//     compras: {
//       digitais: {
//         livros: ['Livro 1', 'Livro 2'],
//         videos: ['Video JS', 'Video HTML']
//       },
//       fisicas: {
//         cadernos: ['Caderno 1']
//       }
//     }
//   }
  
//   console.log(cliente.compras.digitais.livros);
//   console.log(cliente.compras.digitais.videos);
  
//  Exemplo
//   const {livros, videos} = cliente.compras.digitais;
  
//   console.log(livros);
//   console.log(videos);