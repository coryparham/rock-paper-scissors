// Create variable to hold computer’s selection.
let computerSelection;

// Create variable to hold user’s selection.
let userSelection;

// Create variable to hold user score.
let userScore = 0;

// Create variable to hold computer score.
let computerScore = 0;

// Create function to generate computer’s selection and return the selection into the proper variable. Generate number between 1 & 3, and assign each to a selection. 
function computerPlay() {
    let randNum = Math.floor(Math.random()*3) + 1;
    if (randNum == 1) {
        computerSelection = 'rock';
    } else if (randNum == 2) {
        computerSelection = 'paper'
    } else {
        computerSelection = 'scissors'
    }
    return computerSelection
}

// Prompt user to input their selection. Include validation for either rock, paper, or scissors. Convert input to lower case for sake of comparison.
function userPlay() {
   userSelection = prompt('Rock, paper, or scissors?', '');
   userSelection = userSelection.toLowerCase();
   if (userSelection !== 'rock' && userSelection !== 'paper' && userSelection !== 'scissors') {
       alert('Please enter a valid response.')
       userPlay();
   }
   return userSelection;
}

// Create round function that compares user selection to computer selection and determines a winner. This function calls the computer selection function and prompts the user. Function will compare selections and add 1 to the score of the winner. Do not add in the event of a tie. 
function playRound(computerChoice = computerPlay(), userChoice = userPlay()) {
    let winner;
    if (computerChoice === 'rock') {
        switch (userChoice) {
            case 'rock':
            alert('It\'s a tie!');
            break;

            case 'paper':
            alert('You win! Paper beats Rock.');
            winner = 'user'
            ++userScore;
            break;

            case 'scissors':
            alert('You lose! Rock beats Scissors.');
            winner = 'computer';
            ++computerScore;
            break;
        }
    } else if (computerChoice === 'paper') {
        switch (userChoice) {
            case 'rock':
            alert('You lose! Paper beats rock.');
            winner = 'computer';
            ++computerScore;
            break;

            case 'paper':
            alert('It\'s a tie!');
            break;

            case 'scissors':
            alert('You win! Scissors beats paper.');
            winner = 'user';
            ++userScore;
            break;
        }
    } else {
        switch (userChoice) {
            case 'rock':
            alert('You win! Rock beats scissors.');
            winner = 'user';
            ++userScore;
            break;

            case 'paper':
            alert('You lose! Scissors beats paper.');
            winner = 'computer';
            ++computerScore;
            break;

            case 'scissors':
            alert('It\'s a tie.');
            break;
        }
    }
    
    if (winner === 'user') {
        alert(`You won that round! The score is You: ${userScore} Computer: ${computerScore}.`);
    } else if (winner === 'computer') {
        alert (`You lost that round! The score is You: ${userScore} Computer: ${computerScore}.`);
    } else {
        alert (`That round ended in a tie! The score is You: ${userScore} Computer: ${computerScore}.`);
    }

    return `The score after this round is You: ${userScore} Computer: ${computerScore}`
}

// Create function that plays games until either user or computer wins 5. Use while loop (both scores are less than 5). Run round function. Return “You win” or “You lose”.
function game() {
    while (userScore < 5 && computerScore < 5) {
        playRound();
    }
    alert(`FINAL SCORE You: ${userScore} Computer: ${computerScore}`);
    playAgain();
    return;
}

// Reset variables to 0
function playAgain() {
    let confirmPlayAgain = confirm('Play again?');
    if (confirmPlayAgain) {
        userScore = 0;
        computerScore = 0;
        game();
    } else {
        return;
    }
}

game();