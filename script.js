'use strict';
//jquery selectors
const guessDOM = document.querySelector('.guess');
const check = document.querySelector('.check');
const message = document.querySelector('.message');
const scoreDOM = document.querySelector('.score');
const highscoreDOM = document.querySelector('.highscore');
const secretNumberDOM = document.querySelector('.number');
const againBtn = document.querySelector('.again');
const body = document.querySelector('body');

console.log(scoreDOM.innerHTML);
// console.log(guess, check);
//  1. inside input type a number between 1-20
//randomly generate secret number then round
let secretNumber = Math.trunc(Math.random() * 20 + 1);
console.log(secretNumber);

let score = 20;
let highScore = 0;

check.addEventListener('click', function () {
  //   2. if the number is lower than the secret number change start guess to number if too low
  let guess = parseInt(guessDOM.value);
  console.log(typeof score);
  //while score is greater than subtract 1 to score

  //   6. after each guess you take the score descreases by 1
  //if else for guessing secret number
  if (guess < secretNumber) {
    //   5. also change the text to you guessed correct
    message.innerHTML = 'Too Low';
    score = score - 1;
    scoreDOM.innerHTML = score;
    // console.log(score);
  } else if (guess > secretNumber && guess <= 20) {
    //   3. if to high change text to answer too high
    message.innerHTML = 'Too high';
    score = score - 1;
    scoreDOM.innerHTML = score;
    // console.log(score);
  } else if (guess === secretNumber) {
    //   4. if the secret number is guessed display the num in the box and change background'
    console.log(score);
    scoreDOM.innerHTML = score;
    message.innerHTML = 'You guessed the secret Number';
    body.classList.add('background-winner');
    secretNumberDOM.innerHTML = secretNumber;
    //   5.5. add your current score to the high score if it is greater than the score.

    if (highScore === 0 || score < highScore) {
      highScore = score;
      highscoreDOM.innerHTML = highScore;
      console.log(highScore);
    }
  } else if (guess < 1 || guess > 20) {
    message.innerHTML = 'Please enter a valid number between 1-20';
  }

  //if else for losing

  if (score <= 0) {
    message.innerHTML = 'You lost! Please play again!';
  }

  console.log(score);
});

//   8. if we want to play again click the again button and the background color turns back to black and num is hidden also the score is changed to 20 and text says start guessing
againBtn.addEventListener('click', function () {
  //reset score to 20 start guessing text
  score = 20;
  scoreDOM.innerHTML = score;
  message.innerHTML = 'Start guessing...';
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  // hide number
  secretNumberDOM.innerHTML = '?';
  //background change back
  body.classList.remove('background-winner');
});
