This is a program that plays the game Rock, Paper, Scissors. The file makes use of the prompt JavaScript add-on with node. 

-Prompt:
This allows JavaScript to prompt for 'player1' and 'player2' choices at the command line. Prompt allows for several different validation options to be passed through it. For this program I am requiring that each prompt (player, player2) have a value entered, and that it be equal to Rock, Paper, or Scissors. It will provide the user with an error message if none of the accepted values are entered.

-function testWeapons:
Test to see which player won. If/else statement is designed around
player1's weapon choice and comparing it to player2. For example,
if player1 chooses rock, we know that player1 will beat scissors,
otherwise the only other option (in this case paper) would beat player1.