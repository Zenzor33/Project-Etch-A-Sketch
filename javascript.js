/*
Task 1: 
- Create a webpage with a 16x16 grid of square divs.
- Create the divs using JavaScript.
- It’s best to put your grid squares inside another “container” div (which can go directly in your HTML).
*/

// create a container div to hold the 16x16 square divs
let body = document.querySelector('body');
let gridContainer = document.createElement('div');
gridContainer.classList.add('container');
body.appendChild(gridContainer);
generateGrid(16);

// create 16 divs
function generateGrid(num) {
    for (let i=0; i < num; i++) {
    let div = document.createElement('div');
    gridContainer.appendChild(div);
    // console.log(`generated grids: ${i+1}`)
    }
}


