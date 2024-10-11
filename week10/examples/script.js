//Get access to the image.
/*const myBorb = document.querySelector("my-borb");
console.log(myBorb);

const moreInfo = document.querySelector("#more-info");
myBorb.addEventListener("mouseover", showMoreInfo);
myBorb.addEventListener("mouseout", hideMoreInfo);
console.log(moreInfo);

//adding show class tona
function showMoreInfo() {
  moreInfo.classList.add("show");
}

function hideMoreInfo() {
  moreInfo.classList.remove("show");
}*/

//Drop Down
const profileButton = document.querySelector("#profile-button");
console.log(profileButton);

const profileContent = document.querySelector("#profile-content");

profileButton.addEventListener("click", toggleMenu);

function toggleMenu() {
  console.log(profileContent);
  profileContent.classList.toggle("show");
}

const abcButton = document.querySelector("#abc-button");
console.log(abcButton);

abcButton.addEventListener("click", gotoABC);

function gotoABC() {
  window.location.href = "https://www.abc.net.au/";
}

const footerButton = document.querySelector("#footer-button");
console.log(footerButton);

footerButton.addEventListener("click", gotoFooter);

function gotoFooter() {
  window.location.href = "#bottom";
}

/*const topButton = document.querySelector("#top-button");
console.log(topButton);
topButton.addEventListener("click", gotoTop);
function gotoTop() {
  window.location.href = "#top";
}*/

const purpleBox = document.querySelector("#purple-box");
console.log(purpleBox);
const dropBox = document.querySelector("#drop-box");
console.log(dropBox);

let draggedElement = null;
purpleBox.addEventListener("dragstart", startDrag);
function startDrag() {
  draggedElement = purpleBox;
}

dropBox.addEventListener("dragover", endDrag);
function endDrag() {
  console.log("stop dragging and drop now.");
  event.preventDefault();
}

dropBox.addEventListener("drop", handleDrop);
function handleDrop() {
  if (draggedElement) {
    let color = window
      .getComputedStyle(draggedElement)
      .getPropertyValue("background-color");
    dropBox.style.backgroundColor = color;
    dropBox.textContent = "content is dropped";
    draggedElement = null;
  }
}
