/* The parameter 'this' behaves almost exactly like a normal parameter, with two differences:
1. you don't get to pick the name. It's name is 'this'
2. you bind the value to the parameter 'this' a little differently 

The parameter 'this' is an identifier that gets a value bound to it (like a variable). 
Instead of defining the bound value explicitly in your code, 'this' is bound to the correct object automatically. 
The rules for what gets bound to 'this' resemble the rules for normal positional parameters. */

// Q: What is 'this' bound to? 
var obj = {
	fn : function(a, b) {
		console.log(this);
	}
};

obj.fn(3,4);
//-^- A: the object to the left of the dot on a function invocation
// the object to the left of the dot when you call the function is what 'this' refers to 90% of the time! 


// *** Predicting Parameter Output quiz ***
/* what is the parameter 'two' bound to? 
var fn = function(one, two) {
	console.log(one, two);
};
trick question: NOTHING */

// *** Predicting Parameter Output (2)

var fn = function(one, two) {
	console.log(one, two);
};
var r = {}, g = {}, b = {};

fn(g,b);
// -> {}, {}  (g and b objects)

// *** Predicting 'this' Output
// Parameter 'this' behaves like a positional parameter most of the time
// What will be logged from this function? (another trick question - skip to next video)
var fn = function(one, two) {
	console.log(this, one, two);
};
var r = {r:"red"}, g = {g:"green"}, b = {b:"blue"}; // added key value pair to objects to differentiate them when logged

// need to make fn a property of a variable in order to call 'this' as a method
r.method = fn;
// now call fn as a method of r 
r.method(g,b); // logs r, g, b ('this' refers to r, which is the object to the left of the dot when the fn is called)
// -^- comment OUT this line after *** Predicting 'this' Output (2) 

// fn(g,b);  -> uncomment this line for *** Predicting 'this' Output (3) 
// without a dot, you can expect a global variable to be bound to 'this' by default

// *** Predicting 'this' Output (4) // uncomment the code under here for this exercise 
// var y = {y: "yellow"};
// r.method.call(y, g, b);


// *** Predicting 'this' Output (5) // uncomment the code under here for this exercise 
// var y = {y: "yellow"};
// r.method = fn;
// setTimeout(fn, 1000); // undefined, undefined 

// TODO: finish these lesson notes! 








