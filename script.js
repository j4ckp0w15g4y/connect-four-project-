
let cFB = [
	[0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0]
]


let player1 = 1;
let player2 = 2;


//possibly put rowy back inbetween column and player


	function dropTile(column, row, player) {
		for (i = 0; i < column.length; i++) {
			if (column[i] === 0) {
				column[i] = player;
				 checkForWinnerColumn(column, column[i]);
				 checkForWinnerRow(row, column[i]);
				break;
				}
				
			}
		}
	



let row = [];


	for(let j = 0; j < cFB.length; j++){
		row.push(cFB[j][j])
		console.log(row)
		// overTile(cFB[j][0], player1)
		
	}




function checkForWinnerColumn(column, currentTile) {
		if ((column[i - 1] === currentTile) && (column[i - 2] === currentTile)
			&& (column[i - 3] === currentTile)) {
		console.log('Winner');
			}
		}




// dropTile(cFB[i][0], player1);

// dropTile(cFB[0], cFB[0][0], player1);
dropTile(cFB[0], cFB[0][0], player1);
dropTile(cFB[1], cFB[1][0], player1);
dropTile(cFB[2], cFB[2][0], player1);
dropTile(cFB[3], cFB[3][0], player1);





function checkForWinnerRow(currentTile) {
	for (let r = 0; r < cFB.length; r++) {
		for (let c = 0; c < cFB[r].length; c++) {	
			if ((cFB[r + 1][c] === currentTile) && (cFB[r + 2][c] === currentTile)
			 	&& (cFB[r + 3][c] === currentTile)) {
				console.log('Winner');
			}
			else if ((cFB[r - 1][c] === currentTile)
				&& (cFB[r - 2][c] === currentTile)
			 && (cFB[r - 3][c] === currentTile)) {
				console.log('Winner');
			}
			else if((cFB[r - 1][c] === currentTile) && (cFB[r + 1][c] === currentTile) 
				&& (cFB[r + 2][c] === currentTile)) {
				console.log('Winner');
			}
			else if ((cFB[r - 2][c] === currentTile) && (cFB[r - 1][c] === currentTile)
				&& (cFB[r + 1][c] === currentTile)) {
				console.log('Winner');
			}

			
		}
	}
}















 	

	
















