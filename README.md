# RICK AND MORTY FAVORITE CHARACTERS LIST

This application allows for a quick character search of 671 of the Rick and Morty Characters. Additionally, this application allows you to create a favorites list of the characters you selct so you can have all of your favorite characters in one place. 

### HOW TO CREATE A FAVORITES LIST

1. First you will need to sign up for an account using your email address, name, and password. To do so, click on the sign up button in the top right corner. 

2. Once you are signed up you can access the characters list. Scroll through the options available, or type in to the search bar to find a specific character you are looking for. 

3. Once you have located one of your favorite characters simply click on the 'Add to Favorites' button. Doing so will add this character to the favorites list for safe keeping. 

4. If your chracter dies throughout the show you can update their status by clicking the 'Change Status to Dead' button. 

### API USEAGE

To utilize the API used for this application go to: https://rickandmortyapi.com/documentation/#get-all-characters and use the base URL provide. There is no API key needed. 

# HOMEPAGE:
<!-- Images go here 
![Startup-Image-1](/Users/codychrist/Desktop/SEI-412/unit-two/rickandmorty/Screen Shot 2021-05-23 at 10.43.42 PM.png)
<br>
![Startup-Image-2](https://github.com/crchrist/connect-four/blob/main/docs/Screen-Shot-2.png?raw=true)
<br>
![Startup-Image-3](https://github.com/crchrist/connect-four/blob/main/docs/Screen-Shot-3.png?raw=true)
<br>
![Startup-Image-4](https://github.com/crchrist/connect-four/blob/main/docs/Screen-Shot-4.png?raw=true) -->


# HOW TO INSTALL

1. *`Fork`* and *`Clone`* this respository to your local machine
2. Open `index.html` in your browser to play or 
3. Open the directory in your text editor of choice to view or edit the code

## ACCESS ONLINE
https://rmcharacters.herokuapp.com/



# HOW IT WORKS

## The Table

```html
<div class="game">
    <table>
        <tr>
            <td class="slot"></td>
            <td class="slot"></td>
            <td class="slot"></td>
            <td class="slot"></td>
            <td class="slot"></td>
            <td class="slot"></td>
            <td class="slot"></td>
        </tr><tr>
            <td class="slot"></td>
            <td class="slot"></td>
            <td class="slot"></td>
            <td class="slot"></td>
            <td class="slot"></td>
            <td class="slot"></td>
            <td class="slot"></td>
        </tr><tr>
            <td class="slot"></td>
            <td class="slot"></td>
            <td class="slot"></td>
            <td class="slot"></td>
            <td class="slot"></td>
            <td class="slot"></td>
            <td class="slot"></td>
        </tr><tr>
            <td class="slot"></td>
            <td class="slot"></td>
            <td class="slot"></td>
            <td class="slot"></td>
            <td class="slot"></td>
            <td class="slot"></td>
            <td class="slot"></td>
        </tr><tr>
            <td class="slot"></td>
            <td class="slot"></td>
            <td class="slot"></td>
            <td class="slot"></td>
            <td class="slot"></td>
            <td class="slot"></td>
            <td class="slot"></td>
        </tr><tr>
            <td class="slot"></td>
            <td class="slot"></td>
            <td class="slot"></td>
            <td class="slot"></td>
            <td class="slot"></td>
            <td class="slot"></td>
            <td class="slot"></td>
        </tr>
    </table>
</div> 
```

## Horizontal Check

```js 
function horizontalCheck(){
    for(let row = 0; row < tableRow.length; row++){
        for (let col = 0; col < 4; col ++){
            if(colorMatchCheck(tableRow[row].children[col].style.backgroundColor, tableRow[row].children[col+1].style.backgroundColor, 
                tableRow[row].children[col+2].style.backgroundColor, tableRow[row].children[col+3].style.backgroundColor)){
                    return true;
                }
        }
    }
};
```

## Vertical Check

```js 
function veritcalCheck(){
    for(let col = 0; col < 7; col ++){
        for (let row = 0; row < 3; row++){
            if (colorMatchCheck(tableRow[row].children[col].style.backgroundColor, tableRow[row+1].children[col].style.backgroundColor,
                tableRow[row+2].children[col].style.backgroundColor, tableRow[row+3].children[col].style.backgroundColor)){
                    return true;
                }
        }
    }
}
```

## Diagnoal Check

```js 
function diagonalCheck1(){
    for (let col = 0; col < 4; col++){
        for (let row = 0; row < 3; row++){
            if(colorMatchCheck(tableRow[row].children[col].style.backgroundColor, tableRow[row+1].children[col+1].style.backgroundColor,
                tableRow[row+2].children[col+2].style.backgroundColor, tableRow[row+3].children[col+3].style.backgroundColor)){
                    return true;
                }
        }
    }
}

function diagonalCheck2(){
    for (let col = 0; col < 4; col++){
        for (let row = 5; row > 2; row--){
            if(colorMatchCheck(tableRow[row].children[col].style.backgroundColor, tableRow[row-1].children[col+1].style.backgroundColor,
                tableRow[row-2].children[col+2].style.backgroundColor, tableRow[row-3].children[col+3].style.backgroundColor)){
                    return true;
                }
        }
    }
}
```

## The Win Check

```js
for (let i = 5; i > -1; i--){
        if(tableRow[i].children[column].style.backgroundColor == 'white'){
            row.push(tableRow[i].children[column]);
            if(currentPlayer ===1){
                row[0].style.backgroundColor = player1Color;
                if (horizontalCheck() || veritcalCheck() || diagonalCheck1() || diagonalCheck2()){
                    playerTurn.textContent = `${player1} WINS!`;
                    playerTurn.style.color = player1Color;
                    return;
                }else if(drawCheck()){
                    playerTurn.textContent = "IT'S A TIE!";
                    return;
                }else{
                playerTurn.textContent = `${player2}'s turn!`;
                return currentPlayer = 2;
            }

        }else{
            row[0].style.backgroundColor = player2Color;
            playerTurn.textContent = `${player1}'s turn`
            if (horizontalCheck() || veritcalCheck() || diagonalCheck1() || diagonalCheck2()){
                playerTurn.textContent = `${player2} WINS!`;
                playerTurn.style.color = player2Color;
                return;
            }else if(drawCheck()){
                playerTurn.textContent = "IT'S A TIE!";
                return;
            }else{
            playerTurn.textContent = `${player1}'s turn!`;
            return currentPlayer = 1;
            }
        }
    }
}
```




# Future Considerations
<br>
- Ending the placement of pieces once a player has won. 
<br>
- Add effect of pieces hovering over column before placement. 
<br>
- Add button to change player name rather than alert on page open. 
<br>
- Add media query 
