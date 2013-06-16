// Lesson: 2
// Exercises: If/Else Statements
// URL: http://www.teaching-materials.org/javascript/exercises/ifelse.html


// What number's bigger?
function greaterNum(num1, num2) {
	if (num1 > num2) {
		console.log("The greater number of " + num1 + " and "+ num2 + " is " + num1 + ".");
		return num1;
	} else if (num2 > num1) {
		console.log("The greater number of " + num1 + " and " + num2 + " is " + num2 + ".");
		return num2;
	} else {
		console.log(num1 + " and " + num2 + " are neither greater or lesser than one another.")  ;
	}
}

greaterNum(10, 2);
greaterNum(4, 11);
greaterNum(1, 1);


//--------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------//
