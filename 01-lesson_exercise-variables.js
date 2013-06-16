// Lesson: 1
// Exercises: Variables
// URL: http://www.teaching-materials.org/javascript/exercises/variables.html


//The Fortune Teller
function fortune(kids, name, place, job) {
      console.log("You will be a " + job + " in " + place + ", and married to " + name + " with " + kids + " kids.");
}

 fortune(10, "Polkaroo", "Toronto", "developper");


// Compared to solution on website, my answer is different.
// I've created a function that will accept a variety of inputs,
// rather than pre-assigning variables and outputting to console.

//--------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------//

//The Age Calculator
function ageCalculator(birthYear, currentYear){
    var age = currentYear - birthYear;
    console.log("You are either " + (age-1) + " or " + age + ".");
}

ageCalculator(2003, 2013);
// or!
function ageCalculator(birthYear, currentYear){
    var currentYear = 2013;
    var birthYear = 2003;
    var age = currentYear - birthYear;
    console.log("You are either " + (age-1) + " or " + age + ".");
}

ageCalculator()

// Compared to solution on website, my answer is differet again.
// Similar to Fortune Teller solution, I've wrapped my solution in a function.

//--------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------//

//Lifetime Supply Calculator

// It looks as though I do not need to wrap my answers inside a function.
// I will complete this exercise without doing so.

var currentAge = 10;
var maximumAge = 80;
var amountPerDay = 5;
var totalAmount = ((maximumAge - currentAge)*365)*amountPerDay;
console.log("You will need " + totalAmount + " to last you until the ripe old age of " + maximumAge + ".");


// My solution & the website's are pretty similar.
// However, they also assigned the final ouput to a variable.

//--------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------//










