// created a function to set fisrt square as black color background
function fisrtColor() {
  let firstBox = document.getElementById('black');
  firstBox.style.backgroundColor = 'black';
}
fisrtColor();

//used an addEventListener and a Function to set a random color on second square when use 'clicar' buttom.
//https://css-tricks.com/snippets/javascript/random-hex-color/
document
  .getElementById('button-random-color')
  .addEventListener('click', randomColor1);

function randomColor1() {
  let makesColors = Math.floor(Math.random() * 16777215).toString(16);
  document.getElementById('random1').style.backgroundColor = '#' + makesColors;
}
randomColor1();

//used an addEventListener and a Function to set a random color on third square when use 'clicar' buttom.
document
  .getElementById('button-random-color')
  .addEventListener('click', randomColor2);

function randomColor2() {
  let makesColors = Math.floor(Math.random() * 16777215).toString(16);
  document.getElementById('random2').style.backgroundColor = '#' + makesColors;
}
randomColor2();

//used an addEventListener and a Function to set a random color on fourth square when use 'clicar' buttom.
document
  .getElementById('button-random-color')
  .addEventListener('click', randomColor3);

function randomColor3() {
  let makesColors = Math.floor(Math.random() * 16777215).toString(16);
  document.getElementById('random3').style.backgroundColor = '#' + makesColors;
}
randomColor3();
