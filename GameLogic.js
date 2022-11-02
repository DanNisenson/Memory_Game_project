// grid size
let rows = 4;
let columns = 4;

// number pairs to be inserted in <input> elements
let numbers = [];
for (let i = 1; i <= rows * columns / 2; i++) {
    numbers.push(i, i);
}

// get elements
let tableElement = document.getElementById('table');
let player1Counter = document.getElementById('player1Counter');
let player2Counter = document.getElementById('player2Counter');

// array containing all cards
let cards = [];

// make table rows, cells and input elements. Append them to HTML.
for (let i = 1; i <= rows; i++) {
    let row = document.createElement('tr');
    row.id = `row${i}`;
    tableElement.appendChild(row)

    for (let j = 1; j <= columns; j++) {
        let cell = document.createElement('td');
        cell.id = `cell${i}_${j}`;
        row.appendChild(cell);
        let input = document.createElement('input');
        input.type = 'button';
        input.value = i+j; // temp. just to display id on screen and test game logic
        cards.push(input);
        cell.appendChild(input);
    }
}

// Math.floor( Math.random() * (rows * columns / 2) )
// Math.random -> check if it's included in numbers && not repeated more than once



// GAME LOGIC

// players and score
let players = {
    player1: 0,
    player2: 0
};

// turn storing
let turn = 0;

// selected cards storing
let selectedCards = [];

// on card click -> push to selectedCards; display value on screen; if 2 cards selected -> checkSelection
const cardSelect = (evt) => {
    selectedCards.push(evt.target.value);   // not sure how this evt attribute is working
    // display value on screen
    if (selectedCards.length == 2) {
        selectionCheck();
    }
}

// check if values match and add point correspondingly OR change turn
const selectionCheck = () => {
    if (selectedCards[0] == selectedCards[1] && turn == 0) {
        players.player1++;
        player1Counter.value = players.player1;
        selectedCards = [];
    } else if (selectedCards[0] == selectedCards[1] && turn == 1) {
        players.player2++;
        player2Counter.value = players.player2;
        selectedCards = [];
    } else if (turn == 0) {
        selectedCards = [];
        turn = 1;
    } else if (turn == 1) {
        selectedCards = [];
        turn = 0;
    }
}

for (let x of cards) {
    x.onclick = cardSelect;
}