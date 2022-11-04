// grid size
let rows = 5;
let columns = 4;

// realizar al inicio
//Evento que al cargarse la ventana carga las funciones cargarImagenes, empezarJuego y cargar el reloj
window.onload = function () {
  loadBoard();
};

///Definicion funciones

function reset() {
  let refresh = document.getElementById("new-game");
  refresh.addEventListener("click", (_) => {
    location.reload();
  });
  loadBoard();
}

// number pairs to be inserted in <input> elements

function loadNumbers() {
  let numbers = [];
  for (let i = 1; i <= (rows * columns) / 2; i++) {
    numbers.push(i, i);
  }
  // desordenamos array
  random = numbers.sort(function () {
    return Math.random() - 0.5;
  });
}

// array containing all cards
let cards = [];

//Load Board
function loadBoard() {
  loadNumbers();
  let boardElement = document.getElementById("board");
  let num = 0;
  // make  board elements and input elements. Append them to HTML.
  for (let i = 0; i <= rows * columns - 1; i++) {
    if (i % rows == 0 || i == 0) {
      var row = document.createElement("div");
      row.className = "card";
      num++;
      row.id = `row${num}`;
      boardElement.appendChild(row);
    }
    let card = document.createElement("input");
    card.type = "button";
    card.id = `card${i}`;
    card.onclick = cardSelect;
    card.value = random[i];
    cards.push(card);
    row.appendChild(card);
  }
}

/* for (let x of cards) {
  console.log('Hola')
  x.onclick = cardSelect;
  console.log(x);
} */