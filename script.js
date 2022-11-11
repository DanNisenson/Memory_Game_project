// grid size
let rows = 6;
let columns = 6;

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

 function reset(){
    let refresh = document.getElementById('new-game');
    refresh.addEventListener('click', _ => {
            location.reload();
})
    loadBoard();
 }

// number pairs to be inserted in <input> elements

function loadNumbers() {
let numbers = []; 
    for (let i = 1; i <= rows * columns / 2; i++) {
        numbers.push(i,i);
    }
    // desordenamos array
    randon=numbers.sort(function(){return Math.random()-0.5});
}
//Load Board ...
function loadBoard(){
    loadNumbers();
    let boardElement = document.getElementById('board');
    let num=0
    // make  board elements and input elements. Append them to HTML.
    for (let i = 0; i <= (rows*columns-1); i++) {
        if (i%rows ==0 || i==0) {
            var row = document.createElement('div');
            row.className="rows";
            num++
            row.id = `row${num}`;
            boardElement.appendChild(row);
        }
        let card = document.createElement('img');
        card.className = `card${i}`;
        card.src='\img\+randon[i]+'.npg';
        row.appendChild(card);     
    }
}
