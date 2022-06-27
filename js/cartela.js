const botaoCartela = document.querySelector('#cartela');

botaoCartela.addEventListener("click", function () {

    let listaBichos = '';
    let listaSize = 0;
    let indice = 0;
    let bicho = '';
    let removed = '';

    readTextFile("model/bichos.json", function (text) {
        listaBichos = JSON.parse(text);
        listaSize = listaBichos.length;

        for (let i = 1; i < 10; i++) {
            indice = Math.floor(Math.random() * listaSize);
            bicho = listaBichos[indice];

            document.querySelector(`#celula${i}Txt`).textContent = `${bicho.nome}`;
            document.querySelector(`#celula${i}Img`).src = `img/${bicho.imagem}.png`;

            removed = listaBichos.splice(indice, 1);

            listaSize -= 1;
        }
    });
});