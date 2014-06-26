var winner = undefined;

var player1 = {
	id : 1,
	name: 'Player 1',
	class : 'player1'
};

var player2 = {
	id : 2,
	name: 'Player 2',
	class : 'player2'
};

var board = [
	'', '', '',
	'', '', '',
	'', '', ''
];

player1.nextPlayer = player2;
player2.nextPlayer = player1;

var currentPlayer = player1;

var togglePlayer = function() {
	currentPlayer = currentPlayer.nextPlayer;

	$('#turn span').toggleClass('player1');
	$('#turn span').toggleClass('player2');
	$('#turn span').html(currentPlayer.name);
};

var checkWinner = function() {
	if(board[0] && board[0] === board[1] && board[1] === board[2]) {
		announceWinner(currentPlayer);
		return true;
	} else if(board[3] && board[3] === board[4] && board[4] === board[5]) {
		announceWinner(currentPlayer);
		return true;
	} else if(board[6] && board[6] === board[7] && board[7] === board[8]) {
		announceWinner(currentPlayer);
		return true;
	} else if(board[0] && board[0] === board[4] && board[4] === board[8]) {
		announceWinner(currentPlayer);
		return true;
	} else if(board[2] && board[2] === board[4] && board[4] === board[6]) {
		announceWinner(currentPlayer);
		return true;
	} else if(board[0] && board[0] === board[3] && board[3] === board[6]) {
		announceWinner(currentPlayer);
		return true;
	} else if(board[1] && board[1] === board[4] && board[4] === board[7]) {
		announceWinner(currentPlayer);
		return true;
	} else if(board[2] && board[2] === board[5] && board[5] === board[8]) {
		announceWinner(currentPlayer);
		return true;
	} else {
		return false;
	}
};

var announceWinner = function(player) {
	winner = player;
	$('#turn').html('The winner is <span></span>');
	$('#turn span').toggleClass(currentPlayer.class);
	$('#turn span').html(currentPlayer.name);
};

$('.box').click(function(event) {
	var boxId = event.currentTarget.id;
	
	if(board[boxId] === '' && !winner) {

		board[boxId] = currentPlayer.id;
		$('#' + boxId).addClass(currentPlayer.class);

		if(!checkWinner()) {
			togglePlayer();
		}

	} else {
		//
	}
});