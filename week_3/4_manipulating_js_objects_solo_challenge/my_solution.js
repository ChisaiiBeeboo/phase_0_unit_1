// This is a Solo Challenge. 

// There is a section below where you will write your code.
// Do not alter this object here.


var terah = {
  name: "Terah",
  age: 32,
  height: 66,
  weight: 130,
  hairColor: "brown",
  eyeColor: "brown"
}
/* Pseudocode Section - write pseudocode for each challenge below.
1. Define a variable adam and use object literal notation to assign this variable 
   the value of a JavaScript Object object with no properties.


2. Give adam a name property with the value "Adam".

3. Add a spouse property to terah and assign it the value of adam.

4. Change the value of the terah weight property to 125.

5. Remove the eyeColor property from terah.

6. Add a spouse property to adam and assign it the value of terah.

7. Add a children property to terah and and use object literal notation to assign 
   this variable the value of a JavaScript Object object with no properties

8. Add a carson property to the value of the terah children property and assign it 
  the value of an object with the property name with a value of "Carson".

9. Add a carter property to the value of the terah children property and assign it 
   the value of an object with the property name with a value of "Carter".

10. Add a colton property to the value of the terah children property and assign it 
    the value of an object with the property name with a value of "Colton".

11. Add a children property to adam and assign it the value of terah children.

*/


// __________________________________________
// Write your code below.

// 1. REFERENCE ERROR: Adam is not defined
// define adam using object literal notation.

var adam = {};

// 2. ERROR: The value of the adam name property should be 'Adam'."
// assign adam's name property the value of 'Adam' using dot notation

// var adam = { name: "Adam" };
adam.name = "Adam";

// 3. ERROR: terah should have a spouse property with the value of the variable adam."
// use object literal notation to assign terah a spouse property with value adam

// var terah = { spouse: adam };
terah.spouse = adam;

// 4. "ERROR: The terah weight property should be 125."
// use object dot-notation to assign terah a weight property with value of 125

terah.weight = 125;

// 5. "ERROR: The terah eyeColor property should be removed."
//  use delete operator to remove terahs eyeColor property


delete terah.eyeColor;

// 6. "ERROR: The adam spouse property's value spouse property should be terah."
//  use dot notation to assign adam spouse property the value of terah
adam.spouse = terah;

// 7. "ERROR: The value of the terah children property should be an Object."
// use object constructor to create terah's children object
terah.children = {};



// 8. TypeError: Cannot read property 'name' of undefined
// use object constructor to assign name property to terah's children property with values: carson, carter, colton

terah.children.carson = { name: "Carson" };
terah.children.carter = { name: "Carter" };
terah.children.colton = { name: "Colton" };

// 9. "ERROR: The value of the adam children property should be the value of the terah children property"
// assign adam a children property with the value of terah's children

adam.children = terah.children;

// __________________________________________
// Reflection: Use the reflection guidelines

// What parts of your strategy worked? What problems did you face?
  // I felt pretty comfortable using dot and literal notation to assign values to properties, and object constructors to create objects.
/ / I did forget that when assigning values to properties using dot notation that "var"is unncessary

// What questions did you have while coding? What resources did you find to help you answer them?
  //  I did the JavaScript tutorial on codecademy.com a few months ago and finished the challenge without a problem.

// What concepts are you having trouble with, or did you just figure something out? If so, what?
  // Nada

// Did you learn any new skills or tricks?
  // This was my first time using the delete operator in Javascript

// How confident are you with each of the Learning Competencies?
  // Ultimate confidence.

// Which parts of the challenge did you enjoy?
  // I enjoy coding challenges
// Which parts of the challenge did you find tedious?
  // Writing pseudocode, but I understand it's importance.
// 
// 
// 
// 


// __________________________________________
// Driver Code:  Do not alter code below this line.
function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (adam instanceof Object),
  "The value of adam should be an Object.",
  "1. "
)

assert(
  (adam.name === "Adam"),
  "The value of the adam name property should be 'Adam'.",
  "2. "
)

assert(
  terah.spouse === adam,
  "terah should have a spouse property with the value of the variable adam.",
  "3. "
)

assert(
  terah.weight === 125,
  "The terah weight property should be 125.",
  "4. "
)

assert(
  terah.eyeColor === undefined,
  "The terah eyeColor property should be removed.",
  "5. "
)

assert(
  terah.spouse.spouse === terah,
  "The terah spouse property's value spouse property should be terah.",
  "6. "
)

assert(
  (terah.children instanceof Object),
  "The value of the terah children property should be an Object.",
  "7. "
)

assert(
  terah.children.carson.name === "Carson",
  "The terah children property should have a carson property with its own property name with a value of 'Carson'.",
  "8. "
)

assert(
  terah.children.carter.name === "Carter",
  "The terah children property should have a carter property with its own property name with a value of 'Carter'.",
  "9. "
)

assert(
  terah.children.colton.name === "Colton",
  "The terah children property should have a colton property with its own property name with a value of 'Colton'.",
  "10. "
)

assert(
  adam.children === terah.children,
  "The value of the adam children property should be the value of the terah children property",
  "11. "
)

console.log("\nHere is your final terah object:")
console.log(terah)