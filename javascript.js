
const rockPaperScissors = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return rockPaperScissors[
    Math.floor(Math.random() * rockPaperScissors.length)
  ];
}

let playerSelection = () => {
  return prompt("Rock,Paper Scissors? Choose!");
};

//adds to the player and computers score simplifying the game() loop function

function playRound(player, computer) {
  player = playerSelection();
  computer = getComputerChoice();
  console.log("player", player);
  console.log("computer", computer);
  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    return "You win!", playerScore++;
  } else if (player === computer) {
    return "Tie!";
  } else {
    return "You lose!", computerScore++;
  }
}

let playerScore = 0;
let computerScore = 0;

const game = () => {
  for (i = 1; i < 6; i++) {
    playRound();
    console.log("round", i);
    console.log("playerscore", playerScore,
     "computerscore", computerScore);
    if (playerScore === 3 || computerScore === 3) {
      break;
    }
  }
  if (playerScore > computerScore) {
    console.log("You win");
  } else if (computerScore > playerScore) {
    console.log("Computer man wins");
  } else if (playerScore === computerScore) {
    console.log("Tie");
  }
}
