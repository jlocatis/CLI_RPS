
var prompt = require('prompt');
var tie = 0;
var p1score = 0;
var p2score = 0;

prompt.start();

function playGame(){
	console.log("Player 1 * Choose your weapon: ");
	getp1Weapon();
}

function getp1Weapon(){
prompt.get([{
	name: 'player1',
	required: true,
	pattern: /Scissors|Rock|Paper/,
	message: 'You must choose Rock, Paper, or Scissors.'
}], function(err, result){
    console.log('Player 1 Choice: ' + result.player1);
    var p1Weapon = result.player1.toLowerCase();
    getp2Weapon(p1Weapon);
});
}

function getp2Weapon(){
prompt.get([{
	name: 'player2',
	required: true,
	pattern: /Scissors|Rock|Paper/,
	message: 'You must choose Rock, Paper, or Scissors.'
}], function(err, result){
    console.log('Player 2 Choice: ' + result.player2);
    var p2Weapon = result.player2.toLowerCase();
    testWeapons(p1Weapon, p2weapon);
});
}

function testWeapons(player1, player2) {
	if (player1 == player2) {
		console.log("The game ends in a tie.")
		console.log("Current Score: Ties :" + tie + " Player 1: " p1score + " Player 2: " + p2score);
		tie();
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

