var prompt = require('prompt');

prompt.start();

prompt.get(['player1', 'player2'], function (err, result) {
	console.log('Player choices:');
    console.log('Player 1 Choice: ' + result.player1);
    console.log('Player 2 Choice: ' + result.player2);

if (result.player1 == result.player2) {
	console.log("The game ends in a tie.")	
} else if (result.player1 == 'Rock') {
	if (result.player2 == 'Scissors') {
		console.log("Player 1 wins!")
	} else {
		console.log("Player 2 wins!")
	}
} else if (result.player1 == 'Paper') {
	if (result.player2 == 'Rock') {
		console.log("Player 1 wins!")
	} else {
		console.log("Player 2 wins!")
	}
} else if (result.player1 == 'Scissors') {
	if (result.player2 == 'Paper') {
		console.log("Player 1 wins!")
	} else {
		console.log("Player 2 wins!")
	}
}
});

function testEquality (expected, actual) {
	if (expected == actual) {
		console.log("Working?");
	} else {
		console.log("Try again!");
	}
}