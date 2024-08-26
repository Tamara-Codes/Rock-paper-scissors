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

function getHumanChoice(){

    while (true) {
        let humanChoice = prompt("Please enter your choice of rock, paper or scissors: ").toLowerCase();

        if (humanChoice == "rock" || humanChoice == "paper" || humanChoice == "scissors"){
            return humanChoice;
        } 
}
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }


function playGame(){

    let humanScore = 0;
    let computerScore = 0;

    function playRound(){

        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        
        if (humanChoice === computerChoice) {
            return  console.log("It's a tie!");
          }
    
        if (
            (humanChoice === 'rock' && computerChoice === 'scissors') ||
            (humanChoice === 'scissors' && computerChoice === 'paper') ||
            (humanChoice === 'paper' && computerChoice === 'rock')
          ) {
            humanScore++
            return console.log(`You win! ${capitalizeFirstLetter(humanChoice)} beats ${computerChoice}.`);
          } 
        else {
            computerScore++
            return console.log(`You lose! ${capitalizeFirstLetter(computerChoice)} beats ${humanChoice}.`);
          }
        }

    for (i=0; i<5; i++){
         playRound();
    }

    return console.log("Your score is " + humanScore + " and computer's score is " + computerScore);
}



playGame();

