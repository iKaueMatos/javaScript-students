const fetchApi = fetch('https://viacep.com.br/ws/07739800/json/');


fetchApi.then(response => {
    //Return status 200 request success
    console.log(response.status, "Status de success request");


    //Error status 404 request Error
    if (response.status === 404) {
        console.log("Error no request 404");
    }

}).catch(error => {
    console.log(error, 'Error no request');
});