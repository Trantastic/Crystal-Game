$(document).ready(function() {

    var wins = 0;
    var losses = 0;

    var targetNumber = 0;
    var currentTotal = 0;

    var crystalArray = ["assets/images/gemRed.svg", "assets/images/gemGreen.svg", "assets/images/gemBlue.svg", "assets/images/gemYellow.svg"];

    var randomValues = [];

    randomizeCrystals();
    newValues();
    startGame();

    function startGame() {
        $(".crystal-size").on("click", function() {
            var crystalValue = ($(this).attr("data-crystalvalue"));
            crystalValue = parseInt(crystalValue);

            currentTotal += crystalValue;
            $("#total").html(currentTotal);

            if (currentTotal === targetNumber) {
                wins++;
                document.querySelector("#wins").innerHTML = wins;
                reset();
                randomizeCrystals();
                newValues();
                startGame();
            } else if (currentTotal > targetNumber) {
                losses++;
                $("#losses").html(losses);
                reset();
            	randomizeCrystals();
                newValues();
                startGame();
            }
        });
    };

    function randomizeCrystals() {
        while(randomValues.length < crystalArray.length) {
            var crystalOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
            
            crystalOptions.sort(function(a, b) {
                return 0.5 - Math.random()
            });
            
            randomValues.push(crystalOptions.splice(0, 1));
        }
       	console.log(crystalOptions);
    };

    function newValues() {
        for (var i = 0; i < crystalArray.length; i++) {
            targetNumber = Math.floor(Math.random() * 101) + 19;

            var imageCrystal = $("<img>");

            imageCrystal.addClass("crystal-size");

            imageCrystal.attr("src", crystalArray[i]);

            imageCrystal.attr("data-crystalvalue", randomValues[i]);

            console.log(randomValues);

            $("#crystals").append(imageCrystal);

            $("#targetValue").html(targetNumber);
        }
    };

    function reset() {
        if (wins > 0 || losses > 0) {
            currentTotal = 0;
            $("#total").html("0");
            $("#crystals").empty();
            randomValues = [];
        }

    };
});