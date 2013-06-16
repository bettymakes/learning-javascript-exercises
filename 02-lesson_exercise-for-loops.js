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
