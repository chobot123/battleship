
import Player from "../factory/player";
import { renderShips } from "../UI/renderShips/placeShips";
import computerAttack, { compPlaceShips} from "./computerAI";
import { announceWinner, resetGame } from "./gameEnd"
import createBoard from "./createBoard";
import { toggleBoardOpacity } from "../UI/boards";


/**
 * @description     Creates players, boards, and boards display, and 
 *                  allows players to place ships onto their board.
 *                  The game begins when the computer's board is displayed, which
 *                  is after the player places all his ships, and continues until
 *                  either players lose all ships
 */
const gameLoop = () => {
    
    const playerOne = Player();
    const playerOneBoard = createBoard();
    const playerBoardDOM = document.querySelector(".board.one")
    playerOne.myTurn = true; //player always starts game going first
    
    const computer = Player();
    const computerBoard = createBoard();
    const computerBoardDOM = document.querySelector(".board.two");

    compPlaceShips(computerBoard);
    renderShips(playerOneBoard);
    
    computerBoardDOM.addEventListener("mousedown", (e) => {
    
        if(playerOne.myTurn){
            const x = parseInt(e.target.innerHTML.at(0));
            const y = parseInt(e.target.innerHTML.at(1));

            //If the cell is not empty, return out of this instance of the event listener
            if(e.target.classList[1] === "miss" || e.target.classList[1] === "hit"){
                return;
            }
            else {
                toggleBoardOpacity(playerBoardDOM); //highlight player board
                toggleBoardOpacity(computerBoardDOM); //dim computer board

                //if 'fresh' cell then attack
                let attackStatus = playerOne.attack(computerBoard, x, y);

                //update board of ship status
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
            
            computer.myTurn = true; //computer turn
            //if player wins return out of event listener instance
            if(computerBoard.isAllSunk()){
                announceWinner("player");
                return resetGame();
            }
        }


        if(computer.myTurn){

            //delay to mimic computer 'thinking'
            setTimeout(() => {
                computerAttack.smartMove(computer, playerOneBoard);
                toggleBoardOpacity(playerBoardDOM); //dim player board
                toggleBoardOpacity(computerBoardDOM); //highlight computer board
                if(playerOneBoard.isAllSunk()){
                    announceWinner("computer");
                    return resetGame();
                }
            }, 500)

            playerOne.myTurn = true;
        }
    })

}

export {gameLoop}