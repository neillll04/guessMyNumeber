'use strict';
/* console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number!';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 12;

console.log(document.querySelector('.guess').value); */


let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;


// again
document.querySelector('.again').addEventListener('click', function () {
  // change score and number
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = 20;
});
// check
document.querySelector('.check').addEventListener('click', function () {
  var guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number';

    //When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Answer';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    
    if (score > highscore){
        highscore = score
        document.querySelector('.highscore').textContent = highscore;
    }

  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high';
      score--; // score = score - 1
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Game Over';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = ' Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Gameover';
      document.querySelector('.score').textContent = 0;
    }
  }
});







/* <!-- Implement a game rest functionality, so that the player can make a new guess!
Your tasks:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the 'score' and 'secretNumber' variables
3. Restore the initial conditions of the message, number, score and guess input fields
4. Also restore the original background color (#222) and number width (15rem)

--------------------------------------------------------------------
Implement the high score
Your tasks:
Set a variable for the high score
Initialize the high score
The first score should be the high score
The next time the player plays the game, you should check if his score is higher than the current score, if yes, set a new value for the high score. If not, retain the high score
 --> */