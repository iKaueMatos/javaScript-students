// .HEADERS
// É uma propriedade que possui os cabeçalhos da requisição.É um tipo de dado 
// iterável então podemos utilizar o forEach para vermos cada um deles.

fetch('https://viacep.com.br/ws/07739800/json/')
    .then(response => {
        response.headers.forEach(
            console.log
            // max-age=3600, public cache-control Headers {}[[Prototype]]: Headersappend: 
            // headers.js:7 application/json; charset=utf-8 content-type Headers {}
            //[[Prototype]]: Headers
            // headers.js:7 Thu, 29 Jun 2023 02:11:25 GMT expires Headers {}
            // headers.js:7 public pragma Headers {}
        );
    });