export default function initTooltip () {
  
  const tootips = document.querySelectorAll('[data-tooltip]');
  
  tootips.forEach((item) => {
    item.addEventListener('mouseover',onMouseOver); // basicmanete esse foreach passa um valor para 
    //a função OnMouseOver
  });
  
  //Função que cria um elemento tootip
  function createTooltipBox(element) {
  
      const tooltipBox = document.createElement('div');
      const text = element.getAttribute('aria-label'); // puxando  o texto que o mouse passou em cima
      tooltipBox.classList.add('tooltip'); 
      tooltipBox.innerText = text;
      document.body.appendChild(tooltipBox);
  
      return tooltipBox;
  
  }
  
  function onMouseOver(event) {
    const tooltipBox = createTooltipBox(this); //o que estiver aqui dentro e o retorno da função 
    createTooltipBox(this); // this => esta fazendo referencia ao item que esta sendo
    OnMouseMove.tooltipBox = tooltipBox;
    this.addEventListener('mouseleave',OnMouseMove);
  
    //passado o mouse no evento
    OnMouseleave.tooltipBox = tooltipBox;
    OnMouseleave.element = this; // this igual ao proprio objeto ou valor
    this.addEventListener('mouseleave',OnMouseleave); // OnMouseleave e um objeto que esta sendo chamado como uma função e desta forma esta
    //rederizando executando um evento de tirar e remover um texto na tela
  }
  
  //Object => passando um objeto para a função OnMouseOver()
  const OnMouseleave = {
    //O valor atribuido em => OnMouseleave sera automaticamente importado para cá sendo assim não a necessidade 
    //de deixar um objeto aqui,podendo assim ser opcional remover os objetos tootipBox ou element
    tooltipBox: '',
    element:'',
    handleEvent(){
      this.tooltipBox.remove();
      //Removendo o event da aba de EventListener do devTools
      this.element.removeEventListener('mouseleave',OnMouseleave);
      }
  }
  
  //Criando um objeto para ser passado como uma função callback
  const OnMouseMove = {
    handleEvent(event) {
     this.tooltipBox.style.top = event.pageY + 'px';
      this.tooltipBox.style.left = event.pageX + 'px';
    }  
  }
}


