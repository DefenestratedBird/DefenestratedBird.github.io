/*console.log("Welcome to Javascript Practice!");
//Cries its like C#, cries the pain that I have went through last sem has finally been useful.
let count = 10;
console.log(count);
const name = prompt("What is your name?");
const name = "Bob";
console.log("Hello", name);

//myName is a Camelcase. Camelcases always starts with lowercase.
const myName = "Lanchu";
const myCity = "Melbourne";
console.log(myName, "lives in", myCity);

count = 20;
console.log(count);

//boolean variable
let isItRaining = false;
console.log(isItRaining);
if (isItRaining) {
console.log("Please bring umbrella");
}
else {
console.log("No need for umbrella");
}

let isitOARTClass = true;
console.log(isitOARTClass);

if(studentRecord.amIDesignStudent === true) {
console.log("Welcome to the class.")
}
else {
console.log("Sorry you are in the wrong class.");
}

const studentRecord = {
name: "Lanchu",
id: 4007083,
class: "OART1013"
amIScienceStudent: false,
amIDesignStudent: true,};

console.log(studentRecord.name);
console.log(studentRecord.name, "is a", studentRecord.class, "student");

//Remember that Arrays "counting" always starts from 0.
let studentNames = ["Robert", "Alice", "Frank", "Bob", "Tom"];
console.log(studentNames);
console.log(studentNames[3]);*/

//Instead of printing out names like:
// console.log("Hello Robert")
// console.log("Hello Alice")
// console.log("Hello Frank")
//You can use a loop, see below:

let studentNames = ["Robert", "Alice", "Frank", "Bob", "Tom"];
console.log(names.length);
for (let i = 0; 1 < names.length; i++) {
  console.log("Hello", names[1]);
}

/* names.length is your maximum value, whereas i++ is telling your code 
to step the i value one forwards in an incredment.
and i just contains the value of the name[0].
*/

/*
Checks for i = 0, name.length = 5
Then checks if 0 < 5 is True the computer prints:
Hello name[0]  name[0]=Robert

Then the computer checks when i = 1
if 1 < 5 is True the computer then prints:
Hello name[1] name[1]=Alice

Then the computer checks when i = 2
If 2 < 5 .... and etc.
*/
