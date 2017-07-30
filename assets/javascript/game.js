var topics = ["Dog", "Cat", "Rabbit","Elephant","Buffalo","Eagle","Lion","Andean goose","Horse", 
        "Goat", "Cow", "Fish"];



function buttons() {

		$(".buttons").empty();

		for (var i = 0; i < topics.length; i++) {
			var button = $("<button>" + topics[i] +"</button>");
			button.addClass("btn btn-info animalButton");
			button.attr("id", topics[i]);
			button.attr("data-name", topics[i]);
			button.attr("value", topics[i]);
			$(".buttons").append(button);
	}

		$(".animalButton").on("click", app);

		function addingButtons() {
		var newAnimal = $("#animalName").val().trim();
		topics.push(newAnimal);
		buttons();
		$("#animalName").val("");
	}

	$("#submit").on("click", addingButtons);

}

buttons();


function app() {

	$("#images").empty();

	var q = this.value;
	var apiKey = "97a1306f6cc048cf9b5e7267f446c66d"

      // Storing our giphy API URL
      var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=" + apiKey + "&q=" + q + "&limit=25&offset=0&rating=pg-13&lang=en";

      // Perfoming an AJAX GET request to our queryURL
      $.ajax({
        url: queryURL,
        method: "GET"
      })

      // After the data from the AJAX request comes back
      .done(function(response) {

      	console.log(response);


      	for (var i = 0; i < response.data.length; i++) {
      		// Saving the image original url property
        var imageUrl = response.data[i].images.original.url;
        var ratings  = response.data[i].rating;
        var still    = response.data[i].images.original_still.url;
        var animate  = response.data[i].images.original.url;


        // Creating and storing an image tag and div
        var image  = $("<img>");
        var newDiv = $("<div>");

        // Setting the image attributes
        image.attr("src", still);
        image.attr("data-state", "still");
        image.attr("data-still", still);
        image.attr("data-animate", animate);
        image.attr("alt", "image");
        image.attr("width", "300");
        image.attr("height", "200");
        newDiv.attr("class", "col-md-4");

        function gif() {

        	var state = $(this).attr("data-state");

	        	if (state === "still") {
		        $(this).attr("src", $(this).attr("data-animate"));
		        $(this).attr("data-state", "animate");
		      } else {
		        $(this).attr("src", $(this).attr("data-still"));
		        $(this).attr("data-state", "still");
		      }
        }

        $(image).on("click", gif);



        // Prepending the images div

        $(newDiv).prepend(image);
        $(newDiv).prepend("Rating: " + ratings + "<br>");
        $("#images").append(newDiv);

    }

  });
};