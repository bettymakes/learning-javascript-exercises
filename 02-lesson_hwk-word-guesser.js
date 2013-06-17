// Lesson: 2
// Homework: The Word Guesser
// URL: http://www.teaching-materials.org/javascript/exercises/wordguesser.html

// The Word Guesser
wordArray = ["F", "O", "X"];
guessArray = ["_","_","_"];

function guessLetter(guess) {
	var match = false
	var moreGuess = false
	for(var index = 0; index < wordArray.length; index ++){
		if (wordArray[index] == guess) {
			guessArray[index] = guess;
			match = true;
		}
		if (guessArray[index] == "_") {
			moreGuess = true;
		}
	}
	if (match) {
		console.log("Yay, you found a letter!");
		console.log(guessArray);
		if (moreGuess === false){
			console.log("You've won!");
		}
	}
	else {
		console.log("Try again");
	}
}


//--------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------//
