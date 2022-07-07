let cartelaContainer = document.querySelector(".cart-container");
let content = '';
let bicho = '';
let nomeBicho = '';

const botaoSortear = document.getElementById('botaoSortear');
let listaBichos = '';
let listaSize = 0;
let indice = 0;
let removed = '';

readTextFile("model/bichos.json", function (text) {

    listaBichos = JSON.parse(text);
    listaSize = listaBichos.length;

    for (let i = 0; i < 57; i++) {
        bicho = listaBichos[i];
        nomeBicho = bicho.nome.replace(/\s/g, '');

        content = cartelaContainer.innerHTML;
        cartelaContainer.innerHTML = 
            `${content}<div class='celula' id='celula${nomeBicho}' style='visibility: hidden;'>
            <img class='imgBichoCartela' id='imagem${nomeBicho}' src='img/${bicho.imagem}.png' width='40px' title='${bicho.nome}'/></div>`;
    }

    listaBichos = JSON.parse(text);
    listaSize = listaBichos.length;

});

botaoSortear.addEventListener("click", function() {

    if (listaSize <= 0) {
        alert('Você já sorteou todos os bichos! Bingo encerrado.');
        return;
    }

    indice = Math.floor(Math.random() * listaSize);
    bicho = listaBichos[indice];
    nomeBicho = bicho.nome.replace(/\s/g, '');

    document.querySelector(`#imgBichoSorteado`).src = `img/${bicho.imagem}.png`;
    document.querySelector(`#txtBichoSorteado`).textContent = bicho.nome;
    document.querySelector(`#celula${nomeBicho}`).style.visibility = 'visible';

    removed = listaBichos.splice(indice, 1);

    listaSize -= 1;

})