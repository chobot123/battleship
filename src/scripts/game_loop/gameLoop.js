
/*
    1)Create Players
    2)Create Board
    3)Populate both boards
    4)Attack method
*/

import Player from "../factory/player";
import { renderShips } from "../UI/renderShips/placeShips";
import computerAttack, { compPlaceShips} from "./computerActions";
import { announceWinner, resetGame } from "./gameEnd"
import createBoard from "./createBoard";
import { toggleBoardOpacity } from "../UI/boards";

const gameLoop = () => {
    
    const playerOne = Player();
    const pOneBoard = createBoard();
    
    const computer = Player();
    const computerBoard = createBoard();
    
    renderShips(pOneBoard); 
    compPlaceShips(computerBoard);

    //turn loop
    const playerBoard = document.querySelector(".board.one");
    const enemyBoard = document.querySelector(".board.two");
    

    //attack the enemy computer
    enemyBoard.addEventListener("mousedown", (e) => {

        enemyBoard.style.pointerEvents = 'none';
        toggleBoardOpacity(playerBoard);
        toggleBoardOpacity(enemyBoard);

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
        if(computerBoard.isAllSunk()){
            (computerBoard.isAllSunk()) ? announceWinner("computer")
                                : announceWinner("player");
            return resetGame();
        }

        //comp attacks
        setTimeout(() => {
            computerAttack.smartMove(computer, pOneBoard);
            toggleBoardOpacity(playerBoard);
            toggleBoardOpacity(enemyBoard);
            enemyBoard.style.pointerEvents = 'auto';
        }, 1000)
            
    
        // check if game over
        if(pOneBoard.isAllSunk()){
                (pOneBoard.isAllSunk()) ? announceWinner("computer")
                                    : announceWinner("player");
            return resetGame();
        }
    
    })
}

export {gameLoop}