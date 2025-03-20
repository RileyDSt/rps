// Declare the players score variables
    // humanScore and computerScore = 0
// Write the logic to play a single round
// Write the logic to play the entire game

function getComputerChoice() {
    choice = Math.random()
    if (choice <= .333) {
        return "rock"
    }
    else if (.333 < choice, choice <= .666) {
        return "paper"
    }
    else {
        return "scissors"
    }
}

function getHumanChoice() {
    userInput = prompt("rock, paper or scissors?")
    return userInput.toLowerCase()
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock") {
        if (computerChoice === "scissors") {
            humanScore += 1
            console.log("You win! Rock beats Scissors.")
            return
        }
        else if (computerChoice === "paper") {
            computerScore += 1
            console.log("You lose! Paper beats Rock.")
            return
        }
    }
    else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            humanScore += 1
            console.log("You win! Paper beats Rock.")
            return
        }
        else if (computerChoice === "scissors") {
            computerScore += 1
            console.log("You lose! Scissors beats Paper.")
            return
        }
    }
    else {
        if (computerChoice === "paper") {
            humanScore += 1
            console.log("You win! Scissors beats Paper.")
            return
        }
        else if (computerChoice === "rock") {
            computerScore += 1
            console.log("You lose! Rock beats Scissors.")
            return
        }
    }
    console.log('Tie! ${humanChoice} ties ${computerChoice}')
    return
}


humanScore = 0
computerScore = 0

const humanSelection = getHumanChoice()
const computerSelection = getComputerChoice()
playRound(humanSelection, computerSelection)