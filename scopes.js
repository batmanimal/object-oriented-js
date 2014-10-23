// Scopes 
// Lexical scope: regions in your source code where you can 
// refer to a variable by name without getting access errors
// Blocks within a function create a new lexical scope 

// Global Scope
// Establish dummy functions to return some words 
function aHero () {
	return "Gal";
}
function aFoil () {
	return "Cow";
}
function aDeed () {
	return "Taps";
}

var hero = aHero();
var newSaga = function() { // scope1 starts here
	var foil = aFoil();
	var saga = function() { // scope2 starts here 
		var deed = aDeed();
		console.log(hero+deed+foil);
	}; // scope2 ends here 
	saga();
	// -> GalTapsCow
	saga();
	// -> GalTapsCow
}; // scope1 ends here
newSaga();
// -> GalTapsCow
newSaga();
// -> GalTapsCow



