function getComputerChoice() {
    choice = Math.random()
    if (choice <= .333) {
        return "rock";
    }
    else if (.333 < choice, choice <= .666) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice() {
    userInput = prompt("rock, paper or scissors?");
    return userInput.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock") {
        if (computerChoice === "scissors") {
            humanScore += 1;
            console.log(`You Win! ${humanChoice} beats ${computerChoice}.`);
            return;
        }
        else if (computerChoice === "paper") {
            computerScore += 1;
            console.log(`You Lose! ${computerChoice} beats ${humanChoice}.`);
            return;
        }
    }
    else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            humanScore += 1;
            console.log(`You Win! ${humanChoice} beats ${computerChoice}.`);
            return;
        }
        else if (computerChoice === "scissors") {
            computerScore += 1;
            console.log(`You Lose! ${computerChoice} beats ${humanChoice}.`);
            return;
        }
    }
    else {
        if (computerChoice === "paper") {
            humanScore += 1;
            console.log(`You Win! ${humanChoice} beats ${computerChoice}.`);
            return;
        }
        else if (computerChoice === "rock") {
            computerScore += 1;
            console.log(`You Lose! ${computerChoice} beats ${humanChoice}.`);
            return;
        }
    }
    console.log(`Tie! ${humanChoice} ties ${computerChoice}.`);
    return;
}

function main() {
    for (i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log(`Player: ${humanScore}\nComputer: ${computerScore}`);
    }
    if (humanScore > computerScore) {
        console.log(`GAME OVER! The Human has won the game! (${humanScore}-${computerScore})`)
    }
    else if (humanScore < computerScore) {
        console.log(`GAME OVER! The Computer has won the game! (${humanScore}-${computerScore})`)
    }
    if (humanScore === computerScore) {
        console.log(`GAME OVER! The Human and Computer have tied! (${humanScore}-${computerScore})`)
    }
}

let humanScore = 0;
let computerScore = 0;
main();


