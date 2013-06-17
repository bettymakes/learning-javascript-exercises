// Lesson: 2
// Exercises: Arrays
// URL: http://www.teaching-materials.org/javascript/exercises/arrays.html

//Your Top Choices
var topChoices = ["Power Rangers", "Digimon", "Teletubbies", "SpongeBob", "Arthur"];

for (var choice = 0; choice < topChoices.length; choice ++) {
	var choicePosition = choice+1;
	console.log("My #" + choicePosition + " choice is " + topChoices[choice] + ".");
}

// Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", 
//        picking the right suffix for the number based on what it is.
var topChoices = ["Power Rangers", "Digimon", "Teletubbies", "SpongeBob", "Arthur", "SpiderMan"];

for (var choice = 0; choice < topChoices.length; choice ++) {
	var choicePosition = choice+1;
	var endWord;
	if (choicePosition == 1) {
		endWord = "st";
	}
	else if (choicePosition == 2) {
		endWord = "nd";
	}
	else if (choicePosition == 3) {
		endWord = "rd";
	}
	else {
		endWord = "th";
	}

	console.log("My " + choicePosition + endWord + " choice is " + topChoices[choice] + ".");
}



//--------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------//
