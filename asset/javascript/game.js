$(document).ready(function() {

	var giftasticObj = {
	animals: ["Dog", "Cat", "Hamster", "Skunk", "Goldfish", "Sugar Glider", "Pygmy Goat", "Chicken", "Capybara", "frog"],
	currentSelection: "",
	userInput: "",
	giphyApiUrl: "https://api.giphy.com/v1/gifs/search?",
	giphyApiKey: "46bafe89ff3a4d47bf9a382d6a0e100",
	renderButtons: function() {
		// first empty the buttons bar/column
		$("#buttonsBar").empty();
		// then cycle through the animals array and populate the buttons
		for (var i = 0; i < this.animals.length; i++) {
			var a = $("<button>");
			a.addClass("buttons btn btn-danger");
			a.attr("data-name", this.animals[i]);
			a.text(this.animals[i]);
			$("#buttonsBar").append(a);
		}
		// then add on-clicks for each of the buttons
		$(".buttons").on("click", function() {
			// console.log("button pressed");
			// in this case, this refers to the button clicked
			giftasticObj.currentSelection = $(this).attr("data-name");
			giftasticObj.displayGifs();
		});
	} 

}