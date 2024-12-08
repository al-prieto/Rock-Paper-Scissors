const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const displayResults = document.querySelector("#results");
const resetButton = document.querySelector("#reset");

function getComputerChoice(min, max) {
  let num = Math.floor(Math.random() * (max - min + 1)) + min;
  if (num === 1) {
    return "rock";
  } else if (num === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(humanChoice, computerChoice) {
  let result;

  if (humanChoice === "rock" && computerChoice === "paper") {
    result = ["You lose! Paper beats Rock", -1];
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    result = ["You win! Rock beats Scissors", 1];
  } else if (humanChoice === "rock" && computerChoice === "rock") {
    result = ["Draw!", 0];
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    result = ["You lose! Scissors beats Paper", -1];
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    result = ["You win! Paper beats Rock", 1];
  } else if (humanChoice === "paper" && computerChoice === "paper") {
    result = ["Draw!", 0];
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    result = ["You lose! Rock beats Scissors", -1];
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    result = ["You win! Scissors beats Paper", 1];
  } else if (humanChoice === "scissors" && computerChoice === "scissors") {
    result = ["Draw!", 0];
  } else {
    result = ["Try again!", null];
  }
  if (result[1] === 1) {
    humanScore++;
  } else if (result[1] === -1) {
    computerScore++;
  }

  displayResults.innerText = `Human choice: ${humanChoice}
  \nComputer choice: ${computerChoice}\nResult: ${result[0]}
  \nScore: Human ${humanScore} - Computer ${computerScore}`;

  if (humanScore === 5) {
    displayResults.innerText = `You win! Final scores: Human  ${humanScore} - Computer ${computerScore}`;
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
  } else if (computerScore === 5) {
    displayResults.innerText = `Computer wins! Final scores: Human  ${humanScore} - Computer ${computerScore}`;
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
  }
  return result;
}

function resetGame(params) {
  humanScore = 0;
  computerScore = 0;
  rockButton.disabled = false;
  paperButton.disabled = false;
  scissorsButton.disabled = false;
  displayResults.innerText = "Game restarted! Make your move!";
}

rockButton.addEventListener("click", () => {
  let computerChoice = getComputerChoice(1, 3);
  playRound("rock", computerChoice);
});

paperButton.addEventListener("click", () => {
  let computerChoice = getComputerChoice(1, 3);
  playRound("paper", computerChoice);
});

scissorsButton.addEventListener("click", () => {
  let computerChoice = getComputerChoice(1, 3);
  playRound("scissors", computerChoice);
});

resetButton.addEventListener("click", resetGame);

let humanScore = 0;
let computerScore = 0;
