export default function initAnimaNumeros() {

  const numers = document.querySelectorAll('[data-numero]');

  function inicializeNumbers() {
    numers.forEach((numero) => {
      const total = +numers.innerText;
      const increment = Math.floor(total / 100);

      let start = 0;
      const timer = setInterval(() => {
        start = start + increment;
        numers.innerText = start;
        if (start > total) {
          numers.innerText = total;
          clearInterval(timer);
        }
      }, 25 * Math.random());
    });
  }

  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains('ativo')) {
      observer.disconnect();
      inicializeNumbers();
    }
  }

  const observerTarget = document.querySelector('.numeros');

  const observer = new MutationObserver(handleMutation);
  observer.observe(observerTarget, {
    attributes: true
  });

}