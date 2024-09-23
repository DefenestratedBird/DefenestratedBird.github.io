// In order to play audio sound on clicking of a button,
// first we must select both button and audio from the DOM.
const clickButton = document.querySelector("#clickButton");
const clickSound = document.querySelector("#clickSound");
const Img = document.querySelector("#CatImgBtn");

// We added a click event on the button and added a callback to play sound
clickButton.addEventListener("click", playSound);

Img.addEventListener("click", function () {
  const image = document.querySelector("#CatImgBtn");

  // Change the src attribute to the new image in the folder
  image.src = "/week7/pop car mouth open.jpg";
});

function playSound() {
  // we use the play method to play the sound
  clickSound.play();
}
