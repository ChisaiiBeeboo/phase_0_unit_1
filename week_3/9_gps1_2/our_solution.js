// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
//  1. Kaitlyn La
//  2. Adrian Tawadros


// 1. "YOU SIGNED... WHO?!"
var client1 = {
    name: "Jasmine",
    age: 24, 
    quote:  "Is that? Is that a magic carpet?"
    };
    
var client2 = {
    name: "Alladdin",
    age: 26,
    quote: "That's Abu!",
    };
    


console.log(client1);
console.log(client2);



// 2. "Here they Come!"
var ClientMaker = function (name, age, quote) {
        this.name = name,
        this.age = age,
        this.quote = quote
    this.funStuff = function(){
      console.log("FUN!")
    }
};


var kristenBell = new ClientMaker("Kristen Bell", 33, "Do you wanna build a snowman?")

var jimCarrey = new ClientMaker("Jim Carrey", 52, "...So you're telling me there's a chance? YEAH!")

var adamSandler = new ClientMaker("adam sandler", 47, "That's your home! Are you too good for your home?!");
adamSandler.funStuff

var sandlerAdams = new ClientMaker("Sandler Adams", 47, "That's your home! Are you too good for your home?!");
    




// 3. "TIME IS MONEY!"

//YOUR CODE HERE!
var Client = function (name, age, quote) {
        this.name = name,
        this.age = age,
        this.quote = quote
    this.funStuff = function(){
      console.log("FUN!")
    }
};
var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
shooterMcGavin.constructor === Client;
shooterMcGavin.age === 48;
shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.";





// 4. "SHOW 'EM OFF!"

var printClient = function (client) {
        console.log("Client's name: " + client.name + " Age: " + client.age + " famous quote is " + client.quote);
};

printClient(client2);


// ** BONUS **


//  Your Reflection:
// What parts of your strategy worked? What problems did you face?
// We were successful in creating objects using object literal notation. We had minor syntax errors along the way.

// What questions did you have while coding? What resources did you find to help you answer them?
// Not quite sure what "this" is, but I received a helpful link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this

// What concepts are you having trouble with, or did you just figure something out? If so, what?
// Still confused as to when to use ':' and '='

// Did you learn any new skills or tricks?
// How confident are you with each of the Learning Competencies?
// Ultimate confidence

// Which parts of the challenge did you enjoy?
// Creating functions to streamline storing clients.

// Which parts of the challenge did you find tedious?
// Nada