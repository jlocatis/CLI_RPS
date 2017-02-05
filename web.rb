require 'sinatra'
require './web_functions.rb'

enable :sessions

get("/") {
	session[:p1score] = 0
	session[:p2score] = 0
	session[:ties] = 0
	erb :index
}

post("/start_new_game") {
	redirect("/player1")
}

get("/player1") {
	erb :player1
}

post("/player1") {
	session[:p1weapon] = params["player1"]
	redirect("/player2")
}

get("/player2") {
	erb :player2
}

post("/player2") {
	session[:p2weapon] = params["player2"]
	redirect("/playgame")
}

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