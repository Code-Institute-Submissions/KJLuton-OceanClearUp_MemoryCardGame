# Memory Game
## Interactive Frontend Development Milestone Project 2

Insert mock up here 

Insert description of website here

## [View live website in GitHub pages](https://kjluton.github.io/ /)
---

# Table of Contents

1. [UX](#ux)
    - [Website owner business goals](#website-owner-business-goals)
    - [User goals](#user-goals)
        - [New user goals](##new-user-goals)
        - [Returning user goals](##returning-user-goals)
    - [User stories](#user-stories)
    - [Wireframes](#wireframes)
    - [Surface](#surface)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Testing](#testing)
    - [Functionality testing](#functionality-testing)
    - [Code Validation](#code-validation)
    - [User stories testing](#user-stories-testing)
    - [Issues found during site development](#issues-found-during-site-development)
5. [Deployment](#deployment)
6. [Credits](#credits)

# UX

## Website goals
The goal of the website is to present an online memory game which is fun for the user to play. The memory game is designed around the theme of the enviroment and cleaning up the ocean. Therefore it is also an informative game too. 

1.	Shuffle picture tiles on game start or restart. 
2.	Game should know how to handle matched and unmatched pictures.
3.	Game should display the current number of matches the player has found. 
4.	The game should show a countdown timer when the player presses ‘start game’.
5.	When the player wins the game, the timer stops.
6.	A restart button should allow the player reset the game board, the countdown timer and the number of matches found.
7.	A congratulations modal should appear when the player wins while showing a button to play again. 

### How to play
Once the game has loaded, you have 50 seconds to find all the matching picture cards. 

Click on a picture card to turn it over and reveal an image of something that pollutes our oceans. If you can find its pair, you have found a match! Once you find a match, it will stay face up and your matched cards score will go up by 1. If you have not chosen two identical cards, they will automatically turn back around. 

To win the game you must find all the matches before the time runs out. The ocean and its wildlife are counting on you! 

## User goals
To play an online memory game and have fun whilst playing. 

## User stories

User 1: 

User 2:

User 3:

## Wireframes

### Homepage - Wireframe

### Game Page - Wireframe
![Gamepage-Wireframe](/assets/images/readme_images/wireframes/memorygame_wireframe1.png)

## Surface

### Colours

The main colours used in this project are: 


### Fonts

The fonts are installed from [Google Fonts](https://fonts.google.com/):
https://fonts.google.com/specimen/Gluten#standard-styles 

### Images

[Back to table of contents](#table-of-contents)

_______
# Features

The website consists of 3 pages. 

The website has the below features: 

## Existing Features

### Elements on every page

#### Navigation bar 

#### Footer 

#### Banner Images

### Homepage

#### Welcome banner and hero image

## Future implementations


[Back to table of contents](#table-of-contents)
_______

# Technologies Used

## Languages Used

[Back to table of contents](#table-of-contents)
_______

# Testing

### Functionality Testing

images not clear enough 

### User Stories Testing

User 1:

User 2:

User 3:

### Code Validation

### Issues Found During Game Development

- getting squares to sit nicely on a grid and have one card overlay the other
- disable cards timeout
- bug: if flip tiles fast it thinks two incorrect tiles are the same and overites script. 


Tiles weren't disabling: 
//if tiles are a match
function disableTiles() {
    firstTile.removeeventListener('click', turnTileOver);
    secondTile.removeeventListener('click', turnTileOver);
}

Due to small case e being used 

[Back to table of contents](#table-of-contents)
_______
# Deployment


[Back to table of contents](#table-of-contents)
_______
# Credits

## Content

## Media

#### Images: 

Bin bag: https://imgbin.com/png/BJ4GdYBy/bin-bag-plastic-bag-rubbish-bins-amp-waste-paper-baskets-png#
Fishing net: https://www.subpng.com/png-4wsq1u/ 
plastic bottle: http://clipart-library.com/clipart/422887.htm
oil barrel: https://www.vectorstock.com/royalty-free-vector/metal-barrel-with-oil-icon-cartoon-style-vector-12048361 
food carton: https://www.pikpng.com/downpngs/owwoJo_1528906718-clipart-of-orange-juice-clip-art-orange/ 
plastic straws: https://www.pngitem.com/download/xwJwob_transparent-plastic-cup-clipart-transparent-background-straw-clipart/
cigarette end: Image by <a href="https://pixabay.com/users/clker-free-vector-images-3736/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=24284">Clker-Free-Vector-Images</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=24284">Pixabay</a> 
glass bottle: https://www.clipartmax.com/middle/m2i8b1i8A0b1i8A0_coca-cola-fizzy-drinks-diet-coke-clip-art-color-in-coke-bottle/


dead fish: https://www.vhv.rs/viewpic/hiwhwoh_cartoon-fish-bones-clipart-png-download-draw-a/ 
pollution background: <a href="https://www.freepik.com/vectors/water">Water vector created by brgfx - www.freepik.com</a>



  
#### README.md File Assistance

#### Code:


# Acknowledgements

[Back to Table of contents](#table-of-contents)

