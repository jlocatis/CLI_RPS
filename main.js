var functions = require('./functions');

var score = [0,0,0];
var prompt = require('prompt');
prompt.start();

playRound()

function playRound(){
	prompt.get([{
		name: 'P1',
		required: true,
		pattern: /^scissors$|^rock$|^paper$/,
		message: 'You must choose Rock, Paper, or Scissors.'
	}], function (err, result) {
		p1_weapon = result.P1.toLowerCase()

		if (p1_weapon == "rock" || p1_weapon == "paper" || p1_weapon == "scissors"){
			prompt.get([{
				name: 'P2',
				required: true,
				pattern: /^scissors$|^rock$|^paper$/,
				message: 'You must choose Rock, Paper, or Scissors.'
			}], function (err, result) {
				p2_weapon = result.P2.toLowerCase()
				if (p2_weapon == "paper"|| p2_weapon == "rock" || p2_weapon == "scissors"){
					result = functions.determineWinnerFunction(p1_weapon,p2_weapon)
					score = functions.updateScoreFunction(score, result)
					console.log(result)
					console.log("Current score:**\n Player 1: " + score[0] + " * Player 2: " + score[1] + " * Ties: " +score[2])
					if (score[0] < 3 && score[1]< 3){
						playRound()
					} else if (score[0] == 3) {
						console.log("Player 1 wins the game!")
					} else if (score[1] == 3) {
						console.log("Player 2 wins the game!")
					}
				}
			});
		}
	});
	return score
}
