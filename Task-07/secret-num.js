/**
 * Let us play a number guessing game.
 * You will ask user for a number between 1 to 10. Once user will enter a number, you will tell user if the entered number is lower or higher. With this information, user will change the number and finally guess the right number. You also need to show the number of attempts made by users to rach to this right guess.
 */

const minNumber = 1;
const maxNumber = 10;

function secretNumberGame() {
  const secretNumber = Math.floor(Math.random() * 10) + 1;
  let attempts = 0;
  let guess = null;

  while (guess !== secretNumber) {
    const guessPromt = prompt("Enter Your Guess Number?");
    guess = parseInt(guessPromt);

    if (isNaN(guess) || guess < minNumber || guess > maxNumber) {
      console.log("Invalid Number");
      continue;
    }
    attempts++;

    if (guess < secretNumber) {
      console.log("To Low, Try Again");
    } else if (guess > secretNumber) {
      console.log("To High, Try Again");
    } else {
      console.log(
        `Congratulations You guessed the number in ${attempts} attempts. `
      );
      break;
    }
  }

  const playAgainPromt = prompt("Play Again (Yes/ No)");
  const playAgain = playAgainPromt ? playAgainPromt.toLowerCase() : "No";

  if (playAgain === "yes") {
    secretNumberGame();
  } else {
    console.log("Thank You Playing Game, See you next time");
  }
}

secretNumberGame();
