let myButton = document.querySelector("#my-button");
myButton.addEventListener("click", toggleMe);
let myImg = document.querySelector("#myImage");
let helloMsg = document.querySelector("#hello");
myImg.addEventListener("mouseover", addMe);
myImg.addEventListener("mouseout", removeMe);
function addMe() {
  myImg.classList.add("round");
}
function removeMe() {
  myImg.classList.remove("round");
}
function toggleMe() {
  let myName = myImg.dataset.catname;
  helloMsg.textContent = "Hi I am " + myName;
  myImg.classList.toggle("round");
}

let allParagraphs = document.querySelectorAll("p");
//allParagraphs.forEach(changeColor);

function changeColor(item) {
  //console.log(item);
  item.style.backgroundColor = "limegreen";
  // item.textContent = "New text content";
}
console.log(allParagraphs);

const myStatus = document.getElementById("status");
console.log(myStatus);
myStatus.addEventListener("mouseover", function () {
  myStatus.style.backgroundColor = "lightgreen";
});
myStatus.addEventListener("mouseout", function () {
  myStatus.style.backgroundColor = "lightblue";
});

const header = document.querySelector("header");
console.log(header);
console.log(header.innerHTML);
console.log(header.textContent);
let personality = "boring";
let doubt = "doubt";
//header.textContent = "my cat 2";
header.innerHTML += `<p class="red-style">is the ${personality}!</p> <p class="red-style"> This is new para. Are you ${doubt}ing?</p>`;
/*innerHTML allows you to enter html in Javascript*/
