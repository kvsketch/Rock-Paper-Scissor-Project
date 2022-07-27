//Create Computer Logic using getComputerChoice Function
//getComputerChoice will return Rock, Paper, or Scissors randomly

//Create a function playRound that plays a round of the game, using two parameters
//playerSelection (use and input) and computerSelection (use function)
//make player input case insensetive, can type the input anyway they'd like
//use if statement to determine the winner
//return string that delcares "You Lose!" + "Paper beats Rock", etc...

//create function game() call playRound inside of this one use loop to
//play through 5 rounds of the game for (let i = 0; i < 5; i++) {

const rockPaperScissors = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return rockPaperScissors[
    Math.floor(Math.random() * rockPaperScissors.length)
  ];
}

//take html input and print answer and return value of the player input in lowercase
// const playerSelection = () => {
//   let inputValue = document.getElementById("playerAnswer").value;
//   document.getElementById("valueInput").innerHTML = inputValue;
//   return inputValue.toLowerCase();
// };

let playerSelection = () => {
  return prompt("Rock,Paper Scissors? Choose!");
};

//playRound function sorts win scenarios, if they are not met, it will delcare a tie or L
let computer = getComputerChoice();
let player = playerSelection();

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

//add value every round
//keep track of score and report winner at end
let playerScore = 0;
let computerScore = 0;

const game = () => {
  for (i = 1; i < 6; i++) {
    playRound();
    console.log("round", i);
    console.log("playerscore", playerScore, "computerscore", computerScore);
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

//first attempt
// const game = () => {
//     for (round = 0; round < 5; round++) {
//         console.log(round);
//         if (playerScore < 3 && computerScore < 3) {
//       if (playRound() === "You win!") {
//         console.log("You win this round!");
//          playerScore++;
//       } else if (playRound() === "You lose!") {
//         console.log("The cool guy computer wins this round!");
//          computerScore++;
//       } else {
//         console.log("Nobody wins this round!");

//       }

//     }
//     }
//   if (playerScore === 3) {
//     console.log("You won 3 rounds, you win!");
//   } else if (computerScore === 3) {
//     console.log("The computer has won 3 rounds, it triumped over you");
//   } else {
//     console.log("No winner has been determined");
//   }

// };
