const ball = document.querySelector(".ball");
console.log(ball);

function UpdateBallPosition() {
  ball.style.transform = `translate(${XDistance}px, ${YDistance}px)`;
  console.log(`translateX(${XDistance}px), translateY(${YDistance}px)`);
  checkCollision();
}

const walls = document.querySelectorAll(
  ".wall1, .wall2, .wall3, .wall4, .wall5, .wall6, .wall7, .wall8, .wall9, .wall10"
);

function checkCollision() {
  const ballRect = ball.getBoundingClientRect();
  for (let wall of walls) {
    const wallRect = wall.getBoundingClientRect();
    if (
      ballRect.left < wallRect.right &&
      ballRect.right > wallRect.left &&
      ballRect.top < wallRect.bottom &&
      ballRect.bottom > wallRect.top
    ) {
      console.log("Collision detected with:", wall.id);
      return true;
    }
  }
  return false;
}

/*Up Button Move*/
const UpButton = document.querySelector("#up");
console.log(UpButton);
UpButton.addEventListener("click", UpwardsBall);

let YDistance = 0;
function UpwardsBall() {
  //If my distance is less then the width of the outerbox do not go outside the outerbox.
  if (YDistance > -300) {
    YDistance -= 36;
    if (checkCollision()) {
      YDistance += 36;
      UpdateBallPosition();
    }
    /*transformBall(); For da reset button.*/
  }
}

/*Down Button Move*/
const DownButton = document.querySelector("#down");
console.log(DownButton);
DownButton.addEventListener("click", DownwardsBall);

function DownwardsBall() {
  //If my distance is less then the width of the outerbox do not go outside the outerbox.
  if (YDistance < 20) {
    YDistance += 35;
    if (checkCollision()) {
      YDistance -= 35;
      UpdateBallPosition();
    }
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
    if (checkCollision()) {
      XDistance += 30;
      UpdateBallPosition();
    }
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
    if (checkCollision()) {
      XDistance -= 30;
      UpdateBallPosition();
    }
    console.log(XDistance);
    /*transformBall(); For da reset button.*/
  }
}
