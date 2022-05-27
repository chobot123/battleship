
/*
    1)Create Players
    2)Create Board
    3)Populate both boards
    4)Attack method
*/

import Player from "../factory/player";
import { renderShips } from "../UI/renderShips/placeShips";
import computerAttack, { compPlaceShips} from "./computerAI";
import { announceWinner, resetGame } from "./gameEnd"
import createBoard from "./createBoard";
import { toggleBoardOpacity } from "../UI/boards";

const gameLoop = () => {
    
    const playerOne = Player();
    const playerOneBoard = createBoard();
    const playerBoardDOM = document.querySelector(".board.one")
    playerOne.myTurn = true;
    
    const computer = Player();
    const computerBoard = createBoard();
    const computerBoardDOM = document.querySelector(".board.two");

    compPlaceShips(computerBoard);
    renderShips(playerOneBoard);
    
    computerBoardDOM.addEventListener("mousedown", (e) => {
    
        if(playerOne.myTurn){
            const x = parseInt(e.target.innerHTML.at(0));
            const y = parseInt(e.target.innerHTML.at(1));

            if(e.target.classList[1] === "miss" || e.target.classList[1] === "hit"){
                return;
            }
            else {
                toggleBoardOpacity(playerBoardDOM);
                toggleBoardOpacity(computerBoardDOM);

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

            computer.myTurn = true;
            if(computerBoard.isAllSunk()){
                announceWinner("player");
                return resetGame();
            }
        }

        if(computer.myTurn){

            setTimeout(() => {
                computerAttack.smartMove(computer, playerOneBoard);
                toggleBoardOpacity(playerBoardDOM);
                toggleBoardOpacity(computerBoardDOM);
                if(playerOneBoard.isAllSunk()){
                    announceWinner("computer");
                    return resetGame();
                }
                computerBoardDOM.style.pointerEvents = "auto";
            }, 500)

            playerOne.myTurn = true;
        }
    })

}

export {gameLoop}