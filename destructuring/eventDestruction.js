function handleKeyBoard(event) {
    const eventKey = event.key;
    if (eventKey == 'k') { //Escutando o event
        console.log("Hello wolrd");
    }
}


//Podemos desestruturar o objeto e fazermos da seguinte forma

// function handleKeyBoard({key}) {
//     if (key == 'k') { //Escutando o event
//       console.log("Hello wolrd");
//     }
// }

//Event de tecla 
document.addEventListener('keyup',handleKeyBoard);

