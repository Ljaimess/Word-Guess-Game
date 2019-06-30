// themes words that are randomized 



var tarotCards = ["the hanged man", "the lovers", "the star",
    "strength", "the world", "the empress"];



// console.log(tarotCards)

// variables

var guesses = 14;
var randomWord = "";
var userGuess = event.key;
// var used = "";
// // var tarotCards = '';
// // var tarotCards = document.getElementById("tarotCards");
// var arrayLength = tarotCards.length;
var chosenWord = [];

$(".card-roll").on("click", function () {
    event.preventDefault();
    randomWord = tarotCards[Math.floor(Math.random() * tarotCards.length)];

    // console.log(randomItem)
    //     // for (var i = 0; i < arrayLength; i++) {

    //         // var tarotCards = $("<tarotCards>");
    //         // alert(tarotCards)
    //         var tarotCards = [Math.floor(Math.random()*tarotCards.length)];
    //         // $("chosen-card").text(tarotCards)
    //         // tarotCards.text(tarotButt);
    //         console.log($(this));
    //     // };
    $(this).prop('disabled', true);
});


for (var i = 0; i < randomWord.length; i++) {
    // chosenWord[i] = "_";
    chosenWord.push("_");

}
if (chosenWord = randomWord || userGuess === "t", "h", "e", "h", "a", "n",
    "g", "e", "d", "m", "a", "n") {
        for (var j = 0; j < chosenWord.length; j++){
            if (word[j] === userGuess){
                chosenWord[j] = userGuess;
                remaingLetters--;
            }


        }




}

// while (guesses < 0){
//       (chosenWord.join(" "));


// }
console.log(chosenWord);
console.log(randomWord);
// user interaction have key events reveal word
// if (randomItem === "the hanged man") {
//     userGuess === "a" || $("#chosen-card").text("___ _a____ _a_")



// }


























// make word appear as its being guessed and used letters appear too
