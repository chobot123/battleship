
/**
 * Get the position where the cursor placed the ship
 * see which position of the ship the user selected
 * based off (above) adjust ship placement in gameBoard
 */

import { shipsContainer } from "../UI/displayShips";

/*
    placeShip(carrier, 5, 7, vertical ) === true

*/
const renderShips = (gameBoard) => {
    console.log(gameBoard);
    let index = "";
    let currentShip = "";
    let location = {
        target : "",
        x : "",
        y : ""
    }

    const renderShip = (myShip, coord, align = 'vertical') => {

        coord = parseInt(coord);
        const myBoard = document.querySelector(".board.one");
        console.log(myBoard);
        console.log(myShip);
        let count = 0;
        while(count < myShip.children.length) {
            if(align === 'vertical'){
                myBoard.children[coord].classList.add(myShip.className);
                coord += 10;
            }
            else if(align === 'horizontal'){
                myBoard.children[coord].classList.add(myShip.className);
                coord += 1;
            }
            count++;
        }

    }

    const getShipIndex = (ship) => {
        for(let i = 0; i < ship.children.length; i++) {
            let cell = ship.children[i];
            cell.addEventListener("mousedown", (e)=> {
                index = e.target.innerHTML;
                return index;
            })
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

    //when ship is selected
    document.addEventListener("dragstart", (e) => {
        currentShip = e.target;
        getShipIndex(currentShip); //get index the player selected
    })

    //when cursor enters a grid block
    document.addEventListener("dragenter", (e) => {
        if(e.target.className === 'cell'){
            e.target.style.backgroundColor = "aqua";
            location.target = e.target;
            location.x = e.target.innerHTML.at(0);
            location.y = e.target.innerHTML.at(1);
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
            let shipIndex = gameBoard.ships.findIndex(e => e.name === currentShip.className);
            if(gameBoard.placeShip(gameBoard.ships[shipIndex], location.x,
                                    location.y, 'vertical')){
                renderShip(currentShip, location.target.innerHTML, 'vertical');
                currentShip.style.display = `none`;
            }
            location.target.style.backgroundColor = "";
        }
        reset();
    }, false)

}

export {renderShips}
