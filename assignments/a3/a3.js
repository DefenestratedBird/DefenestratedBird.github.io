const ball = document.querySelector(".ball");
console.log(ball);

//Accessing the outer box and check its current width.
const MazeContainer = document.querySelector(".maze-container");
let MazeContainerWidth = MazeContainer.clientWidth / 2 - 49;
let MazeContainerHeight = MazeContainer.clientHeight - 60;
console.log(MazeContainerHeight);

/*Up Button Move*/
const UpButton = document.querySelector("#up");
console.log(UpButton);
UpButton.addEventListener("click", UpwardsBall);

let TotalDistance = 0;
function UpwardsBall() {
  //If my distance is less then the width of the outerbox do not go outside the outerbox.
  if (TotalDistance < MazeContainerHeight) {
    TotalDistance -= 30;
    ball.style.transform = `translateY(${TotalDistance}px)`;
    /*transformBall(); For da reset button.*/
  }
}

/*Down Button Move*/
const DownButton = document.querySelector("#down");
console.log(DownButton);
DownButton.addEventListener("click", DownwardsBall);

function DownwardsBall() {
  //If my distance is less then the width of the outerbox do not go outside the outerbox.
  if (TotalDistance < MazeContainerHeight) {
    TotalDistance += 30;
    ball.style.transform = `translateY(${TotalDistance}px)`;
    /*transformBall(); For da reset button.*/
  }
}
