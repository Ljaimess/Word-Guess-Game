// themes words that are randomized 
var tarotCards = ["the hanged man", "the lovers", "the star",
    "strength", "the world", "the empress"];

// variables
var randomWord = "";
var guesses = 14;
var letterToBeGuessed = [];
var wrongGuesses = [];
var theBlanks = 0;
var toBeGuessedAndGG = [];
var badGuess = [];

//ramdonizes on click
$(".card-roll").on("click", function () {
    //cant random another work
    event.preventDefault();
    randomWord = tarotCards[Math.floor(Math.random() * tarotCards.length)];

    $(this).prop('disabled', true);
    //starts the game on click
    startGame();
});

function startGame() {

    numGuesses = 14;
    letterToBeGuessed = randomWord.split("");
    theBlanks = letterToBeGuessed.length;
    console.log(theBlanks);
    console.log(randomWord);

    toBeGuessedAndGG = [];
    badGuess = [];

    for (var i = 0; i < theBlanks; i++){
        toBeGuessedAndGG.push("_");
    }

    console.log(toBeGuessedAndGG);

    $("#gleft").text(numGuesses);

    $("#blanks").text(toBeGuessedAndGG);

    $("#wrongg").text(badGuess);
    

    
} 

document.onkeyup = function (event) {
    if (event.keyCode >= 65 && event.keyCode <= 90 && event.keyCode === 32) {
        var pressedKey = event.key.toLocaleLowerCase();
    }
};