//Wait for the DOM to finish loading before running game 
if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', gameReady());
} else {
	gameReady();
}

const tiles = document.querySelectorAll('.game-tile');
let lockBoard = true;
let hasTurnedTileOver = false;
let firstTile, secondTile;
let score = 0;

function gameReady() {
	//pop up start modal 
	//start music

}



//Unlocks board, initiates countdown timer and allows player to start making tile matches.
function startGame() {
	lockBoard = false;
	countdownTimer()
	score = 0;
	//var matchesFound = document.getElementById("match-count").innerText;
}

function resetGame() {
	clearInterval(countdownTimer)
}

// Game Countdown timer
//Assistance with this code from here: https://stackoverflow.com/questions/31106189/create-a-simple-10-second-countdown 
function countdownTimer() {
	var timeleft = 49;
	var countdownTimer = setInterval(function () {
		if (score === 1) {
			congratulationsModal();
		} else if (timeleft <= 0) { //Timer run out - game over message
			clearInterval(countdownTimer);
			document.getElementById("countdown").innerHTML = "GAME OVER";
		} else { // timer continues until zero
			document.getElementById("countdown").innerHTML = timeleft;
		}
		timeleft -= 1;
	}, 1000);
}


function turnTileOver() {
	if (lockBoard) return;
	this.classList.add('turnTileOver');

	if (!hasTurnedTileOver) {
		//first click
		hasTurnedTileOver = true;
		firstTile = this;
	} else {
		//second click
		hasTurnedTileOver = false;
		secondTile = this;

		checkForMatch()
	}
}

//Check that tiles are a match
function checkForMatch() {
	if (firstTile.dataset.image === secondTile.dataset.image) {
		//if tiles are a match
		disableTiles();
		incrementScore();
	} else {
		//if tiles are NOT a match
		unturnTiles();
	}
}

//if tiles are a match
function disableTiles() {
	firstTile.removeEventListener('click', turnTileOver);
	secondTile.removeEventListener('click', turnTileOver);
}

//if tiles are NOT a match
function unturnTiles() {
	lockBoard = true;

	setTimeout(() => {
		firstTile.classList.remove('turnTileOver');
		secondTile.classList.remove('turnTileOver');
		lockBoard = false;
	}, 600);
}

//Add to the score if tiles match

function incrementScore() {
	score++;
	document.getElementById("match-count").innerText = score;
}


function congratulationsModal(){
	$("#game-winner").modal('show');
}

function resetBoard() {

}

//Welcome page
//Allowing player to customise the game and add their name.
function playerName() {
	var obj = document.getElementById("player-name-entry");
	var str = "Hello " + obj.value + ",";
	var obj2 = document.getElementById("player-name");
	obj2.innerHTML = str;
}

//Removing name box and button when player name added.
function hidePlayernamebox() {
	var getName = $("#player-name-entry-button");
	getName.hide()
	$("#player-name-entry").hide()
	$("#introduction").hide()
	$("#welcome-message").show()
}


//Actions on game start
function startCountdown() {

}

// Assistance from https://marina-ferreira.github.io/tutorials/js/memory-game/ 
(function shuffle() {
	tiles.forEach(tile => {
		let randomPos = Math.floor(Math.random() * 16);
		tile.style.order = randomPos;
	});
})();

tiles.forEach(tiles => {
	tiles.addEventListener('click', turnTileOver);
});

//pop bubbles
document.getElementById("bubble1").addEventListener("mouseover", popBubble1);
document.getElementById("bubble2").addEventListener("mouseover", popBubble2);
document.getElementById("bubble3").addEventListener("mouseover", popBubble3);
document.getElementById("bubble4").addEventListener("mouseover", popBubble4);
document.getElementById("bubble5").addEventListener("mouseover", popBubble5);
document.getElementById("bubble6").addEventListener("mouseover", popBubble6);

function popBubble1() {
	document.getElementById("bubble1").remove();
}

function popBubble2() {
	document.getElementById("bubble2").remove();
}

function popBubble3() {
	document.getElementById("bubble3").remove();
}

function popBubble4() {
	document.getElementById("bubble4").remove();
}

function popBubble5() {
	document.getElementById("bubble5").remove();
}

function popBubble6() {
	document.getElementById("bubble6").remove();
}


//$("#bubbles").mouseOver(function(){
//	$("bubble1").hide();
//  });

//$("#showbubbles").click(function(){
//	$("bubbles").show();
//  });


//on game win - remove green background and tiles. Show winner message.
//$("div.game-container").click(function () {
//  $("game-container").fadeTo(1000, 1);
//});