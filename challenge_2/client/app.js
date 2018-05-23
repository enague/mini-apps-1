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
				var splitData= data.split('\n')
				console.log(splitData)
				for(var i = 0; i < splitData.length; i++) {
					$("#output").append(`<div>${splitData[i]}</div>`)
				}
			},
			error: function(err) {
				console.log('Error occurred', err)
			}
		});
	})
	
})
