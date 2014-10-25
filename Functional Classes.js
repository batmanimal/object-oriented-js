// Functional Classes 
// A class is a powerful type of function that can be used to manufacture fleets of similar objects.

// Decorator code vs Classes
// A class builds the object that it is going to augment
// A decorator accepts the object that it's going to augment as an input

// **** in library.js ****
// decorator
var carlike = function (obj, loc) {
	obj.loc = loc;
	obj.move = function () {
		obj.loc++;
	};
	return obj;
};

// **** in run.js ****
// decorator
var amy = carlike({}, 1);
amy.move();


// **** in library.js ****
// class 
// var carlike = function (obj, loc) { <- replaced this with the constructor function, Car
var Car = function(loc) { // remove the obj param in favor of declaring a local variable
	// obj.loc = loc;
	var obj = {loc: loc}; // move object creation into the carlike function
	obj.move = function () {
		obj.loc++;
	};
	return obj;
};

// **** in run.js ****
// class
var amy = Car(1); // only the loc variable is in the param bc the object literal is created in the Car fcn
amy.move();


// Reducing Duplicity 
var Car = function(loc) {
	var obj = {loc: loc};
	obj.move = function () { // this move method is newly created every time Car is called - expensive 
		obj.loc++;
	};
	return obj;
};


var Car = function(loc) {
	var obj = {loc: loc};
	obj.move = move; // removed the move function outside of Car so that it is called only once 
	return obj;
};

function move () {
	//obj.loc++; // outside of Car, no longer has closure scope access to the obj variable 
	this.loc++; // change 'obj' to the parameter 'this', which will treat the object to the left of the dot
				// at calltime as a function input, and provide us a name that we can use to refer to that object. 
}

// Functional Shared Pattern (functional class pattern with shared methods)
// still needs a bit of cleanup 

var Car = function(loc) {
	var obj = {loc: loc};
	obj.move = move; // naming the move method here is problematic - if you update the fcn, you have to update it here too.
	return obj;
};

function move () { // the second place where we've named move method - not efficient. Better to make a list of methods.
	this.loc++; 
}

// Refactoring 

function extend(destination, source) {  // built an extend fcn
	var copy = destination;
	for (var key in source) {
		destination[key] = source[key];
	}
	return copy;
}


var Car = function(loc) {
	var obj = {loc: loc};
	extend(obj, methods); 
	return obj;
};

var methods = { // make an object to hold all the methods you want to apply to Car objects 
	// methods name is not very descriptive, and it's stored in global env (not ideal)
	// Solution: add methods to the Car class as a property using dot notation 
	move : function() {
		this.loc++; 
	}
};

// Bundle methods as a property of Car, stored in an object
Car.methods = { // functions can store properties, just like any other object! 
	move : function () {
		this.loc++;
	}
};
// there is no interaction between the properties of a function, and what you expect to happen
// when you invoke that function. This is just simple property access, moving methods out of the global scope. 


// *** VOCAB ***
// A CLASS function builds the object that it is going to augment
// A DECORATOR accepts the object that it's going to augment as an input
// A CLASS is a construct that is capable of building a fleet of similar objects. Named with a cap noun.
// A CLASS is the notion of a category of things that you'd like to build and all the entailed code that 
// supports that category 
// CONSTRUCTOR function's job is to construct objects that qualify as members of the class. 
// CONSTRUCTOR is the function that you use to produce a new instance of that class.
// INSTANCE is the object that gets returned from the CONSTRUCTOR invocations - instances of the class 
// INSTANTIATING is the process that produces instances of a class 




