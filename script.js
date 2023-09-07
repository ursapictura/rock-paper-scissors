
function getComputerChoice(){
    let x = Math.floor(Math.random() * 3)
            console.log(x);
    
    if (x < 1) {
       // x = 0;
        console.log("rock");
        var computerChoice = "rock";
    }
    else if (x == 1) {
       // x = 1;
        console.log("paper");
        var computerChoice = "paper";
    }
    else if (x > 1) {
      //  x = 2;
        console.log("scissors");
        var computerChoice = "scissors";
    }
    return computerChoice;
    console.log(computerChoice);
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == "rock" && computerSelection == "scissors") {
    return ("You win! Rock crushes scissors!")
  }
  else if (playerSelection == "rock" && computerSelection == "paper") {
    return ("You lose! Paper covers rock!");
  }
  else if (playerSelection == "scissors" && computerSelection == "rock") {
    return ("You lose! Rock crushes scissors!");
  }
  else if (playerSelection == "scissors" && computerSelection == "paper") {
    return ("You win! Scissors cuts paper!");
  }
  else if (playerSelection == "paper" && computerSelection == "scissors") {
    return ("You lose! Scissors cuts paper!");
  }
  else if (playerSelection == "paper" && computerSelection == "rock") {
    return ("You win! Paper covers rock!");
  }
  else if (playerSelection == computerSelection) {
    return ("You tied! Try again!");
  }
  else {
    return ("Something went wrong");
  }
  
}

let userInput = prompt("Ready to play? Choose Rock, Paper, or Scissors!").toLowerCase();
    console.log(userInput);
 
const playerSelection = userInput;
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

/* create function for computer response */

/* randomize computer response using Math.random */

/* assign if/else values to Math.random return */

/* request user input Rock, Paper, or Scissors */

/* compare input against computer response */

/* create hierarchy for responses */