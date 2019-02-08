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

// generates random number & random values for each crystal
function gameStart () {
    var score = 0;
    var wins = 0;
    var losses = 0;
    randomNumber;
    redCrystal;
    blueCrystal;
    yellowCrystal;
    greenCrystal;

    $("#random-number").text(randomNumber);
    $('#wins').text(wins);
    $('#losses').text(losses);
};

gameStart();



$("#redCrystal").on("click", function() {
    score += redCrystal;
        $("#user-number").text(score);
            if (score===randomNumber) {
                wins();
            } else if(score > randomNumber){
                losses();
            };
});

$("#blueCrystal").on("click", function() {
    score += blueCrystal;
        $("#user-number").text(score);
            if (score===randomNumber) {
                wins();
            } else if(score > randomNumber){
                losses();
            };
});

$("#yellowCrystal").on("click", function() {
    score += yellowCrystal;
         $("#user-number").text(score);
            if (score===randomNumber) {
                wins();
            } else if(score > randomNumber){
                losses();
            };
});

$("#greenCrystal").on("click", function() {
    score += greenCrystal;
        $("#user-number").text(score);
            if (score===randomNumber) {
                wins();
            } else if(score > randomNumber){
                losses();
            };
});

// win or lose, compare userNumber to randomNumber and game reset
function wins() {
    wins++;
    alert("You Won!");
    gameStart();
};

function losses () {
    losses++;
    alert("You Lost! Try Again!");
    gameStart();
};


});