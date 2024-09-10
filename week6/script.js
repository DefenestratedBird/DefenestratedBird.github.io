function checkGrade() {
  const a1 = document.querySelector("#answer1");
  console.log(a1.value);

  const a2 = document.querySelector("#answer2");
  console.log(a2.value);

  let total = parseFloat(a1.value) + parseFloat(a2.value);
  console.log("sum is", total);
  sendReport(total);
}
/*You need the ".value" after "a1" because if you don't it will give you the element only
      <input
        type="number"
        id="answer2"
        placeholder="Enter a number between 1 to 30"
      /> 
      And not the number variable that you have entered into the input.
      */
/*By default "a1.value" is a string variable, and you need parseFloat to convert
"a1.value" into a number variable.*/
/*Think of querySelector as a google search. Whenever document.querySelector("#specificIdtag"); is run it goes through your html code
and finds the tag with the #specificIdtag and slaps into the function.
*/

/*Calling the function here.*/
const a1 = document.querySelector("#answer1");
console.log(a1);

function calculateTotal(a, b) {
  let total = a + b;
  return total;
}
/*One can use any variable name within the above function. For example:
function calculateTotal(x,y) {
let total = x + y;
return total;
}
Is a legit function that you can run. What matters is the functionName. Which is "calculateTotal".
*/

function sendReport(score) {
  const report = document.querySelector("#report");
  console.log(report);
  if (score > 30) {
    console.log("You got HD! Yipeee!");
    report.textContent = "You got a HD!";
  } else if (score > 20 && score <= 30) {
    console.log("You Got a D! Kinda mid ngl.");
    report.textContent = "You got a D!";
  }
}

/*const para = document.querySelector("p");
console.log(para);
/*Gives you the first <p> tag in your html code. In the Week 5/6 document it will give you the "<p id="question1">How much did you score in the assignment 1?</p>"*/

/*const allPara = document.querySelectorAll("p");
console.log(allPara);
/*Gives you all the <p> tags in your html code.*/

/*const question2 = document.querySelector("#question2");
console.log(question2.textContent);
question2.textContent = "Hello World! OWO.";*/

/*h1.classList.add("red-style");
Adds a new class onto your current already pre-existing class attached to that tag.
h1.classlist.remove("blue-style");
Removes a class from your current class attached to your tags.
*/
