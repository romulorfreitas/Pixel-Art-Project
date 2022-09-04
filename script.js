const combinations = [
  [0, 1, 2, 3, 4],
  [5, 6, 7, 8, 9],
  [10, 11, 12, 13, 14],
  [15, 16, 17, 18, 19],
  [20, 21, 22, 23, 24],
  [0, 5, 10, 15, 20],
  [1, 6, 11, 16, 21],
  [2, 7, 12, 17, 22],
  [3, 8, 13, 18, 23],
  [4, 9, 14, 19, 24],
];

// REQUISITO 03 - created a function to set fisrt square as black color background
function fisrtColor() {
  const firstBox = document.getElementById('black');
  firstBox.style.backgroundColor = 'black';
}
fisrtColor();

// REQUISITO 04 - Created a function to send random colors to last three squares when "cores aleatorias" buttom is used.
function randomAllColors() {
  const colorElement = document.getElementsByClassName('color');
  for (let index = 1; index < colorElement.length; index += 1) {
    const mathRandomColor = Math.floor(Math.random() * 16777215).toString(16);
    colorElement[index].style.backgroundColor = '#' + mathRandomColor;
    // console.log(mathRandomColor);
    // console.log(colorElement[index].style.backgroundColor);
  }
  saveColors();
}

document
  .getElementById('button-random-color')
  .addEventListener('click', randomAllColors);

// REQUISITO 05 - created a function to storage the random colors after reload the window. Got insights from Henrique and Fransuelio.

function saveColors() {
  const colorsSaved = [
    document.getElementById('random1').style.backgroundColor,
    document.getElementById('random2').style.backgroundColor,
    document.getElementById('random3').style.backgroundColor,
  ];
  localStorage.setItem('colorPalette', JSON.stringify(colorsSaved));
}

// created a function to load the window with colors previously storaged

function loadColors() {
  if (!localStorage.colorPalette) {
    randomAllColors();
    return;
  }
  const reserveKey = JSON.parse(localStorage.getItem('colorPalette'));
  console.log(reserveKey);
  document.getElementById('random1').style.backgroundColor = reserveKey[0];
  document.getElementById('random2').style.backgroundColor = reserveKey[1];
  document.getElementById('random3').style.backgroundColor = reserveKey[2];
}
loadColors();

// REQUISITO 06 - created a board with 25 pixels using a function with a loop "for" and the "appendChild" to add the
// 25 pixel to pixelBoard div.

const pixelBoard = document.querySelector('.createDivs');

function makeSquares() {
  for (let index = 0; index < 25; index += 1) {
    const newSquares = document.createElement('div');
    newSquares.className = 'pixel';
    newSquares.id = index;
    pixelBoard.appendChild(newSquares);
  }
}
makeSquares();

// const celulas = document.querySelectorAll('.pixel');
