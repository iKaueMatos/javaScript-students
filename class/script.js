class Button {
    constructor(text, background) {
        this.text = text;
        this.background = background;
    }
    element() {
        const buttonElment = document.createElement('button');
        buttonElment.innerText = this.text;
        buttonElment.style.background = this.background;

        return buttonElment;
    }
}

const blueButton = new Button('Comprar','blue');
console.log(blueButton); 