// .BLOB()
// Um blob é um tipo de objeto utilizado para representação de dados de um arquivo. 
// O blob pode ser utilizado para transformarmos 
// requisições de imagens por exemplo. O blob gera um URL único.

const div = document.createElement('div');
const imagem = document.querySelector('img');


fetch('./imagem.png')
    .then(response => response.blob())
    .then(imgBlob => {
        const blobUrl = URL.createObjectURL(imgBlob)
        console.log(blobUrl);
        imagem.src = blobUrl;
    })