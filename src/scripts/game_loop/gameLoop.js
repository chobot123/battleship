
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
import { announceWinner, resetGame } from "./gameEnd"
import createBoard from "./createBoard";

const gameLoop = () => {
    
    const playerOne = Player();
    const pOneBoard = createBoard();
    
    const computer = Player();
    const computerBoard = createBoard();
    
    renderShips(pOneBoard); 
    compPlaceShips(computerBoard);

    //turn loop
    // playerOne.myTurn = true;
    const compDisplay = document.querySelector(".board.two");

    // let playerDisplay = document.querySelector(".board.one");
    compDisplay.addEventListener("mousedown", (e)=> {
        const x = parseInt(e.target.innerHTML.at(0));
        const y = parseInt(e.target.innerHTML.at(1));

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
            
    
        // check if game over
        if(pOneBoard.isAllSunk() || computerBoard.isAllSunk()){
            console.log(pOneBoard);
            console.log(pOneBoard.ships.every(e => e.isSunk()));
            console.log(pOneBoard.isAllSunk());
            console.log(computerBoard.isAllSunk());
            console.log(`game end`);
                (pOneBoard.isAllSunk()) ? announceWinner("computer")
                                    : announceWinner("player");
            resetGame();
        }
    
    })
}

export {gameLoop}