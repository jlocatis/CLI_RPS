var functionslist = require('./functions');


function test_equality(expected, actual){
  if (expected == actual){
    console.log("pass")
  }
  else{console.log("fail")}
}

choices = ["rock", "paper", "scissors"]
W = ["Player 1 wins this round!", "Player 2 wins this round!", "Tie!"]
expected = [W[2],W[1],W[0],W[0],W[2],W[1],W[1],W[0],W[2]]
count = 0
for (i=0; i<3; i++){
  for (j=0; j<3; j++){
    p1 = choices[i]
    p2 = choices[j]
    var actual = functionslist.determineWinnerFunction(p1,p2);
    test_equality(expected[count],actual)
    count+=1
  }
}