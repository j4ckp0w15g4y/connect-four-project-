# connect-four-project-
Connect Four project for GA

I am making a Connect-Four style project that utilises collision detection, and CSS animation. 

Connect-four works in columns, the player drops a piece into a column. So I would need to create four column variables, 
	eg. let column1 = document.querySelectorAll('#element-0, #element-7, #element-14, #element-21, #element-28, #element-35')

Each is an array composed of the IDs of each element in that column. I would then add a click handler to each one. 

Each click handler would invoke a function: to check to see which element of the array has a class of neither '.red' nor '.yellow'.

I would call a for loop which would go through the length of the column array and check each element to see if it has either the class of yellow or red. 
If one has neither then the current player's colour will be added (classlist.add) to that section. 

I would then also create row variables which are composed of the elements within each row of my gameboard. 

