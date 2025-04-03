
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

function playRound (humanChoice, computerChoice) {
    

    switch (humanChoice) {
        case "Rock":
            if (computerChoice == "Paper") {
                computerScore++;
            } else if (computerChoice == "Scissors") {
                humanScore++;
            } else {
                humanScore = humanScore;
                computerScore = computerScore;
            }
            break;
        
        case "Paper":
            if (computerChoice == "Rock") {
                humanScore++;
                } else if (computerChoice == "Scissors") {
                    computerScore++;
                } else {
                    humanScore = humanScore;
                    computerScore = computerScore;
                }
                break;
        
        case "Scissors":
            if (computerChoice == "Rock") {
                computerScore++;
                } else if (computerChoice == "Paper") {
                    humanScore++;
                } else {
                    humanScore = humanScore;
                    computerScore = computerScore;
                }
                break;
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



