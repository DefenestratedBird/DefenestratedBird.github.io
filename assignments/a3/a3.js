const ball = document.querySelector(".ball");
console.log(ball);

//Accessing the outer box and check its current width.
const MazeContainer = document.querySelector(".maze-container");
let MazeContainerWidth = MazeContainer.clientWidth / 2 - 49;
let MazeContainerHeight = MazeContainer.clientHeight / 2 - 49;

/*Up Button Move*/
const UpButton = document.querySelector("#up");
console.log(UpButton);
UpButton.addEventListener("click", UpwardsBall);

let distance = 0;
function UpwardsBall() {
  //If my distance is less then the width of the outerbox do not go outside the outerbox.
  if (distance < MazeContainerHeight) {
    distance += 30;
    ball.style.transform = `translateY(-${distance}px)`;
    /*transformBall(); For da reset button.*/
  }
}
