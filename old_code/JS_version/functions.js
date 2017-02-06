function determineWinner(p1_weapon, p2_weapon){
	var text = ""
	if (p1_weapon == "rock"){
		if (p2_weapon == "paper"){text = "Player 2 wins this round!"}
		else if (p2_weapon == "scissors"){text = "Player 1 wins this round!"}
		else if (p2_weapon == "rock"){text = "Tie!"}
	}
	else if (p1_weapon == "paper"){
		if (p2_weapon == "scissors"){text = "Player 2 wins this round!"}
		else if (p2_weapon == "rock"){text = "Player 1 wins this round!"}
		else if (p2_weapon == "paper"){text = "Tie!"}
	}

	else if (p1_weapon == "scissors"){
		if (p2_weapon == "rock"){text = "Player 2 wins this round!"}
		else if (p2_weapon == "paper"){text = "Player 1 wins this round!"}
		else if (p2_weapon == "scissors"){text = "Tie!"}
	}
	return text;
}

function updateScore(score, result){
	if (result == "Player 1 wins this round!") {
		score[0] += 1;
	} else if (result == "Player 2 wins this round!") {
		score[1] += 1;
	} else if (result == "Tie!") {
		score[2] += 1;
	}
	return score;
}


module.exports = {
	determineWinnerFunction:determineWinner,
	updateScoreFunction:updateScore
}