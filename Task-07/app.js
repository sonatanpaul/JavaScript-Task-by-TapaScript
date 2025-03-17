function rockPaperScissorsGame() {
  const userChoicePrompt = prompt("Enter Rock, Paper, Scissors");
  let userChoice = userChoicePrompt.toLowerCase();

  let computerChoice;
  const randomNumber = Math.floor(Math.random() * 3) + 1;

  switch (randomNumber) {
    case 1:
      computerChoice = "rock";
      break;
    case 2:
      computerChoice = "paper";
      break;
    case 3:
      computerChoice = "scissors";
  }
  console.log("user selected", userChoice);
  console.log("computer selected", computerChoice);

  if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log("You the user Win");
  } else if (userChoice === computerChoice) {
    console.log("The game is Tie");
  } else if (
    (userChoice === "rock" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "rock")
  ) {
    console.log("Computer is Win");
  }

  const playAgainPromt = prompt("Play Again (Yes/No)");
  const playAgain = playAgainPromt ? playAgainPromt.toLowerCase() : "No";

  if (playAgain === "yes") {
    rockPaperScissorsGame();
  } else {
    console.log("Thanks For Playing, See You Next time");
  }
}

rockPaperScissorsGame();

// console.log(Math.random());
