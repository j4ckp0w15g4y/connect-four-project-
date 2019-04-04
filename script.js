let divContainer = document.querySelector('.gridContainer');
console.log(divContainer);

let maxRows = 6;
let maxColumns = 7;
let playerNumber = 'one'
let gameArray = [
[ , , , , , ],
[ , , , , , ],
[ , , , , , ],
[ , , , , , ],
[ , , , , , ],
[ , , , , , ],
[ , , , , , ]

	
]


function gridCreate  () {
	let playerTurn = 'one'
	for (let r = 0; r < maxRows; r++) {
		for (let c = 0; c < maxColumns; c++) {
			let div = document.createElement('div');
			div.classList.add('box', `column${[c]}`, `row${[r]}`);
			divContainer.appendChild(div);
			div.addEventListener('click', (e)=>{
				if(playerTurn === 'one'){
					playerTurn = 'two'
					
					div.classList.add('red');
				}
				else if(playerTurn === 'two'){

					playerTurn = 'one'
					div.classList.add('green');
				}

				
				
				// console.log(e.target)
				let classRowCol = e.target.getAttribute('class')

				let col = classRowCol.split(' ')[1]
				console.log(col);
				let colNumber = col.substr[-1]
				console.log(colNumber);
				let row = classRowCol.split(' ')[2]
				console.log(row);
				let colRow = col.substr[-1]

				console.log(e.target.getAttribute('class'))
			})
		}
	}	
}

gridCreate();

// let column0 = document.getElementsByClassName('column0');
// console.log(column0);
// let column1 = document.getElementsByClassName('column1');
// let column2 = document.getElementsByClassName('column2');
// let column3 = document.getElementsByClassName('column3');
// let column4 = document.getElementsByClassName('column4');
// let column5 = document.getElementsByClassName('column5');
// let column6 = document.getElementsByClassName('column6');

// column0.addEventListener('click', dropTile);
// column1.addEventListener('click', dropTile);
// column2.addEventListener('click', dropTile);
// column3.addEventListener('click', dropTile);
// column4.addEventListener('click', dropTile);
// column5.addEventListener('click', dropTile);
// column6.addEventListener('click', dropTile);








// let cFB = [
// 	[0, 0, 0, 0, 0, 0],
// 	[0, 0, 0, 0, 0, 0],
// 	[0, 0, 0, 0, 0, 0],
// 	[0, 0, 0, 0, 0, 0],
// 	[0, 0, 0, 0, 0, 0],
// 	[0, 0, 0, 0, 0, 0],
// 	[0, 0, 0, 0, 0, 0]
// ]




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
 		
// function checkForWinnerDiagonal () {

// }





// dropTile(cFB[1], cFB, player1);
// dropTile(cFB[2], cFB, player1);
// dropTile(cFB[3], cFB, player1);
// dropTile(cFB[4], cFB, player1);




















 	

	
















