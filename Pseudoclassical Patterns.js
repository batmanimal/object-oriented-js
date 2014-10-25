// Let's refactor the pure prototypal version of our Car class  

var Car = function (loc) {
	var obj = Object.create(Car.prototype); // pseudoclassical pattern does this for you in 'new'
	obj.loc = loc; 
	return obj; // pseudoclassical pattern does this for you in 'new'
};

Car.prototype.move = function () {
	this.loc++;
};

// Pseudoclassical patterns resemble class systems from other languages by adding a thin layer of syntactical convenience

var amy = new Car(1);
amy.move();

var ben = new Car(9); // function will run in constructor mode, your interpreter will insert operations into your code
// keyword 'new' temporarily makes your function run as if there was extra code at the beginning and end 
ben.move();

// Can now remove the lines of code that the 'new' keyword will insert for you

var Car = function (loc) {
//	var obj = Object.create(Car.prototype); -> machine writes -> this = Object.create(Car.prototype);
	obj.loc = loc; 
//	return obj; -> machine writes -> return this;
};
Car.prototype.move = function () {
	this.loc++;
};

// Pseudoclassical, prototypal and functional shared classes have 2 distinct and very different sections 

// One section shows how each instance should be DIFFERENT from all other instances, inside the body of constructor ('this').
var Car = function(loc) {
	this.loc = loc;
};
// One section specifies how all instances of a class should be SIMILAR. In the case of pseudoclassical pattern,
// these similarities are stored as properties of the prototype object
Car.prototype.move = function () {
	this.loc++;
};


// NOTE: Functional classes without shared methods make no such distinction 
var Car = function(loc) {
	obj = {loc: loc}; // differences section
	obj.move = function () { // similarities section 
		obj.loc++;
	};
	return obj;
};
// all combined in one place 

