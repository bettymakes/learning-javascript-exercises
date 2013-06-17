// Lesson: 3
// Exercises: Objects
// URL: http://www.teaching-materials.org/javascript/exercises/objects.html


//Recipe Card

var favRecipe = {
	title: "Green Eggs and Ham",
	servings: 2,
	ingredients: ["2x Green Eggs", "4x Ham", "TLC"]
}

console.log(favRecipe.title);
console.log("Serves: " + favRecipe.servings);
console.log("Ingredients:");
console.log(favRecipe.ingredients[0]);
console.log(favRecipe.ingredients[1]);
console.log(favRecipe.ingredients[2]);


//--------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------//

//Recipe Card
var booksArray = [
	{ 
		bookTitle: "G Eggs Ham",
		author: "Seussy",
		alreadyRead: true 
	}, 
	{
		bookTitle: "Love Forever",
		author: "R. Munsch-kin",
		alreadyRead: true
	},
	{
		bookTitle: "Chicken Bumps",
		author: "RL Steinburg",
		alreadyRead: false
	}
]

for (var index = 0; index < booksArray.length; index ++) {
	var indexBookTitle = booksArray[index].bookTitle
	var indexAuthor = booksArray[index].author

	console.log(indexBookTitle + " by " + indexAuthor);
	if (booksArray[index].alreadyRead) {
		console.log("You already read " + indexBookTitle + " by " + indexAuthor + ".");
	}
	else {
		console.log("You still need to read " + indexBookTitle + " by " + indexAuthor + ".");
	}
}

//--------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------//














