
// Math.random generates a random number between 0-1, including 0.
// Multiplies said number by 3 (eg. 0.56341431 * 3 = 1.69).
// Math.floor rounds down to the nearest whole number (1.69 --> 1).
// By multiplying by 3 we will get a whole number between 0 and 2.

function getComputerChoice() {
    num = Math.floor(Math.random()*3);
    
    switch (num) {
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        case 2: 
            return "Scissors";
            break;
        // no need for default
    }
}

let humanScore = 0;
let computerScore = 0;

const scorecard = document.querySelector("#results");
const scorecardHuman = document.querySelector("#human");
const scorecardComputer = document.querySelector("#computer");
const message = document.createElement("p");
const announcement = document.createElement("p");
scorecard.appendChild(message);

function playRound (humanChoice, computerChoice) {
    

    switch (humanChoice) {
        case "Rock":
            if (computerChoice == "Paper") {
                computerScore++;
                message.textContent = "You lose! Paper beats Rock.";
            } else if (computerChoice == "Scissors") {
                humanScore++;
                message.textContent = "You win! Rock beats Scissors.";
            } else {
                message.textContent = `Tie! You both chose ${humanChoice}`;
            }
            break;
        
        case "Paper":
            if (computerChoice == "Rock") {
                humanScore++;
                message.textContent = "You win! Paper beats Rock.";
            } else if (computerChoice == "Scissors") {
                computerScore++;
                message.textContent = "You lose! Scissors beats Paper.";
            } else {
                message.textContent = `Tie! You both chose ${humanChoice}`;
            }
            break;
        
        case "Scissors":
            if (computerChoice == "Rock") {
                computerScore++;
                message.textContent = "You lose! Rock beats Scissors.";
            } else if (computerChoice == "Paper") {
                humanScore++;
                message.textContent = "You win! Scissors beats Paper.";
            } else {
                message.textContent = `Tie! You both chose ${humanChoice}`;
            }
            break;
    }

    scorecardHuman.textContent = `Human Score: ${humanScore}`;
    scorecardComputer.textContent = `Computer Score: ${computerScore}`;

    if (humanScore == 5 || computerScore == 5) {
        scorecard.appendChild(announcement);
        
        if (humanScore == 5) {
        announcement.textContent = "You won 5 turns, congrats! You beat the computer :D.";
        announcement.style.cssText = "color: white; background: green;";
        } else {
            announcement.textContent = "Sadly, you lost to the computer :(.";
            announcement.style.cssText = "color: white; background: red;";
        }
        
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
        
        const resetButton = document.createElement("button");
        resetButton.setAttribute("id", "reset");
        scorecard.appendChild(resetButton);
        resetButton.textContent = "Reset Game";
        resetButton.onclick = () => window.location.reload(); // refresh page


    }
}

let playerSelection;
let computerSelection;
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", () => {
    playerSelection = "Rock";
    computerSelection = getComputerChoice();
    // console.log("Computer selection: " + computerSelection);
    playRound(playerSelection, computerSelection);
});

paper.addEventListener("click", () => {
    playerSelection = "Paper";
    computerSelection = getComputerChoice();
    // console.log("Computer selection: " + computerSelection);
    playRound(playerSelection, computerSelection);
});

scissors.addEventListener("click", () => {
    playerSelection = "Scissors";
    computerSelection = getComputerChoice();
    // console.log("Computer selection: " + computerSelection);
    playRound(playerSelection, computerSelection);
});



