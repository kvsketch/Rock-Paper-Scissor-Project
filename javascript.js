//Create Computer Logic using getComputerChoice Function
//getComputerChoice will return Rock, Paper, or Scissors randomly

//Create a function playRound that plays a round of the game, using two parameters
//playerSelection (use and input) and computerSelection (use function)
//make player input case insensetive, can type the input anyway they'd like
//use if statement to determine the winner
//return string that delcares "You Lose!" + "Paper beats Rock", etc...

//create function game() call playRound inside of this one use loop to 
//play through 5 rounds of the game for (let i = 0; i < 5; i++) {


const rockPaperScissors = ['rock','paper','scissors'];

function getComputerChoice() {
    return rockPaperScissors[Math.floor(Math.random()*rockPaperScissors.length)];
}

//take html input and print answer and return value of the player input in lowercase
const playerSelection = () => {
    let inputValue = document.getElementById("playerAnswer").value;
    document.getElementById("valueInput").innerHTML = inputValue;
    return inputValue.toLowerCase();
}

let computer = getComputerChoice();
let player = prompt('Rock,Paper Scissors? Choose!');

//playRound function sorts win scenarios, if they are not met, it will delcare a tie or L

function playRound(player,computer) {
    if ((player == 'rock' && computer == 'scissors') ||
        (player == 'paper' && computer == 'rock') ||
        (player == 'scissors' && computer == 'paper')) {
            return 'You win!';
        }
    else if (player == computer){
        return 'Tie!';
    }
    else {
        return 'You lose!'
        }

}
  //add value every round
  //keep track of score and report winner at end

const game = () => {
    const playerScore 
    for (let i = 0; i < 5; i++) {