// I paired by myself on this challenge.




// Pseudocode
// 1. "ERROR: The value of secretNumber should be a number."
//  assign secretNumber the value of 77

// 2. false VM180:45
// "ERROR: The value of secretNumber should be 7."
// assign secretNumber value of 7

//3. "ERROR: The value of password should be a string."
//assign password value of "stringpassword"

//4. "ERROR: The value of password should be 'just open the door'."
// assign passwrod value of "just open the door"

//5. "ERROR: The value of allowedIn should be a boolean."
// assign allowedIn value of "true"

//6. "ERROR: The value of allowedIn should be false."
// assign allowedIn value of false

//7. ReferenceError: members is not defined
// use object constructor to create members object

//8. "ERROR: The value of members should be an array"
// make the value of members an array

//9. "ERROR: The first element in the value of members should be 'John'."
// assign John to members with a 0 index

//10. "ERROR: The fourth element in the value of members should be 'Mary'."
// assign Mary to members with index of 3

// __________________________________________
// Write your code below.
var secretNumber = 77;
var secretNumber = 7;
var password = "stringpassword";
var password = "just open the door";
var allowedIn = true;
var allowedIn = false;
var members = {};
var members = [];
members[0] = "John";
members[3] = "Mary";

// __________________________________________
// Refactored Code: Include a refactored version (or justification of your original code) here. 
// when assigning variables there is nothing to refactor




// __________________________________________
// Reflection: Use the reflection guidelines to write a reflection here. 
// 
// What parts of your strategy worked? What problems did you face?
// Had no problems
// What questions did you have while coding? What resources did you find to help you answer them?
// Simple challenge, didn't use any resources

// What concepts are you having trouble with, or did you just figure something out? If so, what?
// Nothing at all

// Did you learn any new skills or tricks?
// First time using Node, good alternative to using browser

// How confident are you with each of the Learning Competencies?
// Ultimate confidence

// Which parts of the challenge did you enjoy?
// Finishing it

// Which parts of the challenge did you find tedious?
// Pseudocode
// 
// 
// 

// RELEASE 6: I reviewed JennieO23/phase_0_unit_1 and jpberry0623/phase_0_unit_1


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
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)

assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)

assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)

assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)

assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)

assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)

assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)

assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)

assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)

