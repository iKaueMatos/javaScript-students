function perimetroForma(lado, totalados) {
    const args = Array.from(arguments);
    args.forEach(element => {
        //Acessando os valores dentro de arguments
        console.log(element);
    });
    return lado * totalados;
}

perimetroForma(10,20,30);

//Rest e um array
const hello = (...lista) => {
  console.log(lista); // item em array
  lista.forEach(item => console.log(item));
}

hello("ola mundo","nunca nem vi","quem e você?");
