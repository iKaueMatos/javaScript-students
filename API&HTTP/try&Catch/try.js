async function puxarDados() {
    try {
        //Se por caso qualquer erro ocorrer aqui dentro ele passara esse erro para catch
        const dadosResponse = await fetch('./content.json');
        const dadosJson = await dadosResponse.json();
        //Podemos também encurtar esse camninho desta forma
        // const dadosJson = await (await dadosResponse).json();

        console.log(dadosJson);
    } catch (error) {
        console.log(error);
    }
}

puxarDados();