const ball = document.querySelector(".ball");
console.log(ball);

let score = 0;

let collectables = {
  c1: { points: 10, collected: false },
  c2: { points: 10, collected: false },
  c3: { points: 10, collected: false },
};

const Score = document.querySelector("#score");

function updateScore() {
  Score.textContent = `Score: ${score}`;
}

function UpdateBallPosition() {
  ball.style.transform = `translate(${XDistance}px, ${YDistance}px)`;
  /*console.log(`translateX(${XDistance}px), translateY(${YDistance}px)`);*/
}

// const walls = document.querySelectorAll(
//   "#wall1, #wall2, #wall3, #wall4, #wall5, #wall6, #wall7, #wall8, #wall9, #wall10"
// );

const walls = document.querySelectorAll(".wall");
console.log(walls);

function checkCollision(newXDistance, newYDistance) {
  /*Gets the exact position of the ball.*/
  const ballRect = ball.getBoundingClientRect();
  const tempBallRect = {
    /*Gets the left position side of the ball and adds the distance that the ball is 
    about to move based on the player's click of the arrows buttons.*/
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
  for (let obs of obstacle) {
    const obsRect = obs.getBoundingClientRect();
    if (
      tempBallRect.left < obsRect.right &&
      tempBallRect.right > obsRect.left &&
      tempBallRect.top < obsRect.bottom &&
      tempBallRect.bottom > obsRect.top
    ) {
      console.log("The Ball has collide with an obstacle:", obs.id);
      ResetPosition();
      return true;
    }
  }
  return false;
}

function checkCollectCollision() {
  for (let key in collectables) {
    let collectable = document.querySelector(`#${key}`);
    let collectRect = collectable.getBoundingClientRect();
    let ballRect = ball.getBoundingClientRect();

    if (
      ballRect.right > collectRect.left &&
      ballRect.left < collectRect.right &&
      ballRect.bottom > collectRect.top &&
      ballRect.top < collectRect.bottom &&
      !collectables[key].collected
    ) {
      score += collectables[key].points;
      collectables[key].collected = true;
      collectable.style.display = "none";
      updateScore();
      console.log("You have collected:", [key]);
    }
  }
}

/*Up Button Move*/
const UpButton = document.querySelector("#up");
console.log(UpButton);
UpButton.addEventListener("click", UpwardsBall);

let YDistance = 0;
let newYDistance = 0;
let newXDistance = 0;

function UpwardsBall() {
  let newYDistance = YDistance - 35;
  if (YDistance > -300 && !checkCollision(XDistance, newYDistance)) {
    YDistance = newYDistance;
    UpdateBallPosition();
    checkCollectCollision();
  }
}

/*Down Button Move*/
const DownButton = document.querySelector("#down");
console.log(DownButton);
DownButton.addEventListener("click", DownwardsBall);

function DownwardsBall() {
  let newYDistance = YDistance + 35;
  if (YDistance < 20 && !checkCollision(XDistance, newYDistance)) {
    YDistance = newYDistance;
    UpdateBallPosition();
    checkCollectCollision();
  }
}

const LeftButton = document.querySelector("#left");
console.log(LeftButton);
LeftButton.addEventListener("click", LeftBall);

let XDistance = 0;

function LeftBall() {
  let newXDistance = XDistance - 30;
  if (XDistance > 0 && !checkCollision(newXDistance, YDistance)) {
    XDistance = newXDistance;
    UpdateBallPosition();
    checkCollectCollision();
  }
}

const RightButton = document.querySelector("#right");
console.log(RightButton);
RightButton.addEventListener("click", RightBall);

function RightBall() {
  let newXDistance = XDistance + 30;
  if (XDistance < 450 && !checkCollision(newXDistance, YDistance)) {
    XDistance = newXDistance;
    UpdateBallPosition();
    checkCollectCollision();
  }
}

/*Reset X/Y Distance Transform Position of Ball on collision.*/
const obstacle = document.querySelectorAll(".obs", ResetPosition);
console.log(obstacle);

let startTop = "325px";
let startLeft = "12px";

function ResetPosition() {
  YDistance = 0;
  XDistance = 0;
  UpdateBallPosition();
  console.log(ball.style.transform);
}
