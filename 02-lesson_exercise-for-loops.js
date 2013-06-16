// Lesson: 2
// Exercises: For Loops Statements
// URL: http://www.teaching-materials.org/javascript/exercises/forloops.html


// The Even/Odd Reporter
for (var i=0; i<=20; i++) {
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

//Solutions are about the same. Not sure why their if/else statement includes
//3 "=" signs. I'll need to look that up.
//They also declared their initial variable as i, which I did not do.
//I'll revise that in all my answers below as well.
//I also added an additional condition, if the number was 0, the log's output was different

//--------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------//

//Multiplication Tables
for (var i=0; i<=10; i++) {
	console.log(i + " * 9 = " + i*9);
}

//BONUS: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).
for (var i=1; i<=10; i++) {
	for (var x=1; x<=10; x++) {
		console.log(i + " times " + x + " is " + (i*x) + ".");
    }
}

//Solutions are similar. However, they assigned a variable to the multiplier
//They also started the count for the bonus question at 0.
//I started it at one because the instructions were to multiply from "1 to 10"
//I did a lot of the math inline with the log.
//They've divided the resposibilities out, cleaning up their console.log line.
//In future, I think I will do that too.

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
for (var grade=60; grade<=100; grade++) {
	if (grade >= 90){
		console.log("For " + grade + ", you got an " + assignGrade(grade) + "."); 
	}
	else {
		console.log("For " + grade + ", you got a " + assignGrade(grade) + ".");  
	}
}

//Our answers are a little different:
//They started their count at 80. However, the assignment said to do this for 
//every value from 60 to 100, which is why I started at 60.
//I also added that extra if statement as mentioned above to account for grammar which
//the solution on the website did not do. Other than that, we're peachy :)

//--------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------//


