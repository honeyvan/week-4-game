$(document).ready(function() {

	var wins = 0;
	var losses = 0;
	var score = 0;
	var random;
	var red;
	var yellow;
	var green;
	var blue;

	function changeNumbers() {
		score = 0;
		$("#userScore").text(score);
		random = Math.floor(Math.random() * 102) + 19; //must be b/t 19 and 120
		$("#randomNum").text(random);
		red = Math.floor(Math.random() * 12) + 1;
		yellow = Math.floor(Math.random() * 12) + 1;
		green = Math.floor(Math.random() * 12) + 1;
		blue = Math.floor(Math.random() * 12) + 1;
	};

	changeNumbers();

	$("#crystal1").on("click", function() {
		score += red;
		$("#userScore").text(score);	
	});

	$("#crystal2").on("click", function() {
		score += yellow;
		$("#userScore").text(score);
	});

	$("#crystal3").on("click", function() {
		score += green;
		$("#userScore").text(score);
	});

	$("#crystal4").on("click", function() {
		score += blue;
		$("#userScore").text(score);
	});

	document.onclick = function() {
		if (score > random) {
			losses++;
			$("#losses").text("Losses: " + losses);
			changeNumbers();
		}

		if (score === random) {
			wins++;
			$("#wins").text("Wins: " + wins);
			changeNumbers();
		}
	}; //close on click

});