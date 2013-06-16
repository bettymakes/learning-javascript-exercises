// Lesson: 1
// Homework: The Calculator
// URL: http://www.teaching-materials.org/javascript/exercises/calculator.html

// The Calculator

// #1 squareNumber function
function squareNumber(num){
	var squared = num*num;
	console.log("The result of squaring the number " + num + " is " + squared + ".");
	return squared;
}

squareNumber(3);

//--------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------//

// #2 halfNumber function
function halfNumber(num){
	var half = num/2;
	console.log ("Half of " + num + " is " + half + ".");
	return half;
}

halfNumber(5);

//--------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------//

// #3 percentOf function
function percentOf(num1, num2){
	var percent = (num1/num2)*100;
	console.log(num1 + " is " + percent + "% of " + num2 + ".");
	return percent;
}

percentOf(2,4);

//--------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------//

// #4 areaOfCircle function
function areaOfCircle(radius){
	var area = (3.141592653589793 * (radius*radius));
	console.log("The area for a circle with radius " + radius + " is " + area + ".");
	return area;
}

areaOfCircle(2);

// or, Math.PI is predefined in javascript
function areaOfCircle(radius){
	var area = (Math.PI * (radius*radius));
	console.log("The area for a circle with radius " + radius + " is " + area + ".");
	return area;
}

areaOfCircle(2);

//BONUS:Round the result so there are only two digits after the decimal.
//Used .toFixed(num_of_decimal_places) method
function areaOfCircle(radius){
	var area = (Math.PI * (radius*radius)).toFixed(2);
	console.log("The area for a circle with radius " + radius + " is " + area + ".");
	return area;
}

areaOfCircle(2);


//--------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------//

// #5
//Removed all the "console.log" lines from previous functions.
//Created the super calculator

function squareNumber(num){
	var squared = num*num;
	return squared;
}

function halfNumber(num){
	var half = num/2;
	return half;
}

function percentOf(num1, num2){
	var percent = (num1/num2)*100;
	return percent;
}

function areaOfCircle(radius){
	var area = (Math.PI * (radius*radius)).toFixed(2);
	return area;
}


function superCalculator(num){
	var halfed = halfNumber(num);
	var squaredNum = squareNumber(halfed);
	var circleArea = areaOfCircle(squaredNum);
	var result = percentOf(squaredNum, circleArea);
	console.log(result);
}

superCalculator(5);


// Assignment Take Up
// I forgot to return all the values.
// When attempting to create superCalculator, this became a big problem.
// The functions did not return any values to the superCalculator to calculate.
// Other than that, everything looks just about the same :).


