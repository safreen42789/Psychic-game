 
$(document).ready(function() {
    let numWins = 0;
    let numLoses = 0;
    let numGuesses = 9;
    let guessBank = [];
    let computerPicks = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

document.onkeyup = function(event) {

    var userPicks = String.fromCharCode(event.keyCode).toLowerCase();

    let computerGuess = computerPicks[Math.floor(Math.random() * computerPicks.length)];
    guessBank.push(userPicks);
    

    if (userPicks === computerGuess){
        numWins ++ ;
        numGuesses = 9;
        guessBank = [];
        let computerGuess = computerPicks[Math.floor(Math.random() * computerPicks.length)];

    }
    else if (numGuesses == 0) {
        numGuesses = 9;
        numLoses ++;
        guessBank = [];
        let computerGuess = computerPicks[Math.floor(Math.random() * computerPicks.length)];


    }

    else if (userPicks !== computerGuess){
        numGuesses = numGuesses - 1;
        guessBank.lenth = 0;

    }

    let html =
    "<h1>The Psychic Game </h1>" +
    "<p>Guess what letter I'm thinkng of: " + userPicks + "</p>" +
    "<p>Wins: " + numWins + "</p>" +
    "<p>Loses: " + numLoses + "</p>" +
    "<p>Guesses Left: " + numGuesses + "</p>" +
    "<p>Your guesses so far: " + guessBank + "</p>";

    document.querySelector('#psychicgame').innerHTML = html;
    

};
});
