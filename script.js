"use strict";

let check = document.querySelector(".check");
let again = document.querySelector(".again");
let message = document.querySelector(".message");
let score = document.querySelector(".score");
let number = document.querySelector(".number");
let scoreDecrement = 20;
let secretNumber = Math.round(Math.random() * 20);

function checkUserInput() {
  let guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    message.textContent = "⛔ No number!";
  } else if (guess === secretNumber) {
    message.textContent = "🎉 Correct number";
    number.textContent = secretNumber;
    document.body.style.backgroundColor = "#60b347";
    number.style.width = "30rem";
  } else if (guess > secretNumber) {
    if (scoreDecrement > 1) {
      message.textContent = "📈 Too high!";
      scoreDecrement--;
      score.textContent = scoreDecrement;
    } else {
      score.textContent = 0;
      message.textContent = "💥 You lost the game!";
    }
  } else if (guess < secretNumber) {
    if (scoreDecrement > 1) {
      message.textContent = "📉 Too low!";
      scoreDecrement--;
      score.textContent = scoreDecrement;
    } else {
      score.textContent = 0;
      message.textContent = "💥 You lost the game!";
    }
  }
}

function resetGame() {
  number.textContent = "?";
  secretNumber = Math.round(Math.random() * 20);
  document.querySelector(".guess").value = "";
  message.textContent = "Start guessing...";
  score.textContent = 20;
  scoreDecrement = 20;
  document.body.style.backgroundColor = "#222";
  number.style.width = "15rem";
}

check.addEventListener("click", checkUserInput);
again.addEventListener("click", resetGame);
