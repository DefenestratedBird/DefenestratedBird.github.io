function checkWeather() {
  let temp = document.querySelector("#temp");
  //The querySelector is checking our html code with the id tag #temp to get the user the required data.
  console.log(temp.value);
  if (temp.value >= 40) {
    console.log("I am melting into a wet noodle.");
    Body.style.backgroundColor = "crimson";
  } else if (temp.value < 40 && temp.value >= 30) {
    console.log("It is still shot & sunny.");
    body.style.backgroundColor = "limegreen";
  } else if (temp.value < 30 && temp.value >= 15) {
    console.log("it is a pleasent weather.");
    body.style.backgroundColor = "aqua";
  } else if (temp.value < 15) {
    console.log("It is freezing cold.");
    body.style.backgroundColor = "grey";
  }
}
