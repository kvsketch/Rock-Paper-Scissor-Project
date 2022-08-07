const rockPaperScissors = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return rockPaperScissors[
    Math.floor(Math.random() * rockPaperScissors.length)
  ];
}

const buttons = document.querySelectorAll("button");

let startButton = document.querySelector("#start-game");
startButton.addEventListener(
  "click",
  (start = () => {
    startGame();
    gameRound();
  })
);

function startGame() {
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      playerSelection(`${button.id}`);
    });
  });
}

function playerSelection(el) {
  playRound(el);
}

function playRound(player) {
  computer = getComputerChoice();
  console.log("player", player);
  console.log("computer", computer);

  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    roundResult = "You win";
    playerScore++;
    round++;
    updateScore();
  } else if (player == computer) {
    console.log("Tie");
  } else {
    console.log("You lose");
    computerScore++;
    round++;
    updateScore();
  }
  gameRound();
}

let playerScore = 0;
let computerScore = 0;

const showPlayerScore = document.querySelector("#player_score");
const showComputerScore = document.querySelector("#computer_score");

function updateScore() {
  showPlayerScore.textContent = `Your Score is ${playerScore}`;
  showComputerScore.textContent = `Computer Score is ${computerScore}`;
}
const showRound = document.querySelector('.rounds');
round = 1;
function gameRound() {
  showRound.textContent =  `Round ${round}`;
  if (round < 5) {
  if (playerScore >= 3 || playerScore > computerScore) {
    console.log('You win');
  } else if (computerScore >= 3 || playerScore < computerScore) {
    console.log('Computer Wins');
  } else if (playerScore == computerScore) {
    console.log('No winner!')
  }
} else if (round >=5) {
  console.log('Game Over'),
  playAgain();
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
  updateScore();
  });
}
