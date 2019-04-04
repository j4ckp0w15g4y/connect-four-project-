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



let divContainer = document.querySelector('.gridContainer');
let table = document.createElement('table');
for (let row = 0; row < cFB.length; row++) {
	let tr = document.createElement('tr');
	for (let col = 0; col < cFB[row].length; col ++) {
		let td = document.createElement('td');
		let tn = document.createTextNode(cFB[row][col]);
		td.appendchild(tn);
		tr.appendchild(td);
	}
	table.appendChild(tr);
}

divContainer.appendChild(table);



function dropTile(column, board, player) {
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
 		
// function checkForWinnerDiagonal () {

// }





dropTile(cFB[1], cFB, player1);
dropTile(cFB[2], cFB, player1);
dropTile(cFB[3], cFB, player1);
dropTile(cFB[4], cFB, player1);



//dom controller object 

/* 

const domController = {
	body: document.querySelector('body'),
	main: document.createElement('main'),
}

*/

































