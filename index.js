var words = [
  'bananas',
  'grapes',
  'carousel',
  'milkshake',
  'javascript',
  'limousine',
  'chocolate',
  'programming',
  'meatloaf',
  'ukulele',
  'mango'
]

var validKeys = "abcdefghijklmnopqrstuvwxyz"

var word = document.getElementById("word-to-guess");
var remainingGuesses = document.getElementById("remaining-guesses");
var incorrectLetters = document.getElementById("incorrect-letters");
var wins = document.getElementById("wins");
var losses = document.getElementById("losses");
var previous = document.getElementById("previous-word");

var winCount = 0;
var lossCount = 0;


var randomIndex = 0;

var randomWord = "";

var randomBlanks = [];

var guessesLeft = 10;

var incorrectLettersArray = [];

function setUpGame() {
  randomIndex = Math.floor(Math.random() * words.length);

  randomWord = words[randomIndex];

  randomBlanks = [];

  for (let index = 0; index < randomWord.length; index++) {
    
    randomBlanks.push("_");
    
  }

  word.textContent = randomBlanks.join("");

  guessesLeft = 10;

  remainingGuesses.textContent = guessesLeft;

  incorrectLettersArray = [];

  incorrectLetters.textContent = incorrectLettersArray;

}



document.body.onkeyup = function(e) {
  var guessCorrect = false;

  var guess = e.key.toLowerCase();

  if(!validKeys.includes(guess)) {return}

  
  for (let index = 0; index < randomWord.length; index++) {
    if(guess === randomWord[index]) {
      randomBlanks[index] = guess;
      word.textContent = randomBlanks.join("");
      guessCorrect = true;
    }
  }
  
  if(!guessCorrect && !incorrectLettersArray.includes(guess)) {
    guessesLeft--
    remainingGuesses.textContent = guessesLeft;

    incorrectLettersArray.push(guess);
    incorrectLetters.textContent = incorrectLettersArray;

  }

  if(!randomBlanks.includes("_")) {
    winCount++;
    wins.textContent = winCount;
    previous.textContent = randomWord;
    setUpGame();
  } else if(guessesLeft === 0) {
    lossCount++;
    losses.textContent = lossCount;
    previous.textContent = randomWord;
    setUpGame();
  }
}
setUpGame();
