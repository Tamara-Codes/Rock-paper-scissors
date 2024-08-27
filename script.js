function getComputerChoice(){
    let number = Math.random();
    let computerChoice = "";

    if (number <  0.33){
        computerChoice = "rock";
    } else if (number > 0.33 && number < 0.66){
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }

    return computerChoice;
}


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }


let humanScore = 0;
let computerScore = 0;

const results = document.querySelector("#results");
const winOrLose = document.createElement("div");
const finalResult = document.createElement("div");
const winner = document.createElement("div");
const game = document.querySelector(".game");

function playRound(event) {
    let humanChoice = event.currentTarget.id;
    let computerChoice = getComputerChoice();
    
    winner.textContent= "";
    winner.style.display = 'block';


    if (humanChoice === computerChoice) {
        winOrLose.textContent = `It's a tie!`;
        results.appendChild(winOrLose);
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'scissors' && computerChoice === 'paper') ||
        (humanChoice === 'paper' && computerChoice === 'rock')
    ) {
        humanScore++;
        winOrLose.textContent = `You win! ${capitalizeFirstLetter(humanChoice)} beats ${computerChoice}.`;
        finalResult.textContent = `Your score is ${humanScore} and computer's score is ${computerScore}.`;
        results.appendChild(winOrLose);
        results.appendChild(finalResult);
    } else {
        computerScore++;
        winOrLose.textContent = `You lose! ${capitalizeFirstLetter(computerChoice)} beats ${humanChoice}.`;
        finalResult.textContent = `Your score is ${humanScore} and computer's score is ${computerScore}.`;
        results.appendChild(winOrLose);
        results.appendChild(finalResult);
    }

    if (humanScore === 5){
        winner.textContent = `You win the game!`;
        results.appendChild(winner);
        humanScore = 0;
        computerScore = 0;
    }
    else if (computerScore === 5){
        winner.textContent = "Computer wins the game!";
        results.appendChild(winner);
        humanScore = 0;
        computerScore = 0;

    }

}


const rockButton = document.querySelector("#rock");
rockButton.addEventListener("click", playRound);

const paperButton = document.querySelector("#paper");
paperButton.addEventListener("click", playRound);

const scissorsButton = document.querySelector("#scissors");
scissorsButton.addEventListener("click", playRound);



 




