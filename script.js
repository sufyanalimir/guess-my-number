"use strict";

let check = document.querySelector(".check");
let again = document.querySelector(".again");
let message = document.querySelector(".message");
let selectScore = document.querySelector(".score");
let number = document.querySelector(".number");
let selectHighscore = document.querySelector(".highscore");
let secretNumber = Math.round(Math.random() * 20);
let score = 20;
let highscore = 0;

const displayMessage = (msg) => (message.textContent = msg);

function checkUserInput() {
  let guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    displayMessage("⛔ No number!");
  } else if (guess === secretNumber) {
    displayMessage("🎉 Correct number");
    number.textContent = secretNumber;
    document.body.style.backgroundColor = "#60b347";
    number.style.width = "30rem";
    if (score > highscore) {
      highscore = score;
    }
    selectHighscore.textContent = highscore;
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
      score--;
      selectScore.textContent = score;
    } else {
      selectScore.textContent = 0;
      displayMessage("💥 You lost the game!");
    }
  }
}

function resetGame() {
  number.textContent = "?";
  secretNumber = Math.round(Math.random() * 20);
  document.querySelector(".guess").value = "";
  displayMessage("Start guessing...");
  selectScore.textContent = 20;
  score = 20;
  document.body.style.backgroundColor = "#222";
  number.style.width = "15rem";
}

check.addEventListener("click", checkUserInput);
again.addEventListener("click", resetGame);
