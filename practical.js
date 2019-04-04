let cFB = [
	[0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0]
]




function dropTile(column, board, player) {
	let currentPlayer = player1;
	for (i = 0; i < column.length; i++) {
		if (column[i] === 0) {
			column[i] = player;
			 checkForWinnerColumn(column, column[i]);
			 checkForWinnerRow(cFB, i);
			break;
		}
	}
}

function checkForWinnerColumn(column, currentTile) {
	if ((column[i - 1] === currentTile) && (column[i - 2] === currentTile)
		&& (column[i - 3] === currentTile)) {
	console.log('Winner');
	}
}


function checkForWinnerRow(board, currentTileIndex) {
	let currentRow = board.map((array, index) => {
		return array[currentTileIndex]
	});
	console.log(currentRow);
	for (let i = 0; i < currentRow.length; i++) {
		if (currentRow[i] !== 0) {
			if (currentRow[i] === currentRow[i + 1] && currentRow[i + 1] === currentRow[i + 2]
			 && currentRow[i + 2] === currentRow[i + 3]) {
			 	console.log('Winner')
		 	}
		}
	}
}			
 		
function checkForWinnerDiagonal () {

}





dropTile(cFB[1], cFB, player1);
dropTile(cFB[2], cFB, player1);
dropTile(cFB[3], cFB, player1);
dropTile(cFB[4], cFB, player1);

