
$(document).ready(function() {


var counter = 0;
var wins = 0;
var losses = 0;
var crystalOptions = ["assets/images/greenRupee.png", "assets/images/blueRupeeSm.png", "assets/images/goldRupee.png", "assets/images/redRupee.png", "assets/images/purpleRupee.png", "assets/images/whiteRupee.png"];


$("#targetScore").text(targetScore);
$("#playerScore").text(counter);
$("#wins").text(wins);
$("#losses").text(losses);

function random(min, max) {
    return Math.floor(Math.random() * (max - min ) ) + min;
};

function shuffle(array) {
    var i = 0;
    var j = 0;
    var temp = null;
    for (i = array.length - 1; i > 0; i-= 1) {
        j = Math.floor(Math.random() * (i + 1));
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array

}; 


function start() {

    $("#imgHolder").html("");
    $(".backCave").show();
    $("#crystal").show();

    for (var i =0; i < 4; i++) {

    var crystalNum = random(1,12);
    var imgCrystal = $("<img>");
    imgCrystal.addClass("crystals");
    imgCrystal.attr("src", crystalOptions[i]);
    imgCrystal.attr("data-crystalValue", crystalNum);
    $("#crystal").append(imgCrystal);
    
    };

    var targetScore = random(19,120);
    $("#targetScore").text(targetScore);


    $(".crystals").on("click", function() {

    var crystalValue = ($(this).attr("data-crystalValue"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;
    // console.log(crystalValue);
    $("#playerScore").text(counter);
    

    if (counter === targetScore) {
        wins++;
        $("#wins").text(wins);
        $(".backCave").hide();
        $("#crystal").hide();

        $("#imgHolder").html("<img src='assets/images/youWon.png' />");
        setTimeout(reset, 2000);
        

    }

    else if (counter > targetScore) {
        losses++;
        $("#losses").text(losses);
        $(".backCave").hide();
        $("#crystal").hide();
        $("#imgHolder").html("<img src='assets/images/youLose.png' />");
        setTimeout(reset, 2000);

    } 
    

});

};

  function reset() {
     $("#targetScore, #playerScore, #crystal").empty();
     counter = 0;
     shuffle(crystalOptions);
    start();

 };

 start();


})