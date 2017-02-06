#Takes Player 1 and Player 2 weapon choices and tests for a winner. Returns
#the winner back to get("/playgame") controller to update the session scores.
def determineWinner(p1_weapon, p2_weapon)
	win = [0,0,0]
	#[player1, player2, tie]
	if p1_weapon == "rock"
		if p2_weapon == "paper"
			win[1] = 1
		elsif p2_weapon == "scissors"
			win[0] = 1
		elsif p2_weapon == "rock"
			win[2] = 1
		end
	elsif p1_weapon == "paper"
		if p2_weapon == "scissors"
			win[1] = 1
		elsif p2_weapon == "rock"
			win[0] = 1
		elsif p2_weapon == "paper"
			win[2] = 1
		end
	elsif p1_weapon == "scissors"
		if p2_weapon == "rock"
			win[1] = 1
		elsif p2_weapon == "paper"
			win[0] = 1
		elsif p2_weapon == "scissors"
			win[2] = 1
		end
	end
	return win
end