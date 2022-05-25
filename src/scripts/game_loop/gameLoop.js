
/*
    1)Create Players
    2)Create Board
    3)Populate both boards
    4)Attack method
*/

import { Player } from "../factory/player";
import { renderShips } from "../UI/renderShips/placeShips";
import { compPlaceShips, smartMove } from "./computerActions";
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
    const enemyBoard = document.querySelector(".board.two");

    //attack the enemy computer
    enemyBoard.addEventListener("mousedown", (e)=> {

        const x = parseInt(e.target.innerHTML.at(0));
        const y = parseInt(e.target.innerHTML.at(1));

        //check if cell has not been clicked yet
        if(e.target.classList[1] === "miss" ||
            e.target.classList[1] === "hit"){
                return;
        }
        else {
            //if 'fresh' cell then attack
            let attackStatus = playerOne.attack(computerBoard, x, y);
            if(attackStatus.hit){
                if(attackStatus.sunk){
                    for(let i = 0; i < attackStatus.sunkCoord.length; i++){
                        e.target.parentElement.childNodes.item(attackStatus.sunkCoord[i])
                            .classList.add("sunk");
                    }
                }
                else {

                    e.target.classList.add("hit");

                }
            }
            else {
                
                e.target.classList.add("miss");

            }
        }


        // check if game over
        if(pOneBoard.isAllSunk() || computerBoard.isAllSunk()){
            (pOneBoard.isAllSunk()) ? announceWinner("computer")
                                : announceWinner("player");
        resetGame();
        }

        //comp attacks
        smartMove(computer, pOneBoard);
            
    
        // check if game over
        if(pOneBoard.isAllSunk() || computerBoard.isAllSunk()){
                (pOneBoard.isAllSunk()) ? announceWinner("computer")
                                    : announceWinner("player");
            resetGame();
        }
    
    })
}

export {gameLoop}