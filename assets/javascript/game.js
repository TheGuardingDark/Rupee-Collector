
$(document).ready(function() {


var counter = 0;
var wins = 0;
var losses = 0;
var crystalOptions = ["assets/images/greenRupee.png", "assets/images/blueRupeeSm.png", "assets/images/goldRupee.png", "assets/images/redRupee.png"];


$("#targetScore").text(targetScore);
$("#playerScore").text(counter);
$("#wins").text(wins);
$("#losses").text(losses);


var start = function() {

    for (var i =0; i < 4; i++) {

    var crystalNum = Math.floor((Math.random() * 12) + 1);
    var imgCrystal = $("<img>");
    imgCrystal.addClass("crystal-image");
    imgCrystal.attr("src", crystalOptions[i]);
    imgCrystal.attr("data-crystalValue", crystalNum);
    $("#crystal").append(imgCrystal);
    
    }

    var targetScore = Math.floor((Math.random() * 120) + 19);
    $("#targetScore").text(targetScore);


    $(".crystal-image").on("click", function() {

    var crystalValue = ($(this).attr("data-crystalValue"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;
    console.log(crystalValue);
    $("#playerScore").text(counter);
    

    if (counter === targetScore) {
        wins++;
        $("#wins").text(wins);
        alert("Game Over");
        reset();

    }

    else if (counter > targetScore) {
        losses++;
        $("#losses").text(losses);
        alert("Game Over");
        reset();

    } 
    

});

};

 var reset = function() {
     $("#targetScore, #playerScore, #crystal").empty();
     counter = 0;
    start();

 };

 start();


})