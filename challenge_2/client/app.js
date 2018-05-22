$(document).ready(function() {

	$("button#submit").on('click', function(event) {
		event.preventDefault();
		console.log($("input:first").val());
		$("input:first").val('')
	})
	
})
