require './functions.rb'
require 'pry'

score = [0,0,0]

while score[0] < 3 && score[1] < 3
	result = getWeapons()
	updateScore(score, result)
	puts "Current Score * Player 1: " + score[0].to_s + " | Player 2: " + score[1].to_s + " | Ties: " + score[2].to_s
end

gameEnd(score)