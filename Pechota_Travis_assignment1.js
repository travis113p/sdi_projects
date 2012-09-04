/*
Travis Pechota
SDI 1209
Project 1
*/

//Initial Variables
var pet = "turtle";
var myTurtle = "Chomper";
var response = "\"Thank you!\""
var number = 4;
var dirtyWater = true;

console.log("I have " + number + " pets at my house."); 
console.log("My favorite animal is my " + pet + ", " + myTurtle + ".");
console.log("If it is " + dirtyWater + " that Chomper's water is dirty, then I must clean his tank.");
console.log("I do this by draining the water, rinsing the rocks, and refilling " + myTurtle + "'s tank.");
console.log("Then " + myTurtle + " says " + response + ".");

if (number === 4){
	if (pet === "turtle"){
		console.log("My turtle is " + myTurtle + ".");
	} else {
		console.log("You don't have a turtle!");
	};
	if (dirtyWater === true){
		console.log("Time to clean " + myTurtle + "'s aquarium.");
		console.log("Chomper says " + response)
	} else {
		console.log("Let " + myTurtle + " keep swimming.");
	};
} else {
	console.log("Time to clean the bird!");
};
	
