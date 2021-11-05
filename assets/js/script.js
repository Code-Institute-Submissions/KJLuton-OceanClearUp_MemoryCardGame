//Wait for the DOM to finish loading before running game 
	//Actions during game play
	const tiles = document.querySelectorAll('.game-tile');
	
//Assistance with this code from here: https://stackoverflow.com/questions/31106189/create-a-simple-10-second-countdown 
//Actions on game start
function startGame() {
    lockBoard = false;
        var timeleft = 50;
        var downloadTimer = setInterval(function () {
            if (timeleft <= 0) {
                clearInterval(downloadTimer);
                document.getElementById("countdown").innerHTML = "GAME OVER";
            } else {
                document.getElementById("countdown").innerHTML = timeleft;
            }
            timeleft -= 1;
        }, 1000);

    }

	let hasTurnedTileOver = false;
	let lockBoard = false;
	let firstTile, secondTile;
	

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
	        //if all tiles matched 
	        //stopCountdown()
	        //if countDowntime stopped, record time on screen
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
	    }, 900);
	}
	

	function incrementScore() {
	    let oldScore = parseInt(document.getElementById("score").innerText);
	    document.getElementById("score").innerText = ++oldScore;
	}
	

	function stopCountdown() {
	

	}
	

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
	

	

	function shuffleTiles () {
	

	}
	//function gameready()
	function gameReady(){
	

	}
	//Actions on game start
	function startCountdown() {
	

	}

	

	tiles.forEach(tiles => {
	    tiles.addEventListener('click', turnTileOver);
	});
