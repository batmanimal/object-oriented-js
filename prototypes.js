// Prototype Chains

var gold = {a:1};
console.log(gold.a); // 1
console.log(gold.z); // undefined

function extend(destination, source) {
	var copy = destination;
	for (var key in source) {
		destination[key] = source[key];
	}
	return copy;
} // { a: 1 }

var blue = extend({}, gold); // helper function extend 
blue.b = 2;
console.log(blue.a); // 1
console.log(blue.b); // 2

var rose = Object.create(gold);
rose.b = 2; 
console.log(rose.a); // 1 -> result of lookup to prototype obj gold
console.log(rose.b); // 2 -> does not require lookup bc b exists in local context
console.log(rose.z); // undefined -> cannot be found in rose or in prototype obj

// now let's add a z property to the gold object
gold.z = 3;
console.log(blue.z); // undefined -> no delegation relationship exists btw blue and gold
console.log(rose.z); // 3 -> lookup falls to the prototype 

// The Object Prototype - provides shared properties of ALL objects 
rose.toString(); // example of a shared property on the Object prototype

// Constructor property makes it easy to tell what fcn was used to create an object. 
// .constructor on the Object prototype points to a different object (a constructor function) that's stored elsewhere.

