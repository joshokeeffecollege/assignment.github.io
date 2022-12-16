// ----------
// GAME - Josh
// ----------

// VARIABLES
// Generates a random between 1 and 10
var num = Math.floor(Math.random() * 10) + 1;

// sets the amount of remaining guesses
var guessesRemaining = 3;

// Declares the result variable to be used in gameOver()
var result;

// FUNCTIONS
// A function to hide and show the different "pages"
function show(elementID) {
  var element = document.getElementById(elementID);
  if (!element) {
    alert("No Such Page Found.");
    return;
  }
  var pages = document.getElementsByClassName("page");
  for (var i = 0; i < pages.length; i++) {
    pages[i].style.display = "none";
  }
  element.style.display = "block";
}

// A function to check the entered guess
function guess() {
  var guess = parseInt(document.getElementById("guess").value);

  if (guessesRemaining > 1) {
    if (isNaN(guess) || guess < 0 || guess > 10) {
      document.getElementById("output").innerHTML = "Invalid input";
    } else if (guess == num) {
      gameOver("win");
    } else if (guess < num) {
      document.getElementById("output").innerHTML = "Guess too low";
      guessesRemaining -= 1;
      guesses();
    } else if (guess > num) {
      document.getElementById("output").innerHTML = "Guess too high";
      guessesRemaining -= 1;
      guesses();
    }
  } else {
    gameOver("lose");
    replay();
  }
}

// A function to keep track of and update the guessesRemaining variable
function guesses() {
  document.getElementById("guesses").innerHTML = `Guesses: ${guessesRemaining}`;
}

function gameOver(result) {
  var gameOver = document.getElementById("gameOver");
  var gamePlay = document.getElementById("gamePlay");
  gamePlay.style.display = "none";
  gameOver.style.display = "block";

  if (result == "lose") {
    document.getElementById("header").innerHTML = "Game Over";
    document.getElementById("msg").innerHTML = `The correct answer was ${num}`;
  } else {
    document.getElementById("header").innerHTML = "You win!";
    document.getElementById("msg").innerHTML = "Your guess was correct!";
  }
}

// A function to reset the number and the remaining guesses
function replay() {
  num = Math.floor(Math.random() * 10) + 1;
  guessesRemaining = 3;
  document.getElementById("output").innerHTML =
    "Enter a guess and press submit";
  guesses();
  clearGuess();
}

// Clears the input field
function clearGuess() {
  var clearGuess = document.getElementById("guess");
  if (clearGuess.value != "") {
    clearGuess.value = "";
  }
}

// ----------
// FORM - Brad
// ----------

// function validate() {
//   //set valid to true - flag
//   var valid = true;
//   var msge = "Incomplete form, "; //set up the msge
//   //use if statements to check the data and set the message
//   if (document.getElementById("fn").value == "") {
//     msge += "You need to fill in First name ";
//     valid = false;
//   }
//   if (document.getElementById("a").value == "") {
//     msge += "You need to fill in your Age ";
//     valid = false;
//   }
//   if (!valid) {
//     //Same as valid == false
//     document.getElementById("msge").innerHTML = msge;
//   }
//   return valid;
// }

function validateForm() {
  let firstname = document.forms["myForm"]["fn"].value;
  let age = document.forms["myForm"]["age"].value;
  let password = document.forms["myForm"]["password"].value;
  let phone = document.forms["myForm"]["phone"].value;

  if (firstname == "" || age == "" || password == "" || phone == "") {
    document.getElementById("msge").innerHTML =
      "Please fill in the required field";
    return false;
  } else {
    document.getElementById("msge").innerHTML = "Thanks for signing up";
    return false;
  }
}

// ----------
// GALLERY - Matiss
// ----------
