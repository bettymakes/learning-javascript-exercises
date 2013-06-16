// Lesson: 1
// Homework: The Calculator
// URL: http://www.teaching-materials.org/javascript/exercises/calculator.html

// The Calculator

// #1 squareNumber function
function squareNumber(num){
	var squared = num*num;
	console.log("The result of squaring the number " + num + " is " + squared + ".");
}

squareNumber(3);

//--------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------//

// #2 halfNumber function
function halfNumber(num){
	var half = num/2;
	console.log ("Half of " + num + " is " + half + ".");
}

halfNumber(5);

//--------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------//

// #3 percentOf function
function percentOf(num1, num2){
	var percent = (num1/num2)*100;
	console.log(num1 + " is " + percent + "% of " + num2 + ".");
}

percentOf(2,4);

//--------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------//