'use strict';
let Rnumber = Math.trunc(Math.random() * 50) + 1;
const checkBtn = document.querySelector('.check');
let score = 50;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const changeBack = function (color) {
  document.body.style.backgroundColor = color;
};

checkBtn.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('No Number!');
  } else if (guess === Rnumber) {
    displayMessage('Bravo! Correct Number!');
    document.querySelector('.number').textContent = Rnumber;
    changeBack('rgb(17, 222, 78)');
    document.querySelector('.number').style.width = '25rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== Rnumber) {
    if (score > 1) {
      displayMessage(guess > Rnumber ? 'Too High!' : 'Too Low!');
      score = score - 5;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game 💔');
      document.querySelector('.number').textContent = Rnumber;
      changeBack('red');
      document.querySelector('.number').style.width = '25rem';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 50;
  Rnumber = Math.trunc(Math.random() * 50) + 1;

  document.querySelector('.number').style.width = '15rem';
  changeBack(' #222');

  document.querySelector('.score').textContent = score;
  displayMessage('Start Guessing!');
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
});
