 //Wait for the DOM to finish loading before running game 
        
        function runGame(){

        }

        const tiles = document.querySelectorAll('.game-tile');

        function turnTileOver(){
            this.classList.toggle('turnTileOver');

        }

        tiles.forEach(tiles => {tiles.addEventListener('click', turnTileOver)
            
        });

        function checkTileMatch(){

        }

        function incrementScore(){
        }
