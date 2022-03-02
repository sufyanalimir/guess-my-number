"use strict";

let check = document.querySelector(".check");
let message = document.querySelector(".message");
let score = document.querySelector(".score");
let scoreDecrement = 20;
const secretNumber = Math.round(Math.random() * 20);
document.querySelector(".number").textContent = secretNumber;

function checkUserInput() {
  let guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    message.textContent = "⛔ No number!";
  } else if (guess === secretNumber) {
    message.textContent = "🎉 Correct number";
    document.body.style.backgroundColor = "#60b347";
    document.querySelector(".guess").value = "";
  } else if (guess > secretNumber) {
    if (scoreDecrement > 0) {
      message.textContent = "📈 Too high!";
      scoreDecrement--;
      score.textContent = scoreDecrement;
    } else {
      message.textContent = "💥 You lost the game!";
    }
  } else if (guess < secretNumber) {
    if (scoreDecrement > 0) {
      message.textContent = "📉 Too low!";
      scoreDecrement--;
      score.textContent = scoreDecrement;
    } else {
      message.textContent = "💥 You lost the game!";
    }
  }
}

check.addEventListener("click", checkUserInput);
