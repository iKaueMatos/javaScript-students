// function changeClass() {
//     document.body.classList.toggle('active');
// }

// setInterval(changeClass, 4000);


//Criando um cronometro
const init = document.querySelector('.iniciar');
const pause = document.querySelector('.pausar');
const temp = document.querySelector('.tempo');


init.addEventListener('click', initTemp);
pause.addEventListener('click', pauseTemp);
pause.addEventListener('dblclick', resetTemp);


let i = 0;
let timer;

function initTemp() {
    timer = setInterval(() => {
        temp.innerText = i++;
    }, 100);
    init.setAttribute('disabled', '');
}

function pauseTemp() {
    clearInterval(timer);
    init.removeAttribute('disabled', '')
}

function resetTemp() {
    temp.innerText = 0;
    i = 0;
}