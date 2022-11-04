// get elements
// let tableElement = document.getElementById('table');
let player1Counter = document.getElementById('player1Counter');
let player2Counter = document.getElementById('player2Counter');
let playerTurn = document.getElementById('playerTurn');

// players and score
let players = {
    player1: 0,
    player2: 0
};

// turn storing
let turn = 1;

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
    if (selectedCards[0] == selectedCards[1] && turn == 1) {
        players.player1++;
        player1Counter.value = players.player1;
        selectedCards = [];
    } else if (selectedCards[0] == selectedCards[1] && turn == 2) {
        players.player2++;
        player2Counter.value = players.player2;
        selectedCards = [];
    } else if (turn == 1) {
        selectedCards = [];
        turn = 2;
        playerTurn.value = turn;
    } else if (turn == 2) {
        selectedCards = [];
        turn = 1;
        playerTurn.value = turn;
    }
}

/* for (let x of cards) {
    console.log('Hola')
    x.onclick = cardSelect;
    console.log(x);
} */