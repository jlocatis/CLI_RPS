require './functions.rb'
require 'pry'

#Starts player1, player2, and tie scores at zero.
score = [0,0,0]

#Runs the program as long as no player has reached a score of 3.
#Also outputs current score after a round has finished.
while score[0] < 3 && score[1] < 3
	result = getWeapons()
	updateScore(score, result)
	puts "Current Score * Player 1: " + score[0].to_s + " | Player 2: " + score[1].to_s + " | Ties: " + score[2].to_s
end

#Once a player has reached a score of three, the game prints the winner.
gameEnd(score)