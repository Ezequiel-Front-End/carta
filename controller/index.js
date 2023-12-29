const API_URL = `https://jsonplaceholder.typicode.com/users`;
let inputFilter = document.querySelector('input');
let array = [];

const callAPI = async () => {
    let get = await fetch(API_URL);
    let dados = await get.json();

    dados.forEach((dado) => {

        array.push({
            'id': dado.id,
            'nome': dado.name,
            'sobrenome': dado.username,
            'email': dado.email
        })
    });

    renderizarDados(array);
}

const renderizarDados = (array) => {
    array.forEach((e) => {
        document.querySelector('.resultado').innerHTML += `<p>${e.nome}</p>`
    });
}

inputFilter.addEventListener('keyup', (event) => {
    let textFilter = event.target.value;

    if (inputFilter.value.length > 0 && inputFilter.value != '' && inputFilter.value != null) {
        return console.log(array.filter(item => item.nome.toLowerCase().indexOf(textFilter.toLowerCase()) >= 0));
    }

    return array;
});

window.addEventListener('load', async () => {
    callAPI();
});

