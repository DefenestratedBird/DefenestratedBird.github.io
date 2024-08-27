function checkWeather() {
  let temp = document.querySelector("#temp");
  let body = document.querySelector("body");
  let outer = document.querySelector(".outer");
  //The querySelector is checking our html code with the id tag #temp to get the user the required data.
  //The "let body = document.querySelector("body");" changes the colour of the background.

  console.log(temp.value);
  if (temp.value >= 40) {
    console.log("I am melting into a wet noodle.");
    body.style.backgroundColor = "crimson";
    outer.style.borderColor = "blue";
  } else if (temp.value < 40 && temp.value >= 30) {
    console.log("It is still shot & sunny.");
    body.style.backgroundColor = "limegreen";
    outer.style.borderColor = "peach";
  } else if (temp.value < 30 && temp.value >= 15) {
    console.log("it is a pleasent weather.");
    body.style.backgroundColor = "aqua";
    outer.style.borderColor = "purple";
  } else if (temp.value < 15) {
    console.log("It is freezing cold.");
    body.style.backgroundColor = "grey";
    outer.style.borderColor = "coral";
  }
}
