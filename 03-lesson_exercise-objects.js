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

//Almost the same except I could improve my last 3 console.log lines,
//Solution iterates via for loop rather than printing out 3 lines. Smart!
//One other point I noticed was different but I'm not sure why ...
//for title, servings, and ingredients, the solution has " " quotes, around those words. Why?

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

//Solutions are similar, except they assigned the book title & author string into a variable.
//I assigned the iterated book titles and authors to variables.
//The assignment of variables varied, results are the same.
//However, I like their code better. Touche. Well done, Solution.

//--------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------//

//The Movie Database

var favMovie = {
	movieTitle: "Lorax",
	duration: "132 minutes",
	stars: ["Orange Critter", "Some guy", "Tizzy Swift"]
}

function movieInfo(movie){
	console.log(movie.movieTitle + " lasts for " + movie.duration + ". Stars: " + movie.stars[0] + ", " + movie.stars[1] + ", " + movie.stars[2] + ".");
}

movieInfo(favMovie);

//Again, similar solutions except I do like theirs a lot better.
//In their first solution, they iterated through the movie.stars index.
//In the second soultion, they called the following method "movie.stars,join(", ")".
//SMART!!! I'll try that out next time.


//--------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------//
