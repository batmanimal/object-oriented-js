// If broaden our definition of CLASS to mean "any construct that's capable of constructing a fleet of similar objects,"" 
// we should think of every technique we can think of to satisfy writing such a class. 

// Starting with Prototypal Classes

// PROTOTYPE CHAINS: any object that is made to delegate failed property lookups to other objects 
// instead of using extend function to copy Car.methods properties, can delegate to Car.methods

var Car = function (loc) {
	// var obj = {loc: loc};  // problem: when we use an object literal to build new object, cannot define the prototype of that object
	var obj = Object.create(Car.methods); // use Object.create so we can define the prototype for every new instance of Car in ()'s.
	// whatever we put in here ---^----- is what every new instance looks to for failed lookups
	// extend(obj, Car.methods); -> can get rid of this line because failed lookups fall through to Car.methods directly 
	obj.loc = loc;
	return obj;
};

// STEPS FOR MAKING A CLASS IN PROTOTYPAL PATTERN
var Proto = function (input) { // 1. function that allows you to make objects
	var obj = Object.create(Proto.methods); // 2. a line in that function that generates a new instance object
				// 3. a delegation -^- from the new object to the new prototype object
	obj.loc = loc;
	// 4. some logic for augmenting the object to make it unique from all other objects in the prototye class
	return obj;
};

// Back to Car.methods 
Car.methods = { // the language actually does the work of creating an object to contain methods for us whenever a fcn is created
// stored at the key .prototype
	move : function() {
		this.loc++;
	}
};

// All we need to do is define .move on an existing .prototype object 
Car.prototype.move = function() {
	this.loc++;
};

// After defining .move on .prototype, .methods does not exist anymore -- time to refactor 
var Car = function (loc) { // Car is a function Object, not itself a prototype of Car.prototype
	// Car creates objects that delegate to Car.prototype
	var obj = Object.create(Car.prototype); // the only thing that's changed is that we're using a diff key here
	obj.loc = loc;
	return obj;
}

/* MISCONCEPTIONS 
Car function does not delegate its failed lookups to the object stored at Car.prototype. 
There is no such thing as Car.move, for example. We never imagined that Car delegated its failed lookups
to Car.methods, so we should not expect that it delegates to Car.prototype.
The only reason obj delegates is because we called it on the Object.create function. 
.prototype is a freely provided object to storing things (can substitute the word '.methods' if it's easier)

var Example = function () {
	return Object.create(Car.prototype);
};

This Example function has the exact same relationship to Car.prototype object that the Car function does. 
Both functions return objects that are set up to delegate to the object stored at Car.prototype. 
The fact that the prototype object is stored as a property of only one of those functions is completely immaterial. 
Both functions behave exactly the same as they would if that prototype object had merely been stored as a global variable.

Constructor property
*/
console.log(Car.prototype.constructor);  // .prototype is one of the only objects that has a .constructor property
// points back to the function it came attached to
var amy = Car(1);
console.log(amy.constructor);
console.log(amy instanceof Car); // true -> can Car be found somewhere in amy's prototype chain? 

// instanceof 

var Dog = function(){ // creates an object literal, so fido does not work with instanceof  
	return {legs: 4, bark: 'alert'};
};
var fido = Dog();
console.log(fido instanceof Dog); // false 
console.log(fido instanceof Object); // true 

// NOTE: function sharing via prototype delegation is the very goal of the prototypal pattern. If methods were
// defined inside the constructor (like with decorators and functional classes), there would be little reason to delegate at all. 

