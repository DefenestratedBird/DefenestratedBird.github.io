const ball = document.querySelector(".ball");
console.log(ball);

function UpdateBallPosition() {
  ball.style.transform = `translate(${XDistance}px, ${YDistance}px)`;
  console.log(`translateX(${XDistance}px), translateY(${YDistance}px)`);
}

/*Up Button Move*/
const UpButton = document.querySelector("#up");
console.log(UpButton);
UpButton.addEventListener("click", UpwardsBall);

let YDistance = 0;
function UpwardsBall() {
  //If my distance is less then the width of the outerbox do not go outside the outerbox.
  if (YDistance > -330) {
    YDistance -= 30;
    UpdateBallPosition();
    /*transformBall(); For da reset button.*/
  }
}

/*Down Button Move*/
const DownButton = document.querySelector("#down");
console.log(DownButton);
DownButton.addEventListener("click", DownwardsBall);

function DownwardsBall() {
  //If my distance is less then the width of the outerbox do not go outside the outerbox.
  if (YDistance < 0) {
    YDistance += 30;
    UpdateBallPosition();
    /*transformBall(); For da reset button.*/
  }
}

/*Current issue it is the translateX is changing the value of translateY.*/

const LeftButton = document.querySelector("#left");
console.log(LeftButton);
LeftButton.addEventListener("click", LeftBall);

let XDistance = 0;

function LeftBall() {
  //If my distance is less then the width of the outerbox do not go outside the outerbox.
  if (XDistance > 0) {
    XDistance -= 30;
    UpdateBallPosition();
    /*transformBall(); For da reset button.*/
  }
}

const RightButton = document.querySelector("#right");
console.log(RightButton);
RightButton.addEventListener("click", RightBall);

function RightBall() {
  //If my distance is less then the width of the outerbox do not go outside the outerbox.
  if (XDistance < 450) {
    XDistance += 30;
    UpdateBallPosition();
    console.log(XDistance);
    /*transformBall(); For da reset button.*/
  }
}
