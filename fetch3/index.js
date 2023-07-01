const date = fetch('./content.json');
const div = document.querySelector('div');

date.then(response => response.json())
    .then(jsonData => {
        console.log(jsonData['email']); // acessando o email do objeto JSON

        // Criando uma string HTML
        const htmlContent = Object.values(jsonData)
            .map(element => {
                if (typeof element === 'object') {
                    return ''; // Ignora elementos que são objetos
                } else {
                    localStorage.setItem('item', element);
                    return `<p>${element}</p>`; // Mantém elementos que não são objetos
                }
            })
            .join('');

        const localStorageCaptured = localStorage.getItem('item');
        if (localStorageCaptured === 'joao@example.com') {
            div.innerHTML = htmlContent;
        }
    });