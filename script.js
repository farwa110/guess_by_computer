let targetNumber; // The number the computer is trying to guess
let min = 0; // The minimum possible number
let max = 100; // The maximum possible number
let guessCount = 0; // Counter for guesses
let currentGuess; // Current guess of the computer

// Function to start the game
function startGame() {
  // Reset game variables
  min = 0;
  max = 100;
  guessCount = 0;
  document.getElementById("message").innerHTML = "The computer is guessing...";
  document.getElementById("highButton").disabled = false;
  document.getElementById("lowButton").disabled = false;
  document.getElementById("correctButton").disabled = false;

  // Make the first guess
  guessNumber();
}

// Function to make a guess
function guessNumber() {
  currentGuess = Math.floor((min + max) / 2);
  guessCount++;
  document.getElementById("message").innerHTML = `Is your number ${currentGuess}?`;
}

// Functions to handle user feedback
function tooHigh() {
  max = currentGuess - 1;
  guessNumber();
}

function tooLow() {
  min = currentGuess + 1;
  guessNumber();
}

function correct() {
  document.getElementById("message").innerHTML = `The computer guessed your number ${currentGuess} in ${guessCount} guesses!`;
  document.getElementById("highButton").disabled = true;
  document.getElementById("lowButton").disabled = true;
  document.getElementById("correctButton").disabled = true;
}

// Event listeners for buttons
document.getElementById("startButton").addEventListener("click", startGame);
document.getElementById("highButton").addEventListener("click", tooHigh);
document.getElementById("lowButton").addEventListener("click", tooLow);
document.getElementById("correctButton").addEventListener("click", correct);

document.getElementById("correctButton").addEventListener("click", function () {
  const balloons = document.getElementById("balloons");
  balloons.style.display = "block"; // Show balloons

  // Hide after animation completes
  setTimeout(() => {
    balloons.style.display = "none";
  }, 5000);
});
//sound to animation///
function correct() {
  document.getElementById("message").innerHTML = `The computer guessed your number ${currentGuess} in ${guessCount} guesses!`;
  document.getElementById("highButton").disabled = true;
  document.getElementById("lowButton").disabled = true;
  document.getElementById("correctButton").disabled = true;

  const balloons = document.getElementById("balloons");
  balloons.style.display = "block"; // Show balloons

  const sound = document.getElementById("balloonSound");
  sound.play(); // Play sound

  // Stop the sound after 4 seconds
  setTimeout(() => {
    sound.pause();
    sound.currentTime = 0; // Reset the sound to the beginning
  }, 4000);

  // Hide balloons after 5 seconds
  setTimeout(() => {
    balloons.style.display = "none";
  }, 5000);
}
document.querySelectorAll(".balloon").forEach((balloon) => {
  balloon.addEventListener("click", () => {
    const sound = document.getElementById("balloonSound");
    sound.play();

    // Stop the sound after 4 seconds
    setTimeout(() => {
      sound.pause();
      sound.currentTime = 0; // Reset the sound to the beginning
    }, 4000);
  });
});
