let playerSelection;
let computerSelection = getComputerChoice();


function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    let computerChoice = "";

    switch(randomNumber) {
        case 0:
            computerChoice = "Rock";
            break;
        case 1:
            computerChoice = "Paper";
            break;
        case 2:
            computerChoice = "Scissors";
            break;
        default:
            break;
    }

    return computerChoice
}

function playRound(playerSelection, computerSelection) {
    let roundResult = "";

    if (playerSelection === "Rock") {
        if (computerSelection === "Paper") {
            roundResult = "You Lose! Paper beats rock";
        } else if (computerSelection === "Scissors") {
            roundResult = "You Win! Rock beats scissors";
        } else {
            roundResult = "It's a tie!"
        }
    }   else if (playerSelection === "Paper") {
        if (computerSelection === "Rock") {
            roundResult = "You Win! Paper beats rock";
        } else if (computerSelection === "Scissors") {
            roundResult = "You Lose! Scissors beats paper";
        } else {
            roundResult = "It's a tie!"
        }
    }   else if (playerSelection === "Scissors") {
        if (computerSelection === "Rock") {
            roundResult = "You Lose! Rock beats scissors";
        } else if (computerSelection === "Paper") {
            roundResult = "You Win! Scissors beats paper";
        } else {
            roundResult = "It's a tie!"
        }
    }

    return roundResult;   
}