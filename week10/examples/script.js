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
console.log(profileContent);

profileButton.addEventListener("click", toggleMenu);

function toggleMenu() {
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
