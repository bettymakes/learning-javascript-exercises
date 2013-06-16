// Lesson: 1
// Exercises: Variables
// URL: http://www.teaching-materials.org/javascript/exercises/variables.html


//The Fortune Teller
function fortune(kids, name, place, job) {
      console.log("You will be a " + job + " in " + place + ", and married to " + name + " with " + kids + " kids.");
}

 fortune(10, "Polkaroo", "Toronto", "developper");



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


