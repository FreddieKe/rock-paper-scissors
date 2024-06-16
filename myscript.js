// Set initial scores
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choiceNum = Math.floor(Math.random() * 3) + 1;
    console.log(choiceNum)
    switch (choiceNum) {
        case 3: return "scissors"
        case 2: return "rock" 
        case 1: return "paper"
    }
}

function playRound(buttonClicked) {
    winnerAnnouncement.textContent = "";
    let computerChoice = getComputerChoice();
    console.log(computerChoice);
    let playerChoice = buttonClicked;
    console.log(playerChoice);
    compareChoices(computerChoice,playerChoice);
    scores.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
    checkForWinner();
}

function compareChoices(computerChoice,playerChoice) {
// Check for draw
   if (computerChoice === playerChoice) {
    results.textContent = "It's a draw!";
   }
//    Check if computer won
   if ((computerChoice === "paper"
        && playerChoice === "rock")
        || (computerChoice === "rock"
        && playerChoice === "scissors")
        || (computerChoice === "scissors"
        && playerChoice === "paper"))
    // If computer won alert player
        {results.textContent = `You lose! ${computerChoice[0].toUpperCase() + computerChoice.substr(1)} beats ${playerChoice}`;
    // If computer won increase computer
      return computerScore++;}
// Player must have won so alert player
    else {
        results.textContent = `You won! ${playerChoice[0].toUpperCase() + playerChoice.substr(1)} beats ${computerChoice}`;
        return playerScore++;}
}

function checkForWinner() {
    if (playerScore === 5) {
        winnerAnnouncement.textContent = "You win! Press a button to restart.";
        resetScores();
    } if (computerScore === 5) {
        winnerAnnouncement.textContent = "Computer wins - game over! Press a button to restart.";
        resetScores();
    }}

function resetScores() {
    playerScore = 0;
    computerScore = 0;
}

// Create variables for buttons
let buttonContainer = document.querySelector(".button-container");
let rockButton = document.querySelector("#rock");
let paperButton = document.querySelector("#paper");
let scissorsButton = document.querySelector("#scissors");

// Set buttons to start rounds

buttonContainer.addEventListener("click", (event) => playRound(event.target.id))


// Results

let results = document.querySelector(".results");
let scores = document.querySelector(".scores");
let winnerAnnouncement = document.querySelector(".winner-announcement")
