'use strict';
// DOM
const body = document.querySelector('body');
const check = document.querySelector('.check');
const message = document.querySelector('.message');
const secretNumber = document.querySelector('.number');
const again = document.querySelector('.again');
const highScore = document.querySelector('.highscore');
let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let calcHighScore = 0;
const scoreNumber = document.querySelector('.score');

check.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //Not A Number
  if (!guess) {
    message.textContent = 'rung number';
  }
  // Correct number
  else if (guess === number) {
    message.textContent = 'You are winner';
    body.style.backgroundColor = '#60b347';
    secretNumber.style.width = '30rem';
    secretNumber.textContent = number;
    if (score > calcHighScore) {
      calcHighScore = score;
      highScore.textContent = calcHighScore;
    }
  }
  //Guess number is Hiegh
  else if (guess > number) {
    if (score > 1) {
      message.textContent = 'Your guess is hiegh';
      score--;
      scoreNumber.textContent = score;
    } else {
      message.textContent = 'You Lose Game';
      scoreNumber.textContent = 0;
      body.style.backgroundColor = '#f03e3e';
      secretNumber.style.width = '30rem';
      secretNumber.textContent = number;
    }
  }
  //Guess number is Low
  else if (guess < number) {
    if (score > 1) {
      message.textContent = 'Your guess is low';
      score--;
      scoreNumber.textContent = score;
    } else {
      message.textContent = 'You Lose Game';
      scoreNumber.textContent = 0;
      body.style.backgroundColor = '#f03e3e';
      secretNumber.style.width = '30rem';
      secretNumber.textContent = number;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20
  scoreNumber.textContent = score;
  number = Math.trunc(Math.random() * 20) + 1;
  body.style.backgroundColor = '#222';
  secretNumber.style.width = '15rem';
  secretNumber.textContent = '?';
  message.textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
});
