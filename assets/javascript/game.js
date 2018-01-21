$(document).ready(function() {

	var wins = 0;
	var losses = 0;

	var targetNumber = Math.floor(Math.random() * 120) + 19;
	var currentTotal = 0;

	var crystalArray = ["assets/images/gemRed.svg", "assets/images/gemGreen.svg","assets/images/gemBlue.svg","assets/images/gemYellow.svg"];

//Assigning crystalValues randomly to each of 4 crystals
	for(var i = 0; i < crystalArray.length; i++) {
		var imageCrystal = $("<img>");

		imageCrystal.addClass("crystal-size");

		imageCrystal.attr("src", crystalArray[i]);

		var crystalOptions = Math.floor(Math.random() * 12) + 1;
		imageCrystal.attr("data-crystalvalue", crystalOptions);

		$("#crystals").append(imageCrystal);

		document.querySelector("#targetValue").innerHTML = targetNumber;
	}

	$(".crystal-size").on("click", function() {
		var crystalValue = ($(this).attr("data-crystalvalue"));
		crystalValue = parseInt(crystalValue);

		currentTotal += crystalValue;
		document.querySelector("#total").innerHTML = currentTotal;

		if(currentTotal === targetNumber) {
			wins++;
			document.querySelector("#wins").innerHTML = wins;
			// var currentTotal = 0;
			// var targetNumber = Math.floor(Math.random() * 120) + 19;
		}

		else if(currentTotal > targetNumber) {
			losses++;
			document.querySelector("#losses").innerHTML = losses;
			// var currentTotal = 0;
			// var targetNumber = Math.floor(Math.random() * 120) + 19;
		}

	});
});


















