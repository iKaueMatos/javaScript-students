const array = [{
        nome: "kaue de matos oliviera",
        idade: 20
    },
    {
        nome: "Igor santos de souza",
        idade: 20
    },
    {
        nome: "Pedro da silva",
        idade: 20
    },
    {
        nome: "kaue de matos oliviera",
        idade: 20
    },
    {
        nome: "kaue de matos oliviera",
        idade: 20
    }
];

const filteredArray = array.filter((item) => {
    return item.nome === 'kaue de matos oliviera' && item.idade % 2 === 0;
});

filteredArray.forEach((item) => {
    console.log(item.nome);
});