class Button {
    constructor(text,background) {
        this.background = background;   
        this.text = text;
    }
    element() {
        const selectionBackground = document.querySelector('body');
        selectionBackground.style.background = this.background
    }
}

const buttonBlack = new Button('clica aqui','black'); // primeiro parametro texto, 2 parametro cor de fundo do site => body 
console.log(buttonBlack);