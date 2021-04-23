/**
 * Guess The Number Game
 * DONE: Get user value from input and save it to variable numberGuess
 * DONE: Generate a random number 1 to 100 and save it to variable correctNumber
 * DONE: Console whether the guess is too high, too low, or is correct inside playGame function
 * DONE: Create a function called displayResult to move the logic for if the guess is too high, too low, or correct
 * DONE: Complete the showYouWon, showNumberAbove, showNumberBelow
 * DONE: Use the showYouWon... functions within displayResult to display the correct dialog
 * DONE: Save the guess history in a variable called guess
 * DONE: Display the guess history using displayHistory() function
 * TODO: Use the initGame() function to restart the game
 */

// Variable to store the list of guesses 
let guesses = [];


// Variable for store the correct random number 
let correctNumber = getRandomNumber();

window.onload = function() {
    document.getElementById("number-submit").addEventListener("click", playGame);
    document.getElementById("restart-game").addEventListener("click", initGame);
    showYouWon();
}

// function for play game 
function playGame() {
   let numberGuess = document.getElementById('number-guess').value;
   displayResult(numberGuess);
   saveGuessHistory(numberGuess);
   displayHistory();
}

// function for restart game
function initGame() {
    correctNumber = getRandomNumber();
    document.getElementById("result").innerHTML = "";
    guesses = [];
    displayHistory();
}

function getRandomNumber() {
    let randomNumber = Math.random();
    let wholeNumber = Math.floor(randomNumber * 100) + 1;
    return wholeNumber;
}

//show the result if the guess is to high or to low

function displayResult(numberGuess) {
    if(numberGuess > correctNumber){
        showNumberAbove();
    }
    else if(numberGuess < correctNumber){
        showNumberBelow();
    }
    else{
        showYouWon();   
    }
}

function getDialog(dialogType, text){
    let dialog;
    switch(dialogType){
      case "warning":
        dialog = "<div class='alert alert-warning' role='alert'>"
        break;
      case "won":
        dialog = "<div class='alert alert-success' role='alert'>"
        break;
    }
    dialog += text;
    dialog += "</div>"
    return dialog;
  }

function showYouWon() {
    const text = "Awesome job!!. You got it."
    let dialog = getDialog('won',text);
    document.getElementById("result").innerHTML = dialog;
}

function showNumberAbove() {
  const text = "Your guess is to high."
  let dialog = getDialog('warning', text);
  document.getElementById("result").innerHTML = dialog;
}

function showNumberBelow() {
  const text = "Your guess is to low."
  let dialog = getDialog('warning', text);
  document.getElementById("result").innerHTML = dialog;
}

function saveGuessHistory(guess) {
    guesses.push(guess);
    console.log(guesses);
}

/**
 * Display guess history to user
 * HTML TO USE:
 * <ul class='list-group'>
 *  <li class='list-group-item'>You guessed {number}</li
 * </ul>
 * HINT: use while loop and string concatentation to create a list of guesses
 */
function displayHistory() {
    let index = guesses.length-1;
    let list = "<ul class ='list-group'>"
    while (index > 0) {
        list +=  "<li class='list-group-item'>" +
        "You guessed" + guesses[index] + "</li>";
        index -= 1;
    }
    list += "</ul>";
    document.getElementById("history").innerHTML = list;
}