#Require the sinatra web framework for ruby, and include the ruby functions file for this program.
require 'sinatra'
require './web_functions.rb'

#Enable sinatra sessions to allow for the store of cookie variables.
enable :sessions

#Front page of the game, explaining how the game works. Calling this page also resets the session
#variables used to store the current game score. When a game ends the user is returned to this page.
get("/") {
	session[:p1score] = 0
	session[:p2score] = 0
	session[:ties] = 0
	erb :index
}

#Starts the new game and sends the user to the Player 1 weapon choice.
post("/start_new_game") {
	redirect("/player1")
}

#Loads the selection page for Player 1.
get("/player1") {
	erb :player1
}

#Receives Player 1 weapon choice input and sends the user to Player 2.
post("/player1") {
	session[:p1weapon] = params["player1"]
	redirect("/player2")
}

#Loads the selection page for Player 2.
get("/player2") {
	erb :player2
}

#Receives Player 2 weapon choice input and "plays the round" by sending the user to the
#round/game end page.
post("/player2") {
	session[:p2weapon] = params["player2"]
	redirect("/playgame")
}

#Calls on the function determineWinner, taking Player 1 and Player 2 weapon choices
#and determining a round winner. Round winner is added to the session variables
#tracking the game score. The current game score variables are passed to the playgame
#page where either the end of the game is determined (by a player having a score of 3)
#of the user is given the current score and asked to start a new round (being sent back to
#the Player 1 weapon choice page).
get("/playgame") {
	@p1weapon = session[:p1weapon]
	@p2weapon = session[:p2weapon]
	@result = determineWinner(@p1weapon, @p2weapon)

	if @result[0] == 1
		session[:p1score] += 1
		@message = "Player 1 wins the round!"
	elsif @result[1] == 1
		session[:p2score] += 1
		@message = "Player 2 wins the round!"
	elsif @result[2] == 1
		session[:ties] += 1
		@message = "The round ends in a tie."
	end

	@p1current_score = session[:p1score]
	@p2current_score = session[:p2score]
	@current_ties = session[:ties]

	erb :playgame
}