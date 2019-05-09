
$(document).ready(function() {


var targetScore = Math.floor((Math.random() * 120) + 19);
var counter = 0;
var wins = 0;
var losses = 0;
// var crystalOptions = []


$("#targetScore").text(targetScore);
$("#playerScore").text(counter);
$("#wins").text(wins);
$("#losses").text(losses);



var startGame = function() {
    for (var i =0; i < 4; i++) {

    var crystalNum = Math.floor((Math.random() * 12) + 1);
    var imgCrystal = $("<img>");
    imgCrystal.addClass("crystal-image");
    imgCrystal.attr("src", "assets/images/1-rupee1.png");
    imgCrystal.attr("data-crystalValue", crystalNum);
    $("#crystal").append(imgCrystal);



 
$(".crystal-image").on("click", function() {

    var crystalValue = ($(this).attr("data-crystalValue"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;
    $("#playerScore").text(counter);
    

    if (counter === targetScore) {
        wins++;
        $("#wins").text(wins);
        // reset();
        alert("Game Over");

    }

    else if (counter > targetScore) {
        losses++;
        $("#losses").text(losses);
        // reset();
        alert("Game Over");
    } 
    

});

}};

//  var reset = function() {
//     $("#playerScore").text(counter);
//     $("#targetScore").text(targetScore);
//     startGame();

//  };

 startGame ();


})