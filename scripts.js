function getComputerChoice() {
    choice = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    if (choice === 1) {
        return "Rock";
    }
    else if (choice === 2) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

let humanScore = 0;
let computerScore = 0;
let round = 1;
function playRound(humanChoice, computerChoice) {
    if (round <= 5) {
        if (humanChoice === computerChoice) {
            alert(`Both players have chosen ${humanChoice}, Draw!\n`);
        }
        else if (computerChoice === "Rock" && humanChoice != "Scissors") {
            alert(`Your opponent have chosen ${computerChoice}. \n${humanChoice} beats ${computerChoice}, You Win!`);
            humanScore += 1;
        }
        else if (computerChoice === "Paper" && humanChoice != "Rock") {
            alert(`Your opponent have chosen ${computerChoice}. \n${humanChoice} beats ${computerChoice}, You Win!`);
            humanScore += 1;
        }
        else if (computerChoice === "Scissors" && humanChoice != "Paper") {
            alert(`Your opponent have chosen ${computerChoice}. \n${humanChoice} beats ${computerChoice}, You Win!`);
            humanScore += 1;
        }
        else {
            alert(`Your opponent have chosen ${computerChoice}. \n${humanChoice} Loses to ${computerChoice}, You Lose!`);
            computerScore += 1;
        }
        resultText = `Round ${round} \nYour score: ${humanScore} \nOpponent's score: ${computerScore}`;
        resultsDiv.innerText = resultText;

        round += 1;
        
        if (round > 5) {
            let finalMessage = ``;
            if (humanScore === computerScore) {
                finalMessage = `Your score: ${humanScore} \nOpponent's score: ${computerScore} \n It's a Draw!`;
                resultsDiv.innerText = finalMessage;
            }
            else if (humanScore > computerScore) {
                finalMessage = `Your score: ${humanScore} \nOpponent's score: ${computerScore} \n You won the game!`;
                resultsDiv.innerText = finalMessage;
            }
            else if (humanScore < computerScore) {
                finalMessage = `Your score: ${humanScore} \nOpponent's score: ${computerScore} \n You lost the game, better luck next time!`;
                resultsDiv.innerText = finalMessage;
            }
        }
    }
}

// DOM Manipulation

const rockButton = document.createElement("button");
const rockButtonContent = document.createTextNode("Rock");

const paperButton = document.createElement("button");
const paperButtonContent = document.createTextNode("Paper");

const scissorsButton = document.createElement("button");
const scissorsButtonContent = document.createTextNode("Scissors");

rockButton.appendChild(rockButtonContent);
paperButton.appendChild(paperButtonContent);
scissorsButton.appendChild(scissorsButtonContent);

document.body.insertBefore(rockButton, document.currentScript);
document.body.insertBefore(paperButton, document.currentScript);
document.body.insertBefore(scissorsButton, document.currentScript);

rockButton.addEventListener("click", e => playRound("Rock", getComputerChoice()));
paperButton.addEventListener("click", e => playRound("Paper", getComputerChoice()));
scissorsButton.addEventListener("click", e => playRound("Scissors", getComputerChoice()));

const resultsDiv = document.createElement("div");
document.body.insertBefore(resultsDiv, document.currentScript);
