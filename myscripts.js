

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

