const pixelBoard = document.querySelector('.createDivs');
const allSquares = document.querySelectorAll('.color');

// REQUISITO 03 - created a function to set fisrt square as black color background
function fisrtColor() {
  const firstBox = document.getElementById('black');
  firstBox.style.backgroundColor = 'black';
}

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

// REQUISITO 06 - created a board with 25 pixels using a function with a loop "for" and the "appendChild" to add the
// 25 pixel to pixelBoard div.

function makeSquares() {
  for (let index = 0; index < 25; index += 1) {
    const newSquares = document.createElement('div');
    newSquares.className = 'pixel';
    newSquares.id = index;
    pixelBoard.appendChild(newSquares);
  }
}

// REQUISITO 09

function removeSelectColor() {
  for (let index = 0; index < allSquares.length; index += 1) {
    allSquares[index].classList.remove('selected');
  }
}

function selectColor(event) {
  removeSelectColor();
  event.target.className = 'color selected';
}

function paintingSquares() {
  for (let index = 0; index < allSquares.length; index += 1) {
    allSquares[index].addEventListener('click', selectColor);
  }
}

// REQUISITO 10

function getColorsToPaint() {
  let boxes = document.querySelectorAll('.pixel');
  // console.log(boxes);
  for (let index = 0; index < boxes.length; index += 1) {
    boxes[index].addEventListener('click', paintingBoxes);
  }
}

function paintingBoxes(evento) {
  let selectedFisrt = document.querySelector('.selected');
  evento.target.style.backgroundColor = selectedFisrt.style.backgroundColor;
}

document
  .getElementById('button-random-color')
  .addEventListener('click', randomAllColors);

fisrtColor();
loadColors();
makeSquares();
paintingSquares();
getColorsToPaint();
