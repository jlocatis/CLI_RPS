weapon = ['Rock', 'Paper', 'Scissors'];

for (var x=0; x < 3; x++){
	for (var y=0; y < 3; y++){
		testWeapons(weapon[x],weapon[y]);

	}
}

function testWeapons(player1, player2) {
	if (player1 == player2) {
		console.log("The game ends in a tie.")
		return "tie";
	} else if (player1 == 'Rock') {
		if (player2 == 'Scissors') {
			console.log("Player 1 wins!")
			return "p1";
		} else {
			console.log("Player 2 wins!")
			return "p2";
		}
	} else if (player1 == 'Paper') {
		if (player2 == 'Rock') {
			console.log("Player 1 wins!")
			return "p1";
		} else {
			console.log("Player 2 wins!")
			return "p2";
		}
	} else if (player1 == 'Scissors') {
		if (player2 == 'Paper') {
			console.log("Player 1 wins!")
			return "p1";
		} else {
			console.log("Player 2 wins!")
			return "p2";
		}
	}
}

function testRPS(expected, actual) {
	if (expected == actual) {
		console.log("Pass! It works!!");
	} else {
		console.log("Fail :( Try again.")
	}
}