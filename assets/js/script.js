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
	document.getElementById("countdown").innerHTML = "50";
	//pop up start modal 
	//start music

}


//Assistance with this code from here: https://stackoverflow.com/questions/31106189/create-a-simple-10-second-countdown 
//Initiates countdown timer and game start
function startGame() {
	lockBoard = false;
	var timeleft = 50;
	var countdownTimer = setInterval(function () {
		//if (document.getElementById("score") === (8)) {
		//stopCountdown();
		//} else 
		if (timeleft <= 0) {
			clearInterval(countdownTimer);
			document.getElementById("countdown").innerHTML = "GAME OVER";
		} else {
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
	let oldScore = parseInt(document.getElementById("score").innerText);
	document.getElementById("score").innerText = ++oldScore;
}


//function stopCountdown() {

//	var timeinterval = clock.prop("countdown");
//	if (timeinterval) {
//		clearInterval(timeInterval);
//	}
// }


function resetBoard() {


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
//	for (let i = this.tilesArray.length - 1; i > 0; 1--) {
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