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


function gameReady() {
	//document.getElementById("countdown").innerHTML = "50";
	//pop up start modal 
	//start music

}



//Assistance with this code from here: https://stackoverflow.com/questions/31106189/create-a-simple-10-second-countdown 
//Unlocks board, initiates countdown timer and allows player to start making tile matches.
function startGame() {
	lockBoard = false;

	var timeleft = 49;
	var countdownTimer = setInterval(function () {
		//Timer run out - game over message
		if (timeleft <= 0) {
			clearInterval(countdownTimer);
			document.getElementById("countdown").innerHTML = "GAME OVER";
		//clearInterval(countdownTimer);
		//document.getElementById("countdown").innerHTML = "WINNER";
		} 
		else { // timer continues until zero
			document.getElementById("countdown").innerHTML = timeleft;
		}
		timeleft -= 1;
	}, 1000);

}


//on game win - remove green background and tiles. Show winner message.
//$("div.game-container").click(function () {
//	$("game-container").fadeTo(1000, 1);
//});


// Fisher-Yates (aka Knuth) Shuffle
function shuffle(tiles) {
	var currentIndex = tiles.length,
		temporaryValue, randomIndex;

	while (currentIndex !== 0) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		temporaryValue = tiles[currentIndex];
		tiles[currentIndex] = array[randomIndex];
		tiles[randomIndex] = temporaryValue;
	}
	return array;
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
	let oldScore = parseInt(document.getElementById("match-count").innerText);
	document.getElementById("match-count").innerText = ++oldScore;
}


//function stopCountdown() {

//	var timeinterval = clock.prop("countdown");
//	if (timeinterval) {
//		clearInterval(timeInterval);
//	}
// }


//$('#myModal').modal('show')

//$().button('toggle')

function resetBoard() {

}


//Welcome page
//Allowing player to customise the game and add their name.
function playerName(){
	var obj = document.getElementById("player-name-entry");
	var str = "Hello "+obj.value+",";
	var obj2 = document.getElementById("player-name");
	obj2.innerHTML=str;
}

//Removing name box and button when player name added.
function hidePlayernamebox() {
	var getName = $("#player-name-entry-button");
	getName.hide()
	$("#player-name-entry").hide()
	$("#introduction").hide()
	$("#welcome-message").show()
  }


//setTimeout(() => {


//}, timeout);
//let countdownElement = document.getElementsById('countdown');
//var seconds = 100;


////if (distance < 0) {
//   clearInterval(x);
//   document.getElementById("countdown").innerHTML = "GAME OVER";
// }
//}, 1000);




//function shuffleTiles() {
//	for (let i = this.tiles.length - 1; i > 0; 1--) {
//		let randIndex = Math.floor(Math.random() * (i + 1));
//		this.tilesArray[randIndex].style.order * i;
//		this.tilesArray[i].style.order = randIndex;
//	}

//}



//Actions on game start
function startCountdown() {


}


//var numMatches = 0;


tiles.forEach(tiles => {
	tiles.addEventListener('click', turnTileOver);
});