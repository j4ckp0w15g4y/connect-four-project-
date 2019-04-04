let body = document.querySelector('body');

let maxRows = 6;
let maxColumns = 7;
let playerOne = 1;
let playerTwo = 2;
let row;

let currentPlayer = playerOne; 

let cFB = [
	[],
	[]
	[]
	[]
	[]
	[]
]

function gameTable(array) {
	    let table = document.createElement('table');
	    for (let i = 0; i < array.length; i++) {
	        let column = document.createElement('tr');
	        column.classList.add(`${i}`);
	        console.log(column.classList);
	        column.addEventListener('click', function (event) {
	        	let position = column.className;	        	
	        	dropTile(cFB, position, event.target);
	        })

	        	
	        for (let j = 0; j < array[i].length; j++) {
	            let row = document.createElement('td');
	            row.classList.add('row', 'add');
	            if (array[i][j] === 0) {
	            	row.classList.add('white');	        
	            } 
	            // row.textContent = cFB[i][j];
	            column.appendChild(row);
	        }
	        table.appendChild(column);
	        table.classList.add('gridContainer');
	        body.append(table);
	    }
	    return table;

	    function dropTile(array, position, event) {
					for (i = 0; i < array[position].length; i++) {
						if (array[position][i] === 0) {
						array[position][i] = switchPlayer();
						console.log(cFB);
					}						 		
			 	}
			 		if (currentPlayer === 1) {
						 	event.classList.add('red');
						 	console.log(event);											 	
						} else if (currentPlayer === 2) {
							event.classList.add('yellow');							
						}			
			}	
		}
			

function switchPlayer() {
	if (currentPlayer === playerOne) {
		currentPlayer = playerTwo;
	} else if (currentPlayer === playerTwo) {
		currentPlayer = playerOne;
	}
	return currentPlayer;
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










// 	// } else if {	
	// 	// 	 checkForWinnerColumn(column, column[i]);
	// 	// 	 checkForWinnerRow(cFB, i);
	// 	// 	break;
	// 	}
	// }



 	

	
gameTable(cFB);















