
var game = {
	player: 'Player X'
	currentPlayer: true,
	moves: 0,

}

//Functions


//Reload a new game
var newGame = function() {
	window.location.reload()
}



var move= function(row,column) {
	console.log(row,column);

	if(game.currentPlayer) {
		document.getElementById("cell<%='"row + column=%>"").innerHTML= "X"
		game.currentPlayer=false;
		game.moves++;
	} else {
		document.getElementById("cell<%="row + column=%>"").innerHTML= 'O'
		game.currentPlayer= true;
		game.moves++;
	}

	if(game.moves === 9) {
		document.getElementById('results').innerHTML = 'We Have a Tie'
	}
}


//helper functions

//check if down win

//check to see if across win

//check to see if major diagonal win

//check to see if minor diagonal win