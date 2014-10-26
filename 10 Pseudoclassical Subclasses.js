// How to write a Pseudoclassical Subclass? 


// **** library.js ****

var Car = function(loc) {
	this.loc = loc;
};
// now add move function 
Car.prototype.move = function () { // add move as a method to the Car.prototype constructor (pseudoclassical pattern)
	this.loc++;
};

// Write constructor function for Van - want to run the Car fcn in the middle of Van in a way that modifies the Van instance that is being created 
var Van = function(loc) {
	// this = Object.create(Van.prototype); -> invisible code that comes with 'new' 
// incorrect approaches under here:
	// this.loc = loc; -> repeating the same code from the Car fcn is not efficient
	// new Car(loc); -> this creates another new instance object of Car, the 'this' within Car will point to a new instance of Car, not to Van
	Car.call(this, loc); // .call method of any function ensures that we run the function in the right context
		//    -^- calls Car in the same context as the new Van instance is being created (in parameter 'this'). 
		// 'this' binds Car to the right object in Van, just like any positional parameter. 

};

// Illustrative example using a math function

var product = function(num, b){
	return num * b;
};

var double = function(num){
	return product(num, 2); // num is like 'this' in above example; two 'num' vars are in different scopes
};
double(3);

// now use .call method 
var product = function(b){
	return this * b;
};

var double = function(){
	return product.call(this, 2); // invokes the function a little differently; binds the value to parameter this 
};
double.call(3); // 3 is bound to the parameter this

// *** Delegating Van.prototype *** (3 lines)
// by default, Van.prototype delegates to Object.prototype. Need to wire up Van.prototype to Car.prototype 

Van.prototype = Object.create(Car.prototype); // this creates a new object that delegates to what is in the ()'s, without running the constructor function in the process
	// careful not to mix-up 'Car' with Car.prototype! 
	// Van.prototype = new Car(); // common mistake. Problematic bc whenever make a Car subclass (like Van), we invoke the function Car, and don't pass in the right variables
	// Van.prototype = Car.prototype; // JS does not allow copying like this, this would modify Car when you modify Van

// Van.prototype.constructor = Car; // Van's subclasses delegate to Car by default - need to reset Van's constructor 
Van.prototype.constructor = Van; // now the lookup for amy falls through to Van.prototype 

// Add grab to Van 
Van.prototype.grab = function(){};


// ***** run.js *****

var zed = new Car(3); // instantiate one instance of superclass 
zed.move();

// Van in a subclass of Car
var amy = new Van(9); // instantiate one instance of one subclass - amy is instance of Van
console.log(amy.loc); // -> 9
// amy.move();
// amy.grab();

