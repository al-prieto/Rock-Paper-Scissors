const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const displayResults = document.querySelector("#results");

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
  displayResults.innerText = `Human choice: ${humanChoice}\nComputer choice: ${computerChoice}\nResult: ${result[0]}`;
  return result;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  let scores = [humanScore, computerScore];
  for (let i = 0; i < 5; i++) {
    let humanSelection = getHumanChoice().toLowerCase();
    let computerSelection = getComputerChoice(1, 3);
    let result = playRound(humanSelection, computerSelection);

    if (result[1] === 1) {
      humanScore += 1;
    } else if (result[1] === -1) {
      computerScore += 1;
    }

    scores[0] = humanScore;
    scores[1] = computerScore;

    console.log(humanSelection, computerSelection, result[0], scores);
  }

  return scores;
}

function determineWinner(scores) {
  let baseMessage = `Final Scores: Human ${scores[0]}, Computer ${scores[1]}\n`;

  if (scores[0] > scores[1]) {
    return `${baseMessage}You won! 🎉`;
  } else if (scores[0] < scores[1]) {
    return `${baseMessage}Haha, I beat you!🤖`;
  } else {
    return `${baseMessage}Well played, it's a draw! 🤝`;
  }
}

let finalScores = playGame();
let resultMessage = determineWinner(finalScores);

console.log(resultMessage.split("\n")[0]);
alert(resultMessage);

rockButton.addEventListener("click", () => {
  let computerChoice = getComputerChoice();
  playRound("rock", computerChoice);
});

paperButton.addEventListener("click", () => {
  let computerChoice = getComputerChoice();
  playRound("paper", computerChoice);
});

scissorsButton.addEventListener("click", () => {
  let computerChoice = getComputerChoice();
  playRound("scissors", computerChoice);
});
