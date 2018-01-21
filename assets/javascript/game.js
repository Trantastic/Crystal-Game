$(document).ready(function() {

	var wins = 0;
	var losses = 0;

	var targetNumber = 0;
	var currentTotal = 0;

	var crystalArray = ["assets/images/gemRed.svg", "assets/images/gemGreen.svg","assets/images/gemBlue.svg","assets/images/gemYellow.svg"];
	
	newValues();
	startGame();
	
	function startGame() {
		$(".crystal-size").on("click", function() {
		var crystalValue = ($(this).attr("data-crystalvalue"));
		crystalValue = parseInt(crystalValue);

		currentTotal += crystalValue;
		$("#total").html(currentTotal);

		if(currentTotal === targetNumber) {
			wins++;
			document.querySelector("#wins").innerHTML = wins;
			reset();
			newValues();
			startGame();
		}

		else if(currentTotal > targetNumber) {
			losses++;
			$("#losses").html(losses);
			reset();
			newValues();
			startGame();
		}
		});
	};

	function newValues() {
		for(var i = 0; i < crystalArray.length; i++) {
			targetNumber = Math.floor(Math.random() * 120) + 19;
			var crystalOptions = Math.floor(Math.random() * 12) + 1;
			var imageCrystal = $("<img>");

			imageCrystal.addClass("crystal-size");

			imageCrystal.attr("src", crystalArray[i]);

			imageCrystal.attr("data-crystalvalue", crystalOptions);

			$("#crystals").append(imageCrystal);

			$("#targetValue").html(targetNumber);
		}
	};

	function reset() {
		if(wins > 0 || losses > 0) {
			currentTotal = 0;
			$("#total").html("0");
			$("#crystals").empty();
		}

	};
});


















