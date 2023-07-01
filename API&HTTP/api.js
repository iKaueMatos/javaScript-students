async function puxarDados() {

    const dadosResponse = await fetch('./content.json');
    const dadosJSON = await dadosResponse.json();

    console.log(dadosJSON.nome);

}

puxarDados();