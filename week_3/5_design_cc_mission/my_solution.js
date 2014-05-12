// I worked by myself on this challenge

// Your mission description:
// Create a snowman!
// Take him somewhere fun to play!
// 

// Pseudocode
// confirm that user indeed want to build a snowman
// prompt the user for a second input
// prompt user to create snowman with properties name, eyes and nose
// include hereHeIs function property to show off his attributes
// call function
// prompt user to take snowMan to the beach or snow palace
// if user input is 'beach' alert user that it's "game over"
// else if user inputer is 'snow palace' snowMan has fun all over the place
// else any other input will result in game over
// alert game is over

// Initial Code

confirm("Do you want to build a snowman?");


var wannaPlay = prompt("Do you want to go and play?");
	
	if (wannaPlay === "yes"){
		console.log("YAAAAaaaaay");
	} else {
		alert("OOOoooh Kaaaay baaiiii =/");
	};

var snowMan = {
	name: prompt("What should we name our snowman?"),
	eyes: prompt("Should we use pebbles or an Oreo for his eyes"),
	nose: prompt("And here's a ____ (rhymes with parrot, starts with a C) for a nose!"),
	hereHeIs: function() {console.log("This is " + snowMan.name + " our snowman with " + snowMan.eyes + " eyes and a " + snowMan.nose + " nose (:^)_)_) ")}
};

snowMan.hereHeIs()


var	playPlace = prompt("Should we take " + snowMan.name + " to the beach or the snow palace to play?")
	if (playPlace === "beach") {
		alert(snowMan.name + " has melted!!");
		alert("GAME OVER");
	} else if ( playPlace === "snow palace" )  {
		console.log( "Look at the yellow snow! Look how much fun he's having!" );
		alert("WEEEEeeeee (:^)_)_)")
	} else {
		console.log( snowMan.name + " can't go there!!");
		alert(snowMan.name + " can't go there, he's a snowman! " + snowMan.name + " is iced water now. GAME OVER.");
	}


alert("OOOoooh Kaaaay baaiiii =/");



// Refactored Code

confirm("Do you want to build a snowman?");


var Game = function() {
	wannaPlay = prompt("Do you want to go and play?");
	
	if (wannaPlay === "yes"){
		console.log("YAAAAaaaaay");
	

	var snowMan = {
		name: prompt("What should we name our snowman?"),
		eyes: prompt("Should we use pebbles or an Oreo for his eyes"),
		nose: prompt("And here's a ____ (rhymes with parrot, starts with a C) for a nose!"),
		hereHeIs: function() {console.log("This is " + snowMan.name + " our snowman with " + snowMan.eyes + " eyes and a " + snowMan.nose + " nose (:^)_)_) ")}
	};

	snowMan.hereHeIs()


	var	playPlace = prompt("Should we take " + snowMan.name + " to the beach or the snow palace to play?")
		if (playPlace === "beach") {
			alert(snowMan.name + " has melted!!");
			alert("GAME OVER");
		} else if ( playPlace === "snow palace" )  {
			console.log( "Look at the yellow snow! Look how much fun he's having!" );
			alert("WEEEEeeeee (:^)_)_)");
			alert("OOOoooh Kaaaay baaiiii =/");
		} else {
			console.log( snowMan.name + " can't go there!!");
			alert(snowMan.name + " can't go there, he's a snowman! " + snowMan.name + " is iced water now. GAME OVER.");
		}

		}
else {
		alert("OOOoooh Kaaaay baaiiii =/");
	}

};

Game();


// Release 5: Review other's solutions
//britneyroar/phase_0_unit_1
//BrennonTWilliams/phase_0_unit_1

// Reflection
// 
// This was a really fun challenge as it combined coding and my nieces' favorite Disney movie. I started out 
// building a simple yes or no input game and later incorporated object literal construction to have the 
// user create a snowMan object. I'm still plagued with the usual syntax errors as I'm coding but notice that I'm recognizing 
// the error's now and am able to identify them faster. I also had to restructure my code to get the game to end when
// the user input 'no' when asked whether they "want to go and play". In all I was able to apply a lot of the things
// I learned this week into the game, feeling very satisfied with the final product. 
// 
// 
// 