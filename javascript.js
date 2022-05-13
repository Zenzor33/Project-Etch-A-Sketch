/*
Task 1: 
- Create a webpage with a 16x16 grid of square divs.
- Create the divs using JavaScript.
- It’s best to put your grid squares inside another “container” div (which can go directly in your HTML).
*/

// create a container div to hold the 16x16 square divs
function createContainer() {
  const body = document.querySelector('body');
  const gridContainer = document.createElement('div');
  gridContainer.classList.add('container');
  body.appendChild(gridContainer);
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
}

generateGrid(16*16);


