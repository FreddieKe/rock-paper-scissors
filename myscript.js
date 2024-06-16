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
    let computerChoice = getComputerChoice();
    console.log(computerChoice);
    let playerChoice = buttonClicked;
    console.log(playerChoice);
    compareChoices(computerChoice,playerChoice);   
}

function compareChoices(computerChoice,playerChoice) {
// Check for draw
   if (computerChoice === playerChoice) {
    return console.log("It's a draw!");
   }
//    Check if computer won
   if ((computerChoice === "paper"
        && playerChoice === "rock")
        || (computerChoice === "rock"
        && playerChoice === "scissors")
        || (computerChoice === "scissors"
        && playerChoice === "paper"))
    // If computer won alert player
        { console.log(`You lose! ${computerChoice} beats ${playerChoice}`);
    // If computer won increase computer
      return computerScore++;}
// Player must have won so alert player
    else {
        console.log(`You won! ${playerChoice} beats ${computerChoice}`);
        return playerScore++;}
}

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


