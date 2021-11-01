//Wait for the DOM to finish loading before running game 
if(document.readyState === 'loading') {
//    document.addEventListener("DOMContentLoaded", gameready());
//} else {
////    gameready();
//}

//function gameready()

const tiles = document.querySelectorAll('.game-tile');

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

function incrementScore(){
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
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

tiles.forEach(tiles => {
    tiles.addEventListener('click', turnTileOver);
});
}