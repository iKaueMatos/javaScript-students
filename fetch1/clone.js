const fetchViaCepApi = fetch('https://viacep.com.br/ws/07739800/json/');

fetchViaCepApi.then(Response => {
    const responseText = Response.clone();
    //Resposta em texto 
    responseText.text().then((text) => {
        console.log(text)
    });
    //Resposta em objeto Json
    Response.json().then(json => {
        console.log(json);
        //Acessando os valores após serem retornados em json
        console.log(json.cep);
        console.log(json.logradouro);
        console.log(json.localidade);
        console.log(json.ddd);
        console.log(json.bairro);
    });
});

//Se fossemos inserir os dados em um formulario

// const inputDoCep = document.querySelector("#cep");
// const valorDoCep = inputDoCep.value;
// const url = `https://viacep.com.br/ws/${valorDoCep}/json/`;

// fetch(url).then(response =>{
//   return response.json();
//     }).then(data =>
// if (data.erro) {
//     alert('o CEP digitado esta invalido');
//     return;
// }
//     {
// })

// function atribuirCampos(data)
// {
// const rua = document.querySelector("#rua");
// const complemento = document.querySelector("#complemento");
// const bairro = document.querySelector("#bairro");
// const cidade = document.querySelector("#cidade");
// const estado = document.querySelector("#estado");

// rua.value = data.logradouro;
// complemento.value = data.complemento;
// bairro.value = data.bairro;
// cidade.value = data.localidade;
// estado.value = data.uf;
// }