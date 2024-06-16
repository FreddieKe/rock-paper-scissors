// Obtain choice from computer
function getComputerChoice() {
    let choiceNum = Math.floor(Math.random() * 3) + 1;
    console.log(choiceNum)
    switch (choiceNum) {
        case 3: return "scissors"
        case 2: return "rock" 
        case 1: return "paper"
    }
}
// Obtain choice from player
function getPlayerChoice() {
    let keepGoing = 1;
    while (keepGoing === 1) {
        let playerChoice = prompt("Rock, paper, or scissors?").toLowerCase();
        if (playerChoice === "rock"
            || playerChoice === "paper" 
            || playerChoice === "scissors"
        ) return playerChoice;
        else (alert("I did not understand that."))
    }
}

// Set initial scores
let playerScore = 0;
let computerScore = 0;


function playRound() {
    let computerChoice = getComputerChoice();
    console.log(computerChoice);
    let playerChoice = getPlayerChoice();
    console.log(playerChoice);
    compareChoices(computerChoice,playerChoice);   
}

function compareChoices(computerChoice,playerChoice) {
// Check for draw
   if (computerChoice === playerChoice) {
    return alert("It's a draw!");
   }
//    Check if computer won
   if ((computerChoice === "paper"
        && playerChoice === "rock")
        || (computerChoice === "rock"
        && playerChoice === "scissors")
        || (computerChoice === "scissors"
        && playerChoice === "paper"))
    // If computer won alert player
        {alert(`You lose! ${computerChoice} beats ${playerChoice}`);
    // If computer won increase computer
      return computerScore++;}
// Player must have won so alert player
    else {
        alert(`You won! ${playerChoice} beats ${computerChoice}`);
        return playerScore++;}
}
function playGame() {
    // Check if computer or player has won
    while (
        playerScore < 5
        && computerScore < 5
    ) {
        playRound();
    // Tell which player has won
    } if (playerScore === 5) {
        alert(`You won! The score was player: ${playerScore} computer: ${computerScore}`)
    } else {alert(`You lost! The score was player: ${playerScore} computer: ${computerScore}`);
    resetScores();
}}

function resetScores() {
    playerScore = 0;
    computerScore = 0;
}

playGame();
