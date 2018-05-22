
var game = {
	currentPlayer: true,
	moves: 0,
	xscore:0,
	oscore: 0
}

var board = [[3,4,5],
			 [6,7,8],
			 [3,4,5]]

//Reload a new game
var newGame = function() {
	window.location.reload()
}

//Check to see if there is something there
var occupied = function(row, column) {
	if(board[row][column] === 1 || board[row][column] ===2) {
		alert('Sorry, that spot is taken. Please choose another one!')
		return false;
	} 
}

//Check to see if there is a winner across
var checkWinnerAcross = function() {
	for(var i = 0; i < board.length; i++) {
		var row = board[i]
		for(var j = 0; j < row.length; i++) {
			if(row[i] === row[i+1] && row[i+1] === row[i+2]) {
				return true;
			} else {
				return false;
			}
		}
	}

}

//Check to see if there is a winner down
var checkWinnerDown =function() {
	for(var i = 0; i < board.length; i++) {
		if(board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
			return true;
		} else {
			return false;
		}
	}
}

//Check to see if there is a winner in a major diagonal
var checkWinnerMajorDiagonal = function() {
	if(board[0][0] === board[1][1] && board[1][1]=== board[2][2]) {
		return true;
	} else {
		return false;
	}
}

//Check to see if there is a winner in a minor diagonal
var checkWinnerMinorDiagonal = function() {
	if(board[0][2] === board[1][1] && board[1][1]=== board[2][0]) {
		return true;
	} else {
		return false;
	}
}


var move= function(row,column) {
	console.log(row,column);
	occupied(row,column)


	if(game.currentPlayer) {
		document.getElementById(`cell${row}${column}`).innerHTML= "X"
		game.moves++;
		board[row][column] = 1;
		console.log(board);
		if(checkWinnerAcross() || checkWinnerMajorDiagonal() || checkWinnerMajorDiagonal() || checkWinnerDown()){
			document.getElementById('results').innerHTML = 'Player X is the WINNER!'
			game.xscore++;
			document.getElementById('xscore').innerHTML = `Player X:${game.xscore}`
		}
		game.currentPlayer=false;
		document.getElementById('currentPlayer').innerHTML = "Player O"
	} else {
		document.getElementById(`cell${row}${column}`).innerHTML= 'O'
		game.moves++;
		board[row][column] = 2;
		console.log(board);
		if(checkWinnerAcross() || checkWinnerMajorDiagonal() || checkWinnerMajorDiagonal() ||checkWinnerDown()){
			document.getElementById('results').innerHTML = 'Player O is the WINNER!'
			game.oscore++;
			document.getElementById('oscore').innerHTML = `Player O:${game.oscore}`

		}
		game.currentPlayer= true;
		document.getElementById('currentPlayer').innerHTML = "Player X"
	}

	if(game.moves === 9) {
		document.getElementById('results').innerHTML = 'We Have a Tie!'
	}
}

