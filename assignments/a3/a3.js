const ball = document.querySelector(".ball");
console.log(ball);

/*const MazeContainer = document.querySelector(".maze-container");
let MazeContainerWidth = MazeContainer.clientWidth / 2 - 49;
let MazeContainerHeight = MazeContainer.clientHeight - 60;
console.log(MazeContainerHeight);*/

/*Up Button Move*/
const UpButton = document.querySelector("#up");
console.log(UpButton);
UpButton.addEventListener("click", UpwardsBall);

let TotalDistance = 0;
function UpwardsBall() {
  //If my distance is less then the width of the outerbox do not go outside the outerbox.
  if (TotalDistance > -330) {
    TotalDistance -= 30;
    ball.style.transform = `translateY(${TotalDistance}px)`;
    /*transformBall(); For da reset button.*/
    console.log(ball.style.transform);
  }
}

/*Down Button Move*/
const DownButton = document.querySelector("#down");
console.log(DownButton);
DownButton.addEventListener("click", DownwardsBall);

function DownwardsBall() {
  //If my distance is less then the width of the outerbox do not go outside the outerbox.
  if (TotalDistance < 0) {
    TotalDistance += 30;
    ball.style.transform = `translateY(${TotalDistance}px)`;
    console.log(TotalDistance);
    /*transformBall(); For da reset button.*/
  }
}

/*Current issue it is the translateX is changing the value of translateY.*/

const LeftButton = document.querySelector("#left");
console.log(LeftButton);
LeftButton.addEventListener("click", LeftBall);

function LeftBall() {
  //If my distance is less then the width of the outerbox do not go outside the outerbox.
  if (TotalDistance < 3000) {
    TotalDistance -= 30;
    ball.style.transform = `translateX(${TotalDistance}px)`;
    console.log(ball.style.transform);
    /*transformBall(); For da reset button.*/
  }
}

const RightButton = document.querySelector("#right");
console.log(RightButton);
RightButton.addEventListener("click", RightBall);

function RightBall() {
  //If my distance is less then the width of the outerbox do not go outside the outerbox.
  if (TotalDistance < 3000) {
    TotalDistance += 30;
    ball.style.transform = `translateX(${TotalDistance}px)`;
    console.log(ball.style.transform);
    /*transformBall(); For da reset button.*/
  }
}
