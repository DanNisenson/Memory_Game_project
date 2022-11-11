// get elements
// let tableElement = document.getElementById('table');
let player1Counter = document.getElementById("player1Counter");
let player2Counter = document.getElementById("player2Counter");
let playerTurn = document.getElementById("playerTurn");

// players and score
let players = {
  player1: 0,
  player2: 0,
};

// turn storing
let turn = 1;

// selected cards storing
let selectedCards = [];

// on card click -> push to selectedCards; display value on screen; if 2 cards selected -> checkSelection
const cardSelect = (e) => {
  selectedCards.push(e.target); // not sure how this evt attribute is working
  // disables selected card
  e.target.setAttribute("disabled", "");
  // display value on screen
  if (selectedCards.length == 2) {
    selectionCheck();
  }
};

// check if cards match
const selectionCheck = () => {
  // add point correspondingly
  if (selectedCards[0].value == selectedCards[1].value && turn == 1) {
    players.player1++;
    player1Counter.value = players.player1;
    selectedCards = [];
  } else if (selectedCards[0].value == selectedCards[1].value && turn == 2) {
    players.player2++;
    player2Counter.value = players.player2;
    selectedCards = [];
    // 
  } else if (turn == 1) {
    // re-enables selected card
    selectedCards.map((each) => each.removeAttribute("disabled"));
    selectedCards = [];
    // change turn
    turn = 2;
    playerTurn.value = turn;
  } else if (turn == 2) {
    selectedCards.map((each) => each.removeAttribute("disabled"));
    selectedCards = [];
    turn = 1;
    playerTurn.value = turn;
  }
};