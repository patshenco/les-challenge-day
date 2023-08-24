//getComputerChoice that randomly returns 'Rock', 'Paper', or 'Scissors'.
function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
// Testing the function
const computerChoice = getComputerChoice();
console.log("Computer choice:", computerChoice);

//- playerSelection and computerSelection - 
function playRound(playerSelection, computerSelection) {
    const playerChoice = playerSelection.toLowerCase();
    const computerChoice = computerSelection.toLowerCase();

    if (playerChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

// Testing the function
const playerSelection = "Rock"; // You can change this to "Paper" or "Scissors"
const computerSelection = getComputerChoice();
const result = playRound(playerSelection, computerSelection);
console.log(result);

//game() that plays a 5 round game, keeps score, and reports a winner or loser at the end. 
function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let round = 1; round <= 5; round++) {
        const playerSelection = prompt("Enter your choice (Rock/Paper/Scissors):");
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);

        console.log(`Round ${round}: ${result}`);

        if (result.includes("Win")) {
            playerScore++;
        } else if (result.includes("Lose")) {
            computerScore++;
        }
    }

    if (playerScore > computerScore) {
        console.log("Congratulations! You win the game!");
    } else if (playerScore < computerScore) {
        console.log("Sorry, you lost the game.");
    } else {
        console.log("It's a tie! The game ended in a draw.");
    }
}

// Start the game
game();
