require './functions.rb'

def test_equality(expected, actual)
  	if expected == actual
  		puts "pass :):):)"
  	else
  		puts "fail :(:(:("
	end
end

choices = ["rock", "paper", "scissors"]
text = ["Player 1 wins this round!", "Player 2 wins this round!", "Tie!"]
expected = [text[2],text[1],text[0],text[0],text[2],text[1],text[1],text[0],text[2]]
count = 0
for i in 1..3 do
  for j in 1..3 do
    p1 = choices[i]
    p2 = choices[j]
    actual = determineWinner(p1,p2);
    test_equality(expected[count],actual)
    count += 1
  end
end