
$(document).ready(function() {


var counter = 0;
var wins = 0;
var losses = 0;
var crystalOptions = ["assets/images/greenRupee.png", "assets/images/blueRupeeSm.png", "assets/images/goldRupee.png", "assets/images/redRupee.png", "assets/images/purpleRupee.png", "assets/images/whiteRupee.png"];


$("#targetScore").text(targetScore);
$("#playerScore").text(counter);
$("#wins").text(wins);
$("#losses").text(losses);

var random = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
};


var start = function() {

    for (var i =0; i < 4; i++) {

    var crystalNum = random(1,12);
    var imgCrystal = $("<img>");
    imgCrystal.addClass("crystal-image");
    var randomPic = Math.floor(Math.random()*crystalOptions.length) + 0;
    // var randomPic = random(0,crystalOptions.length);
    imgCrystal.attr("src", crystalOptions[randomPic]);
    imgCrystal.attr("data-crystalValue", crystalNum);
    $("#crystal").append(imgCrystal);
    
    }

    var targetScore = random(19,120);
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