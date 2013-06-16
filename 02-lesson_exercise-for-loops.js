// Lesson: 2
// Exercises: For Loops Statements
// URL: http://www.teaching-materials.org/javascript/exercises/forloops.html


// The Even/Odd Reporter
for (i=0; i<=20; i++) {
	if (i == 0) {
		console.log(i + " is even, but some argue it's not?");
	}
	else if (i % 2 == 0) {
		console.log(i + " is even");   
	}
	else {
		console.log(i + " is odd");
	}
}


//--------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------//

//Multiplication Tables
for (i=0; i<=10; i++) {
	console.log(i + " * 9 = " + i*9);
}

//BONUS: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).
for (i=1; i<=10; i++) {
	for (x=1; x<=10; x++) {
		console.log(i + " times " + x + " is " + (i*x) + ".");
    }
}

//--------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------//

//Grade Assigner
function assignGrade(score){
	if (score >= 90) {
		return "A";
	}
	else if (score >= 80 ) {
		return "B";
	}
	else if (score >= 70 ) {
		return "C";
	}
	else if (score >= 60 ) {
		return "D";
	}
	else if (score >=50) {
		return "E";
	}
	else {
		return "F";
	}
}

//I added the if/else statement because if the letter grade is an "A",
//the sentence should read that the student recieved "AN" A, rather than
//the student received "a, A"
for (grade=60; grade<=100; grade++) {
	if (grade >= 90){
		console.log("For " + grade + ", you got an " + assignGrade(grade) + "."); 
	}
	else {
		console.log("For " + grade + ", you got a " + assignGrade(grade) + ".");  
	}
}


//--------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------//


