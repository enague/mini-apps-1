$(document).ready(function() {

	$("button#submit").on('click', function(event) {
		event.preventDefault();
		// var data = $("input:first").val();
		var data = $("textarea#text").val();

		console.log(data)


		//ajax POST request
		$.ajax({
			type: "POST",
			url: "/csv",
			data: data,
			//dataType: "json",
			contentType: "application/json",
			success: function(data) {
				console.log('enters success')
				//$("#output").append("<p>test</p>")
			},
			error: function(err) {
				console.log('Error occurred', err)
			}
		});
	})
	
})
