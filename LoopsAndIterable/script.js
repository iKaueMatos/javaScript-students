const frutas = ['banana','Morango','Uva'];
const frase = "Isso e javascript";

//Destruturando uma fetch API 
fetch('https://pokeapi.co/api/v2/pokemon/').then(({headers,body}) => console.log(headers,body));