function getComputerChoice() {
    choice = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    if (choice === 1) 
    {
        console.log(`Your opponent have chosen Rock`);
        return "Rock";
    }
    else if (choice === 2)
    {
        console.log(`Your opponent have chosen Paper`);
        return "Paper";
    }
    else 
    {
        console.log(`Your opponent have chosen Scissors`);
        return "Scissors";
    }
}

function capitalize(word){
    let letters = word.toLowerCase().split('');
    letters[0] = letters[0].toUpperCase();
    return letters.join('');
}

round = 1;
function getHumanChoice() {
    validChoices = ["Rock", "Paper", "Scissors"];
    choice = prompt(`(Round ${round}) Enter your choice: `);
    choice = capitalize(choice);

    while(!validChoices.includes(choice))
        {
        choice = prompt(`${choice} is not a valid entry! \n(Round ${round}) Enter your choice:`);
        choice = capitalize(choice);
    }
    console.log(`You have chosen ${choice}`)
    return choice;
}

humanScore = 0;
computerScore = 0;
function playRound(humanChoice, computerChoice) {
    humanChoice = capitalize(humanChoice);
    if (humanChoice === computerChoice) console.log(`Both players have chosen ${humanChoice}, Draw!`);

    else if (computerChoice === "Rock" && humanChoice != "Scissors") 
    {
        console.log(`${humanChoice} Beats ${computerChoice}, You Win!`);
        humanScore += 1;
    }
    else if (computerChoice === "Paper" && humanChoice != "Rock") 
    {
        console.log(`${humanChoice} Beats ${computerChoice}, You Win!`);
        humanScore += 1;
    }
    else if (computerChoice === "Scissors" && humanChoice != "Paper") 
    {
        console.log(`${humanChoice} Beats ${computerChoice}, You Win!`);
        humanScore += 1;
    }
    else 
    {
        console.log(`${humanChoice} Loses to ${computerChoice}, You Lose!`);
        computerScore += 1;
    }
}

while (round <= 5) {
    playRound(getHumanChoice(), getComputerChoice());
    round += 1;
}

console.log(`Your score: ${humanScore} \n
Opponent's score: ${computerScore}`);

if (humanScore > computerScore) console.log("Congratulations, you won the game!");
else if (computerScore > humanScore) console.log("Oops, you lost. Better luck next time!");
else console.log("It's a Draw!")