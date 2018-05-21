
var game = {
	player: 'Player X',
	currentPlayer: true,
	moves: 0,

}

var board = [[0,0,0],
			 [0,0,0],
			 [0,0,0]]

//Functions


//Reload a new game
var newGame = function() {
	window.location.reload()
}

var checkWinnerAcross = function() {
	for(var i = 0; i < board.length; i++) {
		var row = board[i]
		for(var j = 0; j < row.length; i++) {
			if(row[i] === row[i+1] === row[i+2]) {
				return true;
				break;
			}
		}
	}

}

var checkWinnerDown =function() {
	for(var i = 0; i < board.length; i++) {
		var row = board[i];

	}
}

var checkWinnerMajorDiagonal = function() {

}

var checkWinnerMinorDiagonal = function() {

}


var move= function(row,column) {
	console.log(row,column);

	if(game.currentPlayer) {
		document.getElementById(`cell${row}${column}`).innerHTML= "X"
		game.currentPlayer=false;
		game.moves++;
		board[row][column] = 1;
		console.log(board);
	} else {
		document.getElementById(`cell${row}${column}`).innerHTML= 'O'
		game.currentPlayer= true;
		game.moves++;
		board[row][column] = 2;
		console.log(board);
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