let body = document.querySelector('body');

let maxRows = 6;
let maxColumns = 7;
let playerOne = 1;
let playerTwo = 2;
let row;

let modalButton = document.getElementById('showModal');

function modalFunc () {
	let modalBack = document.querySelector('.modal-background');
	modalBack.style.visibility = 'visible';
}

modalButton.addEventListener('click', modalFunc);

let closeButton = document.querySelector('#close');

function modalClose() {
	let modalEnd = document.querySelector('.modal-background');
	modalEnd.style.visibility = 'hidden';
}

closeButton.addEventListener('click', modalClose);


let currentPlayer = playerOne; 

let cFB = [
	[0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0]
]

function gameTable(array) {
	    let table = document.createElement('table');
	    console.log(table[0]);
	    for (let i = 0; i < array.length; i++) {
	        let column = document.createElement('tr');
	        column.classList.add(`${i}`);	
	        column.addEventListener('click', function (event) {
	        	let position = column.className;	        	
	        	dropTile(cFB, position, event.target.parentNode);	   
	        })	        	
	        for (let j = 0; j < array[i].length; j++) {
	            let row = document.createElement('td');
	            row.classList.add(`row`);
	            if (array[i][j] === 0) {
	            	row.classList.add('white');	        
	            } 	  
	            column.appendChild(row);
	        }
	        table.appendChild(column);
	        table.classList.add('gridContainer');
	        body.append(table);
	    }
	    return table;

	    function dropTile(array, position, event) {
	    	let children = event.children;
					for ( i = 0; i < array[position].length; i++) {
						if (array[position][i] === 0) {
						array[position][i] = currentPlayer;					
						break;
					}						 		
			 	}
			 		if (array[position][i] === 1) {
						 	children[i].style.backgroundColor = 'red';
						 	console.log(event);
						 	checkForWinnerColumn(cFB[position], cFB[position][i]);
						 	checkForWinnerRow(cFB, i);
						 	switchPlayer();										 	
						} else if (currentPlayer === 2) {
							children[i].style.backgroundColor = 'yellow';
							checkForWinnerColumn(cFB[position], cFB[position][i]);
							checkForWinnerRow(cFB, i);
							switchPlayer();							
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
	alert(`You're a Medieval winner!`);
	}
}


function checkForWinnerRow(board, currentTileIndex) {
	let currentRow = board.map((array, index) => {
		return array[currentTileIndex]
	});
	for (let i = 0; i < currentRow.length; i++) {
		if (currentRow[i] !== 0) {
			if (currentRow[i] === currentRow[i + 1] && currentRow[i + 1] === currentRow[i + 2]
			 && currentRow[i + 2] === currentRow[i + 3]) {
			 	alert(`You're a Medieval winner!`)
		 	}
		}
	}
}	


gameTable(cFB);















