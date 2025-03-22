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
            round_results.textContent = `You Win! ${humanChoice} beats ${computerChoice}.`;
            scores.textContent = `Player: ${humanScore}\nComputer: ${computerScore}`;
            if (humanScore === 5 || computerScore === 5)
                endGame();
            return;
        }
        else if (computerChoice === "paper") {
            computerScore += 1;
            round_results.textContent = `You Lose! ${computerChoice} beats ${humanChoice}.`;
            scores.textContent = `Player: ${humanScore}\nComputer: ${computerScore}`;
            if (humanScore === 5 || computerScore === 5)
                endGame();
            return;
        }
    }
    else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            humanScore += 1;
            round_results.textContent = `You Win! ${humanChoice} beats ${computerChoice}.`;
            scores.textContent = `Player: ${humanScore}\nComputer: ${computerScore}`;
            if (humanScore === 5 || computerScore === 5)
                endGame();
            return;
        }
        else if (computerChoice === "scissors") {
            computerScore += 1;
            round_results.textContent = `You Lose! ${computerChoice} beats ${humanChoice}.`;
            scores.textContent = `Player: ${humanScore}\nComputer: ${computerScore}`;
            if (humanScore === 5 || computerScore === 5)
                endGame();
            return;
        }
    }
    else {
        if (computerChoice === "paper") {
            humanScore += 1;
            round_results.textContent = `You Win! ${humanChoice} beats ${computerChoice}.`;
            scores.textContent = `Player: ${humanScore}\nComputer: ${computerScore}`;
            if (humanScore === 5 || computerScore === 5)
                endGame();
            return;
        }
        else if (computerChoice === "rock") {
            computerScore += 1;
            round_results.textContent = `You Lose! ${computerChoice} beats ${humanChoice}.`;
            scores.textContent = `Player: ${humanScore}\nComputer: ${computerScore}`;
            if (humanScore === 5 || computerScore === 5)
                endGame();
            return;
        }
    }
    console.log(`Tie! ${humanChoice} ties ${computerChoice}.`);
    round_results.textContent = `Tie! ${humanChoice} ties ${computerChoice}.`;
    scores.textContent = `Player: ${humanScore}\nComputer: ${computerScore}`;
    return;
};

function endGame() {
    if (humanScore > computerScore) {
        final_results.textContent = `GAME OVER! The Human has won the game! (${humanScore}-${computerScore})`;
    }
    else if (humanScore < computerScore) {
        final_results.textContent = `GAME OVER! The Computer has won the game! (${humanScore}-${computerScore})`;
    }
    else if (humanScore === computerScore) {
        final_results.textContent = `GAME OVER! The Human and Computer have tied! (${humanScore}-${computerScore})`;
    };
    return;
}

let humanScore = 0;
let computerScore = 0;

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const results = document.querySelector("#results");

const round_results = document.createElement("p");
const scores = document.createElement("p");
const final_results = document.createElement("p");
round_results.textContent = '';
scores.textContent = `Player: ${humanScore}\nComputer: ${computerScore}`;
final_results.textContent = '';
results.appendChild(round_results);
results.appendChild(scores);
results.appendChild(final_results);

rock.onclick = () => playRound("rock", getComputerChoice());
paper.onclick = () => playRound("paper", getComputerChoice());
scissors.onclick = () => playRound("scissors", getComputerChoice());


