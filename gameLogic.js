function getHumanChoice(){
    return window.prompt("Play!")
}
let humanSelection = getHumanChoice().toLowerCase();

console.log(humanSelection)

function getComputerChoice(min, max) {
    let num = Math.floor(Math.random() * (max - min + 1)) + min;
    if (num === 1) {
        return "rock";    
    } else if (num === 2) {
        return "paper"
    } else { 
        return "scissors"
    }
}


  
let computerSelection = getComputerChoice(1, 3); // Genera un número entre 1 y 10

console.log(computerSelection);





let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "paper") {
        return "You lose! Paper beats Rock";
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        return "You win! Rock beats Scissors"
    } else if (humanChoice === "rock" && computerChoice === "rock") {
        return "Draw!"
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        return "You lose! Scissors beats Paper"
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        return "You win! Paper beats Rock"
    } else if (humanChoice === "paper" && computerChoice === "paper") {
        return "Draw!"
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        return "You lose! Rock beats Scissors"
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        return "You win! Scissors beats Paper"
    } else if (humanChoice === "scissors" && computerChoice === "scissors") {
        return "Draw!"
    } else {
        return "Try again!"
    }
}

console.log(playRound(humanSelection, computerSelection))