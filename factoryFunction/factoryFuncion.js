function createButton(text) {
    function element() {
        const buttonElement = document.createElement('button');
        buttonElement.innerText = text;
        return buttonElement;
    }
    return {
        element: element,
        text: text,
    }
}

const purchaseButton = createButton('Comprar');
const div = document.getElementById('parent');
div.appendChild(purchaseButton.element());

div.addEventListener('click',function(){
    console.log('clicou aqui');
});


function createH1(text) {
    function element() {
        const textElement = document.createElement('h1');
        textElement.innerText = text;
        return textElement;
    }
    return {
        element: element,
        text: text,
    }
}

const text = createH1('Hello world');
const div1 = document.getElementById('parent');
div1.appendChild(text.element());