/*
the Nets and the Knicks! There is a new discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgNets' and 'avgKnicks'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Knicks win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Nets score 44, 23 and 71. Knicks score 65, 54 and 49
TEST DATA 2: Nets score 85, 54 and 41. Knicks score 23, 34 and 27

*/

const calcAverage = (score1,score2,score3) =>   (score1+score2+score3)/3;
console.log(calcAverage(10,10,10));