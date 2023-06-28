// Permite fazermos requisições HTTP através do método fetch(). Este método retorna a resolução de uma Promise. 
// Podemos então utilizar o then para interagirmos com a resposta, que é um objeto do tipo Response.

const cep = fetch('https://viacep.com.br/ws/07739800/json/');

cep.then((response) => response.json())
    .then((body) => {
        for (let key in body) {
            document.write(key + ": " + body[key]);
            document.write("<br>");
        }
    })
    .catch((error) => {
        console.error('Ocorreu um erro:', error);
    });


const style = fetch('./style.css');

style.then((response) => response.text())
    .then((body) => {
        const conteudo = document.querySelector('.conteudo');
        const style = document.createElement('style');
        style.innerHTML = body;
        conteudo.appendChild(style);
    })
    .catch((error) => {
        console.error('Ocorreu um erro:', error);
    });