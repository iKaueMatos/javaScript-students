//Modal
//Modal 

export default function initModal() {
  const buttonActive = document.querySelector('[data-modal="abrir"]');
  const buttonToClose = document.querySelector('[data-modal="fechar"]');
  const containerModal = document.querySelector('[data-modal="container"]');
  
if (buttonActive && buttonToClose && containerModal) {
        
    function activeModal (event) {
          event.preventDefault();
          containerModal.classList.add('ativo');
        }
      
    function closeModal  (event) {
        event.preventDefault();
        containerModal.classList.remove('ativo');
    }
  
    function clickCloseModal (event) {
        if (event.target == this) {
        closeModal(event);
    }
  }
    
    buttonActive.addEventListener('click',activeModal);
    buttonToClose.addEventListener('click',closeModal);
    containerModal.addEventListener('click',clickCloseModal);  
  
  }
}

