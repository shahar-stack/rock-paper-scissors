

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


// For getting the human choice we'll need to use the prompt method for user input (assume valid input).

function getHumanChoice() {
    let userChoice = prompt("Enter your choice: Rock, Paper or Scissors");
    return userChoice;
}


function capitalizeFirst (string) {
    let first = string.at(0).toUpperCase();
    string = string.slice(1);
    return first+string;
}

function playRound (humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    humanChoice = capitalizeFirst(humanChoice);
    // Set it to be case-insensitive, human choice will always equal "Rock"/"Paper"/"Scissors"
    // with only the first letter capitalized.

    switch (humanChoice) {
        case "Rock":
            if (computerChoice == "Paper") {
               computerScore++;
               console.log("You lose! Paper beats Rock."); 
            } else if (computerChoice == "Scissors") {
                humanScore++;
                console.log("You win! Rock beats Scissors."); 
            } else {
                console.log(`Tie! You both chose ${humanChoice}`);
            }
            break;
        
        case "Paper":
            if (computerChoice == "Rock") {
                humanScore++;
                console.log("You win! Paper beats Rock."); 
             } else if (computerChoice == "Scissors") {
                 computerScore++;
                 console.log("You lose! Scissors beats Paper."); 
             } else {
                console.log(`Tie! You both chose ${humanChoice}`);
            }
             break;
        
        case "Scissors":
        if (computerChoice == "Rock") {
            humanScore++;
            console.log("You lose! Rock beats Scissors."); 
            } else if (computerChoice == "Paper") {
                computerScore++;
                console.log("You win! Scissors beats Paper."); 
            } else {
                console.log(`Tie! You both chose ${humanChoice}`);
            }
            break;
    }

}

let humanScore = 0;
let computerScore = 0;
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);