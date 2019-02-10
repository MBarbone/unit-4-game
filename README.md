# unit-4-game - Crystal Collector


- Crystal Collector is a number guessing game, where players must try to match a randomly generated number using four crystals. 
- Four crystals displayed as buttons on the page.
- The player will be shown a random number at the start of the game.
- When the player clicks on a crystal it will add a specific amount of points to the player's total score. However, the value of each crystal will remain hidden throughout the game. It is up to the player to remember the value of each crystal and try to match their sums to the random game number.
- The player wins the game if their total score matches the random number and the player loses the game if their total score goes above the random number. The player's number will update after each crystal click.
- The number of games won and lost will be displayed.
- If the player successfully matches their total score to the random number they get 1 win, if the player's total score is above the random number the player get 1 loss, either way the game restarts.
- When the game is restarted, the player will be shown a new random number, all the crystals will now have 4 different hidden values, and the player's total score is reset to 0.

- Game design note:
 - The random number shown at the start of the game should be between 19 - 120
 - Each crystal should have a random hidden value between 1 - 12
