//Physically speaking I cannot fucking cope with making a drop-down menu right now.//

const weeklybutton = document.querySelector("#weekly-button");
console.log(weeklybutton);

const classContent = document.querySelector("#class-content");
console.log(classContent);

weeklybutton.addEventListener("click", toggleMenu);

function toggleMenu() {
  console.log(classContent);
  classContent.classList.toggle("show");
}
