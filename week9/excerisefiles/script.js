//Yoinking da ball
const ball = document.querySelector(".ball");
console.log(ball);

//Accessing the outer box and check its current width.
const outer = document.querySelector(".outer");
let outerWidth = outer.clientWidth / 2 - 49;

//Working on the move or translate logic
const moveButton = document.querySelector("#move-button");
console.log(moveButton);
moveButton.addEventListener("click", moveBall);

//Working on the rotation logic.
const rotateButton = document.querySelector("#rotate-button");
console.log(rotateButton);
rotateButton.addEventListener("click", rotateBall);

//Working on the rotation logic.
const scaleButton = document.querySelector("#scale-button");
console.log(scaleButton);
scaleButton.addEventListener("click", scaleBall);

let distance = 0;
function moveBall() {
  //If my distance is less then the width of the outerbox do not do outside the outerbox.
  if (distance < outerWidth) {
    //Remember that ${} lets use to create a variable within a string variable.
    distance += 30;
    /*ball.style.transform = `translateX(${distance}px)`;*/
    //Always remember to use `` when doing variables within strings.
    transformBall();
  }
}

let angle = 0;
function rotateBall() {
  angle += 45;
  transformBall();
  /*ball.style.transform = `rotate(${angle}deg)`;*/
}

let size = 1;
function scaleBall() {
  if (size > 0.22) {
    size -= 0.1;
    console.log(size);
    transformBall();
    /*ball.style.transform = `scale(${size})`;*/
  }
}

//It is not good to have "ball.style.transform in each individual transform function, because it makes it so that when you hit another transform it returns to the origin point."

//Universal Transform Function
function transformBall() {
  ball.style.transform = `translateX(${distance}px) rotate(${angle}deg) scale(${size})`;
}

//Reset Transformations button.
const resetButton = document.querySelector("#reset-button");
resetButton.addEventListener("click", resetBall);

function resetBall() {
  distance = 0;
  angle = 0;
  size = 1;
  transformBall();
}
