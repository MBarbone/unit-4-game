$(document).ready(function() {
    
"use strict"

// generate random number each new game
var randomNumber = (Math.floor(Math.random() *(120-19) + 19));

// wins and losses counter
var wins= 0;
var losses= 0;
var score= 0;

// crystals- will need to generate new random value each new game
var redCrystal= (Math.floor(Math.random() *(12-1) + 1));
var blueCrystal= (Math.floor(Math.random() *(12-1) + 1));
var yellowCrystal= (Math.floor(Math.random() *(12-1) + 1));
var greenCrystal= (Math.floor(Math.random() *(12-1) + 1));


// functions


// sound functions

function playCorrect() {
    document.getElementById('correct-answer').play();
};

// function playWrong() {
//     document.getElementById('wrong-answer').play();
// };


// generates random number & random values for each crystal
function gameStart() {
    var score= 0;
    var wins= 0;
    var losses= 0;
    randomNumber;
    redCrystal;
    blueCrystal;
    yellowCrystal;
    greenCrystal;

    $("#random-number").text(randomNumber);
    $("#user-number").text(score);
};

gameStart();


// win or lose, compare userNumber to randomNumber and game reset
function winner() {
    wins++;
    playCorrect();
    alert("You Won!");
    $("#wins").text(wins);
    gameStart();
};

function loser() {
    losses++;
    // playWrong();
    alert("You Lost! Try Again!");
    $("#losses").text(losses);
    gameStart();
};



$("#redCrystal").on("click", function() {
    score += redCrystal;
        $("#user-number").text(score);
            if(score===randomNumber){
                winner();
            } else if(score > randomNumber){
                loser();
            };
});

$("#blueCrystal").on("click", function() {
    score += blueCrystal;
        $("#user-number").text(score);
            if(score===randomNumber) {
                winner();
            } else if(score > randomNumber){
                loser();
            };
});

$("#yellowCrystal").on("click", function() {
    score += yellowCrystal;
         $("#user-number").text(score);
            if(score===randomNumber) {
                winner();
            } else if(score > randomNumber){
                loser();
            };
});

$("#greenCrystal").on("click", function() {
    score += greenCrystal;
        $("#user-number").text(score);
            if(score===randomNumber) {
                winner();
            } else if(score > randomNumber){
                loser();
            };
});

});