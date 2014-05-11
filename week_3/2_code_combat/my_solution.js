// I worked on this challenge  with: Molly Huerster
 
// For each mission, write the title as a comment. (Shown here). Also include pseudocode as a comment. 
// Note: to make commenting easier, you can highlight the section you want to comment and hold 
// command + / This will comment the line. 

// RESCUE MISSION

// remove move right 1x on line 6
// move up x1
// move right 2x
// move down x1
// ATTACK!
// 
// 

this.moveDown();
this.moveDown();
this.moveRight();
this.moveUp();
this.moveUp();
this.moveRight();
this.moveRight();
this.moveDown();
this.attackNearbyEnemy();

// GRAB THE MUSHROOM

// move up 1x
// move right 1x
// move left 1x
// move up 1x
// Attack

this.moveUp();
this.moveRight();
this.moveLeft();
this.moveUp();
this.attackNearbyEnemy();

// DRINK ME

// move right
// ATTACK
// move right
// move down
// move up
// move right
// ATTACK

this.moveRight();
this.attackNearbyEnemy();
this.moveRight();
this.moveDown();
this.moveUp();
this.moveRight();
this.attackNearbyEnemy();

// TAUNT THE GUARDS

// move right 1x
// knockdown door
// move right 1x
// say hey there
// move left 2x
// ATTACK
// move right 1x
// say follow me
// move right 2x
// move up
// move right 1x
// say get ready
// say attack
// say attack
// ATTACK
// ATTACK
// say follow me
// move right 1x

this.moveRight();
this.bustDownDoor();
this.moveRight();
this.say("Hey there!");
this.moveLeft();
this.moveLeft();
this.say("Attack!");
this.moveRight();
this.say("Follow me.");
this.moveRight();
this.moveRight();
this.moveUp();
this.moveRight();
this.say("Get ready !");
this.say("Attack!");
this.say("Attack!");
this.attackNearbyEnemy();
this.attackNearbyEnemy();
this.say("Follow ME.");
this.moveRight();

// IT'S A TRAP

// move down 2x
// say hey you
// move up 2x

this.moveDown();
this.moveDown();
this.say("hey you");
this.moveUp();
this.moveUp();

// BREAK THE PRISON

// return true if name is William
// return false if name is Krogg, Brack, Gort, or MARCUS
// for all other names return true

if(name === "William")
    return true;
if(name === "Krogg")
    return false;  
if(name === "Brack" && "Gort")
    return false;
if(name === "MARCUS")
    return false;

return true;

// TAUNT

//say a different phrase 5X


this.say("Hey!");
this.say("Yo!");
this.say(" you!");
this.say("ey you!");
this.say("Hey ou!");

// COWARDLY TAUNT

// move to coordinates 50, 16
// move to coordinates 63, 20
// move to coordinates 70, 10
// say i can lure them in here
// move to coordinates 50, 16
// say hey you
// move to coordinates 70, 10

this.moveXY(50, 16);
this.moveXY(63, 20);
this.moveXY(70, 10); 
this.say("I can lure them in here.");
this.moveXY(50, 16);
this.say("hey you");
this.moveXY(70, 10);



// COMMANDING FOLLOWERS

// move to coordinates 49, 66
// move to coordinates 60, 63
// move to coordinates 75, 63
// say hail, friends
// say follow me
// move to coordinates 64, 42
// attack


this.moveXY(49, 66);
this.moveXY(60, 63);
this.moveXY(75, 63);
this.say("Hail, friends!");
this.say("follow me");
this.moveXY(64, 42);
this.say("attack");



// MOBILE ARTILLERY

// move to coordinates 30, 26
// move to coordinates 46, 5
// move to coordinates 53, 30
// move to coordinates 69, 55
// move to coordinates 61, 44
// move to coordinates 52, 37
// move to coordinates 49, 65
// move to coordinates 50, 57


this.moveXY(30, 26);  
this.attackXY(46, 5);  
this.moveXY(53, 30);
this.attackXY(69, 55);
this.attackXY(61, 44);
this.moveXY(52, 37);
this.attackXY(49, 65);
this.attackXY(50, 57);
 
 
//  Release 3: Answer the following questions

// What is this referring to? Think programming-wise rather than in the terms of the game.
// this refers to whichever object called that method when the method is actually used

// What does the () do in JavaScript?
// Parenthesis can contain arguments if any. They can be used for grouping expressions. They can be containers for parameters.

// What is the point of the semicolons?
// A semicolon is like the period after a sentence, it seperates statements. Helps denote the ending of a code.
 
 
 
 
// Reflection:
// Write your reflection here.

// What parts of your strategy worked? What problems did you face?
// We were successful in completing the objective for each mission. The site itself was extremely buggy and getting the pages to load was a challenge in itself. 
// As a result I was the driver for the entire challenge because my partner was unable to load the game on her computer. 

// What questions did you have while coding? What resources did you find to help you answer them?
// I found myself thinking "How is this game teaching JavaScript", if there were a lesson in there I didn't see it.

// What concepts are you having trouble with, or did you just figure something out? If so, what?
// I did learn that semicolons are optional in some cases through google, and is generally used as best practice.

// Did you learn any new skills or tricks?
// I'm not sure I learned anything from this challenge. 

// How confident are you with each of the Learning Competencies?
// confident

// Which parts of the challenge did you enjoy?
// My partner was pleasant to work with.

// Which parts of the challenge did you find tedious?
// We spent more time figuring out the game play than actually learning JavaScript
