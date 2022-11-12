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
let selectedCardsId =[];

// on card click -> push to selectedCards; display value on screen; if 2 cards selected -> checkSelection
const cardSelect = (e) => {
  selectedCards.push(e.target); // not sure how this evt attribute is working
  // disables selected card
  e.target.setAttribute("disabled", "");
    //Save id to change image later
    const ImgCard=document.getElementById(e.target.id);

    ImgCard.src = './img/'+ImgCard.value+'.png';
    selectedCardsId = [ ...selectedCardsId,  ImgCard.id];
  // display value on screen
  if (selectedCards.length === 2) {
    setTimeout(selectionCheck,1000);
  }
};

// check if cards match
const selectionCheck = () => {
    const ImgCard1=document.getElementById(selectedCardsId[0]);
    const ImgCard2=document.getElementById(selectedCardsId[1]);
    if (selectedCards[0].value == selectedCards[1].value && turn == 1 ) {
        players.player1++;
        player1Counter.value = players.player1;
        selectedCards = [];
        selectedCardsId = [];
        //ImgCard.src = './img/'+ImgCard.value+'.png'; //ocultar o dejar en blanco
    } else if (selectedCards[0].value == selectedCards[1].value && turn == 2) {
        players.player2++;
        player2Counter.value = players.player2;
        selectedCards =[];
        selectedCardsId = [];
         //ImgCard.src = './img/'+ImgCard.value+'.png'; //ocultar o dejar en blanco
    } else if (turn == 1) {
        // re-enables selected card
        selectedCards.map((each) => each.removeAttribute("disabled"));
        selectedCards = [];
        selectedCardsId = [];
        //change turn
        turn = 2;
        playerTurn.value = turn;
        ImgCard1.src = './img/back.png'; 
        ImgCard2.src = './img/back.png'; 
    } else if (turn === 2) {
        // re-enables selected card
        selectedCards.map((each) => each.removeAttribute("disabled"));
    } else if (turn == 2) {
        // re-enables selected card
        selectedCards.map((each) => each.removeAttribute("disabled"));
        ImgCard1.src = './img/back.png'; 
        ImgCard2.src = './img/back.png'; 
        selectedCards = [];
        selectedCardsId = [];
        //change turn
        turn = 1;
        playerTurn.value = turn;
    }
}
