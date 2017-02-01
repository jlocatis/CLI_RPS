#Prompts for player1 and player2 weapons at the beginning of every round.
def getWeapons()
	puts "Player 1 * Choose a weapon: "
	p1_weapon = gets.chomp
	puts "Player 2 * Choose a weapon: "
	p2_weapon = gets.chomp
	determineWinner(p1_weapon, p2_weapon)
end

#Takes player1 and player2 weapons from above and tests for a winner.
def determineWinner(p1_weapon, p2_weapon)
	if p1_weapon == "rock"
		if p2_weapon == "paper"
			text = "Player 2 wins this round!"
		elsif p2_weapon == "scissors"
			text = "Player 1 wins this round!"
		elsif p2_weapon == "rock"
			text = "Tie!"
		else
			text = "Please enter rock, paper, or scissors!"
		end
	elsif p1_weapon == "paper"
		if p2_weapon == "scissors"
			text = "Player 2 wins this round!"
		elsif p2_weapon == "rock"
			text = "Player 1 wins this round!"
		elsif p2_weapon == "paper"
			text = "Tie!"
		else
			text = "Please enter rock, paper, or scissors!"
		end
	elsif p1_weapon == "scissors"
		if p2_weapon == "rock"
			text = "Player 2 wins this round!"
		elsif p2_weapon == "paper"
			text = "Player 1 wins this round!"
		elsif p2_weapon == "scissors"
			text = "Tie!"
		else
			text = "Please enter rock, paper, or scissors!"
		end
	else
		text = "Please enter rock, paper, or scissors!"
	end
	puts text
	return text
end

#Updates the score for player1, player2, and ties.
def updateScore(score, result)
	if result == "Player 1 wins this round!"
		score[0] += 1
	elsif result == "Player 2 wins this round!"
		score[1] += 1
	elsif result == "Tie!"
		score[2] += 1
	end
	return score
end

#Prints the winner.
def gameEnd(score)
	if score[0] == 3
		puts "Player 1 wins the game!!"
	end
	if score[1] == 3
		puts "Player 2 wins the game!!"
	end
end