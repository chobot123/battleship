import { makeHorizontal, makeVertical } from "./displayShips";
import instructions from "../instructions";
import { toggleBoardOpacity } from "../boards";

/**
 * @description                 Contains a series of event handlers that handles
 *                              orienting and placing the ships on the board DOM.
 *                              renderShips 'ends' when all ships are on the board
 * 
 * @param {Object} gameBoard 
 */
const renderShips = (gameBoard) => {

    let shipCount = 0; //counts number of ships on the board

    const shipsContainer = document.querySelector(".ships-container")
    const content = document.querySelector(".content")
    const myBoard = document.querySelector(".board.one");

    let index = ""; //cell chosen by player to hold ship by
    let currentShip = ""; //ship selected
    let location = {    //coordinates
        target : "",
        x : "",
        y : "",
    }

    // ================= Helper Functions ========================= //

    const getShipIndex = () => {
        //get index of ship on clicking a part of ship
        shipsContainer.addEventListener("mousedown" , (e) => {
            if(e.target.className === 'cell ship'){
                index = e.target.innerHTML;
            }
        })
    }

    const changeShipOrientation = () => {
        //double click a ship to turn it horizontal or vertical
        shipsContainer.addEventListener("dblclick", (e) => {
            
            if(e.target.className === 'cell ship'){
                (e.target.parentElement.classList[1] === 'vertical') ?
                    makeHorizontal(e.target.parentElement) :
                    makeVertical(e.target.parentElement);
            }
        })
    }

    const getShip = () => {
        shipsContainer.addEventListener("dragstart", (e) => {
            currentShip = e.target;
        })
    }

    const getBoardLocation = () => {
        //when cursor enters a grid block 
        content.addEventListener("dragenter", (e) => {
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

                    (e.target.innerHTML.at(1) > 0) ? location.y = parseInt(location.y) - parseInt(index) 
                    : location.y = parseInt(e.target.innerHTML.at(1));

                    location.x = parseInt(location.x);
                }
            }
            else {

                location.target = "";
                location.x = "";
                location.y = "";
                
            }
        })

    }

    const updateLocation = () => {
        myBoard.addEventListener("dragleave", (e) => {

            if(e.target.className === "cell"){
                e.target.style.backgroundColor = "";
            }
        })
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

    const setShip = () => {
        //when user chooses a place to place ship
        content.addEventListener("dragend", (e) => {
            //we place ship
            //if valid, ship disappears from display onto board
            //else we start all over
            if(location.target !== ""){

                let shipIndex = gameBoard.ships.findIndex(e => e.name === currentShip.classList[0]);
                if(gameBoard.placeShip(gameBoard.ships[shipIndex], location.x,
                                        location.y, currentShip.classList[1])){
                                            
                    renderShip(currentShip, location.x, location.y, currentShip.classList[1]);
                    currentShip.style.display = 'none';
                    shipCount++;
                }
                myBoard.children[location.target].style.backgroundColor = "";
            }

            //if all ships are placed, reveal enemy board
            if(shipCount === 5){
                let compDisplay = document.querySelector(".playerTwo");
                compDisplay.style.display = ``;
                instructions.gameInstructions();
                shipCount = 0;
                toggleBoardOpacity(compDisplay.previousSibling.lastChild); //.board.one
                shipsContainer.remove();
            }
            reset();
        })
    }

    //reset all parameters
    const reset = () => {

        currentShip = "";
        location.target = "";
        location.x = "";
        location.y = "";
        index = "";
    }

    // ===================== Event Listeners ==================== //
    
    getShipIndex();
    getShip();
    changeShipOrientation();
    getBoardLocation();        
    updateLocation();
    setShip();
}

export {renderShips}
