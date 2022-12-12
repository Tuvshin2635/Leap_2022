/**
 * Problem
 * 
 * Example-1 Battleship
 * 
 * | 0 | 0 | 0 | X | X | X | 0 |
 * | 0 | 0 | 0 | X | X | X | 0 |
 * | 0 | 0 | 0 | X | X | X | 0 |
 * | 0 | 0 | 0 | X | X | X | 0 |
 * | 0 | 0 | 0 | X | X | X | 0 |
 * 
 * example-2: Tic Tac Toe
 * 
 * col1|col2|col3
 * | x | 0  | x | => row1 
 * | 0 | 0  | x | => row2
 * | x | x  | 0 | => row3
 * 
 * 
 * 
 */

let row1 = ['x', 'o', 'x'];
let row2 = ['o', 'o', 'x'];
let row3 = ['x', 'x', 'o'];



console.log(row1);
console.log(row2);
console.log(row3);

let tictactoe = [['x', 'o', 'x'], ['o', 'o', 'x'], ['x', 'x', 'o']];
console.log('tic');
console.log(tictactoe);
console.log(tictactoe[1]);
console.log(tictactoe[1][2]);


let input =Number(prompt('mur'));
let input1 =Number(prompt('bagana'));
let input3 =prompt('3');
tictactoe[input][input1] = input3;










console.log('For loop with loop');
//tictactoe- Бүх мөрний элэментүүдийг хэвлэж харуулна уу

for (let i = 0; i < tictactoe.length; i++) {
    // console.log(tictactoe[i]);
    // double FOR loops
    let output = ''
    for (let j = 0; j < tictactoe[i].length; j++) {
        output = output +"| " + tictactoe[i][j] + " |";
    }
    console.log(output);
} 

