let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button");
let container = document.querySelector(".container-screen");
let startButton = document.querySelector("#start-game");
const winnerElement = document.querySelector('.winner');
const winnerText = document.createElement('win');
const showPlayerScore = document.querySelector("#player_score");
const showComputerScore = document.querySelector("#computer_score");
const showRound = document.querySelector('.rounds');
const battleBox = document.querySelector('.battle-box-player');

const rockPaperScissors = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return rockPaperScissors[
    Math.floor(Math.random() * rockPaperScissors.length)
  ];
}

function playerSelection(el) {
  playRound(el);
}

startButton.addEventListener(
  "click",
  (start = () => {
    startGame();
  })
);

function startGame() {
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      playerSelection(`${button.id}`);
      gameRound();
      startButton.remove();
    });
  });
}
function playRound(player,computer) {
  computer = getComputerChoice();
  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    playerScore++;
    round++;
    winnerText.textContent = 'You win this round!'
    updateScore();
  } else if (player == computer) {
    winnerText.textContent = 'You tie this round!'
  } else {
    computerScore++;
    round++;
    winnerText.textContent = 'You lose this round!'
    updateScore();

  }
  gameRound();
  winnerElement.appendChild(winnerText);
}





function updateScore() {
  showPlayerScore.textContent = `Your Score is ${playerScore}`;
  showComputerScore.textContent = `Computer Score is ${computerScore}`;
}

round = 1;
function gameRound() {
  showRound.textContent =  `Round ${round}`;
  if (round < 5) {
  if (playerScore >= 3) {
    winnerText.textContent = 'You win this game!';
  } else if (computerScore >= 3) {
    winnerText.textContent = 'You lose this game!';
  } 
} else if (round = 5) {
  playAgain();
  if (playerScore >= 3) {
    winnerText.textContent = 'You win this game!';
  }  else if (computerScore >= 3) {
  winnerText.textContent = 'You lose this game!';
  } else if (computerScore === playerScore) {
    winnerText.textContent = "It's a tie...";
  }
}
}


const playAgain = () => {
  const roundDiv = document.querySelector('.rounds');
  const againBtn = document.createElement('button');
  againBtn.textContent = "Play Again?";
  roundDiv.appendChild(againBtn);
  againBtn.addEventListener('click', play = () => {
  round = 1;
  
  playerScore = 0;
  computerScore = 0;
  againBtn.remove();
  updateScore();
  showRound.textContent =  `Round ${round}`;
  });
}
