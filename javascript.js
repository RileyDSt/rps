// Write the logic to get the computer choice
// Write the logic to get the human choice
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

console.log(getComputerChoice())