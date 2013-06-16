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


//The World Translator
function helloWorld(langCode) {
	if (langCode == "piglatin") {
		return("Ellohay, orldway!");
	}
	else if (langCode == "fr") {
		return("Bonjour, tout le monde!");
	}
	else if (langCode == "itl") {
		return("Ciao, mondo!");
	}
	else {
		return("Hello, World!");
	}
}

console.log(helloWorld("test"));
console.log(helloWorld("fr"));
console.log(helloWorld("itl"));

//--------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------//


//The Grade Assigner
function assignGrade(score){
	if (score >= 90) {
		return "A";
	}
	else if (score >= 80 && score < 90) {
		return "B";
	}
	else if (score >= 70 && score < 80) {
		return "C";
	}
	else if (score >= 60 && score < 70) {
		return "D";
	}
	else if (score >=50 && score < 60) {
		return "E";
	}
	else {
		return "F";
	}
}

console.log(assignGrade(93));
console.log(assignGrade(85));
console.log(assignGrade(72));
console.log(assignGrade(68));
console.log(assignGrade(54));
console.log(assignGrade(29));

//--------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------//

