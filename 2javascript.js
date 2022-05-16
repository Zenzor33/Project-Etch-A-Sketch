/*
CODE REFACTOR

EXISTING FUNCTIONS:
createContainer()
- Creates a "container" div to hold the 16x16 grid
addEventListenersToSquares()
- Adds event listeners to all divs in the container
generateInitialGrid(num)
- Invokes createContainer()
- Create new divs
- Appends new divs to the container div
- Invokes addEventListenersToSquares()
createBtn()
- Creates the "settings" button at the page top
- Invokes addListenerToButton()
addListenerToButton()
- Adds event listeners to the button
- The anonymous function in the event listener removes the existing grid
- Invokes generateNewGrid()
generateNewGrid(num*num)
- invokes createContainer
- Creates new square divs and appends to gridContainer
- invokes addEventListenersToSquares()


PROBLEMS:
1) Function createContainer() can be more descriptive
2) Function addEventListeners() can be more descriptive
2a) const getSquares & const squares can be combined
3) Function generateInitialGrid()
3a) variable div can be more descriptive
4) Function createBtn violates principle of separation of concerns. It simultanously creates a div and a button. 
4a) The div should be created in a separate function
5) Function addListenerBtn
-- It is not descriptive enough
-- The generateNewGrid should be in an if/else
6) Function generateNewGrid() needs a better way to calculate width
7) Functions generateNewGrid(), addListenerBtn() and createBtn() are out of order. Currently, addListenerBtn() is the lowest function.

Solutions:
1) Rename createContainer() to createGridContainer()
2) Rename addEventListeners() to addEventListenersToSquares()
2a) Merged getSquares into squares
3) Function generateInitialGrid()
3a) Rename div to square
4) Spliced prependDivToBody() from createBtn()
5a) Renamed addListenerBtn() to addListenerToButton()
5b) Added if/else statement so the function doesn't return anything if user inputs > 100
6) Will figure this out later
7) Change order of code to:
- generateNewGrid()
- removeCurrentGrid()
- addListenerToButton()
*/

// create a container div to hold the 16x16 square divs
function createGridContainer() {
  const body = document.querySelector("body");
  const gridContainer = document.createElement("div");
  gridContainer.classList.add("container");
  body.appendChild(gridContainer);
}

// Set up an event listener for all divs in the grid container
function addEventListenersToSquares() {
  const squares = Array.from(document.getElementsByClassName("square"));

  squares.forEach((square) => {
    square.addEventListener("mouseenter", function () {
      square.classList = "squareEnter";
    });
  });
  squares.forEach((square) => {
    square.addEventListener("mouseleave", function () {
      square.classList = "squareExit";
    });
  });
}

function generateInitialGrid(num) {
  createGridContainer();
  const gridContainer = document.querySelector(".container");
  for (let i = 0; i < num; i++) {
    let square = document.createElement("div");
    square.classList.add("square");
    square.textContent = `${i + 1}`;
    gridContainer.appendChild(square);
  }
  addEventListenersToSquares();
}

generateInitialGrid(16 * 16);

function prependDivToBody() {
  const body = document.querySelector("body");
  const divContainerForBtn = document.createElement("div");
  divContainerForBtn.classList = "top";
  body.prepend(divContainerForBtn);
}

function createBtn() {
  prependDivToBody();
  const btn1 = document.createElement("button");
  const divContainerForBtn = document.querySelector(".top");
  btn1.classList.add("button");
  btn1.textContent = "Settings";
  divContainerForBtn.appendChild(btn1);
  addListenerToButton();
}

createBtn();

function generateNewGrid(num) {
  createGridContainer();
  const gridContainer = document.querySelector(".container");
  const previousGridWidth = gridContainer.clientWidth;
  const squareWidth = previousGridWidth / Math.sqrt(num);
  for (let i = 0; i < num; i++) {
    let div = document.createElement("div");
    div.classList.add("square");
    div.style.width = `${squareWidth - 10}px`;
    div.textContent = `${i + 1}`;
    gridContainer.appendChild(div);
  }
  addEventListenersToSquares();
}

function removeCurrentGrid() {
  const grid = document.querySelector(".container");
  grid.remove();
}

function addListenerToButton() {
  // send the user a popup asking for the number of squares per side for the new grid
  const btn1 = document.querySelector(".button");
  btn1.addEventListener("mouseup", function () {
    const num = window.prompt("enter number of squares per side");
    if (num >= 100) {
      alert("Choose a number between 0 and 100");
    } else {
      removeCurrentGrid();
      generateNewGrid(num * num); // generate NEW grid
    }
  });
}
