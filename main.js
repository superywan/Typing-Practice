var randomWords = require("random-words");

const givenTxt = document.getElementById("givenTxt");
const userInput = document.getElementById("userInput");
const howManyCorrect = document.getElementById("howManyCorrect");

const wordList = randomWords(10);

let counter = 0;
let correctCounter = 0;
let i = 0;

function correctChecker() {
  // Check User typed correctly..
  if (givenTxt.innerText === userInput.value) {
    if (counter != 0) {
      console.log("Correct!");
      correctCounter++;
      howManyCorrect.innerHTML = correctCounter;
    }
  } else {
    console.log("You suck!");
  }
}

function typeWriter() {
  correctChecker();
  // Empty the txtarea and move on to the next word.
  userInput.value = "";
  givenTxt.innerHTML = wordList[i];
  i++;
  counter += 1;
}

userInput.addEventListener("keydown", function(e) {
  //checks whether the pressed key is "Enter"
  if (e.keyCode === 13) {
    // If Counter is over the length of wordList exit the function.
    if (counter >= wordList.length - 1) {
      correctChecker();
      givenTxt.innerText = "--done---";
      return;
    }
    typeWriter();
  }
});
