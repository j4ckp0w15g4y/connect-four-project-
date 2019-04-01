
let connectFourBoard = document.querySelector('.container');


function createBoard () { 
	for (let i = 0; i < 42; i ++) {
		let div = document.createElement('div');
		console.log(div);
		div.classList.add('box');
		// div.setAttribute('id', `element-${[i]}`);
		div.innerText = [i];
		connectFourBoard.appendChild(div);

	}
}

createBoard();



/////////////////////////////////
/* I have set up my board, now I need to think about functionality. 
How will the game work?

Connect-four works in columns, the player drops a piece into a column. So I would need to create four column variables, 
	eg. let column1 = document.querySelectorAll('#element-0, #element-7, #element-14, #element-21, #element-28, #element-35')

	column1, column2, column3, column4, column5, column6, column7
	row1, row2, row3, row4, row5, row6
	diagonal arrays?

			would check for winner run through all of these arrays? 

Each is an array composed of the IDs of each element in that column. I would then add a click handler to each one. 

Each click handler would invoke a function: to check to see which element of the array has a class of neither '.red' nor '.yellow'.

I would call a for loop which would go through the length of the column array and check each element to see if it has either the class of yellow or red. 
If one has neither then the current player's colour will be added (classlist.add) to that section. 



*/

