
/*
    1)Create Players
    2)Create Board
    3)Populate both boards
    4)Attack method
*/

import Gameboard from "../factory/gameBoard";
import { Player } from "../factory/player";
import { renderShips } from "./playerPlaceShip";
import { Ship } from "../factory/ship"
import { smartMove } from "./computer";

const gameLoop = () => {

    const carrier = Ship('carrier', 5);
    const battleship = Ship('battleship', 4);
    const cruiser = Ship('cruiser', 3);
    const submarine = Ship('submarine', 3);
    const destroyer = Ship('destroyer', 2);
    const carrierTwo = Ship('carrier', 5);
    const battleshipTwo = Ship('battleship', 4);
    const cruiserTwo = Ship('cruiser', 3);
    const submarineTwo = Ship('submarine', 3);
    const destroyerTwo = Ship('destroyer', 2);
    
    const playerOne = Player();
    const pOneBoard = Gameboard();
    
    pOneBoard.ships.push(carrier);
    pOneBoard.ships.push(battleship);
    pOneBoard.ships.push(cruiser);
    pOneBoard.ships.push(submarine);
    pOneBoard.ships.push(destroyer);
    
    
    const computer = Player();
    const computerBoard = Gameboard();

    computerBoard.ships.push(carrierTwo);
    computerBoard.ships.push(battleshipTwo);
    computerBoard.ships.push(cruiserTwo);
    computerBoard.ships.push(submarineTwo);
    computerBoard.ships.push(destroyerTwo);
    
    //player one place ships
    renderShips(pOneBoard); 

    //computer to place ships
    let placeCount = 0;
    while(placeCount < 5){
        let alignment = Math.floor(Math.random() * 2);
        (alignment === 0) ? alignment = 'vertical' : alignment = 'horizontal';
        if(computerBoard.placeShip(computerBoard.ships[placeCount],
                                    Math.floor(Math.random() * 10),
                                    Math.floor(Math.random() * 10),
                                    alignment))
        {
            placeCount++;
        }
    }
    
    //turn loop
    playerOne.myTurn = true;
    let compBoard = document.querySelector(".board.two");
    let pOneDisplay = document.querySelector(".board.one")

    while(pOneBoard.isAllSunk() === false &&
            computerBoard.isAllSunk() === false){
        
        if(playerOne.myTurn === true){
            let x, y;
            //get player choice coordinates
            //convert to x and y for attack
            //if false => miss, if true => hit
            compBoard.addEventListener("click", (e) => {
                x = parseInt(e.target.innerHTML.at(0));
                y = parseInt(e.target.innerHTML.at(1));
                if(playerOne.attack(computerBoard, x, y)){
                    e.target.style.backgroundColor = "red";
                }
                else {
                    e.target.style.backgroundColor = "lightblue";   
                }
                computer.myTurn = true;
                smartMove(computer, pOneBoard);
            }, true)
        }
        else if(computer.myTurn === true){
                let isHit = smartMove(computer, pOneBoard);
                if(isHit !== false){
                    pOneDisplay.children[isHit.x.toString() + isHit.y.toString()].style.backgroundColor = "red";                  
                }
                else {
                    pOneDisplay.children[isHit.x.toString() + isHit.y.toString()].style.backgroundColor = "lightblue";                  
                }
            playerOne.myTurn = true;   
        }
    }
}

export {gameLoop}