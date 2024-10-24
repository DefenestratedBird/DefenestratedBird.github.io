const ball = document.querySelector(".ball");
console.log(ball);

let score = 0;

let collectables = {
  c1: { points: 1, collected: false },
  c2: { points: 1, collected: false },
  c3: { points: 1, collected: false },
  c4: { points: 1, collected: false },
  c5: { points: 1, collected: false },
  c6: { points: 1, collected: false },
  c7: { points: 1, collected: false },
  c8: { points: 1, collected: false },
  c9: { points: 1, collected: false },
  c10: { points: 1, collected: false },
  c11: { points: 1, collected: false },
  c12: { points: 1, collected: false },
  c14: { points: 1, collected: false },
};

const Score = document.querySelector("#score");

function updateScore() {
  Score.textContent = `Cherries Collected: ${score}`;
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
const HamDying = document.querySelector("#HamDeathSound");

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
      HamDying.play();
      HamDying.loop = false;
      return true;
    }
  }
  return false;
}

const CollectableSound = document.querySelector("#CollectSound");

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
      CollectableSound.play();
      CollectableSound.loop = false;
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
  if (YDistance > -320 && !checkCollision(XDistance, newYDistance)) {
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
  if (YDistance < -1 && !checkCollision(XDistance, newYDistance)) {
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

/*Pop-up Win Menu:*/

function checkEndCollision() {
  const ball = document.querySelector(".ball");
  const endText = document.querySelector("#EndText");

  const ballRect = ball.getBoundingClientRect();
  const endTextRect = endText.getBoundingClientRect();

  if (
    ballRect.x < endTextRect.x + endTextRect.width &&
    ballRect.x + ballRect.width > endTextRect.x &&
    ballRect.y < endTextRect.y + endTextRect.height &&
    ballRect.y + ballRect.height > endTextRect.y
  ) {
    showPopup();
  }
}

const EndSound = document.querySelector("#endSound");

setInterval(checkEndCollision, 100);
function showPopup() {
  const PopUpMenu = document.querySelector(".PopupMenu");
  PopUpMenu.style.display = "block";
  EndSound.play();
}

const PlayAgain = document.querySelector("#PlayAgainBtn");
PlayAgain.addEventListener("click", RestartGame);

function RestartGame() {
  location.reload();
}
