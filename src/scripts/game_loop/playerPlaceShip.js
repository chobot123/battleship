
/**
 * Get the position where the cursor placed the ship
 * see which position of the ship the user selected
 * based off (above) adjust ship placement in gameBoard
 */

import { makeHorizontal, makeVertical, shipsContainer } from "../UI/displayShips";

/*
    placeShip(carrier, 5, 7, vertical ) === true

*/
const renderShips = (gameBoard) => {
    const myBoard = document.querySelector(".board.one");
    let index = "";
    let currentShip = "";
    let location = {
        target : "",
        x : "",
        y : "",
    }

    const renderShip = (myShip, x, y, align = 'vertical') => {
        if(x === 0){
            x = "";
        }
        let coord = parseInt(x.toString() + y.toString());

        let count = 0;
        while(count < myShip.children.length) {
            if(align === 'vertical'){
                myBoard.children[coord].classList.add(myShip.classList[0]);
                coord += 10;
            }
            else if(align === 'horizontal'){
                myBoard.children[coord].classList.add(myShip.classList[0]);
                coord += 1;
            }
            count++;
        }

    }

    //get index of ship on clicking a part of ship
    shipsContainer.addEventListener("mousedown" , (e) => {
        if(e.target.className === "cell"){
            index = e.target.innerHTML;
            return index;
        }
    })

    //reset all parameters
    const reset = () => {

        currentShip = "";
        location.target = "";
        location.x = "";
        location.y = "";
        index = "";

    }

    //double click a ship to turn it horizontal or vertical
    shipsContainer.addEventListener("dblclick", (e) => {
        if(e.target.className === 'cell'){
            (e.target.parentElement.classList[1] === 'vertical') ?
                makeHorizontal(e.target.parentElement) :
                makeVertical(e.target.parentElement);
        }
    })

    //when ship is selected get the ships info
    document.addEventListener("dragstart", (e) => {
        currentShip = e.target;
    })

    //when cursor enters a grid block 
    document.addEventListener("dragenter", (e) => {

        if(e.target.className === 'cell'){
            location.target = e.target.innerHTML;
            location.x = location.target.at(0);
            location.y = location.target.at(1);
            if(location.x === '0'){
                location.target = location.target.at(1);
            }      
            e.target.style.backgroundColor = "aqua";
            if(currentShip.classList[1] === 'vertical'){

                (e.target.innerHTML.at(0) > 0) ? location.x = parseInt(location.x) - parseInt(index) 
                : location.x = parseInt(location.x);

                location.y = parseInt(location.y);

            
            }
            else if(currentShip.classList[1] === 'horizontal'){

                (e.target.innerHTML.at(0) > 0) ? location.y = parseInt(location.y) - parseInt(index) 
                : location.y = parseInt(e.target.innerHTML.at(1));

                location.x = parseInt(location.x);
            }
        }
        else {

            location.target = "";
            location.x = "";
            location.y = "";
            
        }
    }, false)

    //when cursor leaves a grid block
    document.addEventListener("dragleave", (e) => {
        if(e.target.className === "cell"){
            e.target.style.backgroundColor = "";
        }
    }, false)

    //when user chooses a place to place ship
    document.addEventListener("dragend", (e) => {
        //we place ship
        //if valid, ship disappears from display onto board
        //else we start all over
        if(location.target !== ""){

            let shipIndex = gameBoard.ships.findIndex(e => e.name === currentShip.classList[0]);

            if(gameBoard.placeShip(gameBoard.ships[shipIndex], location.x,
                                    location.y, currentShip.classList[1])){
            
                renderShip(currentShip, location.x, location.y, currentShip.classList[1]);
                currentShip.style.display = `none`;
            }
            myBoard.children[location.target].style.backgroundColor = "";
        }
        reset();
    }, false)

}

export {renderShips}
