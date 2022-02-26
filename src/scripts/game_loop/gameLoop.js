
/*
    1)Create Players
    2)Create Board
    3)Populate both boards
    4)Attack method
*/

import Gameboard from "../factory/gameBoard";
import { Player } from "../factory/player";
import { renderShips } from "./placeShips";
import { Ship } from "../factory/ship"
import { compPlaceShips, smartMove } from "./computer";
import { announceWinner } from "./gameEnd"

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
    compPlaceShips(computerBoard);
    
    //turn loop
    // playerOne.myTurn = true;
    let compDisplay = document.querySelector(".board.two");
    compDisplay.addEventListener("click", (e)=> {
        let x = parseInt(e.target.innerHTML.at(0));
        let y = parseInt(e.target.innerHTML.at(1));
    
        //check if cell has not been clicked yet
        if(e.target.classList[1] === "miss" ||
            e.target.classList[1] === "hit"){
                return;
        }
        else {
            //if 'fresh' cell then attack
            (playerOne.attack(computerBoard, x, y)) ? 
            e.target.classList.add("hit") :
            e.target.classList.add("miss");
        }

            
        //comp attacks
        smartMove(computer, pOneBoard);

        pOneBoard.
            
    
        // check if game over
        if(pOneBoard.isAllSunk() || computerBoard.isAllSunk()){
            console.log(`game end`);
                (pOneBoard.isAllSunk()) ? announceWinner("computer")
                                    : announceWinner("player");
            //end game
            //display winner
            //reset 
        }
    
    })
}

export {gameLoop}