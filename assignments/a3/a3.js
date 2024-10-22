const ball = document.querySelector(".ball");
console.log(ball);

function UpdateBallPosition() {
  ball.style.transform = `translate(${XDistance}px, ${YDistance}px)`;
  console.log(`translateX(${XDistance}px), translateY(${YDistance}px)`);
}

const walls = document.querySelectorAll(
  ".wall1, .wall2, .wall3, .wall4, .wall5, .wall6, .wall7, .wall8, .wall9, .wall10"
);

function checkCollision(newXDistance, newYDistance) {
  /*Gets the exact position of the ball.*/
  const ballRect = ball.getBoundingClientRect();
  const tempBallRect = {
    /*Gets the left position side of the ball and adds the distance that the ball is 
    about to move based on the player's click of the arrows keys.*/
    left: ballRect.left + (newXDistance - XDistance),
    right: ballRect.right + (newXDistance - XDistance),
    top: ballRect.top + (newYDistance - YDistance),
    bottom: ballRect.bottom + (newYDistance - YDistance),
  };
  for (let wall of walls) {
    /*Gets the exact position of the walls.*/
    const wallRect = wall.getBoundingClientRect();
    if (
      /*If the left position of the wall is smaller than the right position of the wall.*/
      tempBallRect.left < wallRect.right &&
      /*If the right position of the wall is larger than the left position of the wall.*/
      tempBallRect.right > wallRect.left &&
      /*If the top position of the wall is smaller than the bottom position of the wall.*/
      tempBallRect.top < wallRect.bottom &&
      /*If the bottom position of the wall is larger than the top position of the wall.*/
      tempBallRect.bottom > wallRect.top
    ) {
      console.log("Collision detected with:", wall.id);
      return true;
      /*Then collision is deteced.*/
    }
  }
  return false;
  /*Then collision is not deteced.*/
}

/*Up Button Move*/
const UpButton = document.querySelector("#up");
console.log(UpButton);
UpButton.addEventListener("click", UpwardsBall);

let YDistance = 0;
function UpwardsBall() {
  const newYDistance = YDistance - 36;
  if (YDistance > -300 && !checkCollision(XDistance, newYDistance)) {
    YDistance = newYDistance;
    UpdateBallPosition();
  }
}

/*Down Button Move*/
const DownButton = document.querySelector("#down");
console.log(DownButton);
DownButton.addEventListener("click", DownwardsBall);

function DownwardsBall() {
  const newYDistance = YDistance + 35;
  if (YDistance < 20 && !checkCollision(XDistance, newYDistance)) {
    YDistance = newYDistance;
    UpdateBallPosition();
  }
}

/*Current issue it is the translateX is changing the value of translateY.*/

const LeftButton = document.querySelector("#left");
console.log(LeftButton);
LeftButton.addEventListener("click", LeftBall);

let XDistance = 0;

function LeftBall() {
  const newXDistance = XDistance - 30;
  if (XDistance > 0 && !checkCollision(newXDistance, YDistance)) {
    XDistance = newXDistance;
    UpdateBallPosition();
  }
}

const RightButton = document.querySelector("#right");
console.log(RightButton);
RightButton.addEventListener("click", RightBall);

function RightBall() {
  const newXDistance = XDistance + 30;
  if (XDistance < 450 && !checkCollision(newXDistance, YDistance)) {
    XDistance = newXDistance;
    UpdateBallPosition();
  }
}
