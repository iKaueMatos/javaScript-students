export default function initDropdownMenu() {
  const dropdownMenus = document.querySelectorAll('[data-dropdown]');

  dropdownMenus.forEach(menu => {
    // menu.addEventListener('touchstart', handleClick);
    // menu.addEventListener('click', handleClick);
    //simplificação para resolução do problema
    ['touchstart', 'click'].forEach(userEvent => {
      menu.addEventListener(userEvent, handleClick);
    });

  });

  function handleClick(event) {
    event.preventDefault();
    this.classList.add('active');
    outsideClick(this, ['touchstart', 'click'], () => {
      this.classList.remove('active');
    });
  }

  function outsideClick(element, events, callback) {
    const html = document.documentElement;
    const outside = 'data-outside'

    if (!element.hasAttribute(outside, '')) {
      events.forEach(userEvent => {
        html.addEventListener(userEvent, handleOutsideClick);
      });

      element.setAttribute(outside);
    };

    function handleOutsideClick(event) {
      if (!element.contains(event.target)) {
        element.removeAttribute(outside, '');

        html.removeEventListener(userEvent, handleOutsideClick);
        //function is callback
        callback();
      }
    }
  }
}