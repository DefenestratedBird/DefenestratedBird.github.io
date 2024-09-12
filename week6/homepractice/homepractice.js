let myButton = document.querySelector("#my-button");
myButton.addEventListener("click", toggleMe);

let helloMsg = document.querySelector("#hello");

let myImg = document.querySelector("#myImage");
myImg.addEventListener("mouseover", addMe);
myImg.addEventListener("mouseout", removeMe);

/*Sachi if you are reading this. Remember that in this specific Javascript code you must have:
1. Defined variables "let VariableName = ....."
    a. Also don't forget the querySelectors.
2. Event Listeners, otherwise the Javascript won't do anything.
3. Syntax, be careful with spelling errors.
*/

function addMe() {
  myImg.classList.add("round");
}

function removeMe() {
  myImg.classList.remove("round");
}

function toggleMe() {
  let myName = myImg.dataset.birdname;
  helloMsg.textContent = "Hi I am " + myName;
  myImg.classList.toggle("round");
}
