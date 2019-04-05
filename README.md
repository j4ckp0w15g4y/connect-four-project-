# connect-the-fourth-project-
Connect Four project for GA

## Outline 
I have made a simple Connect-Four style project that utilises Vanilla Javascript, CSS, and HTML.  

Connect-four works in columns, the player drops a piece into a column. So I would need to create four column variables, 
	eg. let column1 = document.querySelectorAll('#element-0, #element-7, #element-14, #element-21, #element-28, #element-35')

Each is an array composed of the IDs of each element in that column. I would then add a click handler to each one. 

Each click handler would invoke a function: to check to see which element of the array has a class of neither '.red' nor '.yellow'.

I would call a for loop which would go through the length of the column array and check each element to see if it has either the class of yellow or red. 
If one has neither then the current player's colour will be added (classlist.add) to that section. 

I would then also create row variables which are composed of the elements within each row of my gameboard. 

Each row has a possible 4 winning combinations, and * by 6 this is 24 in total. 
Each column has a possible 3 winning combinations and * by 7 this is 21 in total. 

The diagonals have 24 possible winning combinations, so I would need to create a function that would check to see if there are any winning positions in play. 
I am not sure how I'd do this elegantly, but for the outset I would just brute force the winning positions into a 2D array. 

I could then create a 2D array of the gameboard, composed of the arrays of the columns and rows.

I think that the checkingForWinner function that I will inevitable have to invoke will be hard to create, I'm not really sure how I'd do this. 

This is what I'd use to create the board: 

let connectFourBoard = document.querySelector('.container');

function createBoard () { 
	for (let i = 0; i < 42; i ++) {
		let div = document.createElement('div');
		console.log(div);
		div.classList.add('box');
		div.setAttribute('id', `element-${[i]}`);
		connectFourBoard.appendChild(div);

	}
}

createBoard();

## Issues

I still need to implement a function that checks for a diagonal winner, and a function that checks for a tie.


## Deployment 

This project is available at [http://connect-the-fourth.surge.sh/] (http://connect-the-fourth.surge.sh/)
