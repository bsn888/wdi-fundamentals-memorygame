console.log("JS file is connected to HTML! Woo!")

var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];
var resetButton = document.getElementById('resetButton');

var isMatch = function(selectedCard) {
  'use strict';
  // alert winning/losing message
  if (selectedCard[0] === selectedCard[1]) {
    alert('You found a match!');
  } else {
    alert('Sorry, try again.');
  }

  var resetBoard = function() {
  'use strict';
  // reset array
  cardsInPlay = []; // clear cards in play array for next try
  // Remove card images
  var faceDown = document.getElementsByClassName('card');
  for (var k = 0; k < faceDown.length; k++) {
    faceDown[k].innerHTML = '';
  }
  for (var l = 0; l < cards.length; l++) {
    var cardReset = document.getElementsByClassName('card'); // create a new div tag
    cardReset[l].setAttribute('data-card', cards[l]); // set the data-card to its card value, king or queen
  }
  // Hide reset button again
  resetButton.className = 'resetButton_invisible';
};

resetButton.addEventListener('click', resetBoard);

var isTwoCards = function() {
  'use strict';
  // add card to array of cards in play
  cardsInPlay.push(this.getAttribute('data-card'));
  console.log(this.getAttribute('data-card'));
  if (this.getAttribute('data-card') === 'king') {
    this.innerHTML = '<img src="https://pixabay.com/static/uploads/photo/2013/05/11/08/22/playing-card-110298_640.jpg">'; // king
  } else {
    this.innerHTML = '<img src="https://pixabay.com/static/uploads/photo/2013/05/11/08/23/playing-card-110300_640.jpg">'; //queen
  }

  // if you have two cards in play check for a match
  if (cardsInPlay.length === 2) {
    isMatch(cardsInPlay); // pass the cardsInPlay as an argument to isMatch function
    // make reset button visible
    resetButton.className = 'resetButton_visible';
    // resetBoard();
  }
};

// Create board & cards
var createCards = function() {
  'use strict';
  var gameBoard = document.getElementById('game-board');

  for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('div'); // create a new div tag
    cardElement.className = 'card'; // give the div a class name
    cardElement.setAttribute('data-card', cards[i]); // set the data-card to its card value, king or queen
    cardElement.addEventListener('click', isTwoCards); // add event listener to the card
    gameBoard.appendChild(cardElement); // add the div to the game bord
  }
};

createCards();