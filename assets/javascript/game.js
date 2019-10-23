
var computerOptions = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var wins = 0;
var losses = 0;
var guessesRemaining = 10;
var lettersGuessed = [];
var indivLetters = null;

var computerGuess = "";

function numberGuessesRemaining() {
    document.querySelector("#guessesRemaining").innerHTML= "Remaining Guesses:" + guessesRemaining;
}

function userGuesses() {
    document.querySelector("#lettersGuessed").innerHTML = "what you've guessed:" + lettersGuessed.join(' ');

}

numberGuessesRemaining();

var reset = function(){
    guessesRemaining = 9;
    lettersGuessed = [];
    computerGuess = computerOptions[Math.floor(Math.random()*computerOptions.length)];
    console.log(computerGuess)
}

document.onkeyup = function(event){
    guessesRemaining--;
    var userGuess = String.fromCharCode(event.keyCode).toUpperCase();

    lettersGuessed.push(userGuess);
    numberGuessesRemaining();
    userGuesses();

    if(userGuess === computerGuess){
        wins++;
        document.querySelector("#wins").innerHTML = "Wins:" + wins;
        reset();
    }
    else if(guessesRemaining === 0){
        losses++;
        document.querySelector("#Losses").innerHTML = "Losses:" +losses;
        reset();
    }
}