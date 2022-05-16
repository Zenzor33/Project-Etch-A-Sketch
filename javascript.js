// create a container div to hold the 16x16 square divs
function createContainer() {
  const body = document.querySelector('body');
  const gridContainer = document.createElement('div');
  gridContainer.classList.add('container');
  body.appendChild(gridContainer);
}

// Set up an event listener for all divs in the grid container
function addListeners() {
  const getSquares = document.getElementsByClassName('square');
	const squares = Array.from(getSquares);
	// console.log(squares);
	squares.forEach(square => {
		square.addEventListener('mouseenter', function () {
			// console.log(`Square number ${square.textContent}`);
			square.classList = 'squareEnter';
		})
	})
	squares.forEach(square => {
		square.addEventListener('mouseleave', function () {
			// console.log(`Square number ${square.textContent}`);
			square.classList = 'squareExit'

		})
	})
}


// create 16 divs
function generateGrid(num) {
  createContainer();
  const gridContainer = document.querySelector('.container');
  for (let i=0; i < num; i++) {
    let div = document.createElement('div');
	  div.classList.add('square');
	  div.textContent = `${i+1}`;
    gridContainer.appendChild(div);
    // console.log(`generated grids: ${i+1}`)
  }
	addListeners();
}

generateGrid(16*16);

/*
Add a button to the top of the screen that will send the user a popup asking for the number of squares per side for the new grid. Once entered, the existing grid should be removed and a new grid should be generated in the same total space as before (e.g. 960px wide) so that you’ve got a new sketch pad. Tip: Set the limit for the user input to a maximum of 100. A larger number of squares results in more computer resources being used, potentially causing delays, freezing, or crashing that we want to prevent.
Research button tags in HTML and how you can make a JavaScript function run when one is clicked.
Also check out prompts.
You should be able to enter 64 and have a brand new 64x64 grid pop up without changing the total amount of pixels used.

*/

// add button to top of the screen
function createBtn () {
	// add div to body (prepend to top)
	const body = document.querySelector('body');
	const divTop = document.createElement('div');
	divTop.classList = 'top';
	body.prepend(divTop);
	// create button
	const btn1 = document.createElement('button');
	btn1.classList.add('button');
	btn1.textContent = 'Settings';
	divTop.appendChild(btn1);
	addListenerBtn();
}

createBtn();

function addListenerBtn() {
	// send the user a popup asking for the number of squares per side for the new grid
	const btn1 = document.querySelector('.button')
	btn1.addEventListener('mouseup', function() {
		const num = window.prompt('enter number of squares per side');
		if (num >= 100) {
			alert('Choose a number between 0 and 100');
			return;
		}
		const grid = document.querySelector('.container');
		grid.remove();
		generateNewGrid(num*num); // generate NEW grid
	})
}

function generateNewGrid(num) {
  createContainer();
  const gridContainer = document.querySelector('.container');
	const previousGridWidth = gridContainer.clientWidth;
	const squareWidth = previousGridWidth / Math.sqrt(num);
	// console.log(squareWidth);
	// console.log(`previous grid width ${previousGridWidth} 
	//  desired squares:${num},
	//  rows: ${Math.sqrt(num)}
	//  newSquareWidth = ${squareWidth}`)
  for (let i=0; i < num; i++) {
    let div = document.createElement('div');
	  div.classList.add('square');
		div.style.width = `${squareWidth - 10}px`;
	  div.textContent = `${i+1}`;
    gridContainer.appendChild(div);
    // console.log(`generated grids: ${i+1}`)
  }
	addListeners();
}


// Once entered, the existing grid should be removed and a new grid should be generated in the same total space as before (e.g. 960px wide) so that you’ve got a new sketch pad.

/*
generateNewGrid() must:
- Create a new grid with the width of the previous grid
-- The container div width should be set to the width of the 
previous grid
-- 

The total space never changes from the firs grid!
I just need to change the width of the individual squares

*/
