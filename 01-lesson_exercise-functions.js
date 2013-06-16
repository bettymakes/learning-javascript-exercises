// Lesson: 1
// Exercises: Functions
// URL: http://www.teaching-materials.org/javascript/exercises/functions.html

// The Fortune Teller
function tellFortune(kids, name, place, job) {
	console.log("You will be a " + job + " in " + place + ", and married to " + name + " with " + kids + " kids.");
}

 tellFortune(10, "Polkaroo", "Polka Land", "Polkadot-Shorts-Wearer");
 tellFortune(2, "Barney The Purple Dinosaur", "X-Men Town", "psychic");
 tellFortune(4, "Batman", "Gotham City", "Cat Woman");

// The solution on the website assigned the final output to a variable
// Other than that, our answers were pretty similar

//--------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------//


//The Age Calculator
function calculateAge(birthYear, currentYear){
	var age = currentYear - birthYear;
	console.log("You are either " + (age-1) + " or " + age + ".");
}

calculateAge(2003, 2013);
calculateAge(1946, 2050);
calculateAge(1960, 1980);

//BONUS: Figure out how to get current year in Javascript instead of passing it in
function calculateAge(birthYear){
//Created a Date object, called the function getFullYear on it.
//Assigned it to the variable current Year.
	var currentYear = new Date().getFullYear();
	var age = currentYear - birthYear;
	var message = ("You are either " + (age-1) + " or " + age + ".");
	console.log(message);
}

calculateAge(2003);

// Website's solutions and mine are basically the same.
// WOOP WOOP! :)

//--------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------//


//The Lifetime Supply Calculator

//Note to self: as per instructions, 
//calculate amount consumed for rest of life based on a constant max age.
function calculateSupply(age, amountPerDay){
	var maxAge = 100;
	var totalAmount = ((maxAge - age)*365)*amountPerDay;
	var message = "You will need " + totalAmount + " to last you until the ripe old age of " + maxAge + ".";
	console.log(message);
}

calculateSupply(50, 2)
calculateSupply(20, 5)
calculateSupply(10, 10)

// Looks good! Compared solutions and they look the same!

//--------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------//

