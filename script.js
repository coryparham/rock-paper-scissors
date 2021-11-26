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

// Create round function that compares user selection to computer selection and determines a winner. This function calls the computer selection function and prompts the user. Function will compare selections and add 1 to the score of the winner. Do not add in the event of a tie. 
function playRound(computerChoice = computerPlay(), userChoice) {
    let winner;
    const div = document.querySelector('#results');
    div.innerHTML = '';

    if (computerChoice === userChoice) {
        const para1 = document.createElement('p');
        para1.textContent = `It is a tie! You have both chosen ${userChoice}.`
        div.appendChild(para1);
    } else if ((computerChoice === 'rock' && userChoice === 'paper') || (computerChoice === 'paper' && userChoice === 'scissors') || (computerChoice === 'scissors' && userChoice === 'rock')) {
        winner = 'win';
        ++userScore;
    } else {
        winner = 'lose';
        ++computerScore;
    }

    const para1 = document.createElement('p');
    const para2 = document.createElement('p');

    if (winner === 'win') {
        para1.textContent = `You ${winner}! ${userChoice.charAt(0).toUpperCase() + userChoice.slice(1)} beats ${computerChoice}!`
    } else if (winner === 'lose') {
        para1.textContent = `You ${winner}! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${userChoice}!`
    }

    div.appendChild(para1);
    para2.textContent = `SCORE  You: ${userScore}   Computer: ${computerScore}`
    div.appendChild(para2);

    if (userScore === 5 || computerScore === 5) {
        endGame();
    }
}

function endGame() {
    const div = document.querySelector('#results');
    div.innerHTML = '';
    const para = document.createElement('p');

    if (userScore > computerScore) {
        para.textContent = `You win! The final score was ${userScore} - ${computerScore}. Choose your next weapon to play again.`
    } else {
        para.textContent = `You lose... The final score was ${userScore} - ${computerScore}. Better luck next time! Choose your next weapon to play again.`
    }

    div.appendChild(para);
    userScore = 0;
    computerScore = 0;
}

function clickToPlay(e) {
    playRound(computerPlay(), e.target.id);
    userSelection = e.target.id;
    return userSelection;
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', clickToPlay));