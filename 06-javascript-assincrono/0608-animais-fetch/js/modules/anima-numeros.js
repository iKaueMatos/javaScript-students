export default function initAnimaNumeros() {
  function animaNumeros() {
    const numeros = document.querySelectorAll('[data-numero]');
  
    numeros.forEach((numero) => {
      const total = +numero.innerText;
      const inscremento = Math.floor(total / 100);
      let start = 0;
      const timer = setInterval(() => {
        start = start + inscremento;
        numero.innerText = start;
        if(start > total) {
          numero.innerText = total;
          clearInterval(timer);
        }
      }, 25 * Math.random());
    });
  }
  
  function handleMutation(mutation) {
   if(mutation[0].target.classList.contains('ativo')) {
    observer.disconnect();
    animaNumeros();
   }
  }
  
  const observerTarget = document.querySelector('.numeros');
  const observer = new MutationObserver(handleMutation);
  
  observer.observe(observerTarget, {attributes: true});
}


// O innerText pode ser entendindo como:

// uma propriedade que representa o conteúdo textual "renderizado" de um nó e seus descendentes. Usada como getter, retorna de maneira aproximada o texto que o usuário obteria caso tivesse selecionado o conteúdo e copiado para a área de transferência

// Já o innerHTML:

// define ou obtém a sintaxe HTML descrevendo os elementos descendentes.

// Logo, em palavras simples, o innerText recupera e define o conteúdo da tag como texto simples, enquanto innerHTML recupera e define o conteúdo em formato HTML.

// Veja um exemplo onde pegamos o conteúdo HTML da <div id"innerHTML">: