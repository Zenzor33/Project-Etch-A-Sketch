// create a container div to hold the 16x16 square divs
function createContainer() {
  const body = document.querySelector('body');
  const gridContainer = document.createElement('div');
  gridContainer.classList.add('container');
  body.appendChild(gridContainer);
}

// Set up an event listener for all divs in the grid container
function addListener() {
  const getSquares = document.getElementsByClassName('square');
	const squares = Array.from(getSquares);
	console.log(squares);
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
		addListener();
    gridContainer.appendChild(div);
    // console.log(`generated grids: ${i+1}`)
  }
}

generateGrid(16*16);

/*
Add a button to the top of the screen that will send the user a popup asking for the number of squares per side for the new grid. Once entered, the existing grid should be removed and a new grid should be generated in the same total space as before (e.g. 960px wide) so that you’ve got a new sketch pad. Tip: Set the limit for the user input to a maximum of 100. A larger number of squares results in more computer resources being used, potentially causing delays, freezing, or crashing that we want to prevent.
Research button tags in HTML and how you can make a JavaScript function run when one is clicked.
Also check out prompts.
You should be able to enter 64 and have a brand new 64x64 grid pop up without changing the total amount of pixels used.

*/

// add button to top of the screen
