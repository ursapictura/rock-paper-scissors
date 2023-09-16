
let playerScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let x = Math.floor(Math.random() * 3)
            console.log(x);
    
    if (x < 1) {
        console.log("rock");
        var computerChoice = "rock";
    }
    else if (x == 1) {
        console.log("paper");
        var computerChoice = "paper";
    }
    else if (x > 1) {
        console.log("scissors");
        var computerChoice = "scissors";
    }
    return computerChoice;
    console.log(computerChoice);
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == "rock" && computerSelection == "scissors") {
    playerScore++;
    console.log(playerScore);
    return "You win! Rock crushes scissors!";
  }
  else if (playerSelection == "rock" && computerSelection == "paper") {
    computerScore++;
    console.log(computerScore);
    return "You lose! Paper covers rock!";
  }
  else if (playerSelection == "scissors" && computerSelection == "rock") {
    computerScore++;
    console.log(computerScore);
    return "You lose! Rock crushes scissors!";
  }
  else if (playerSelection == "scissors" && computerSelection == "paper") {
    playerScore++;
    console.log(playerScore);
    return "You win! Scissors cuts paper!";
  }
  else if (playerSelection == "paper" && computerSelection == "scissors") {
    computerScore++;
    console.log(computerScore);
    return "You lose! Scissors cuts paper!";
  }
  else if (playerSelection == "paper" && computerSelection == "rock") {
    playerScore++;
    console.log(playerScore);
    return "You win! Paper covers rock!";
  }
  else if (playerSelection == computerSelection) {
    return "You tied! Try again!";
  }
  else {
    return "Something went wrong";
  }
}
 

function game() {
    for (i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice();
        let userInput = prompt("Ready to play? Choose Rock, Paper, or Scissors!").toLowerCase();
        console.log(userInput);
        const playerSelection = userInput;
        playRound (playerSelection, computerSelection);
        console.log (playRound());
    }

    if (playerScore > computerScore) {
        return "Congratulations! You won!";
    }
    else if (computerScore > playerScore) {
        return "Sorry, but you lost! Better luck next time!";
    }
    else {
        return "You tied!";
    }
 }

 console.log (game())

/* create function for computer response */

/* randomize computer response using Math.random */

/* assign if/else values to Math.random return */

/* request user input Rock, Paper, or Scissors */

/* compare input against computer response */

/* create hierarchy for responses */