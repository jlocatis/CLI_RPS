
var prompt = require('prompt');
function getWeapons(){
// Start the JavaScript node prompt code
prompt.start();
// Get Player 1 and Player 2 values. Require the user enter the values, and
// they be equal to a string and be one of the listed words in 'pattern.'
// If not, return the error message.

prompt.get([{
	name: 'player1',
	required: true,
	pattern: /Scissors|Rock|Paper/,
	message: 'You must choose Rock, Paper, or Scissors.'
}, {
	name: 'player2',
	required: true,
	pattern: /Scissors|Rock|Paper/,
	message: 'You must choose Rock, Paper, or Scissors.'
// Print both player choices to the console, and than run the function
// playGame, passing in both player weapon choices.
}], function(err, result){
	console.log('Player choices:');
    console.log('Player 1 Choice: ' + result.player1);
    console.log('Player 2 Choice: ' + result.player2);
    testWeapons(result.player1, result.player2);
});
prompt.stop();
}

// Test to see which player won. If/else statement is designed around
// player1's weapon choice and comparing it to player2. For example,
// if player1 chooses rock, we know that player1 will beat scissors,
// otherwise the only other option (in this case paper) would beat player1.
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

var tie = 0;
var p1 = 0;
var p2 = 0;
do {
winner = getWeapons();
	if (winner == "tie"){
		tie = tie + 1;
		console.log("Score ** P1: " + p1 + " P2: " + p2 + " Tie: " + tie);
	} else if (winner == "p1"){
		p1 = p1 + 1;
		console.log("Score ** P1: " + p1 + " P2: " + p2 + " Tie: " + tie);
	} else if (winner == "p2"){
		p2 = p2 + 1;
		console.log("Score ** P1: " + p1 + " P2: " + p2 + " Tie: " + tie);
	}
}
while(p1 <= 3 && p2 <= 3);