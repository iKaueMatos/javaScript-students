export default function initFetchBitcoin() {
  fetch('https://blockchain.info/ticker')
  .then(response => response.json())
  .then(bitcoin => {
    const btcPreco = document.querySelector('.btc-preco');
    btcPreco.innerText = (1000 / bitcoin.BRL.sell).toFixed(4);
  }).catch(erro => {
    console.log(Error(erro));
  })
}

// Para que serve o toFixed?
// toFixed() arredonda o número para cima, isto é, se temos, por exemplo 11.123 , o valor fica 11.12 , já se temos 20.555 , o valor fica 20.56 . Outro ponto importante de se observar é que seu retorno será uma string 
//representando o número.