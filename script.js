// grid size
let rows = 5;
let columns = 4;

// Math.floor( Math.random() * (rows * columns / 2) )
// Math.random -> check if it's included in numbers && not repeated more than once


// Math.floor( Math.random() * (rows * columns / 2) )
// Math.random -> check if it's included in numbers && not repeated more than once
// realizar al inicio
//Evento que al cargarse la ventana carga las funciones cargarImagenes, empezarJuego y cargar el reloj
window.onload = function () {
    loadBoard();
}

///Definicion funciones


// number pairs to be inserted in <input> elements

function loadNumbers() {
let numbers = []; 
    for (let i = 1; i <= rows * columns / 2; i++) {
        numbers.push(i,i);
    }
    // desordenamos array
    randon=numbers.sort(function(){return Math.random()-0.5});
}
//Load Board
function loadBoard(){
    loadNumbers();
    let boardElement = document.getElementById('board');
    let num=0
    // make  board elements and input elements. Append them to HTML.
    for (let i = 0; i <= (rows*columns-1); i++) {
        if (i%rows ==0 || i==0) {
            var row = document.createElement('div');
            row.class='"card"';
            num++
            row.id = `row${num}`;
            boardElement.appendChild(row);
        }
        let card = document.createElement('input');
        card.type = 'button';
        card.id = `card${i}`;
        card.value=randon[i];
        row.appendChild(card);
        }
    }


